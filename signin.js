const signIn=()=> {
    var student =JSON.parse(localStorage.getItem("userDetails"))
    var found=false;
    for (let i = 0; i < student.length; i++) {
        if(student[i].email==email.value&&student[i].password==password.value){
           found=true;
        }
    }
    if (found) {
       alert("user Signed in successfully")
       window.location.href = "userDetails.html"
    } else {
        disp.innerHTML = "User not found"
    }
    
}