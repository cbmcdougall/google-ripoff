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
       .then(resp => {
        firstHeader.textContent = resp[0].header;
        //firstHeader.linkThisSomehow = resp[0].link;
        firstBodyText.textContent = resp[0].bodyText;

        secondHeader.textContent = resp[1].header;
        //secondHeader.linkThisSomehow = resp[1].link;
        secondBodyText.textContent = resp[1].bodyText;

        thirdHeader.textContent = resp[2].header;
        //thirdHeader.linkThisSomehow = resp[2].link;
        thirdBodyText.textContent = resp[2].bodyText;

        fourthHeader.textContent = resp[3].header;
        //fourthHeader.linkThisSomehow = resp[3].link;
        fourthBodyText.textContent = resp[3].bodyText;

        fifthHeader.textContent = resp[4].header;
        //fifthHeader.linkThisSomehow = resp[4].link;
        fifthBodyText.textContent = resp[4].bodyText;

        sixthHeader.textContent = resp[5].header;
        //sixthHeader.linkThisSomehow = resp[5].link;
        sixthBodyText.textContent = resp[5].bodyText;

        seventhHeader.textContent = resp[6].header;
        //seventhHeader.linkThisSomehow = resp[6].link;
        seventhBodyText.textContent = resp[6].bodyText;

        eigthHeader.textContent = resp[7].header;
        //eigthHeader.linkThisSomehow = resp[7].link;
        eigthBodyText.textContent = resp[7].bodyText;

        ninthHeader.textContent = resp[8].header;
        //ninthHeader.linkThisSomehow = resp[8].link;
        ninthBodyText.textContent = resp[8].bodyText;

        tenthHeader.textContent = resp[9].header;
        //tenthHeader.linkThisSomehow = resp[9].link;
        tenthBodyText.textContent = resp[9].bodyText;
       })


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
