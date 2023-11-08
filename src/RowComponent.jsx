import React from "react";

var firstStrike=true;
var day="Default";

function TurnRow(props,turno){
  var rows = [];
  
  props.data.food_time.forEach((item, index) => { 
    if (firstStrike) {
      rows.push(<td className="dayLabel p-2" rowSpan={2}>{day}</td>);
      rows.push(<td>{item.turnEspecification.find(item => item.food === turno).members}</td>);
      firstStrike = false;
    }else{
      rows.push(<td>{item.turnEspecification.find(item => item.food === turno).members}</td>);
    }
  });
  return (
    <tr>
      {rows.map((elemento, index) => (
        <>{elemento}</>
      ))}
    </tr>
  );
}

function RowComponent(props) {
  var lines =[];
  console.log(props.data.food_time);
  day = props.data.day;
  var x = props.data.food_time[0].turnEspecification;
  for(var i=0;i<x.length;i++){
    console.log(props.data.food_time[0].turnEspecification[i].food)
    lines.push(TurnRow(props,props.data.food_time[0].turnEspecification[i].food));
  } 
  firstStrike=true;
  console.log(lines);

  return(<>
  {lines.map((elemento, index) => (
        <>{elemento}</>
      ))}
  </>);
}

export default RowComponent;