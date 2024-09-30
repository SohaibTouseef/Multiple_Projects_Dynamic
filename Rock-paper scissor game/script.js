let userScroe = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const userScroep = document.querySelector("#your-score")
const compScorep = document.querySelector("#comp-score");

const gencompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options(randIdx)
}
const drawGame = () =>{
    msg.innerText = "Game was Draw.play again";
    msg.Style.backgroundColor = "#081b31"
}

const showWinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        userScroe++;
        userScroep.innerText = userScroe;
        msg.innerText = `You win! you ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    }else{
        compScore++;
        compScorep.innerText = compScore;
        msg.innerText = `you lose. ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userchoice) =>{
    const compchoice = gencompChoice();
    if(userchoice === compchoice){
        drawGame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin =compchoice === "scissor" ? true : false;

        }else if (userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;

        }else{
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice)
    }
};
  choices.forEach((choices) => {
    choices.addEventListener("click" , () =>{
        const userchoice = choices.getttribute("class")
        playGame(userchoice)
    })
})