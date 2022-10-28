$w.onReady(function () {
	
    let info = $w("#dynamicDataset").getCurrentItem().info;
    if (info !== undefined) {
        $w("#description").text = info + " - Photo Gallery";
    }

	let isFloorPlan;

	isFloorPlan = $w("#dynamicDataset").getCurrentItem().floorPlan1;
	checkFp(isFloorPlan, 1);

	isFloorPlan = $w("#dynamicDataset").getCurrentItem().floorPlan2;
	checkFp(isFloorPlan, 2);

	isFloorPlan = $w("#dynamicDataset").getCurrentItem().floorPlan3;
	checkFp(isFloorPlan, 3);

	isFloorPlan = $w("#dynamicDataset").getCurrentItem().floorPlan4;
	checkFp(isFloorPlan, 4);

	isFloorPlan = $w("#dynamicDataset").getCurrentItem().floorPlan5;
	checkFp(isFloorPlan, 5);

	isFloorPlan = $w("#dynamicDataset").getCurrentItem().floorPlan6;
	checkFp(isFloorPlan, 6);

});

function checkFp(isFP, num) {
	let fp = "fp" + num;
	if (isFP === undefined) {
		$w(`#${fp}`).hide();   
	}
}


/*
let isFloorPlan;
for (let i=1; i<=5; i++) {
    isFloorPlan = $w("#dynamicDataset").getCurrentItem().floorPlan`${i}`;
    if (isFloorPlan === undefined) {
        $w(#`fp${i}`).hide();   
    }
}
*/