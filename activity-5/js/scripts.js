/**
 * Wrap everything in N IIFE(IMMEIDATELY INVOKED FUNCTION EXPRESSION) to keep
 * our variables constrained to the scope of this function and out of the global scope
 */

(function () {
/**
 * Package data and construcor objects
 */

var data = [
    {
        name: 'emet',
        description: 'Emmet is the number one code snippet tool',
        author: 'emmetio', 
        url: 'https://attom.io/packages/emmet', 
        downloads: 1662209, 
        stars: 2534,
        price: 10.50,
        selector: 'p1'
    },
    {
        name: 'atom-beautify',
        description: 'The atom-beautify package will clean up your code and make it more', 
        author: 'Glavin001', 
        url: 'https://atom.io/packages/atom-beautify', 
        downloads: 4228040,
        stars: 4541, 
        price: 6.75, 
        selector: 'p2'

    }
];

// Package/Extensions constructor function
function Package(data) {
    this.name = data.name;
    this.descripton = data.description;
    this.author = dta.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    };
}


/**
 * Utility functions
 */
// Returns today's date, formatted
var getTodaysDate = function () {
    var today = new Date();
    return today.toDateString();
};

//Returns DOM element by id 
//We're just wrapping document.getElementId 
//in a shorthand function.  If this seems confusing, 
// then just replace getEl with document.getElementId
// in the writePackageInfo function.
var getEl = function (id)  {
return document.getElementById(id);
}

/**
 * Write the package objects data to the appropiate 
 * DOM elements utilizing the package selector property
 * @param {package} package Package object 
 * @return {void}
 */

var writePackageInfo = function(package) {
    //Get refrence to DOM elements
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEL = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'), 
    downloadedEl = getEl(selector + '-downloads'),
    startsEl = getEl(selector + '-stars');

    //Write package data to DOM elements
    nameEl.textContent = package.name;
    descEL.textContent = package.description;
    authEl.textContent = package.author;
    downloadedEl.textContent = package.getFormattedDownloads();
    startsEl.textContent = package.getFormattedStars();
}

dateEl = getEl('date');

dateEl.textContent = getTodaysDate();

var emmet = new Package(data[0]);
writePackageInfo(emmet);

var beautify = new Package(data[1]);
writePackageInfo(beautify);


}());