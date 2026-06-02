// document.getElementById("submitBtn").addEventListener("click", function() {
//   let name = document.getElementById("nameInput").value;
//   document.getElementById("output").textContent = "Hello " + name;
// });

// Save something
localStorage.setItem("username", name);

// Get it back
localStorage.getItem("username");

document.getElementById("submitBtn").addEventListener("click", function() {
  let name = document.getElementById("nameInput").value;
  localStorage.setItem("username", name);
  document.getElementById("output").textContent = "Hello " + name;
});

let savedName = localStorage.getItem("username");
if (savedName) {
  document.getElementById("output").textContent = "Hello " + savedName;
}