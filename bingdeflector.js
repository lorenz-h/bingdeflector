let url = window.location.href;
let userQuery = url.split('search?q=').pop().split('&form=')[0];
window.location.replace("https://www.google.com/search?q=" + userQuery);


