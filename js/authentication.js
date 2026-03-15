"use strict"
function openAuth() {
  document.getElementById("authModal").style.display = "flex";
}

function closeAuth() {
  document.getElementById("authModal").style.display = "none";
}

function showLogin() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

function showSignup() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

function signup() {

  const name = document.getElementById("signupName").value
  const email = document.getElementById("signupEmail").value
  const password = document.getElementById("signupPassword").value

  const user = { name, email, password }

  localStorage.setItem("fitnfireUser", JSON.stringify(user))

  alert("Account created successfully!")

  showLogin()
}

function login() {

  const email = document.getElementById("loginEmail").value
  const password = document.getElementById("loginPassword").value

  const savedUser = JSON.parse(localStorage.getItem("fitnfireUser"))

  if(savedUser && email === savedUser.email && password === savedUser.password){

      localStorage.setItem("loggedIn","true")

      window.location.href = "dashboard.html"

  } else {

      alert("Invalid login details")

  }
}

function openAbout(){
document.getElementById("aboutModal").style.display="flex"
}

function closeAbout(){
document.getElementById("aboutModal").style.display="none"
}

window.onclick = function(event) {
  const modal = document.getElementById("authModal")

  if(event.target === modal){
    modal.style.display = "none"
  }
}