const searchButton = document.getElementById('search');
const surpriseButton = document.getElementById('surprise');
const searchBar = document.getElementById('searchBar');
const searchEngine = document.getElementById('searchEngine')
const searchResults = document.getElementById('results');

//function to show 10 search results
function getSearchResult(e) {
    //handling spaces in searches
    const searchString = searchBar.value.replace(/\s/g, "_");

    //hiding search bar and showing results
    searchEngine.className = "hide";
    searchResults.className = "";

    fetch(`http://localhost:3000/${searchString}`)
       .then(resp => resp.json())
       .then(resp => { 
            for(let i = 0; i < resp.length; i++) //loop through all array elements
            {
                //adding website name to search results
                const websiteName = document.createElement("A");
                const websiteNameText = document.createTextNode(`${resp[i].header}`);
                websiteName.appendChild(websiteNameText);
                searchResults.appendChild(websiteName);
                
                //adding website info to search results
                const websiteInfo = document.createElement("P");
                const websiteInfoText = document.createTextNode(`${resp[i].bodyText}`);
                websiteInfo.appendChild(websiteInfoText);
                searchResults.appendChild(websiteInfo);


                // const headerText = `<a href="${resp[i].link}">${resp[i].header}</a>`;
                // const bodyText = `<p>${resp[i].bodyText}</p>`;
                // searchResults.append(headerText, bodyText);
            }; 
        })
        .catch(error => {
            error = error.json();
        });
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
