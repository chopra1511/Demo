// var headerTitle = document.getElementById('header-title');
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Bye";
// headerTitle.innnerHTML = '<h1>Hey</h1>';


// var header = document.getElementById('main-header');
// header.style.border = 'solid 10px #000';

// var title = document.getElementById('main');
// title.style.fontWeigth = 'bold';
// title.style.color = 'red';


// var items = document.getElementByClassName('list-group-items');
// console.log(items);
// items[2].style.backgroundColor = "green";

// for(let i = 0;i<items.length;i++){
// 	items[i].style.fontWeigth = 'bold';
// }


// var li = document.getElementByTagName('li');
// console.log(li);
// li[2].style.backgroundColor = "green";

// for(let i = 0;i<li.length;i++){
// 	li[i].style.fontWeigth = 'bold';
// }

var items = document.querySelector('.list-group-item:nth-child(2)');
items.style.backgroundColor = 'green';

var item = document.querySelector('.list-group-item:nth-child(3)');
item.style.visibility = "hidden";



var items = document.querySelectorAll('.list-group-item');
items[1].style.backgroundColor = 'green';

var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i=0;i<odd.length;i++){
	odd[i].style.backgroundColor = '#f4f4f4';
}


var items = document.querySelector('#items');
console.log(items.parentElement);
items.parentElement.style.backgroundColor = "#f4f4f4";

//Last Child
console.log(items.lastChild);

//lastElementChild
console.log(items.lastElementChild);
items.lastElementChild.textContent = 'Hello 4';

//First Child
console.log(items.firstChild);

//lastElementChild
console.log(items.firstElementChild);
items.firstElementChild.textContent = 'Hello 1';

//nextSibling
console.log(items.nextSibling);

//nextElementSibling
console.log(items.nextElementSibling);

//previousSibling
console.log(items.previousSibling);

//previousElementSibling
console.log(items.previousElementSibling);
items.previousElementSibling.textContent = "Hello";

//create Element
var newDiv = document.createElement('div');
newDiv.className = 'container';
newDiv.id = "newDiv";

newDiv.setAttribute('title', 'Hello World');

//create text node
var newDivTxt = document.createTextNode("Hello World");

newDiv.appendChild(newDivTxt);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv,h1);


var newItem = document.createElement("li");
var textnode = document.createTextNode("Hello World");
newItem.appendChild(textnode);

var list = document.querySelector("#items");

list.insertBefore(newItem, list.firstElementChild);



var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', findItem);

function addItem(e) {
	e.preventDefault();
	var newItem = document.getElementById('item').value;
	var newDis = document.getElementById('dis').value;

	var li = document.createElement('li');
	li.className = 'list-group-item';

	var data = document.createTextNode(newItem);
	li.appendChild(data);
	itemList.appendChild(li);	
	
	li.appendChild(document.createTextNode(" "));
	itemList.appendChild(li);

	var br = document.createElement('br');
	li.appendChild(br);

	li.appendChild(document.createTextNode(newDis));
	itemList.appendChild(li);

	var btn = document.createElement('button');
	btn.className = 'btn btn-danger btn-sm float-right delete';

	btn.appendChild(document.createTextNode('X'));
	li.appendChild(btn);
	
	//create edit button
	var bttn = document.createElement('button');
	bttn.className = 'btn btn-success btn-sm float-right';

	bttn.appendChild(document.createTextNode('Edit'));
	li.appendChild(bttn);

}

function removeItem(e) {
	if(e.target.classList.contains('delete')){
		if (confirm('Are You Sure?')) {
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

function findItem(e) {
	var text = e.target.value.toLowerCase();
	var items = itemList.getElementsByTagName('li');
	Array.from(items).forEach(function(item) {
		var itemName = item.textContent;
		console.log(itemName);
		if(itemName.toLowerCase().indexOf(text) != -1){
			item.style.display = 'block';
		}
		else{
			item.style.display = 'none'
		}
	})
}