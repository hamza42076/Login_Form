document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const nameInput = document.querySelector("#name");
    console.log(nameInput);
    
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const numberInput = document.querySelector("#number");
  
    const namespan = document.querySelector("#namespan");
    const emailspan = document.querySelector("#emailspan");
    const numberspan = document.querySelector("#numberspan");
    const passwordspan = document.querySelector("#passwordspan");

  
    form.addEventListener("submit", function (event) {
      event.preventDefault();

  
      // Name validation
      console.log(false);
      if (nameInput.value.trim().length < 3) {
        
        namespan.innerText = "Name must be at least 3 characters.";
        namespan.style.color = "red";
      } else {
        namespan.innerText = "";
      }
  
      if(!emailInput.value.includes("@") || !emailInput.value.includes(".")){
        emailspan.innerText ="Please enter a valid email";
        emailspan.style.color = "red";
      }
      else{
        emailspan.innerText = "";
      }

      if(numberInput.value.trim().length !== 11){
        numberspan.innerText = "kindly enter a 11 digits";
        numberspan.style.color = "red"; 
      }
      else{
        numberspan.innerText = "";

      }

      if(passwordInput.value.length < 6){
        passwordspan.innerText = "character must be 6 character";
        passwordspan.style.color = "red";
      }
      else{
        passwordspan.innerText = "";

      }
    });
  
  });
  
   
    

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("form");
//     const nameInput = document.getElementById("name");
//     const emailInput = document.getElementById("email");
//     const numberInput = document.getElementById("number");
  
//     const nameSpan = document.getElementById("namespan");
//     const emailSpan = document.getElementById("emailspan");
//     const numberSpan = document.getElementById("numberspan");
  
//     // Create and add dark mode toggle
//     const toggleBtn = document.createElement("button");
//     toggleBtn.textContent = "Toggle Dark/Light Mode";
//     toggleBtn.style.marginTop = "20px";
//     document.body.appendChild(toggleBtn);
  
//     toggleBtn.addEventListener("click", () => {
//       document.body.classList.toggle("dark-mode");
//     });
  
//     form.addEventListener("submit", function (e) {
//       e.preventDefault(); // Stop form from submitting
  
//       let isValid = true;
  
//       // Name validation
//       if (nameInput.value.trim().length < 3) {
//         nameSpan.textContent = "Name must be at least 3 characters.";
//         nameSpan.style.color = "red";
//         isValid = false;
//       } else {
//         nameSpan.textContent = "";
//       }
  
//       // Email validation
//       if (!emailInput.value.includes("@")) {
//         emailSpan.textContent = "Please enter a valid email.";
//         emailSpan.style.color = "red";
//         isValid = false;
//       } else {
//         emailSpan.textContent = "";
//       }
  
//       // Number validation
//       const phoneRegex = /^[0-9]{10}$/;
//       if (!phoneRegex.test(numberInput.value)) {
//         if (!numberSpan) {
//           const newSpan = document.createElement("span");
//           newSpan.id = "numberspan";
//           newSpan.style.color = "red";
//           newSpan.textContent = "Enter a valid 10-digit number.";
//           numberInput.insertAdjacentElement("afterend", newSpan);
//         } else {
//           numberSpan.textContent = "Enter a valid 10-digit number.";
//           numberSpan.style.color = "red";
//         }
//         isValid = false;
//       } else if (numberSpan) {
//         numberSpan.textContent = "";
//       }
  
//       // If all valid
//       if (isValid) {
//         alert("Form submitted successfully!");
//         form.reset();
//       }
//     });
//   });
  