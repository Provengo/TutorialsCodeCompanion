# Checking Your Models - Solution
 
This is a solution for the verifying and validating the model for the morning routine website. Important files:

* README.md This file.
* [config](config) Configuration files and administrative data.
* [spec](spec) The code creating the specification space lives here. Organized by language.
    * [js](spec/js) JavaScript files
      * [main-story.js](spec/js/main-story.js) Business-level behavior model.
      * [a-refine.js](spec/js/a-refine.js) The refine function.
      * [automation-layer.js](spec/js/automation-layer.js) automation-level instructions.
      * [regulation.js](spec/js/regulation.js) Verification bthread for detecting violations.
      * [assume.js](spec/js/assume.js) "Can't do X" - assumption.
      * [socksAndShoes-rainy.js](spec/js/socksAndShoes-rainy.js) "Rainy-day" checks.
      * [textbox.js](spec/js/textbox.js) Checking textbox's runtime values.
    * [disabled](spec/disabled) JavaScript files that are not loaded into the project.
      * [manual-layer.js](spec/js/manual-layer.js) Tester-level instructions.
* [lib](lib) Place to store JavaScript libraries. Loaded first.
  * [Actions.js](lib/Actions.js) A library containing the business-level actions.
  * [Manual.js](lib/Actions.js) A library listing manual events.
* [data](data) Place to store data files.  
  * [website-constants.js](data/website-constants.js) Contains website data, such as element locators and URLs.