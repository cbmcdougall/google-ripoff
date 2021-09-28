const searchButton = document.querySelector('#search');
const surpriseButton = document.querySelector('#surprise');

const searchBar = document.getElementById('searchBar');

//function to show 10 search results
function getSearchResult(e) {
    const searchString = searchBar.value;

    //fetch(`http://localhost:3000/${searchString}`)
    //    .then(resp => resp.json())
    //    .then(resp[2].link)


}

//function to show a random result
function getSurpriseResult(e) {
    const searchString = searchBar.value;

//     fetch(`http://localhost:3000/${searchString}/random`)
//        .then(resp => )
}

searchButton.addEventListener('click', e => {
    e.preventDefault();
    getSearchResult(e);
});

surpriseButton.addEventListener('click', e => {
    e.preventDefault();
    getSurpriseResult(e);
});
