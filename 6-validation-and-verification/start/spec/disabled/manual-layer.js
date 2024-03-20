// @provengo summon selenium

// Create a new manual session.
const session = Manual.defineUser("tester");

refine( Actions.start, function(){
    session.doAct("Start Browser at site",URL);
    session.doValidate("Site is shown");
});

refine( Actions.wakeUp, function(){
    session.doAct("Click the Wake Up button", null, "Both eyes should be opened.");
    session.doNote("The eyes should be opened for 5 seconds.");
});

refine( Actions.wearShirt, function(){
    session.doAct(
        "Click the 'shirt' button", "", "A shirt should appear. Text bubble should be: 'now I wear shirt'.");
});

refine( Actions.wearShoes, function(){
    session.doAct( "Click the 'shoes' button", "",
    "Shoes should appear. Text bubble should be: 'now I wear shoes'.");
});

refine( Actions.wearPants, function(){
    session.doAct("Click the 'pants' button", "","Pants should appear. Text bubble should be: 'now I wear pants'.");
});

refine( Actions.wearSocks, function(){
    session.doAct("Click the 'socks' button", "",
        "A pair of socks should appear. Text bubble should be: 'now I wear socks'.");
});

refine(Actions.wearNewItem, function(itemName){
    session.doAct("Write 'wear " + itemName + "' in the text box");
    session.doAct("Click the 'add' button", "", "A new button labeled 'wear " + itemName + "' should be added");
    session.doAct("Click the the new button.", "", "Text bubble should say 'Now I wear " + itemName + "'.");
});

refine(Actions.eatNewFood, function(foodName){
    session.doAct("Write 'eat " + foodName + "' in the text box");
  session.doAct("Click the 'add' button", "", "A new button labeled 'eat " + foodName + "' should be added");
  session.doAct("Click the the new button.", "", "Text bubble should say 'Now I eat " + foodName + "'.");
});

refine(Actions.eatBanana, function(){
    session.doAct( "Click the 'banana' button", "",
    "A banana should appear. Text bubble should be: 'now I eat banana'.");
    session.doValidate("The banana should disappear after 5 seconds.");
});

refine(Actions.eatCereal, function(){
    session.doAct("Click the 'cereal' button", "",
    "A cereal bowl should appear. Text bubble should be: 'now I eat cereal'.");
    session.doValidate("The cereal bowl should disappear after 5 seconds.");
});

refine(Actions.brushTeeth, function(){
    session.doAct("Click the 'brush teeth' button", "",
        "A toothbrush should appear. Text bubble should be: 'now I brush teeth'.");
    session.doValidate("The toothbrush should disappear after 5 seconds.");
});

refine(Actions.tidyUp, function(){
    session.doAct("Click the 'tidy up' button", "",
    "Sparkles should should appear. Text bubble should be: 'now I tidy up'.");
    session.doValidate("The sparkles should disappear after 5 seconds.");
});

refine(Actions.goOut, function(){
    session.doAct(
        "Click the 'go out' button", "",
        "The person should disappear. Text bubble should be: 'now I go out'.");
});

refine(Actions.play, function(){
    session.doAct("Click the 'play' button", "", "Text bubble should say 'now I play'");
});

refine(Actions.newAction, function(){
    session.doAct("Write '" + actionType + "' in the text box");
    session.doAct("Click the 'add' button", "", "A new button labeled '" + actionType + "' should be added");
    session.doAct("Click the the new button.", "", "Text bubble should say 'Now I " + actionType + "'.");
});
