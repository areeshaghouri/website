document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav li");
  
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        Swal.fire({
          title: "Sign up for Biography's newsletter",
          input: "email",
          inputPlaceholder: "Enter your email address",
          showCancelButton: false,
          confirmButtonText: "Sign me up!",
          cancelButtonText: "Cancel",
          inputValidator: (value) => {
            if (!value || !value.includes("@gmail.com")) {
              return "Please enter a valid Gmail address.";
            }
          },
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Success!", `You entered: ${result.value}`, "success");
          }
        });
      });
    });
  });
  
  var menuTarget = document.querySelector(".menuBar");
  
  var flag = 0;
  
  const Menu = () => {
    if (flag === 0) {
      menuTarget.style.display = "block";
      flag = 1;
    } else {
      flag = 0;
      menuTarget.style.display = "none";
    }
  };