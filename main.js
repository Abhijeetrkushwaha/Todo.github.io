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
    time.innerHTML = `${days[day]},${months[month]} ${date}`;
    // if (hour >= 0 && hour <= 6) {
    //   header.style.background = "url(./images/nightscene.jpg) center no-repeat";
    //   time.style.color = "white";
    // } else if (hour >= 7 && hour <= 12) {
    //   header.style.background =
    //     "url(./images/morningscene.jpg) center no-repeat";
    // } else if (hour >= 13 && hour <= 18) {
    //   header.style.background =
    //     "url(./images/afternoonscene.jpg) center no-repeat";
    // } else {
    //   header.style.background = "url(./images/nightscene.jpg) center no-repeat";
    //   time.style.color = "white";
    // }

    function myTodo(todo) {
      let text = `
      <li class="nav-items">
                    <p class="item">${todo.value}</p>
                    <div class="complete-remove">
                     <i class="fa fa-circle-thin com"></i>
                     <button class="delete-btn">X</button>
                    </div>
                </li>
            `;
      const position = "beforeend";
      navList.insertAdjacentHTML(position, text);
    }

    Add.addEventListener("click", (e) => {
      e.preventDefault();
      if (inputValue.value) {
        myTodo(inputValue);
      }
      inputValue.value = "";
    });

    navList.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        let li = e.target.parentElement.parentElement;
        navList.removeChild(li);
      }
    });

    function completeTodo(element) {
      element.classList.toggle(check);
      element.classList.toggle(unCheck);
      element.parentElement.parentElement.children[0].classList.toggle(
        lineThrough
      );
    }

    navList.addEventListener("click", (e) => {
      element = e.target;
      completeTodo(element);
    });

    refresh.addEventListener("click", () => {
      if (confirm("Are you sure you want to remove all your task!")) {
        while (navList.firstChild) {
          navList.removeChild(navList.firstChild);
        }
      }
    });

