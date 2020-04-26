// global selector
let navList = document.querySelector(".nav-list");
let navItems = document.querySelector(".nav-items");
let Add = document.querySelector(".Add");
let item = document.querySelector(".item");
let inputValue = document.querySelector(".input-value");
let deleteBtn = document.querySelector(".delete-btn");
let refresh = document.querySelector(".refresh");
let time = document.querySelector(".date");
let header = document.querySelector(".header");
const check = "fa-check-circle";
const unCheck = "fa-circle-thin";
const lineThrough = "light";
let currDate = new Date();
let day = currDate.getDay();
let date = currDate.getDate();
let month = currDate.getMonth();
let hour = currDate.getHours();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  " May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// Adding Time and Background
time.innerHTML = `${days[day]},${months[month]} ${date}`;
if (hour >= 0 && hour <= 6) {
  header.style.background = "url(./images/nightscene.jpg) center no-repeat";
  time.style.color = "white";
} else if (hour >= 7 && hour <= 11) {
  header.style.background = "url(./images/morningscene.jpg) center no-repeat";
} else if (hour >= 12 && hour <= 17) {
  header.style.background = "url(./images/afternoonscene.jpg) center no-repeat";
} else {
  header.style.background = "url(./images/nightscene.jpg) center no-repeat";
  time.style.color = "white";
}

// Retrieving data from local storage
let list;
let data = localStorage.getItem("TODO");
if (data) {
  list = JSON.parse(data);
  loadList(list);
} else {
  list = [];
}
function loadList(array) {
  array.forEach(function (item) {
    myTodo(item);
    // console.log(item[i]);
    
    // console.log(item.todo);
  });
}
// Adding items in todo
function myTodo(todo) {
  let text = `
      <li class="nav-items">  
                    <div class="complete-remove">
                     <i class="fa fa-circle-thin com" job="complete"></i>
                    <p class="item">${todo}</p> 
                    </div>
                    <button class="delete-btn">X</button>
                </li>
            `;
  const position = "beforeend";
  navList.insertAdjacentHTML(position, text);
}

Add.addEventListener("click", (e) => {
  e.preventDefault();
  let actualValue = inputValue.value
  if (actualValue && inputValue.value.trim().length > 0) {
    myTodo(actualValue);
    list.push(actualValue);
  }
  localStorage.setItem("TODO", JSON.stringify(list));
  inputValue.value = "";
});
// removing particular todo items
navList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    let li = e.target.parentElement;
    navList.removeChild(li);
    let textContent = li.children[0].children[1].textContent;
    
    //  console.log(list.indexOf(rr));
    let indexNo = list.indexOf(textContent);
    //  console.log(li.children[0].children[1].textContent);
    list.splice(indexNo,1);
    console.log(list);
    localStorage.setItem("TODO", JSON.stringify(list));
    
    
  }
});
// Adding and Removing task done icon
function completeTodo(element) {
  element.classList.toggle(check);
  element.classList.toggle(unCheck);
  element.parentElement.parentElement.children[0].children[1].classList.toggle(
    lineThrough
  );
}

navList.addEventListener("click", (e) => {
  element = e.target;
  const elementJob = element.attributes.job.value;
  if (elementJob == "complete") {
    completeTodo(element);
  }
});

// Removing all items from Todo
refresh.addEventListener("click", () => {
    if (confirm("Are you sure you want to remove all your task!")) {
      localStorage.clear();
      location.reload();
    }
});

