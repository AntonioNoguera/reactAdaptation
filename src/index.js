import React from "react";
import ReactDOM from 'react-dom/client'; // Importa ReactDOM de la manera estándar
import HeaderComp from "./HeaderComponent";
import RowComponent from "./RowComponent";

var dataOUT = {
  booleanTemp: true,
  nameServiceDays: ["Lunes", "Martes"],
  turnFormat: [
    {
      id: 4,
      name: "Postre",
      recurrence: 2,
    },
    {
      id: 5,
      name: "Guranición",
      recurrence: 2,
    },
  ],
  //NO OLVIDAR AÑADIR ESTE ESPACIO VACIO, PUEDE SER EN EL COMPO, O EN EL ARRAY, NO OLVIDAR
  turnsOfDay: ["","Desayuno", "Comida"],
};

var dataIN = [
    {
        "turnoSemanal": [
            {
                "id": 1,
                "day": "Lunes",
                "food_time": [
                    {
                        "turnEspecification": [
                            {
                                "id": 1,
                                "food": "Postre",
                                "members": [
                                    {
                                        "name": "Tacos e" 
                                    },
                                    {
                                        "name": "Tacos e" 
                                    }
                                ]
                            },
                            {
                                "id": 1,
                                "food": "Guranición",
                                "members": [
                                    {
                                        "name": "Tacos e" 
                                    },
                                    {
                                        "name": "Tacos e" 
                                    }
                                ]
                            }
                        ],
                        "turn": "Desayuno"
                    },
                    {
                        "turnEspecification": [
                            {
                                "id": 1,
                                "food": "Postre",
                                "members": [
                                    {
                                        "name": "Tacos e" 
                                    },
                                    {
                                        "name": "Tacos e" 
                                    }
                                ]
                            },
                            {
                                "id": 1,
                                "food": "Guranición",
                                "members": [
                                    {
                                        "name": "Tacos e" 
                                    },
                                    {
                                        "name": "Tacos e" 
                                    }
                                ]
                            }
                        ],
                        "turn": "Comida"
                    }
                ]
            },
            {
                "id": 1,
                "day": "Martes",
                "food_time": [
                    {
                        "turnEspecification": [
                            {
                                "id": 1,
                                "food": "Postre",
                                "members": [
                                    {
                                        "name": "Tacos e" 
                                    },
                                    {
                                        "name": "Tacos e" 
                                    }
                                ]
                            },
                            {
                                "id": 1,
                                "food": "Guranición",
                                "members": [
                                    {
                                        "name": "Tacos e"
                                    },
                                    {
                                        "name": "Tacos e" 
                                    }
                                ]
                            }
                        ],
                        "turn": "Desayuno"
                    },
                    {
                        "turnEspecification": [
                            {
                                "id": 1,
                                "food": "Postre",
                                "members": [
                                    {
                                        "name": "Tacos e" 
                                    },
                                    {
                                        "name": "Tacos e" 
                                    }
                                ]
                            },
                            {
                                "id": 1,
                                "food": "Guranición",
                                "members": [
                                    {
                                        "name": "Tacos e", 
                                    },
                                    {
                                        "name": "Tacos e", 
                                    }
                                ]
                            }
                        ],
                        "turn": "Comida"
                    }
                ]
            }
        ], 
        "periodo_Semanal": "2023-11-09",
        "calificacion_Prom": 12.21,
        "week_ID":1
    }
];

var actualWeekId;

const root = ReactDOM.createRoot(document.getElementById("root"));

var turnoSemanalSel; 

function preStartFunction(actualW=1){ 
    actualWeekId=actualW;
    const foundObject = dataIN.find(item => item.week_ID === actualWeekId);

    if (foundObject) { 
    turnoSemanalSel = foundObject.turnoSemanal;
    console.log(turnoSemanalSel); 
    document.getElementById("weekLapse").innerHTML=foundObject.periodo_Semanal;
    document.getElementById("weekGrade").innerHTML=foundObject.calificacion_Prom;
    document.getElementById("semanaNumber").innerHTML=foundObject.week_ID;
    } else {
    console.log('No se encontró un objeto con ecl week_ID deseado.');
    }

    console.log("Strikes First");
}

preStartFunction();

root.render( 
<>
        <table className="table">
            <thead className="estilo">
                <tr className="estilo">
                    <HeaderComp datos={dataOUT.turnsOfDay} />
                </tr>
            </thead>
            <tbody>

                {turnoSemanalSel.map((day) => (
                    <RowComponent data={day} />
                ))}
            </tbody>
        </table>
    </>
);