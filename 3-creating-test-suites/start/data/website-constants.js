
// URL for the site under test.
const URL = "http://morning.provengo.tech/";

// Components repository, holds XPaths for UI elements.
const COMPONENTS = {
  BUTTONS: {
    sleep:  "//button[@id='btn-sleep']",
    shirt:  "//button[@id='btn-shirt']",
    shoes:  "//button[@id='btn-shoes']",
    pants:  "//button[@id='btn-pants']",
    socks:  "//button[@id='btn-socks']",
    banana: "//button[@id='btn-banana']",
    cereal: "//button[@id='btn-cereal']",
    brushTeeth: "//button[@id='btn-brush-teeth']",
    tidyUp: "//button[@id='btn-tidy-up']",
    goOut:  "//button[@id='btn-go-out']",
    add:    "//button[@id='btn-add']",
  },

  SVG_ELEMENTS: {
    svg: "//*[local-name()='svg']",
    eyes: "//*[@id='eyes']",
    eyeInnerRight: "//*[@id='eye-inner-right']",
    eyeInnerLeft: "//*[@id='eye-inner-left']",
    shirt: "//*[@id='top-shirt']",
    shoes: "//*[@id='shoes']",
    pants: "//*[@id='pants']",
    socks: "//*[@id='socks']",
    banana: "//*[@id='banana']",
    cereal: "//*[@id='cereal']",
    brush: "//*[@id='tooth-brush']",
    stars: "//*[@id='stars']",
    person: "//*[@id='layer1']",
  },

  //----------------------------------------------------------------//
  // test the new actions with the appearing text.
  TEXT_BOX: {
    text: "//*[@id='text-box']",
    input: "//*[@id='input']" ,

  },
};
