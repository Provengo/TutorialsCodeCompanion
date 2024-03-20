
// regulation
bthread("forbid socks after shoes", function(){
    waitFor(Actions.wearShoes);
    waitFor(Actions.wearSocks);
    halt("No socks after shoes");
});


