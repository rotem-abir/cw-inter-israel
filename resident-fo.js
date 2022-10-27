$w.onReady(function () {

    let info = $w("#dynamicDataset").getCurrentItem().info;
    if (info !== undefined) {
        $w("#description").text = info + " - Photo Gallery";
    }

});