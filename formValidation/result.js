const paragraph = document.getElementById("paragraph")
const params = new URLSearchParams(window.location.search);

params.forEach((key, value) => {
    paragraph.append(`${key} = ${value}`);
    paragraph.append(document.createElement('br'))
    
});