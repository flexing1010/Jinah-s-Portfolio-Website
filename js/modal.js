const toModal = document.querySelectorAll(".jsToModal");
const modal = document.querySelectorAll(".modal");
const closeBtn = document.querySelectorAll(".jsCloseModal");

const handleClick = (e) => {
  const index = e.target.dataset.index;
  modal[index].classList.add("show-modal");
};

const handleClose = (e) => {
  const index = e.target.dataset.index;
  modal[index].classList.remove("show-modal");
};

toModal.forEach((element) => element.addEventListener("click", handleClick));
closeBtn.forEach((element) => element.addEventListener("click", handleClose));