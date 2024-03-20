// @provengo summon ctrl


bthread("main", function () {
  request(Actions.start);
  request(Actions.wakeUp);
  
  requestAtAnyOrder( 
    Actions.wearShirt,
    Actions.wearPants,
    Actions.wearSocks,
    Actions.wearShoes
  );

  request(Actions.brushTeeth);
  
  if ( maybe("slept in?") ) {
    request(Actions.goOut);
    request(Actions.tidyUp);

  } else {
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
          request(Actions.eatNewFood);
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
