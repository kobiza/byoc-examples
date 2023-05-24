const fs = require('fs');
const path = require("path");
const minimist = require('minimist')

const SRC = path.resolve(__dirname, '../src')
const componentsFolder = path.resolve(SRC, 'components')




function pbcopy(data) {
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(data); proc.stdin.end();
}

const getExampleWithContent = (example, folder) => {
    const files = example.files.map((name) => {
        const content = fs.readFileSync(path.resolve(folder, name), 'utf8');

        return {
            name,
            content
        }
    })

    return {
        ...example,
        files
    }
}

const main = () => {
    // const nodeArgs = process.argv.slice(2);
    const nodeArgs = minimist(process.argv.slice(2));
    console.log('nodeArgs', nodeArgs)
    const {f: folder, m: modulesSting = ''} = nodeArgs

    // const folder = path.resolve(componentsFolder, nodeArgs[0] ? nodeArgs[0] : '')

    if (!folder) {
        console.log('please provide folder (add -f <folder_name> to your command)')
        return
    }
    const folderPath = path.resolve(componentsFolder, folder)

    // 'mui'
    const modules = modulesSting.split(',').map(v => {
        const versionSeparatorIndex = v.indexOf('@', 1)

        if (versionSeparatorIndex === -1) {
            return null
        }

        const moduleName = v.slice(0, versionSeparatorIndex)
        const version = v.slice(versionSeparatorIndex + 1)

        return [moduleName, version]
    }).filter(v => v !== null)


    const files = fs.readdirSync(folderPath)
    const components = files.map(fileName => {
        return {
            fileName,
            props: {}
    }
    })
    const example = {
        npm_module: modules,
        files: files,
        components: components
    }
    const dataToCopy = getExampleWithContent(example, folderPath)

    pbcopy(`var example = ${JSON.stringify(dataToCopy)}`)
}

main()
