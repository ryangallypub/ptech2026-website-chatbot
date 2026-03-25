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

function showErr(){
  const authErrors = document.querySelectorAll(".auth-error");

  for (const a of authErrors) {
   a.style.display = 'block';
};
  
}

function removeErr(){
  const authErrors = document.querySelectorAll(".auth-error");

  for (const a of authErrors) {
   a.style.display = 'none';
};
  
}

async function signup() {
  const userName = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const userPassword = document.getElementById("signupPassword").value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!userName || !regex.test(email) || !userPassword) {
    return showErr();
  }

  // SEND DATA TO YOUR BACKEND
  try {
    const response = await fetch('https://super-duper-space-tribble-7gr4pxqgpppcpg6q-3000.app.github.dev/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, email, userPassword })
    });

    const data = await response.json();

    if (data.success) {
      alert("Account created successfully!");
      showLogin();
      removeErr()
    } else {
      alert("Error: " + data.error);
    }
  } catch (error) {
    console.error("Connection failed:", error);
  }
}


async function login() {
  // 1. Grab what the user typed
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // 2. Simple check before sending
  if (!email || !password) {
    return showErr();
  }

  try {
    // 3. Send the login request to the backend
    const response = await fetch('https://super-duper-space-tribble-7gr4pxqgpppcpg6q-3000.app.github.dev/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }) // Send as JSON
    });

    // 4. Wait for the server's answer
    const data = await response.json();

    if (data.success) {
      removeErr()

      // 5. If successful, save a "session" flag and redirect
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userId", data.userId); // Store the ID the server sent back
      localStorage.setItem("userName", data.userName)

      console.log(data.userId)

      
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      // 6. If the server says "No" (wrong password/user not found)
      alert("Error: " + data.message);
    }
  } catch (error) {
    // 7. If the server is down
    console.error("Login failed:", error);
    alert("Could not connect to the server.");
  }
}


function openAbout(){
document.getElementById("aboutModal").style.display="flex"
}

function closeAbout(){
document.getElementById("aboutModal").style.display="none"
}

window.onclick = function(event) {
  const modals = document.querySelectorAll(".auth-modal")

  for (const m of modals){
     if(event.target === m){
    m.style.display = "none"
  }
  }
 
}