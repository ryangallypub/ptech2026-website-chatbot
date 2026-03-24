"use strict"

// Check if user is already sighned in and load user data 
async function loadUserData() {
  // 1. Get the ID we saved during the login process
  const userId = localStorage.getItem("userId");
  console.log(userId)

  // 2. Security check: if no ID, kick them to login
  // if (!userId) {
  //   window.location.href = "index.html";
  //   return;
  // }

  try {
    // 3. Ask the backend for this specific user's info
    const response = await fetch(`https://super-duper-space-tribble-7gr4pxqgpppcpg6q-3000.app.github.dev/api/user/${userId}`);
    const data = await response.json();

    if (data.success) {
      // 4. Put the name from the database onto the screen
      const fullName = data.user.userName;
      document.getElementById("username").textContent = fullName.split(" ")[0];
    } else {
      window.location.href = "index.html";
    }
  } catch (error) {
    console.error("Failed to load user:", error);
  }
}

// Run this function as soon as the page loads
loadUserData();

function logout(){
localStorage.removeItem("loggedIn")
window.location.href="index.html"
}

// About modal 
function openAbout(){
document.getElementById("aboutModal").style.display="flex"
}

function closeAbout(){
document.getElementById("aboutModal").style.display="none"
}

// BMI popup

function openBMICalc(){
document.getElementById("bmiModal").style.display="flex"
}

function closeBMI(){
document.getElementById("bmiModal").style.display="none"
}


// BMI + calorie calculator

function calculateBMI(){

const weight = document.getElementById("weight").value
const height = document.getElementById("height").value / 100
const age = document.getElementById("age").value
const gender = document.getElementById("gender").value

const bmi = weight / (height * height)

document.getElementById("bmiResult").innerText =
"BMI: " + bmi.toFixed(2)

let calories

if(gender === "male"){
calories = 10*weight + 6.25*(height*100) - 5*age + 5
}else{
calories = 10*weight + 6.25*(height*100) - 5*age - 161
}

document.getElementById("calorieResult").innerText =
"Estimated calories/day: " + Math.round(calories)

}

// Progress chart code 

function showProgress(){

const ctx = document.getElementById('progressChart')

new Chart(ctx, {
type: 'line',
data: {
labels: ['Week 1','Week 2','Week 3','Week 4'],
datasets: [{label: 'Weight Progress', data: [82,80,78,77], borderWidth: 2}]
},
options:{responsive:true}
})

}

// Trainer booking system 

function openBooking(){
document.getElementById("bookingModal").style.display="flex"
}

function closeBooking(){
document.getElementById("bookingModal").style.display="none"
}

function bookTrainer(){

const trainer = document.getElementById("trainerName").value
const date = document.getElementById("bookingDate").value

if(!trainer || !date){
document.getElementById("bookingMessage").innerText = "Please fill all fields"
return
}

localStorage.setItem("trainerBooking", JSON.stringify({ trainer:trainer, date:date}))

document.getElementById("bookingMessage").innerText = "Trainer booked successfully!"
}

// Daily tips modal 
function openDt(){
document.getElementById("dtModal").style.display="flex"
}

function closeDt(){
document.getElementById("dtModal").style.display="none"
}

window.onclick = function(event) {
  const modals = document.querySelectorAll(".auth-modal")

  for (const m of modals){
     if(event.target === m){
    m.style.display = "none"
  }
  }
 
}