const searchParameters = window.location.search;

const urlParams = new URLSearchParams(searchParameters);

const param = urlParams.get('search-query');

function showResults(){
    document.write(param);
}