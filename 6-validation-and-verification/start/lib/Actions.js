const Actions = (function () {

  const LIB_SIG = "ACTIONS";

  function makeActionEvent(verb, complement) {
    return Event(verb + " " + complement, {
      verb: verb,
      complement: complement,
      lib: LIB_SIG
    });
  }

  return {
    wakeUp:       makeActionEvent("wake up", ""),
    wearShirt:    makeActionEvent("wear", "shirt"),
    wearPants:    makeActionEvent("wear", "pants"),
    wearSocks:    makeActionEvent("wear", "socks"),
    wearShoes:    makeActionEvent("wear", "shoes"),
    eatCereal:    makeActionEvent("eat", "cereal"),
    eatBanana:    makeActionEvent("eat", "banana"),
    brushTeeth:   makeActionEvent("brush teeth", ""),
    tidyUp:       makeActionEvent("tidy up", ""),
    goOut:        makeActionEvent("go out", ""),

    newAction:    makeActionEvent("",""),
    wearNewItem:  makeActionEvent("wear",""),
    eatNewFood:   makeActionEvent("eat",""),
    play:         makeActionEvent("play",""),
    
    start:        makeActionEvent("start","session"),
    
    fail: function (what) {
      return makeActionEvent("fail", what);
    },

    any: EventSet("Any Action", function (e) {
      return (!!e.data) && ( e.data.lib === LIB_SIG );
    }),
  };
})();
