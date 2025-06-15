function closeDetailPopup() { 
if (document.getElementById) { // DOM3 = IE5, NS6 
document.getElementById('DetailPopup').style.visibility = 'hidden'; 
}
else {
if (document.layers) { // Netscape 4
document.DetailPopup.visibility = 'hidden'; 
}
else { // IE 4 
document.all.DetailPopup.style.visibility = 'hidden';
}
}
} 
function openDetailPopup() { 
window.scrollTo(0, -100)
if (document.getElementById) { // DOM3 = IE5, NS6 
document.getElementById('DetailPopup').style.visibility = 'visible'; 
} 
else { 
if (document.layers) { // Netscape 4 
document.DetailPopup.visibility = 'visible'; 
} 
else { // IE 4 
document.all.DetailPopup.style.visibility = 'visible';
} 
} 
}
