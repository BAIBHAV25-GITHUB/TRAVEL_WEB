function validate() {
    let pass = document.getElementById("password").value;
    let cpass = document.getElementById("cpassword").value;
    let pd = document.getElementById("details");
    let reg=document.getElementById("reg");
    if (pass === cpass) {
        pd.style.display = "block";
        reg.style.marginTop="2%";
    }
    else{
        alert("Invalid Password!");
    }
}
function calculateAge() {
    var dob = document.getElementById("dob").value;
    var dobDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    document.getElementById("age").textContent = "Age: " + age;
}