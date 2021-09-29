const searchButton = document.querySelector('#search');
const surpriseButton = document.querySelector('#surprise');
const searchBar = document.getElementById('searchBar');
const searchEngine = document.getElementById('searchEngine')
const searchResults = document.getElementById('results');

//headers
const firstHeader = document.getElementById('firstHeader');

//function to show 10 search results
function getSearchResult(e) {
    const searchString = searchBar.value.replace(/\s/g, "_");

    searchEngine.className = "hide";

    fetch(`http://localhost:3000/${searchString}`)
       .then(resp => resp.json())
       .then(resp => { //loop through all array elements
            for(let i = 0; i < resp.length; i++)
            {
                searchResults.append(
                    `<a href="${resp[i].link}">${resp[i].header}</a>` +
                    `<p>${resp[i].bodyText}</p>`
                );
            }
            
        })
        // .catch(error => {
        //     error = error.json();
        // });
}

//function to show a random result
function getSurpriseResult(e) {
    const searchString = searchBar.value;

    searchEngine.className = "hide";

//     fetch(`http://localhost:3000/${searchString}/random`)
//        .then(resp => )
//        .catch(error =>);

}

searchButton.addEventListener('click', e => {
    e.preventDefault();
    getSearchResult(e);
});

surpriseButton.addEventListener('click', e => {
    e.preventDefault();
    getSurpriseResult(e);
});
