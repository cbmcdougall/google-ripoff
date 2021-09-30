const searchButton = document.getElementById('search');
const surpriseButton = document.getElementById('surprise');
const searchBar = document.getElementById('searchBar');
const barAndButtons = document.getElementById('barAndButtons');
const searchEngine = document.getElementById('searchEngine')
const searchResults = document.getElementById('results');
const logo = document.getElementById('logo');
let smallLogo;

function noResults(searchTerm) {
    //displays message if no results are found
    const noResults = document.createElement("H1");
    const noResultsMessage = document.createTextNode(`No results found for \"${searchTerm}\".`);
    noResults.appendChild(noResultsMessage);
    searchResults.appendChild(noResults);
}

function removeResults() {
    //removes previous search results
    while (searchResults.hasChildNodes()) {
        searchResults.removeChild(searchResults.lastChild);
    };
}

//function to show 10 search results
function getSearchResult() {
    //handling spaces in searches
    const searchString = searchBar.value;
    const searchNoSpace = searchString.replace(/\s/g, "_");

    //showing results and smaller logo
    searchEngine.className = "moveUp";
    barAndButtons.className = "lineUp";
    searchResults.className = "";
    
    if (!smallLogo) {
        // Only show small logo on first rendering of results page
        logo.className = "hide";
        // Small logo links back to homepage
        const smallLogoLink = document.createElement("A");
        smallLogoLink.setAttribute("href", "./index.html");
        smallLogo = document.createElement("IMG");
        smallLogo.setAttribute("src", "images/Small crtlf logo.png");
        smallLogoLink.appendChild(smallLogo);
        barAndButtons.prepend(smallLogoLink);
    }
    
    fetch(`http://localhost:3000/${searchNoSpace}`)
       .then(resp => resp.json())
       .then(data => {
            removeResults();

            if(data.error) {
                noResults(searchString);
            }

            for(let i = 0; i < data.length; i++) //loop through all array elements
            {   
                //adding website name to search results
                const websiteName = document.createElement("A");
                const websiteNameText = document.createTextNode(`${data[i].header}`);
                websiteName.setAttribute("href", `${data[i].link}`);
                websiteName.appendChild(websiteNameText);
                searchResults.appendChild(websiteName);
                
                //adding website info to search results
                const websiteInfo = document.createElement("P");
                const websiteInfoText = document.createTextNode(`${data[i].bodyText}`);
                websiteInfo.appendChild(websiteInfoText);
                searchResults.appendChild(websiteInfo);
            };
        })
        .catch(err => { console.log(err) });
}

//function to show a random result
function getSurpriseResult() {
    const searchString = searchBar.value;
    const searchNoSpace = searchString.replace(/\s/g, "_");
    
    fetch(`http://localhost:3000/${searchNoSpace}/random`)
    .then(resp => resp.json())
    .then(data => {
        if(data.error) {
                searchResults.className = "";
                removeResults();
                noResults(searchString);
            }
            else {
                //takes you to a random page based on the search term
                window.location.href = `${data.link}`;
            }
        })
       .catch(err => { console.log(err) });
}

searchButton.addEventListener('click', e => {
    e.preventDefault();
    getSearchResult();
});

surpriseButton.addEventListener('click', e => {
    e.preventDefault();
    getSurpriseResult();
});

module.exports = { 
    noResults,
    removeResults,
    getSearchResult, 
    getSurpriseResult 
} // For testing