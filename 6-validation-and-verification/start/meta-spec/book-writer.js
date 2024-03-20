/*
 * Editing the default implementation for creating a manual test book.
 */

let count=0;

function startTrace() {
    count=0;
    clothsOrder = [];
    foodOrder = [];
}

function documentEvent( event ) {

    GenBook.autoTag(event); // generate tags based on Combi and Choice events.
    Manual.addTestBookStep(event); // generate tester instructions 

    const d = event.data;
    if ( d ) {
        if ( Actions.any.contains(event) ) {
            if ( d.verb === "wear" ) {
                clothsOrder.push(d.complement);
            } else if ( event.data.verb === "eat" ) {
                foodOrder.push(d.complement);
            }
            return;
        }
        if(d.name === "have breakfast?"){
            if(!d.value){
                TEST_SCENARIO.addTag("skipped breakfast voluntarily!")
            }
        }
        if(d.name === "slept in?"){
            if(d.value){
                TEST_SCENARIO.addTag("no time for breakfast!")
            }
        }
        if(d.verb === "eat"){
            if(d.complement === ""){
                TEST_SCENARIO.addTag("new food","yes")
            }
        }
        if ( d.lib === "Ctrl" ) {
            if ( d.verb === "marker" ) {
                TEST_SCENARIO.addElement(
                    StepElement(`<strong>${d.value}</strong>`,
                        `<div style="background-color:yellow; color:black">Mark: ${d.value}</div>`, "" ));
            } else {
                TEST_SCENARIO.addElement(
                    StepElement(`<strong>${d.verb}</strong>`, d.value, "" ));
            }
        } 
        
        else if (d.lib == "STATEORY") {
            TEST_SCENARIO.addElement(
                StepElement(event.name,
                `<em>${d.machineName}:</em> moving to <span style="color:#080">${event.name}</span>`, "" )
                );
        } 
        else {
            try {
                if ( typeof d === "object" ) {
                   let text = "";
                    let lis = [];
                    for ( let k of Object.keys(d) ) {
                        let value;
                        try {
                            value = String(d[k]);
                        } catch (e) {
                            value = "(object " + e + ")";
                        }
                        lis.push(`<li><em>${k}:</em> &nbsp; ${value}</li>`);
                    }
                    text = "<ul>" + (lis.join("")) + "</ul>";
                    TEST_SCENARIO.addElement( StepElement(event.name, "Data Fields:", text ));
                } else {
                    TEST_SCENARIO.addElement( StepElement(event.name, event.data.toString(), "" ));
                }
            } catch (e) {
                TEST_SCENARIO.addElement( StepElement("ERROR", e, "" ));
            }
        }
        
    } else {
        TEST_SCENARIO.addElement( StepElement("Step", event.name, event.toString() ));
    }
    count++;
}

function endTrace() {
    TEST_SCENARIO.addMetadataLine("Event count: " + count);
    let foodClause = foodOrder.length>1? foodOrder.join("→ ").slice(1,): foodOrder.join("→ ");
    let foodCluaseMeta = foodOrder.length>1? "Food Order: " +  foodOrder.join(", ").slice(1,): "Food Order: "+foodOrder.join(", ");
    if ( foodOrder.length>0) {
        TEST_SCENARIO.addMetadataLine(foodCluaseMeta);
        TEST_SCENARIO.setTitle(clothsOrder.join("→") + ", " + foodClause );
    }
    else{
        TEST_SCENARIO.setTitle(clothsOrder.join("→") + ", " + "(skip breakfast)" );
    }
}

// This object is the callback entry point.
const TEST_BOOK = {
    startTrace: startTrace,
    documentEvent: documentEvent,
    endTrace: endTrace
};
