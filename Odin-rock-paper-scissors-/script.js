let arr = ["🪨","📄","✂️"]
let indexer = 0;
let prev = "zero"
let humanChoice
let AI_choice




function getComputerChoice(){
    if(repeted()){
        if(prev == arr[0]){
            return arr[1]
        }
        if(prev == arr[1]){
            return arr[2]
        }
        if(prev == arr[2]){
            return arr[0]
        }
    }
    
    let s = Math.floor(Math.random() * 3)
    return arr[s]
}


function changeHumanChoice(){
 
    let select = document.querySelector("#player")
    select.textContent = arr[indexer%3]
    indexer++
}
function getHumanChoice(){
    let select = document.querySelector("#player")

    return select.textContent
}



let humanScore = 0;
let AI_score = 0;

function playmatch(){
    humanChoice = getHumanChoice()
    prev = check(humanChoice)


}
function check(){
   
   AI_choice = getComputerChoice()
    
    if(humanChoice=="🫵🏼"){
        
        return humanChoice
    }
    
    document.querySelector("#ai").firstChild.textContent = AI_choice
    
    
    if(AI_choice == humanChoice){
        console.log("Tie")
        humanScore++
        AI_score++
        update()
        return humanChoice
    }

    if(humanChoice == arr[0]){
        if(AI_choice ==arr[1]){
            console.log("you lose and AI won")
            AI_score++
            update()
            return humanChoice
        }
       
    }
    if(humanChoice == arr[1]){


        if(AI_choice == arr[2]){
            console.log("you lose and AI won")
            AI_score++
            update()
            return humanChoice
        }
        
    }

    if(humanChoice == arr[2]){
        if(AI_choice == arr[0]){
            console.log("you lose and AI won")
            AI_score++
            update()
            return humanChoice
        }
    }

    console.log("you won and AI lose")
    humanScore++
    update()
    return humanChoice

}

function reset(){



    if(AI_score>=5 && humanScore>=5){
        alert("tie match")
    }
    else if(humanScore>=5){
        alert("you won the match")
    }
    else if(AI_score>=5){
        alert("the AI won the match")
    }

    AI_score =0
    humanScore = 0
    let ai = document.querySelector("#ai-Score")
    let hu = document.querySelector("#hu-Score")



    ai.textContent = AI_score
    hu.textContent = humanScore
}

async function update(){



    
    let ai = document.querySelector("#ai-Score")
    let hu = document.querySelector("#hu-Score")

    ai.textContent =  AI_score
    hu.textContent = humanScore

    await new Promise(resolve => setTimeout(resolve, 69));

    if(AI_score>=5 || humanScore>=5) reset()
    

   


}
function convert() {
    var input = document.body.innerHTML;
    var output = emojione.unicodeToImage(input);
    document.body.innerHTML = output;
  }





function repeted(){
    return humanChoice == prev
}

convert();


