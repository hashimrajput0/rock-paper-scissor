

let userScore = 0;
let compScore = 0;
let user_score = document.querySelector(".user-score");
let comp_score = document.querySelector(".comp-score");
userScore = parseInt(localStorage.getItem("userscore")) || 0;
compScore = parseInt(localStorage.getItem("compscore")) || 0;
user_score.innerText = localStorage.getItem("userscore");
comp_score.innerText = localStorage.getItem("compscore");


let reset = document.querySelector(".reset-container");
let msg = document.querySelector("#msg");



reset.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    localStorage.setItem("userscore", userScore);
    localStorage.setItem("compscore", compScore);
    user_score.innerText = localStorage.getItem("userscore");
    comp_score.innerText = localStorage.getItem("compscore");
});
function game(option) {


    options = ["rock", "paper", "scissor"];
    // generating random index for options
    let index = Math.floor(Math.random() * 3);

    const comp_option = options[index];
    console.log(comp_option);
    let firstHand = document.querySelector(".first");
    let secondHand = document.querySelector(".second");
    firstHand.classList.remove("first-hand-rock");
    firstHand.classList.remove("first-hand-scissor");
    firstHand.classList.remove("first-hand-paper");
    secondHand.classList.remove("second-hand-rock");
    secondHand.classList.remove("second-hand-scissor");
    secondHand.classList.remove("second-hand-paper");
    msg.innerText = "";
    // draw

    if (option == comp_option) {
        // user options
        msg.innerText = "Draw"
        if (option == "rock") {
            firstHand.classList.add("first-hand-rock");

        } else if (option == "scissor") {

            firstHand.classList.add("first-hand-scissor");

        } else if (option == "paper") {

            firstHand.classList.add("first-hand-paper");
        }
        // computer options
        if (comp_option == "rock") {
            secondHand.classList.add("second-hand-rock");
        } else if (comp_option == "scissor") {

            secondHand.classList.add("second-hand-scissor");

        } else if (comp_option == "paper") {

            secondHand.classList.add("second-hand-paper");
        }
    }
    // if not draw
    else if (option == "rock") {
        if (comp_option == "paper") {
            msg.innerText = "You Lose Comp Win";

            firstHand.classList.add("first-hand-rock");
            secondHand.classList.add("second-hand-paper");
            compScore++;
            localStorage.setItem("userscore", userScore);
            localStorage.setItem("compscore", compScore);
            user_score.innerText = localStorage.getItem("userscore");
            comp_score.innerText = localStorage.getItem("compscore");
        }
        else if (comp_option == "scissor") {
            console.log("your rock broke scissor, you win comp lose");
            msg.innerText = "You Win Comp Lose";
            firstHand.classList.add("first-hand-rock");
            secondHand.classList.add("second-hand-scissor");
            userScore++;
            localStorage.setItem("userscore", userScore);
            localStorage.setItem("compscore", compScore);
            user_score.innerText = localStorage.getItem("userscore");
            comp_score.innerText = localStorage.getItem("compscore");
        }
    } else if (option == "paper") {
        if (comp_option == "rock") {
            msg.innerText = "You Win and Comp Lose";
            console.log("your paper wrap the rock, you win and comp lose");
            firstHand.classList.add("first-hand-paper");
            secondHand.classList.add("second-hand-rock");
            userScore++;
            localStorage.setItem("userscore", userScore);
            localStorage.setItem("compscore", compScore);
            user_score.innerText = localStorage.getItem("userscore");
            comp_score.innerText = localStorage.getItem("compscore");
        }
        else if (comp_option == "scissor") {
            msg.innerText = "You Lose and Comp Win";
            console.log("your paper is cut by scissor, you lose and comp win");
            firstHand.classList.add("first-hand-paper");
            secondHand.classList.add("second-hand-scissor");
            compScore++;
            localStorage.setItem("userscore", userScore);
            localStorage.setItem("compscore", compScore);
            user_score.innerText = localStorage.getItem("userscore");
            comp_score.innerText = localStorage.getItem("compscore");
        }
    } else if (option == "scissor") {
        if (comp_option == "rock") {
            msg.innerText = "You Loss and Comp Win";
            firstHand.classList.add("first-hand-scissor");
            secondHand.classList.add("second-hand-rock");
            console.log("your scissor is broken by rock, you loss and comp win");
            compScore++;
            localStorage.setItem("userscore", userScore);
            localStorage.setItem("compscore", compScore);
            user_score.innerText = localStorage.getItem("userscore");
            comp_score.innerText = localStorage.getItem("compscore");
        } else if (comp_option == "paper") {
            firstHand.classList.add("first-hand-scissor");
            secondHand.classList.add("second-hand-paper");
            msg.innerText = "You Win and Comp Lose";
            console.log("your scissor cut the paper, you win and comp lose");
            userScore++;
            localStorage.setItem("userscore", userScore);
            localStorage.setItem("compscore", compScore);
            user_score.innerText = localStorage.getItem("userscore");
            comp_score.innerText = localStorage.getItem("compscore");
        }
    }






}


function userinput(option) {
    console.log(option);
    game(option);

}