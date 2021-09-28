const searchButton = document.querySelector('#search');
const surpriseButton = document.querySelector('#surprise');
const searchBar = document.getElementById('searchBar');
const searchEngine = document.getElementById('searchEngine')
const searchResults = document.getElementById('results');

//headers
const firstHeader = document.getElementById('firstHeader');

//function to show 10 search results
function getSearchResult(e) {
    const searchString = searchBar.value;

    searchEngine.className = "hide";
    searchResults.className = "show";

    console.log(`http://localhost:3000/${searchString}`);

    fetch(`http://localhost:3000/${searchString}`)
       .then(resp => resp.json())
       .then(resp => { //loop through all array elements
            searchResults.append(
                `<a href="${resp[0].link}">${resp[0].header}</a>` +
                `<p>${resp[0].bodyText}</p>`
            );
        });


    //handle error for no results


}

//function to show a random result
function getSurpriseResult(e) {
    const searchString = searchBar.value;

    searchEngine.className = "hide";
    searchResults.className = "show";

//     fetch(`http://localhost:3000/${searchString}/random`)
//        .then(resp => )

//handle error for no results
}

searchButton.addEventListener('click', e => {
    e.preventDefault();
    getSearchResult(e);
});

surpriseButton.addEventListener('click', e => {
    e.preventDefault();
    getSurpriseResult(e);
});
