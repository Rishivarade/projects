const signup = document.getElementById("signup")
const arr = JSON.parse(localStorage.getItem("data")) || []
signup.addEventListener("submit", (e) => {
    e.preventDefault()

    let signdata = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        country: document.getElementById("country").value,
        phone: document.getElementById("phone").value,
        password: document.getElementById("password").value,
    }

    arr.push(signdata)
    localStorage.setItem("data", JSON.stringify(arr))
})

const signin = document.getElementById("signin")
signin.addEventListener("submit", (e) => {
    e.preventDefault()

    let obj = {
        name: document.getElementById("signin-name").value,
        email: document.getElementById("signin-email").value,
        password: document.getElementById("signin-password").value,
    }

    let userdata = JSON.parse(localStorage.getItem("data"))

    let store = userdata.filter((el, i) => el.email == obj.email && el.password == obj.password)
    if (store[0]) {
        alert("login successfull")
    } else {
        alert("invalid password || email")
    }
})
