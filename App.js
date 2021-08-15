import {useState,useEffect}from "react";
import Square from "./components/Square"

const App = () => {

  const rpcArray = ["rock","paper","scissors"]
  
  const [pick,setPick] = useState("");

  const [computerPick,setCompPick] = useState("");

  const [winner,setWinner] = useState("Who");

  useEffect (() => {

    //console.log(pick+" Player Pick")
    if(pick !== ""){
      const comPick = rpcArray[Math.floor(Math.random() * 3)]
      //console.log(comPick + " computer Pick")
      setCompPick(comPick);
      if(pick === comPick){
        setWinner("Nobody");
      }
      else if(pick === "rock"){
        if(comPick === "paper")
        {
          setWinner("The Computer");
        }
        else if(comPick === "scissors"){
          setWinner("You");
        }
      }
      else if(pick === "paper"){
        if(comPick === "scissors")
        {
          setWinner("The Computer");
        }
        else if(comPick === "rock"){
          setWinner("You");
        }
      }
      else if(pick === "scissors"){
        if(comPick === "rock")
        {
          setWinner("The Computer");
        }
        else if(comPick === "paper"){
          setWinner("You");
        }
      }
    }

  },[pick])
  
  return (
    <div className="w-full h-screen flex flex-row justify-center">
      <div className="flex flex-col justify-center ">
        <div className = "grid grid-cols-3 gap-3">
         
          <Square setPick = {setPick} squareName = {rpcArray[0]} squareText = {rpcArray[0]}/>
      
          <Square setPick = {setPick} squareName = {rpcArray[1]} squareText = {rpcArray[1]}/>
          
          <Square setPick = {setPick} squareName = {rpcArray[2]} squareText = {rpcArray[2]}/>
        </div>
        <div> Your pick was {pick} and the computer picked {computerPick} </div>
        <div> {winner} won this Game!</div>
      </div>
    </div>
  );
};

export default App;
