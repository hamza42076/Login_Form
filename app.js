function onSubmit(e) {
    e.preventDefault();
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/    

    // first name section
    let firstname = document.querySelector("#FirstName").value;
    let FirstNamespan = document.querySelector("#FirstNamespan");   

    if (firstname.length < 3) {
        FirstNamespan.innerText = "Kindly enter your correct name";
        FirstNamespan.style.color = "red";

    } else {
        FirstNamespan.innerText = ""; // Clear error if input is valid
    }
    // lastname section
    let LastName = document.querySelector("#LastName").value;
    let LastNamespan = document.querySelector("#LastNamespan");   

    if (LastName.length < 3) {
        LastNamespan.innerText = "Kindly enter your correct name";
         LastNamespan.style.color = "red";
    } else {
        LastNamespan.innerText = ""; // Clear error if input is valid
               

    }
// email section
    let email = document.querySelector("#email").value;
    let emailSpan = document.querySelector("#emailspan");
    
    if(!email.match(emailRegex)){
        emailSpan.innerText = "Kindly enter a valid email";
        emailSpan.style.color = "red";


    }
// number section
    let number = document.querySelector("#Number").value;    
    let numberSpan = document.querySelector("#Numberspan");

    if(number < 11){
        numberSpan.innerText = "Please enter a valid 11-digit number.";
        numberSpan.style.color = "red";

    }
// couse section
    let course = document.querySelector("#course");
    let courseSpan = document.querySelector("#courseSpan");

    if(course.selectedIndex === 0){
        courseSpan.innerText = "Kindly selected the course";
        courseSpan.style.color = "red";

     }

// radio btn section
let radio = document.getElementsByName("gender");
let genderSpan = document.querySelector("#genderSpan");

if(!radio[0].checked && !radio[1].checked){
    genderSpan.innerText = "Kindly selected the gender";
    genderSpan.style.color = "red";



}




}
