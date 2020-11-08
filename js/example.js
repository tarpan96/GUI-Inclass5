// ADD NEW ITEM TO END OF LIST
var ul = document.querySelector("#page").querySelector("ul");
var li = document.createElement("li");
li.appendChild(document.createTextNode("cream"));
li.setAttribute("id", "five");
ul.appendChild(li);


// ADD NEW ITEM START OF LIST
var items = document.getElementsByTagName('ul')[0];

firstItem = document.createElement("li");
firstItem.appendChild(document.createTextNode("kale"));
items.insertBefore(firstItem, items.firstChild);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
groceryList = document.querySelector("#page").querySelectorAll("li");

for(var i = 0; i < groceryList.length; i++) {
    groceryList[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector("h2").innerHTML += "<span>" + groceryList.length + "</span>";