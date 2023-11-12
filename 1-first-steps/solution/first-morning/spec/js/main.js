/**
 * Main morning scenario
 */
bthread("main", function(){
    request(Event("Wake up"));
    request(Event("Brush teeth"));
    request(Event("Dress up"));
    request(Event("Go out"));
});

/**
 * After waking up - brew some coffee
 */
bthread("morning coffee", function(){
    waitFor(Event("Wake up"));
    request(Event("Brew coffee"));
    request(Event("Drink coffee"));
});

/**
 * Prevent leaving the house without brewing the coffee
 */
bthread("coffee before out", function(){
    sync({
        waitFor: Event("Brew coffee"),
        block: Event("Go out")
    });
});
