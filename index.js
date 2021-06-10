const open_modal = document.querySelector(".modal-btn");
const close_modal = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

open_modal.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

close_modal.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

//Click anywhere outside the modal box to close modal
document.addEventListener("click", function (e) {
  let target_area = e.target.className;
  if (
    target_area !== "btn modal-btn" &&
    target_area !== "close-btn" &&
    target_area !== "modal-container" &&
    target_area !== "modal-header"
  ) {
    modal.classList.remove("open-modal");
  }
});
