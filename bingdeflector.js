let url = window.location.href;
let query = url.split("?")[1].split("q=").pop().split("&")[0];
window.location.replace("https://www.google.com/search?q=" + searchTerm);


