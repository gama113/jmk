///////////////////////////////////////////////////////////
// smooth scrlling animation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

////////////////////////////////////////////////////////////
// for side pannel
// function toggleSidebar() {
//   var sidebar = document.getElementById("mySidebar_sidepanel");
//   if (sidebar.style.width === "300px") {
//     sidebar.style.width = "0";
//   } else {
//     sidebar.style.width = "300px";
//   }
// }

function toggleSidebar() {
  var sidebar = document.getElementById("mySidebar_sidepanel");
  if (sidebar.style.width === "300px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "300px";
  }
}
////////////////////////////////////////////////////////////
// for mail to function
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "" || email == "" || message == "") {
    alert("All fields must be filled out");
    return false;
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  var mailto_link =
    "mailto:info@jmkonline.co.in?subject=Message from " +
    name +
    "&body=" +
    encodeURIComponent(message + "\n\nFrom: " + name + "\nEmail: " + email);
  window.location.href = mailto_link;
  return false;
}
