import React from "react"
import { FaHandPointLeft } from "react-icons/fa";
import "./Score.css"
import { Link } from "react-router-dom"
import AnimatedExample from "./ProgressBars"
// import { ProgressBar } from "react-bootstrap"

export default function ScorePage(){
  return <div>
    <h1 className="ScoreH1">Score:</h1>
    <p className="numberScore">4/5</p>
    <div className="ProgressBarContainer"><AnimatedExample/></div>
    
    <Link to="/game" className="PlayAgainBtn">Play again <FaHandPointLeft /></Link>
    <Link to="/" className="HomeBtn">Home <FaHandPointLeft /></Link>
    </div>
}