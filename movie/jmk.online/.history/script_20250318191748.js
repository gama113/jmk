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

// document.addEventListener("DOMContentLoaded", function() {
//   const sidebar = document.getElementById("mySidebar_sidepanel");
//   const openButton = document.querySelector(".openbtn");
//   const closeButton = document.querySelector(".closebtn");
//   const dropdownButton = document.querySelector(".dropbtn");
//   const dropdownContent = document.querySelector(".dropdown-content");

//   // Toggle Sidebar Function
//   function toggleSidebar() {
//     if (sidebar.style.width === "300px") {
//       sidebar.style.width = "0";
//     } else {
//       sidebar.style.width = "300px";
//     }
//   }

//   // Toggle Dropdown Function
//   function toggleDropdown() {
//     const expanded =
//       dropdownButton.getAttribute("aria-expanded") === "true" || false;
//     dropdownButton.setAttribute("aria-expanded", !expanded);
//     dropdownContent.style.display = expanded ? "none" : "block";
//   }

//   // Event Listeners
//   openButton.addEventListener("click", toggleSidebar);
//   closeButton.addEventListener("click", toggleSidebar);
//   dropdownButton.addEventListener("click", toggleDropdown);

//   // Close dropdown when clicking outside
//   document.addEventListener("click", function(event) {
//     if (
//       !dropdownButton.contains(event.target) &&
//       !dropdownContent.contains(event.target)
//     ) {
//       dropdownButton.setAttribute("aria-expanded", "false");
//       dropdownContent.style.display = "none";
//     }
//   });

//   // Close sidebar when clicking outside
//   document.addEventListener("click", function(event) {
//     if (
//       !openButton.contains(event.target) &&
//       !sidebar.contains(event.target) &&
//       sidebar.style.width === "300px"
//     ) {
//       sidebar.style.width = "0";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.getElementById("mySidebar_sidepanel");
  const openButton = document.querySelector(".openbtn");
  const closeButton = document.querySelector(".closebtn");
  const dropdownButton = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  console.log("dropdownButton:", dropdownButton);
  console.log("dropdownContent:", dropdownContent);

  // Toggle Sidebar Function
  function toggleSidebar() {
    if (sidebar.style.width === "300px") {
      sidebar.style.width = "0";
    } else {
      sidebar.style.width = "300px";
    }
  }

  // Toggle Dropdown Function
  function toggleDropdown() {
    console.log("toggleDropdown called");
    const expanded =
      dropdownButton.getAttribute("aria-expanded") === "true" || false;
    console.log("expanded:", expanded);
    dropdownButton.setAttribute("aria-expanded", !expanded);
    dropdownContent.style.display = expanded ? "none" : "block";
    console.log(
      "dropdownContent.style.display:",
      dropdownContent.style.display
    );
  }

  // Event Listeners
  openButton.addEventListener("click", toggleSidebar);
  closeButton.addEventListener("click", toggleSidebar);
  dropdownButton.addEventListener("click", function() {
    console.log("Dropdown button clicked");
    toggleDropdown();
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function(event) {
    if (
      !dropdownButton.contains(event.target) &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownButton.setAttribute("aria-expanded", "false");
      dropdownContent.style.display = "none";
    }
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", function(event) {
    if (
      !openButton.contains(event.target) &&
      !sidebar.contains(event.target) &&
      sidebar.style.width === "300px"
    ) {
      sidebar.style.width = "0";
    }
  });
});

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
