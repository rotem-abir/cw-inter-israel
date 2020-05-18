import wixWindow from 'wix-window';

let loadMoreButton;
let contactUs;
let pageSize = 3;

$w.onReady(function () {	
	let myLang = wixWindow.multilingual.currentLanguage; 
  	if (myLang === 'en') {
		$w('#stripEngineHE').hide();
		$w('#stripEngineEN').show();
		loadMoreButton = $w("#loadMoreButtonEN");
		contactUs = $w("#contactUs");
	}
	else if (myLang === "he") {
		$w('#stripEngineEN').hide();
		$w('#stripEngineHE').show();
		loadMoreButton = $w("#loadMoreButtonHE");
		contactUs = $w("#contactUsHE");
	}
});

function resetPageSize() {
	if (pageSize !== 3) {
		pageSize = 3;
		$w("#propDataset").setPageSize(pageSize);
	}
}

function loadNextPage(){
	pageSize += 3;
	$w("#propDataset").setPageSize(pageSize);
}

function noResults() {
	let count = $w("#propDataset").getTotalCount();
	if(count === 0) {
		contactUs.show();
	}
	else {
		contactUs.hide();
	}
}

function isMoreButton() {
	let count = $w("#propDataset").getTotalCount();
	if (pageSize >= count) {
		loadMoreButton.hide();
	}
	else {
		loadMoreButton.show();
	}
}

export function propDataset_currentIndexChanged() {
	resetPageSize();
	noResults();
}


// ENGLISH

export function loadMoreButtonEN_click(event) {
	loadNextPage();
}

export function propertiesRepeater_itemReady($item, itemData, index) {
	isMoreButton();
}

export function propertiesRepeater_itemRemoved(itemData) {
	isMoreButton();
}


// HEBREW

export function loadMoreButtonHE_click(event) {
	loadNextPage();
}

export function propertiesRepeaterHE_itemReady($item, itemData, index) {
	isMoreButton();
}

export function propertiesRepeaterHE_itemRemoved(itemData) {
	isMoreButton();
}


/*
import wixWindow from 'wix-window';

$w.onReady(function () {
	
	let myLang = wixWindow.multilingual.currentLanguage; 
  	if (myLang === 'en') {
		  $w('#researchStockHE').hide();
		  $w('#researchStockEN').show();
	}
	else if (myLang === "he") {
		$w('#researchStockEN').hide();
		$w('#researchStockHE').show();
	}

});

let pageSize = 3;
function isMoreButton() {
	let count = $w("#propDataset").getTotalCount();
	if (pageSize >= count) {
		$w("#loadMoreButtonEN").hide();
	}
	else {
		$w("#loadMoreButtonEN").show();
	}
}

export function loadMoreButtonEN_click(event) {
	pageSize += 3;
	$w("#propDataset").setPageSize(pageSize);
}

export function propertiesRepeater_itemReady($item, itemData, index) {
	isMoreButton();
}

export function propertiesRepeater_itemRemoved(itemData) {
	isMoreButton();
}

function resetPageSize() {
	pageSize = 3;
	$w("#propDataset").setPageSize(pageSize);
}

export function dropdownSize_focus(event) {
	resetPageSize();
}

export function dropdownArea_focus(event) {
	resetPageSize();
}

export function dropdownType_focus(event) {
	resetPageSize(); 
}

*/







/*

import wixWindow from 'wix-window';

let totalPageCount;


$w.onReady(function () {
	/*
	let myLang = wixWindow.multilingual.currentLanguage; 
  	if (myLang === 'en') {
		  $w('#researchStockHE').hide();
		  $w('#researchStockEN').show();
	}
	else if (myLang === "he") {
		$w('#researchStockEN').hide();
		$w('#researchStockHE').show();
	}*
	/
	$w("#propDataset").onReady( () => {
		totalPageCount = $w("#propDataset").getTotalPageCount();
	});
});

export function loadMoreButtonEN_click(event) {
	$w("#propDataset").loadMore()
	.then( () => {
		moreButton();
	});
}

// moreButton() needs to be called for every repeater change

function moreButton() {
	let pageCount = $w("#propDataset").getCurrentPageIndex();
	if (pageCount === totalPageCount) {
		$w("#loadMoreButtonEN").hide();
	}
}

*/