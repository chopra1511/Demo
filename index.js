// var headerTitle = document.getElementById('header-title');
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Bye";
// headerTitle.innnerHTML = '<h1>Hey</h1>';


var header = document.getElementById('main-header');
header.style.border = 'solid 10px #000';

var title = document.getElementById('main');
title.style.fontWeigth = 'bold';
title.style.color = 'red';


var items = document.getElementByClassName('list-group-items');
console.log(items);
items[2].style.backgroundColor = "green";

for(let i = 0;i<items.length;i++){
	items[i].style.fontWeigth = 'bold';
}


var li = document.getElementByTagName('li');
console.log(li);
li[2].style.backgroundColor = "green";

for(let i = 0;i<li.length;i++){
	li[i].style.fontWeigth = 'bold';
}