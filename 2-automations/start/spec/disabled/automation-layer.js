//@provengo summon selenium
const session = new SeleniumSession("user1", "firefox");

/**
 * Start the selenium session, prevent the business logic from starting
 * until the browser window is ready.
 */
bthread("starter", function () {
    block( Actions.any, function(){
        session.start(URL);
        session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.svg, 5000);
    });
});

/**
 * Basic, "low-level" setup for a refinement function. The bthread is explicit.
 * It repeatedly waits for Actions.wakeUp, an then executes the automation steps
 * required for waking up the character.
 */
bthread("wake-up", function(){
    while ( true ) {
        waitFor( Actions.wakeUp );
        block( Actions.any, function(){
            session.click(COMPONENTS.BUTTONS["btn-sleep"]);
            session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.eyeInnerLeft, 5000);
            session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.eyeInnerRight, 5000);
        });
    }
});

/**
 * Same as above, but using the on(event, action) command from BP-Base. This creates
 * a shorter and more idiomatic code, as the outer while loop and wait-for commands
 * are handled by on().
 */
on( Actions.brushTeeth, function(){
    block( Actions.any, function(){
        session.click(COMPONENTS.BUTTONS["btn-brush-teeth"]);
        session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.brush, 2000);
        session.waitForInvisibility(COMPONENTS.SVG_ELEMENTS.brush, 10000);
    });
});

/**
 * Since the automation refinements in this example are very similar, we can take code reuse a bit further and 
 * wrap the call to on() and the block(Actions.any). This function does this. It's used below.
 * @param {BEvent} actionEvent the event we wait for, part of the business-level events (i.e. member of Actions.any)
 * @param {function} automationActions  the automation actions required for automating actionEvent.
 */
function refine(actionEvent, automationActions) {
    on( actionEvent, function(){
        block(Actions.any, automationActions );
    });
}

/**
 * Using the refine() function mentioned above to define the automation actions needed for Actions.goOut.
 */
refine( Actions.goOut, function(){
    session.click(COMPONENTS.BUTTONS["btn-go-out"]);
    session.waitForInvisibility(COMPONENTS.SVG_ELEMENTS.person, 10000);
});

////////////////////////////////////////////////////
/// Additional automations added using refine()
////////////////////////////////////////////////////
refine( Actions.wearShirt, function() {
    session.click(COMPONENTS.BUTTONS["btn-shirt"]);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.shirt, 5000);
});
refine( Actions.wearShoes, function() {
    session.click(COMPONENTS.BUTTONS["btn-shoes"]);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.shoes, 5000);
});
refine( Actions.wearPants, function() {
    session.click(COMPONENTS.BUTTONS["btn-pants"]);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.pants, 5000);
});
refine( Actions.wearSocks, function() {
    session.click(COMPONENTS.BUTTONS["btn-socks"]);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.socks, 5000);
});
refine( Actions.eatBanana, function() {
    session.click(COMPONENTS.BUTTONS["btn-banana"]);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.banana, 2000);
    session.waitForInvisibility(COMPONENTS.SVG_ELEMENTS.banana, 10000);
});
refine( Actions.eatCereal, function() {
    session.click(COMPONENTS.BUTTONS["btn-cereal"]);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.cereal, 2000);
    session.waitForInvisibility(COMPONENTS.SVG_ELEMENTS.cereal, 10000);
});
refine( Actions.tidyUp, function() {
    session.click(COMPONENTS.BUTTONS["btn-tidy-up"]);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.stars, 2000);
    session.waitForInvisibility(COMPONENTS.SVG_ELEMENTS.stars,12000);
});
    