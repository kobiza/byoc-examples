const fs = require('fs');
const path = require("path");

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
    const nodeArgs = process.argv.slice(2);
    const folder = path.resolve(componentsFolder, nodeArgs[0] ? nodeArgs[0] : '')
    const files = fs.readdirSync(folder)
    const components = files.map(fileName => {
        return {
            fileName,
            props: {}
    }
    })
    const example = {
        npm_module: [],
        files: files,
        components: components
    }
    const dataToCopy = getExampleWithContent(example, folder)

    pbcopy(`var example = ${JSON.stringify(dataToCopy)}`)
}

main()
