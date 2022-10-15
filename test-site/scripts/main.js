const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/OIP.jpg") {
        myImage.setAttribute("src", "images/R.jpg")
    } else {
        myImage.setAttribute("src", "images/OIP.jpg")
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Please enter your Username.");
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `This is a Test Website for me to learn coding with HTML, ${myName}`
    }
}

myButton.onclick = () => {
    setUserName();
}