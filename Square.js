
const Square = (props) =>
{

  const clickHandler = () =>
  {    
   props.setPick(props.squareName);
  }
 return(
     <div className = "h-32 w-32 bg bg-blue-300" onClick = {clickHandler}>
       <text>{props.squareText}</text>
     </div>
 );
}

export default Square;