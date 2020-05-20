import wixData from 'wix-data';

$w.onReady(function () {
    filter('II')
});

let debounceTimer;
export function aboutSearchInput_keyPress(event) {
    if (debounceTimer) {
        clearTimeout(debounceTimer);
        debounceTimer = undefined;
    }
    debounceTimer = setTimeout(() => {
        filter($w('#aboutSearchInput').value);
    }, 200);
}

let lastSearchValue;
function filter(searchValue) {
    if(searchValue !== lastSearchValue) {

/*
        let query = wixData.query("isTitle")
        .contains('title')
        .find()
        .then( (results) => {
            console.log(results);
        });
*/
        
            /*
            .count()
            .then( (num) => {
                let numberOfItems = num;
                console.log(numberOfItems);
            })
            */
        $w('#aboutDataset').setFilter(wixData.filter().contains('title', searchValue));

        /*
        let count = $w("#aboutDataset").getTotalCount();
        console.log(count);
        */
        lastSearchValue = searchValue;
    }
}