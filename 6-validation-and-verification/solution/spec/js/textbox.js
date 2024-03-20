bthread("validate runtime eating textbox values", function () {
  waitFor(Actions.eatCereal.or(Actions.eatBanana));
  rtv.assertEq(
    "@{textbox}",
    "Now I eat @{btn}",
    "Wrong btn- @{btn} or textbox @{textbox}"
  );
});
