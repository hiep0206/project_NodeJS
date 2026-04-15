function confirmDelete() {
  return confirm("Bạn có chắc muốn xóa không?");
}

function searchItem() {
  let input = document.getElementById("search");

  let filter = input.value.toLowerCase();

  let rows = document.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    let text = row.innerText.toLowerCase();

    row.style.display = text.includes(filter) ? "" : "none";
  });
}
