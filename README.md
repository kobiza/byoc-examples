# Byoc editor tool

Tool for quickly create BYOC samples in editorX

## Installation

Copy the script from [tampermonkeyScript.js](scripts%2FtampermonkeyScript.js) to [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)

## Available Scripts

To create examples from specific folder:
1. Create new folder under /src/components folder
2. Add all the components that you want to add to your site as separated files 
3. Run the following script with tour folder_name:

### `yarn copyExample ${folder_name}`

## Run the script in EditorX

1. Open your site in editorX
2. Turn Dev mode on
3. open the console and run the following scripts:
    * paste from clipboard and run - will add new variable on global scope called example 
    * To create the components files in velo run:
      ```
      responsiveBYOC.addFiles(example)
      ```
    * To create new page for each component:
      ```
      responsiveBYOC.addPages(example)
      ```
