

/** 
 * Can't wear shoes until we wore socks
 * Rainy Day
 * This file should be used together with socksAndShoes-assume.js, to prevent
 * generation of a test case where socks are worn after shoes.
 */
bthread("fail shoes until socks", function(){
    waitFor( Actions.wakeUp );
    sync({
        waitFor: Actions.wearSocks, 
        request: Actions.fail("shoes") // Fail wearing shoes
    });
    // rtv.doStore("failShoes", "fail")
});

bthread("no socks after shoes", function(){
    waitFor(Actions.wearShoes);
    let res = false;
    if ( maybe("test socks") ) {
        res = true;
        request(Actions.fail("socks"));
        Ctrl.doMark("good - failed to wear socks over shoes")
    }
    // rtv.doStore("res", res)
});



// bthread("validate runtime fail", function(){
//     // waitFor( Actions.wakeUp );
//     // waitFor( Actions.wearShoes );
//     // waitFor( Actions.wearSocks);
  
    
//     rtv.assert("@{failShoes}", "@{res}", function(){
//         let c1 = "@{failShoes}" !== "fail" ;
//         let c2 = "@{res}" !== true;
//         return c1=== c2 &&  c1=== true 
//     }, "errorMessage")
//     // sync({
//     //     waitFor: Actions.wearSocks, 
//     //     request: Actions.fail("shoes") // Fail wearing shoes
//     // });
//   });