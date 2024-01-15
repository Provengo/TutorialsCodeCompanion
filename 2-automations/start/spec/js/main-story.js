/**
 * Main morning routine behavior goes in this file,
 * phrased as a user story.
 */

bthread("main", function () {
  request(Actions.wakeUp);
  
  requestAtAnyOrder( 
    Actions.wearShirt,
    Actions.wearPants,
    Actions.wearSocks,
    Actions.wearShoes
  );

  request(Actions.brushTeeth);
  
  // When sleeping in, we go out first and tidy up on the way
  if ( maybe("slept in?") ) {
    request(Actions.goOut);
    request(Actions.tidyUp);

  } else {
    // When we have time in the morning, consider having breakfast before going out.
    if ( maybe("have breakfast?") ) {
      let breakfastType = select("breakfastType").from("fruit", "quick", "full");
      
      switch (breakfastType) {
        case "fruit":
          request(Actions.eatBanana);
          break;
        case "quick":
          request(Actions.eatCereal);
          break;
        case "full":
          request(Actions.eatBanana);
          request(Actions.eatCereal);
          break;
        }
        breakfastType = undefined;
    }
    request(Actions.tidyUp);
    request(Actions.goOut);
  }
});

