var searchbox = document.getElementById('searchbox');

function searchUnfocus()
{
    searchbox.setAttribute("placeholder", "search");
}

function searchFocus()
{
    searchbox.setAttribute("placeholder", "");
}