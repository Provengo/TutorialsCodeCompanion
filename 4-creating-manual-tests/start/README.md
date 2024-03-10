# Creating Manual Tests - Starting point Solution
 
This is a starting point for the creating manual tests for the morning routine website. Important files:

* README.md This file.
* [config](config) Configuration files and administrative data.
* [spec](spec) The code creating the specification space lives here. Organized by language.
    * [js](spec/js) JavaScript files
      * [main-story.js](spec/js/main-story.js) Business-level behavior model.
    *[disabled](spec/disabled) JavaScript files that are not loaded into the project.
      * [automation-layer.js](spec/disabled/automation-layer.js) Automation-level refinements.
* [lib](lib) Place to store JavaScript libraries. Loaded first.
  * [Actions.js](lib/Actions.js) A library containing the business-level actions.
  * [Manual.js](lib/Actions.js) A library listing manual events.
* [data](data) Place to store data files.
  * [website-constants.js](data/website-constants.js) Contains website data, such as element locators and URLs.