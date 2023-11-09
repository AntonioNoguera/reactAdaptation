import React from "react";

var firstStrike=true;
var day="Default"; 
var globalColor=1; 

function TurnRow(props,turno,rowClass){
  var rows = []; 
  console.log(turno);

  const handleSVGClick = (id) => {
    // Aquí puedes mostrar una alerta o realizar cualquier acción que desees
    alert(`${id}`);
  };
  console.log(props.data.day);
  props.data.food_time.forEach((item, index) => {  
    const svgPath = (
      <svg height="24" viewBox="0 -960 960 960" width="24" className="custom-span">
        <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
      </svg>
    );

    if (firstStrike) {
      rows.push(<td className={`dayLabel p-2 align-middle columnDay${globalColor}`} rowSpan={item.turnEspecification.length}>{day}</td>);
      rows.push( 
          <td className={`align-middle ${rowClass}`}>{
            item.turnEspecification.find(item => item.food === turno).members.map(member => (
              <span>{member.name}</span>
            ))
          }
            <span id={`${index},${index}`} className={`botonVolver`} onClick={() => handleSVGClick(`${props.data.day}-${turno}-${index}`)}>{svgPath}</span>
          </td> 
      );
      
      globalColor++;
      firstStrike = false;
    }else{
      rows.push(<td className={`align-middle ${rowClass}`}>{
        item.turnEspecification.find(item => item.food === turno).members.map(member => (
          <span>{member.name}</span>
        ))
      }
        <span id={`${index},${index}`} className={`botonVolver`} onClick={() => handleSVGClick(`${props.data.day}-${turno}-${index}`)}>{svgPath}</span>
      </td>);
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
  day = props.data.day;
  var x = props.data.food_time[0].turnEspecification;
  for(var i=0;i<x.length;i++){ 

    var f = i % 2 === 0 ? "tbGray" : "normal";

    if(i===x.length-1){ 
      f+=" lastRow";
    }

    lines.push(TurnRow(props,props.data.food_time[0].turnEspecification[i].food,f));
  } 
  firstStrike=true; 

  return(<>
  {lines.map((elemento, index) => (
        <>{elemento}</>
      ))}
  </>);
}

export default RowComponent;