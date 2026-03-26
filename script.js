const printButton = document.querySelector("[data-print-button]");

if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}
