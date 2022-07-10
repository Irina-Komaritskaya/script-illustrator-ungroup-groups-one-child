// var docRef = app.activeDocument;
// var countGroup = app.activeDocument.groupItems.length;

// for (var i = 0; i < countGroup; i++) {
//     var myTextFrame = app.activeDocument.groupItems[i].groupItems.length;
//     if (myTextFrame <= 1) {
//         app.activeDocument.groupItems[i].groupItems.selected = true;
//         // if (myTextFrame.typename == "GroupItem")
//         //     ungroup(app.activeDocument.groupItems[i]);
//     }
//     // alert(myTextFrame);
// }

var docRef = app.activeDocument;
var vSelected = docRef.selection;
var vCounter = 0;
var countGroup = app.activeDocument.groupItems.length;

alert("Count groups: " + countGroup);
for (var i = 0; i < countGroup; i++) {
    // if the first object in the selection is a group:
    // get the elements of the group
    var vParent = app.activeDocument.groupItems[i];
    // var vParent = app.activeDocument.groupItems[1];
    var vNumbers = vParent.pageItems.length; // numbers of elements
    // pageItems is important, because it could be also a textframe and so on

    for (var i = 0; i < vNumbers; i++) {
        var vChild = vParent.pageItems[i];
        // do something with vChild
        vCounter++;
    }

    // if (vCounter === 1) {
    //     executeMenuCommand("ungroup");
    // }
    alert(vNumbers + " / " + vCounter + " Elements in the selection");
}

// app.activeDocument.groupItems[1].selected == true;
//

// разгруппировка всего

// for (var i = app.activeDocument.groupItems.length - 1; i >= 0; i--) {
//     ungroup(app.activeDocument.groupItems[i]);
// }

// function getChildAll(obj) {
//     var childsArr = new Array();
//     for (var i = 0; i < obj.pageItems.length; i++)
//         childsArr.push(obj.pageItems[i]);
//     if (obj.layers) {
//         //  Get layers as well.
//         for (var i = 0; i < obj.layers.length; i++)
//             childsArr.push(obj.layers[i]);
//     }
//     return childsArr;
// }

// function ungroup(obj) {
//     var elements = getChildAll(obj);
//     if (elements.length < 1) {
//         obj.remove();
//         return;
//     } else {
//         for (var i = 0; i < elements.length; i++) {
//             try {
//                 if (elements[i].parent.typename != "Layer") {
//
//                     elements[i].moveBefore(obj);
//                 }

//                 if (
//                     elements[i].typename == "GroupItem"
//
//                 ) {
//                     ungroup(elements[elements[i].length]);
//                 }
//             } catch (e) {}
//         }
//     }
// }
