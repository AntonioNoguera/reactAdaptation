import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./HeaderComponent";
import RowComponent from "./RowComponent";

var dataOUT = {
    nameServiceDays: ["Lunes", "Martes", "Miercoles"],
    turnsOfDay: [" ", "Desayuno", "Comida"],
    turnFormat: [
        {
            id: 4,
            name: "Postre",
            recurrence: "0",
        },
        {
            id: 5,
            name: "Testing",
            recurrence: "2",
        },
        {
            id: 6,
            name: "Guarnición B",
            recurrence: "1",
        },
    ],
    booleanTemp: true,
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
        "meanGrade": 100.21,
        "periodo_Semanal": "2023-11-09",
        "calificacion_Prom": 12.21
    }
];

const root = ReactDOM.createRoot(document.getElementById("root"));

function settingValues(){
    document.getElementById().innerHTML=;
}


root.render( 
        <>
            <table className="table">
                <thead className="estilo">
                    <tr className="estilo">
                        <HeaderComp datos={dataOUT.turnsOfDay} />
                    </tr>
                </thead>
                <tbody>

                    {dataIN.map((day) => (
                        <RowComponent data={day} />
                    ))} 
                </tbody>
            </table>
        </> 
);