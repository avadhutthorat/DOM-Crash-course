// console.dir(document);
// console.dir(document.title);
// document.title = 323;
// console.dir(document.head);
// console.dir(document.body);
// console.dir(document.all);
// console.dir(document.all[10]);
// console.dir(document.forms);
// console.dir(document.links);
// console.dir(document.images);

/* ******************* getElementById *************************************************** */
// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h4>changing</h4>";
// header.style.borderBottom = "solid 2px black";

/* ******************* getElementsByClassName ******************************************* */
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].style.fontWeight = "bold";
// items[2].innerText = "Hello 12";

// for (let item of items) {
//   item.style.backgroundColor = "#f4f4f4";
// }

/* ******************* document.getElementsByTagName  ************************************ */
// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);

// for (let lis of li) {
//   lis.style.backgroundColor = "#f4f4f4";
// }

/* ******************* document.querySelector  ************************************ */
// let headerSelector = document.querySelector("#main-header");
// headerSelector.style.borderBottom = "solid 4px #ccc";

// let input = document.querySelector("input");
// input.value = "hello world";

// let button = document.querySelector('input[type="submit"]');
// button.value = "SEND";

// let firstList = document.querySelector(".list-group-item");
// firstList.style.backgroundColor = "red";

// let lastList = document.querySelector(".list-group-item:last-child");
// lastList.style.backgroundColor = "yellow";

// let secondList = document.querySelector(".list-group-item:nth-child(2)");
// secondList.style.backgroundColor = "blue";

/* ******************* document.querySelector  ************************************ */

// let titles = document.querySelectorAll(".title");
// console.log(titles);

// let odd = document.querySelectorAll(".list-group-item:nth-child(odd)");
// odd.style.backgroundColor = "red";
// for (let li of odd) {
//   li.style.backgroundColor = "#f4f4f4";
// }

/* ******************* Traversing DOM  ************************************ */

// parentNode
let items = document.querySelector("#items");
// console.log(items.parentNode);

// console.log(items.childNodes);
// console.log(items.children);

// for (let i of items.childNodes) {
//   console.log(i);
// }

// for (let i of items.children) {
//   console.log(i);
// }

// console.log(items.firstElementChild);
// console.log(items.firstChild);
// lastChild and lastElementChild

// console.log(items.nextSibling);
// console.log(items.nextElementSibling);
// previousSibling and previousElementSibling

/* **************** create element ************************************* */

// let newDiv = document.createElement("div");
// let newDiv1 = document.createElement("div");
// newDiv1.className = "newDiv1";
// newDiv.className = "Hello my";
// newDiv.id = "hello 1";
// newDiv.classList = "new button";
// let newText = document.createTextNode("This is text");
// newDiv.appendChild(newText);
// newDiv1.append(newDiv);
// console.log(newDiv1);

// add div to DOM

// let container = document.querySelector(".container");
// let header = document.querySelector("#header-title");

// container.insertBefore(newDiv1, header);
