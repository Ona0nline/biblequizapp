import React from "react"
import { Link } from "react-router-dom";
import { FaHandPointer } from "react-icons/fa";
import "./BibleHome.css"
// import RightPoint from "./RightPoint"

export default function BibleHome(){
  return (<div>
    <h1>HolyQ</h1>
    <h3>Test your Bible knowledge with fun, fast-paced quizzes that bring Scripture to life!</h3>
    <Link to="/game" className="gameBtn" >
        To Game <FaHandPointer />
      </Link>
    {/* <button>Sign up</button>
    <button>Login</button> */}

  </div>)
}