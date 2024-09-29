import React, {useState} from "react"
// import axios from "axios"
import { Link } from "react-router-dom";
import { FaHandPointer } from "react-icons/fa";
import "./GamePage.css"

import { MdTimer } from "react-icons/md";
import { VscDebugStart } from "react-icons/vsc";
import { TbHexagonLetterAFilled } from "react-icons/tb";
import { TbHexagonLetterBFilled } from "react-icons/tb";
import { TbHexagonLetterCFilled } from "react-icons/tb";
import { TbHexagonLetterDFilled } from "react-icons/tb";

// import Loader from "./Loader";

export default function GamePage(){

  const[quizVisibility,setQuizVisibility] = useState(false)
  const[displayAnswer,setDisplayAnswer] = useState(false)
  const[questions,setQuestions] = useState([])
  // const[correctChoice,setCorrectChoice] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 

  function QuizPopUp() {

    
  const prompt = `Generate bible trivia questions in order of difficulty from easy to medium to hard. Return the response in a structured JSON format, where each question includes the question text, an array of choices (a, b, c, d), and the correct answer.`;
  const context = `You are a bible trivia expert. You provide cycles of 7 questions. Three easy questions, 2 medium questions, and 2 hard questions. You have a good mix of Old and New Testament questions.`;
  const apiKey = `444t95o4afedabca0957fcb3605bfd54`;
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  setQuizVisibility(!quizVisibility);
  
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // PArsing. Turning the JSON string response into a javascript object
    })
    .then((data) => {
      handleResponse(data); // Pass the Javascript object to handleResponse
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error.message);
    });
}

// Updated handleResponse function
const handleResponse = (data) => {
  try {
    // Assuming the API response directly has the JSON string in a property like 'answer'
    const rawResponseText = data.answer;

    // Use regex to strip the code block (```json\n and \n```)
    const cleanJsonString = rawResponseText.replace(/```json\n|```/g, '');

    // Now try to parse the cleaned-up JSON string
    const parsedResponse = JSON.parse(cleanJsonString);

    // Check if 'trivia' exists in the parsed response
    if (parsedResponse.trivia) {
      console.log("Parsed trivia questions: ", parsedResponse.trivia);
      setQuestions(parsedResponse.trivia)
      setCurrentQuestionIndex(0)
      // setCorrectChoice(parsedResponse.trivia.currentQuestion.correctAnswer)
      // renderQuestions(parsedResponse.trivia); // Call your UI render function
    } else {
      throw new Error("Invalid response format: 'trivia' key is missing.");
    }
  } catch (error) {
    console.error("Error processing response:", error.message);
  }
    
};
  
    function AnswerPopUp(){
    setDisplayAnswer(!displayAnswer)

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Optionally handle the end of the quiz
      alert("You've completed all the questions!");
      setQuizVisibility(false); // Hide quiz after completion
      setQuestions([]); // Clear questions if desired
    }
    
  }

  const currentQuestion = questions[currentQuestionIndex];


  return (<div>

    
    {/* Conditional rendering always use state */}
    {quizVisibility && currentQuestion &&( <div className="container"> 
      {/* Will be replaced by an actual timer */}
      <MdTimer />
      <div className="content container">
        <h1 className="GameH1">{currentQuestion.question}</h1>
        <div className="row">
          {/* COnditional rendering */}
          {currentQuestion.choices.map((choice, index) => (
                <div className="col" key={index}>
                  <p onClick={AnswerPopUp}>
                    {/* Show hexagon icons based on the index */}
                    {index === 0 && <TbHexagonLetterAFilled className="choice1" />}
                    {index === 1 && <TbHexagonLetterBFilled className="choice2" />}
                    {index === 2 && <TbHexagonLetterCFilled className="choice3" />}
                    {index === 3 && <TbHexagonLetterDFilled className="choice4" />}
                    <br />
                    {choice} {/* Render the choice text */}
                  </p>
                </div>
              ))}
        </div>
         <div >
     
         </div>
      
      </div>
     

    </div> )}

    {/* Conditional rendering for answers */}
{displayAnswer && currentQuestion && <h4>Answer: {currentQuestion.correct_answer}</h4>}
   
    <button className="StartBtn" onClick={QuizPopUp}>START <VscDebugStart /></button> 
    
    <Link to="/score" className="ScoreBtn" >
        SCORE <FaHandPointer />
      </Link>
    
    </div>)
}