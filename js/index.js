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
    button.style.backgroundColor = "gray";
    alert("Board update seccessfuly");

    const totalTask = document.getElementById("total_task").innerText;
    let convertTotalTask = parseInt(totalTask);

    const remainingClick = document.getElementById("remaining_click").innerText;
    let convertClick = parseInt(remainingClick);

    const cartTitle = document.querySelectorAll("cart_title").innerText;
    console.log(cartTitle);

    const cart = document.querySelector("h3").textContent;
    const currentTime = new Date().toLocaleTimeString();

    const historyDiv = document.getElementById("history");

    const historyElement = document.createElement("h4");

    const history =
      (historyElement.innerText = `You have compleated the task ${cart} ${currentTime}`);
    // const history = document.getElementById("history").innerHTML = `
    // <h4 class="text-[16px] p-4 opacity-[70%] text-[#00303C]">you have compleated the task ${cart} ${currentTime}</h4>
    // `;

    if (convertClick > 0 && convertTotalTask > 0) {
      convertClick--;
      document.getElementById("remaining_click").innerText = convertClick;
      convertTotalTask++;
      document.getElementById("total_task").innerText = convertTotalTask;

      historyElement.innerText = history;

      historyDiv.appendChild(historyElement);

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
  });
