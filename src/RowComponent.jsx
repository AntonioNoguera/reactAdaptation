import React from "react";

var firstStrike=true;
var day="Default";
var alternator=0;

var globalColor=1;
function TurnRow(props,turno,rowClass){
  var rows = [];
  
  props.data.food_time.forEach((item, index) => { 

    if (firstStrike) {
      rows.push(<td className={`dayLabel p-2 align-middle columnDay${globalColor}`} rowSpan={item.turnEspecification.length}>{day}</td>);
      rows.push(<td className={`align-middle ${rowClass}`}>{item.turnEspecification.find(item => item.food === turno).members}</td>);
      
      globalColor++;
      firstStrike = false;
    }else{
      rows.push(<td className={`align-middle ${rowClass}`}>{item.turnEspecification.find(item => item.food === turno).members}</td>);
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

    var f = i % 2 === 0 ? "tbGray" : "normal";

    if(i===x.length-1){
      console.log("Se lanza");
      f+=" lastRow";
    }

    lines.push(TurnRow(props,props.data.food_time[0].turnEspecification[i].food,f));
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