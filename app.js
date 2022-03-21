//rotate bx-chevron-down
let chevron = document.querySelector('#chevron')
function rotateChev() {
    chevron.classList.toggle('chevron-down')
}

chevron.addEventListener('click', rotateChev)
let settings = document.querySelector('.settings')
let message = document.querySelector('.message')
let flex = document.querySelector('#flex')
let closeSet = document.querySelector('.bx-x')
function setFlex() {
    if (settings.style.display === 'none') {
        settings.style.display = 'flex'
    }
    else {
        settings.style.display = 'none'
    }
}
flex.addEventListener('click', setFlex)
closeSet.addEventListener('click', setFlex)


function showMess() {
    if (message.style.display === 'none') {
        message.style.display = 'flex'
    }
    else {
        message.style.display = 'none'
    }
}
function closeAll() {
    message.style.display = 'none'
}

let theicon = document.querySelector('#toggle-left')
let body = document.body;
function theme() {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        theicon.src = "Images/toggle-right.png";
    }
    else {
        theicon.src = "Images/toggle-left.png";
    }
}
//set home as default 
localStorage.setItem("home", "light");

//adding elements
/* const post = document.querySelector('.cont-cont');
const postCont = document.querySelector('.contents')
function addPosts(){
    const clone = post.cloneNode(true);
    postCont.appendChild(clone);
}
window.setTimeout(addPosts, 3000); */
window.onload = closeAll()
//add message 
function sendCont() {
    let send = document.querySelector('.send');
    let sp1 = document.createElement("div")
    sp1.setAttribute("class", "speaker1")
    let sp1Cont = document.createElement("div")
    sp1Cont.setAttribute("class", "speaker1-cont")
    let text = document.getElementById("text").value
    if (text === '') {
        alert('Please enter the message')
    }
    else {
        var textC = document.createTextNode(text);
    }
    let textp = document.createElement("p");
    textp.setAttribute("id", "samptext1")
    textp.appendChild(textC)
    sp1Cont.appendChild(textp);
    sp1.appendChild(sp1Cont);
    send.appendChild(sp1);
    // send.appendChild(newMess);
}
var input = document.getElementById("text");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector('#send').click();
    }
});

let sendBtn = document.getElementById("send")
function clearField() {
    document.getElementById("text").value = "";
}
sendBtn.addEventListener("click", clearField);

//send photos
function sendPhoto() {
    let send = document.querySelector('.send');
    let sp1 = document.createElement("div")
    sp1.setAttribute("class", "speaker1")
    let imgUp = document.createElement("div")
    imgUp.setAttribute("class", "imgup")
    sp1.appendChild(imgUp);

    send.appendChild(sp1); const image_input = document.querySelector("#file-input");
    image_input.addEventListener("change", function () {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const uploaded_image = reader.result;
            document.querySelector(".imgup").style.backgroundImage = `url(${uploaded_image})`;
        });
        reader.readAsDataURL(this.files[0]);
    });
}

function showPasw() {
    var passx = document.getElementById("password");
    if (passx.type === "password") {
        passx.type = "text";
    } else {
        passx.type = "password";
    }
}

//submit
/* var userName = document.querySelector('#username').value
var password = document.querySelector('#password').value
function submit() {
    if (password == "" || password == null) {
        window.alert("input required");
        return false;
    }
    else {
        window.location.href = "index.html";
    }
}
 */

//send time
function timeStamp() {
    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    var hour = today.getHours();
    if (hour < 10) hour = "0" + hour;

    var minute = today.getMinutes();
    if (minute < 10) minute = "0" + minute;

    var second = today.getSeconds();
    if (second < 10) second = "0" + second;

    document.getElementById("clock").innerHTML =
        day + "/" + month + "/" + year + " |" + hour + ":" + minute + ":" + second;

    setTimeout("timeCount()", 1000);
}

//signup
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}