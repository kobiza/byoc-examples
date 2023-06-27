// ==UserScript==
// @name         responsive BYOC
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  script for quick add BYOC to Editor
// @author       kobiz
// @match        https://create.editorx.com/edit/editor-x/*
// @icon         https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://editorx.com&size=64
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /*
    // example schema
    const example1 = {
        npm_module: [
            "@mui/material",
            "5.11.4"
        ],
        files: [{
            name: 'MuiButton.jsx',
            content: `console.log('bla')`
        }],
        components: [
            {
                fileName: 'MuiButton.jsx',
                props: {name: 'Bar'}
            }
        ]
    }
    */

    const FOLDER_NAME = 'custom-elements'

    const getPage = (components) => {
        return {
            "components": [
                {
                    "layout": {
                        "width": 100,
                        "height": 100,
                        "x": 0,
                        "y": 0
                    },
                    "componentType": "responsive.components.Section",
                    "style": {
                        "type": "StylesInBreakpoint",
                        "skin": "wysiwyg.viewer.skins.area.RectangleArea",
                        "stylesInBreakpoints": [
                            {
                                "type": "ComponentStyle",
                                "style": {
                                    "properties": {
                                        "alpha-bg": 0,
                                        "bg": "color_11"
                                    },
                                    "propertiesSource": {
                                        "alpha-bg": "value",
                                        "bg": "theme"
                                    },
                                    "groups": {}
                                },
                                "componentClassName": "responsive.components.Section",
                                "pageId": "",
                                "compId": "",
                                "styleType": "custom",
                                "skin": "wysiwyg.viewer.skins.area.RectangleArea"
                            }
                        ]
                    },
                    "components": components,
                    "layouts": {
                        "type": "SingleLayoutData",
                        "componentLayout": {
                            "type": "ComponentLayout",
                            "minHeight": {
                                "type": "px",
                                "value": 500
                            },
                            "height": {
                                "type": "auto"
                            }
                        },
                        "itemLayout": {
                            "type": "GridItemLayout",
                            "gridArea": {
                                "rowStart": 1,
                                "columnStart": 1,
                                "rowEnd": 2,
                                "columnEnd": 2
                            },
                            "justifySelf": "stretch",
                            "alignSelf": "stretch"
                        },
                        "containerLayout": {
                            "type": "GridContainerLayout",
                            "rows": [
                                {
                                    "type": "fr",
                                    "value": 1
                                }
                            ],
                            "columns": [
                                {
                                    "type": "fr",
                                    "value": 1
                                }
                            ]
                        }
                    }
                }
            ],
            "skin": "wysiwyg.viewer.skins.page.TransparentPageSkin",
            "layouts": {
                "type": "SingleLayoutData",
                "componentLayout": {
                    "type": "ComponentLayout",
                    "height": {
                        "type": "auto"
                    }
                },
                "containerLayout": {
                    "type": "GridContainerLayout",
                    "rows": [
                        {
                            "type": "auto"
                        }
                    ],
                    "columns": [
                        {
                            "type": "MinMaxSize",
                            "min": {
                                "type": "px",
                                "value": 0
                            },
                            "max": {
                                "type": "fr",
                                "value": 1
                            }
                        }
                    ]
                },
                "itemLayout": {}
            },
            "style": {
                "type": "ComponentStyle",
                "style": {
                    "properties": {
                        "alpha-bg": "1",
                        "bg": "color_11"
                    },
                    "propertiesSource": {
                        "alpha-bg": "value",
                        "bg": "value"
                    },
                    "groups": {}
                },
                "componentClassName": "",
                "pageId": "",
                "compId": "",
                "styleType": "custom",
                "skin": "wysiwyg.viewer.skins.page.ResponsivePageWithColorBG"
            },
            "breakpoints": {
                "type": "BreakpointsData",
                "id": "",
                "values": [
                    {
                        "type": "BreakpointRange",
                        "id": "",
                        "min": 320,
                        "max": 1000
                    },
                    {
                        "type": "BreakpointRange",
                        "id": "",
                        "min": 320,
                        "max": 750
                    }
                ]
            }
        }
    }
    const getComp = (url, compProps) => ({
        "type": "Component",
        "skin": "wixui.skins.Skinless",
        "componentType": "wixui.ExternalComponent",
        "data": {
            "metaData": {
                "isPreset": false,
                "schemaVersion": "1.0",
                "isHidden": false
            },
            "type": "wixui.ExternalComponent",
            "id": "ExternalComponent1",
            "compProps": JSON.stringify(compProps),
            "url": url
        },
        "props": {
            "metaData": {
                "isPreset": false,
                "schemaVersion": "1.0",
                "isHidden": false
            },
            "type": "DefaultProperties"
        },
        "style": {
            "skin": "wixui.skins.Skinless",
            "stylesInBreakpoints": [
                {
                    "metaData": {
                        "isPreset": false,
                        "schemaVersion": "1.0",
                        "isHidden": false
                    },
                    "componentClassName": "wixui.ExternalComponent",
                    "style": {
                        "groups": {},
                        "properties": {},
                        "propertiesSource": {}
                    },
                    "skin": "wixui.skins.Skinless",
                    "type": "ComponentStyle",
                    "styleType": "custom",
                    "pageId": "",
                    "compId": ""
                }
            ],
            "type": "StylesInBreakpoint"
        },
        "activeModes": {},
        "layout": {},
        "layouts": {
            "componentLayout": {
                "type": "ComponentLayout",
                "width": {
                    "type": "px",
                    "value": 300
                },
                "height": {
                    "type": "px",
                    "value": 200
                },
                "hidden": false
            },
            "itemLayout": {
                "type": "GridItemLayout",
                "gridArea": {
                    "rowStart": 1,
                    "rowEnd": 2,
                    "columnStart": 1,
                    "columnEnd": 2
                },
                "metaData": {},
                "margins": {
                    "top": {
                        "type": "percentage",
                        "value": 0
                    },
                    "left": {
                        "type": "percentage",
                        "value": 0
                    },
                    "bottom": {
                        "type": "percentage",
                        "value": 0
                    },
                    "right": {
                        "type": "percentage",
                        "value": 0
                    }
                },
                "justifySelf": "center",
                "alignSelf": "center"
            },
            "containerLayout": {},
            "type": "SingleLayoutData"
        },
        "scopedLayouts": {}
    })

// wixCode.codePackages.installNpmPkg

    const addFiles = async (example) => {
        const editorAPI = window.editorAPI

        // add custom-elements-folder if needed

        var p = editorAPI.wixCode.fileSystem.getRoots().public

        const publicFolders = await editorAPI.wixCode.fileSystem.getChildren(p)
        const folderIndex = publicFolders.findIndex(folder => folder.name === FOLDER_NAME)

        if (folderIndex === -1) {
            await editorAPI.wixCode.fileSystem.createFolder(FOLDER_NAME, p)
        }

        // add files

        const componentsFiles = await editorAPI.wixCode.fileSystem.getChildren(editorAPI.wixCode.fileSystem.getVirtualDescriptor(`public/${FOLDER_NAME}/`, true))
        const componentsFilesNames = componentsFiles.map(v => v.name)

        const filesPromises = example.files.map(async ({name, content}) => {
            if (componentsFilesNames.includes(name)) {
                console.log('file already exist')
            }

            const fileDescriptor = editorAPI.wixCode.fileSystem.getVirtualDescriptor(`public/${FOLDER_NAME}/${name}`, false)
            return editorAPI.wixCode.fileSystem.writeFile(fileDescriptor, content)
        })

        await Promise.all(filesPromises)
    }
    const addComponents = (example) => {
        const editorAPI = window.editorAPI
        // add components
        const getCurrentPage = () => editorAPI.pages.getCurrentPage()
        const getFirstSection = () => {
            const _page = getCurrentPage()
            const pageSections = editorAPI.components.getChildren(_page)
                .filter(v => editorAPI.components.getType(v) === 'responsive.components.Section')


            return pageSections[0]
        }

        const firstSection = getFirstSection()
        example.components.forEach(({fileName, props}) => {
            const url = `public/${FOLDER_NAME}/${fileName}`
            editorAPI.components.add(firstSection, getComp(url, props), [])
        })
    }
    const _installExample = async (example, {onePage}) => {
        const editorAPI = window.editorAPI

        if (!editorAPI.wixCode.isLoaded()) {
            console.log('Dev mode is off, please turn on dev mode to run the script')
            return
        }

        console.log('install BYOC: 1. Dev mode on')

        const {dependencies} = await editorAPI.wixCode.codePackages.getNpmPkgs()

        example.npm_module.forEach(([name, version]) => {
            if (!dependencies[name]) {
                editorAPI.wixCode.codePackages.installNpmPkg(name, version)
            }
        })

        console.log('install BYOC: 2. node modules added')

        await addFiles(example)

        console.log('install BYOC: 4. files added ')

        if (onePage) {
            addComponents(example)
            console.log('install BYOC: 5. components added')
        } else {
            addPages(example)
            console.log('install BYOC: 6. pages added')
        }
    }

    const addPages = (example) => {
        const editorAPI = window.editorAPI

        example.components.forEach(({fileName, props}) => {
            const url = `public/${FOLDER_NAME}/${fileName}`
            const page = getPage([getComp(url, props)])
            const pageName = fileName.split('.')[0]
            const pagePointer = editorAPI.pages.add(pageName, page)
            editorAPI.pages.data.update(pagePointer.id, {pageUriSEO: _.toLower(pageName)}, false)
        })
    }

    const installExampleOnePage = (example) => _installExample(example, {onePage: true})
    const installExample = (example) => _installExample(example, {onePage: false})

    window.responsiveBYOC = {
        installExample,
        installExampleOnePage,
        addComponents,
        addPages,
        addFiles
    }
})();
