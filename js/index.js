document
  .getElementById("bg_color_change")
  .addEventListener("click", function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

document
  .getElementById("second_page_btn")
  .addEventListener("click", function () {
    window.location.href = "./second.html";
  });

function date() {
  const today = new Date();
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  const currentDate = today.toLocaleDateString("en-US", options);
  document.getElementById("current_date").innerText = currentDate;
}
date();

const compleateButtons = document.querySelectorAll(".compleate_btn");

compleateButtons.forEach((button) => {
  button.addEventListener("click", function () {
    button.disabled = true;
    button.style.opacity = "20%";
    button.style.cursor = "not-allowed";
    alert("Board update seccessfuly");

    const totalTask = document.getElementById("total_task").innerText;
    let convertTotalTask = parseInt(totalTask);

    const remainingClick = document.getElementById("remaining_click").innerText;
    let convertClick = parseInt(remainingClick);

    if (convertClick > 0 && convertTotalTask > 0) {
      convertClick--;
      document.getElementById("remaining_click").innerText = convertClick;
      convertTotalTask++;
      document.getElementById("total_task").innerText = convertTotalTask;
      if (convertClick < 1) {
        alert("Congrats!! You have compleated all the Task");
      }
    }
  });
});

document
  .getElementById("history_clear_btn")
  .addEventListener("click", function () {
    document.getElementById("history").innerHTML = "";
    document.getElementById("history").classList.remove("bg-[#F4F7FF]");
  });

function logName(button) {
  const card = button.closest(".card");
  const name = card.querySelector(".card_title").textContent;
  const history = document.getElementById("history");
  const currentTime = new Date().toLocaleTimeString();
  newTitle = name;

  const newEntry = document.createElement("div");
  newEntry.innerHTML = `<div class="p-4 bg-[#F4F7FF] rounded-[12px]">
  <h4 class="text-[16px] opacity-[70%]">You have compleated the task ${newTitle} ${currentTime}</h4>
  </div>`;

  history.appendChild(newEntry);
}
