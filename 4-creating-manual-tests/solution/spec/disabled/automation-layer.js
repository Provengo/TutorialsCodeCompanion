//@provengo summon selenium
const session = new SeleniumSession("user1", "firefox");

/**
 * Start the selenium session, prevent the business logic from starting
 * until the browser window is ready.
 * The refine function was moved to a-refine.js.
 */
bthread("starter", function () {
    block( Actions.any, function(){
        session.start(URL);
        session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.svg, 5000);
    });
});


refine( Actions.wakeUp, function(){
    session.click(COMPONENTS.BUTTONS.sleep);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.eyeInnerLeft, 5000);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.eyeInnerRight, 5000);
});

refine( Actions.brushTeeth, function(){
    session.click(COMPONENTS.BUTTONS.brushTeeth);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.brush, 2000);
    session.waitForInvisibility(COMPONENTS.SVG_ELEMENTS.brush, 10000);
});


refine( Actions.goOut, function(){
    session.click(COMPONENTS.BUTTONS.goOut);
    session.waitForInvisibility(COMPONENTS.SVG_ELEMENTS.person, 10000);
});

refine( Actions.wearShirt, function() {
    session.click(COMPONENTS.BUTTONS.shirt);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.shirt, 5000);
});
refine( Actions.wearShoes, function() {
    session.click(COMPONENTS.BUTTONS.shoes);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.shoes, 5000);
});
refine( Actions.wearPants, function() {
    session.click(COMPONENTS.BUTTONS.pants);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.pants, 5000);
});
refine( Actions.wearSocks, function() {
    session.click(COMPONENTS.BUTTONS.socks);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.socks, 5000);
});
refine( Actions.eatBanana, function() {
    session.click(COMPONENTS.BUTTONS.banana);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.banana, 2000);
    session.waitForInvisibility(COMPONENTS.SVG_ELEMENTS.banana, 10000);
});
refine( Actions.eatCereal, function() {
    session.click(COMPONENTS.BUTTONS.cereal);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.cereal, 2000);
    session.waitForInvisibility(COMPONENTS.SVG_ELEMENTS.cereal, 10000);
});
refine( Actions.tidyUp, function() {
    session.click(COMPONENTS.BUTTONS.tidyUp);
    session.waitForVisibility(COMPONENTS.SVG_ELEMENTS.stars, 2000);
    session.waitForInvisibility(COMPONENTS.SVG_ELEMENTS.stars,12000);
});
    