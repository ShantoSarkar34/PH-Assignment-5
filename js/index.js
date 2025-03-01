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

const cartTitle = document.querySelectorAll('cart_title');

compleateButtons.forEach((button) => {
  button.addEventListener("click", function () {
    button.disabled = true;
    button.style.backgroundColor = "gray";
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

      document.getElementById("history").innerHTML = `
      <h2 class="text-[16px] opacity-[70%] text-[#00303C]">you have compleated the task</h2>
      `;
      
      if (convertClick < 1) {
        alert("Congrats!! You have compleated all the Task");
      }
    }
  });
});

document
  .getElementById("history_clear_btn")
  .addEventListener("click", function () {
    document.getElementById("history").innerHTML = '';
  });
