import React, {useState} from "react"
import { Link } from "react-router-dom";
import { FaHandPointer } from "react-icons/fa";
import "./GamePage.css"

import { MdTimer } from "react-icons/md";
import { VscDebugStart } from "react-icons/vsc";
import { TbHexagonLetterAFilled } from "react-icons/tb";
import { TbHexagonLetterBFilled } from "react-icons/tb";
import { TbHexagonLetterCFilled } from "react-icons/tb";
import { TbHexagonLetterDFilled } from "react-icons/tb";

export default function GamePage(){

  const[quizVisibility,setQuizVisibility] = useState(false)
  const[answer,setAnswer] = useState(false)

  function QuizPopUp(){
    // Changes the state of quiz visibilty upon clicking the button
    // Soon will implement timer functionality upon clicking the button
   setQuizVisibility(!quizVisibility)
  }

  function AnswerPopUp(){
    setAnswer(!answer)
  }
  return (<div>

    
    {/* Conditional rendering always use state */}
    {quizVisibility &&( <div className="container"> 
      {/* Will be replaced by an actual timer */}
      <MdTimer />
      <div className="content container">
        <h1 className="GameH1">Who built the ark?</h1>
        <div className="row">
          <div className="col">
         <p onClick={AnswerPopUp}><TbHexagonLetterAFilled className="choice1"/> <br/> Moses  </p> 
          </div>
          <div className="col">     
             <p onClick={AnswerPopUp}><TbHexagonLetterBFilled className="choice2"/> <br/> Noah </p> 
            </div>
          <div className="col">     
            <p onClick={AnswerPopUp}><TbHexagonLetterCFilled className="choice3"/> <br/> Jesus </p> 
          </div>
          <div className="col">
          <p onClick={AnswerPopUp}><TbHexagonLetterDFilled className="choice4"/> <br/> Ruth  </p> 

          </div>
        </div>
         <div >
     
         </div>
      
      </div>
     

    </div> )}

    {/* Conditional rendering for answers */}
    {answer && (
      <h4>Answer</h4>
    )}
   
    <button className="StartBtn" onClick={QuizPopUp}>START <VscDebugStart /></button> 
    
    <Link to="/score" className="ScoreBtn" >
        Score <FaHandPointer />
      </Link>
    
    </div>)
}