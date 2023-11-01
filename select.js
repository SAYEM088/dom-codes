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

li.innerText ='x-men';


// modify attributes & classes

// li.setAttribute('id','main-heading');
// li.removeAttribute('id')

li.classList.add('list-items')
// console.log(li.classList.contains('list-items'))

li.remove();

//*** */ */ Traverse The DOM

/*parent Node Traverse */ 

let ulDoc =document.querySelector('ul');
// console.log(ulDoc.parentNode);
// console.log(ulDoc.parentElement);
// console.log(ulDoc.parentNode.parentNode);
// console.log(ulDoc.parentElement.parentElement);

const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);

/* child Node traverse */

// console.log(ul.childNodes)
// console.log(ul.childElementCount);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// console.log(ul.childNodes[1])
ul.childNodes[1].style.color = 'blue'