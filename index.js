
let newStudent = [];
if (localStorage.studentDetails) {
    let newStudent=JSON.parse(localStorage.getItem("userDetails"))
}
const addStudent=()=>{
    var addStudent = {
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        password:password.value
       
    }
    if (firstName.value =="" || lastName.value=="" || email.value=="" || password.value=="") {
        message.innerHTML = "Input details please"
    } else {
     
        newStudent.push(addStudent)
        localStorage.setItem("userDetails",JSON.stringify(newStudent))
        console.log(newStudent)
        message.innerHTML = "User Added"
        firstName.value=""
        lastName.value=""
        email.value=""
        password.value=""
        window.location.href = "signin.html"
    }
    
}





