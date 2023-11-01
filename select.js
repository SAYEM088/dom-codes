// 1.selecting element in DOM by using getElementById...getElementsByClass... etc
document.getElementById('main-heading')


// after that it has to store in a variable so that it can access

const heading = document.getElementById('main-heading')


// 2. styling an elements

heading.style.color ='red';

const listItems = document.querySelectorAll('.list-items');
for(i=0;i<listItems.length;i++){
    listItems[i].style.fontSize = '2rem';
}

// create an elements
const ul = document.querySelector('ul');
const li = document.createElement('li')

// adding Elements
ul.append(li);

// modifying the text
const firstListItem =document.querySelector('.list-items');
console.log(firstListItem.innerHTML);
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);