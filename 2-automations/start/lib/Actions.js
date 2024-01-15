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
    wakeUp:     makeActionEvent("wake up", ""),
    wearShirt:  makeActionEvent("wear", "shirt"),
    wearPants:  makeActionEvent("wear", "pants"),
    wearSocks:  makeActionEvent("wear", "socks"),
    wearShoes:  makeActionEvent("wear", "shoes"),
    eatCereal:  makeActionEvent("eat", "cereal"),
    eatBanana:  makeActionEvent("eat", "banana"),
    brushTeeth: makeActionEvent("brush teeth", ""),
    tidyUp:     makeActionEvent("tidy up", ""),
    goOut:      makeActionEvent("go out", "")
  };
})();
