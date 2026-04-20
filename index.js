function enter() {
    let name = prompt("What is your gaming name?");
    let age = prompt("How old are you?");
    let team = prompt("Which team do you want to play with?");

    let ageNumber = Number(age);

    alert(
      "Your chosen team is " +
        team +
        " We look forward to seeing you winning " +
        name +
        "!",
    );
}

let enterButton = document.querySelector("button");
enterButton.addEventListener("click", enter);
