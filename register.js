const form = document.getElementById("forms")

let inputFields = JSON.parse(localStorage.getItem("entries"))
let arr = [];

console.log(inputFields)

form.addEventListener("submit", (e) =>){
    e.preventDefault();

    const text = {
       yourname: form.name.value,
        surname: form.lastname.value,
        username: form.user.value,
        mobile: form.phone.value,
        email: form.email.value,
        age: form.age.value,
        password: form.password.value,
    }
}

let game = arr.push(text)
console.log(arr)

localStorage.setItem("entries", JSON.stringify(arr));

if(game) {
    alert("Registration Successful")

    location.href = ""
}else {
    alert("Registration failed")
}