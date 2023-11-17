import React, { useRef, useState } from 'react'


const globalObject = {
    rock : {
        rock : 'draw',
        scissor : 'win',
        paper : 'lose'
    },
    scissor : {
        rock : 'lose',
        scissor : 'draw',
        paper : 'win'
    },
    paper : {
        rock : 'win',
        scissor : 'lose',
        paper : 'draw'
    }
}
const StonePaperScissor = () => {
    //Set global object
    const [object, setObject] = useState(JSON.parse(JSON.stringify(globalObject)))

    //Declare states
    const [computerScore, setComputerScore] = useState(0)
    const [userScore, setUserScore] = useState(0)
    const [userChoice, setUserChoice] = useState("")
    const [computerChoice, setComputerChoice] = useState("")

    //Declare useRef
    const resultRef = useRef(null)

    function checker(input){
        console.log("first")
        var choices = ["rock", "paper", "scissor"];
        var num = Math.floor(Math.random()*3);
        setComputerChoice(choices[num].toUpperCase());
        setUserChoice(input.toUpperCase());
    
        let computer_choice = choices[num];
    
        switch(object[input][computer_choice]){
            case 'win':
                resultRef.current.backgroundColor = "#cefdce"
                resultRef.current.color = "#689f38";
                resultRef.current.innerHTML = "YOU WIN";
                let user_score = userScore + 1
                setUserScore(user_score)
                break;
            case 'lose':
                resultRef.current.backgroundColor = "#ffdde0"
                resultRef.current.color = "#d32f2f";
                resultRef.current.innerHTML = "YOU LOSE";
                let comp_score = computerScore + 1
                setComputerScore(comp_score)
                break;
            default:
                resultRef.current.backgroundColor = "#e5e5e5"
                resultRef.current.color = "#808080";
                resultRef.current.innerHTML = "Draw";
                break;
        }
    }


  return (
    <div className="container">
        <button id='reset_button' onClick={()=> {setUserScore(0); setComputerScore(0)}}>reset</button>
        <div className="scores">
            <p>Computer : 
                <span id="computer_score">{computerScore}</span>
            </p>
            <p>
                You :
                <span id="user_score">{userScore}</span>
            </p>
        </div>
        <div className="weapons">
            <button onClick={()=>checker('rock')}>
                <i className="far fa-hand-rock"></i>
            </button>
            <button onClick={()=>checker('paper')}>
                <i className="far fa-hand-paper"></i>
            </button>
            <button onClick={()=>checker('scissor')}>
                <i className="far fa-hand-scissors"></i>
            </button>
        </div>
        <div className="details">
            <p id="user_choice">Your Choice: "{userChoice}"</p>
            <p id="comp_choice">System Choice: "{computerChoice}"</p>
            <p ref={resultRef} id="result"></p>
        </div>
    </div>
  )
}

export default StonePaperScissor