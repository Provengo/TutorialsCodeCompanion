
/* @provengo summon rtv */

/**
 * Since the automation refinements in this example are very similar, we put the refine function in a seperate file 
 * to use it for the desired layer. 
 * @param {BEvent} actionEvent the event we wait for, part of the business-level events (i.e. member of Actions.any)
 * @param {function} actions  the actions required for refining actionEvent. can be automation action or a manual action.
 */
function refine(actionEvent, actions) {
    on( actionEvent, function(){
        block(Actions.any, actions );
    });
}


