# Morning with Automation - Proposed Solution
 
This is a solution for the automation for the morning routine website. Important files:

* README.md This file.
* [config](config) Configuration files and administrative data.
* [spec](spec) The code creating the specification space lives here. Organized by language.
    * [js](spec/js) JavaScript files
      * [main-story.js](spec/js/main-story.js) Business-level behavior model.
      * [automation-layer.js](spec/js/automation-layer.js) Automation-related refinements for the business model.
* [lib](lib) Place to store JavaScript libraries. Loaded first.
  * [Actions.js](lib/Actions.js) A library containing the business-level actions.
* [data](data) Place to store data files.
  * [website-constants.js](data/website-constants.js) Contains website data, such as element locators and URLs.
 