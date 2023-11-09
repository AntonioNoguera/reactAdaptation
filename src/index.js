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
        id: 1,
        day: "Lunes",
        food_time: [
            {
                turnEspecification: [
                    {
                        id: 1,
                        food: "Postre",
                        members: ["Postre A"],
                    },
                    {
                        id: 1,
                        food: "Guarnición",
                        members: ["Arroz"],
                    },
                    {
                        id: 1,
                        food: "Cena",
                        members: ["Arroz"],
                    },
                    
                ],
                turn: "Desayuno",
            },
            {
                turnEspecification: [
                    {
                        id: 1,
                        food: "Postre",
                        members: [
                            "Pay de Limón",
                            "Flan"
                        ],
                    },
                    {
                        id: 1,
                        food: "Guarnición",
                        members: [
                            "Arrocito",
                            "Frijolitos"
                        ],
                    },
                    {
                        id: 1,
                        food: "Cena",
                        members: ["Arroz"],
                    },
                ],
                turn: "Comida",
            },
        ],
    },
    {
        id: 1,
        day: "Martes",
        food_time: [
            {
                turnEspecification: [
                    {
                        id: 1,
                        food: "Postre",
                        members: ["Postre B"],
                    },
                    {
                        id: 1,
                        food: "Guarnición",
                        members: ["Guarnición A"],
                    },
                    {
                        id: 1,
                        food: "Cena",
                        members: ["Arroz"],
                    },
                ],
                turn: "Desayuno",
            },
            {
                turnEspecification: [
                    {
                        id: 1,
                        food: "Postre",
                        members: [
                            "Pay de Limón",
                            "Flan"
                        ],
                    },
                    {
                        id: 1,
                        food: "Guarnición",
                        members: [
                            "Arrocito",
                            "Frijolitos"
                        ],
                    },
                    {
                        id: 1,
                        food: "Cena",
                        members: ["Arroz"],
                    },
                ],
                turn: "Comida",
            },
        ],
    },
    {
        id: 1,
        day: "Martes",
        food_time: [
            {
                turnEspecification: [
                    {
                        id: 1,
                        food: "Postre",
                        members: ["Postre B"],
                    },
                    {
                        id: 1,
                        food: "Guarnición",
                        members: ["Guarnición A"],
                    },
                    {
                        id: 1,
                        food: "Cena",
                        members: ["Arroz"],
                    },
                ],
                turn: "Desayuno",
            },
            {
                turnEspecification: [
                    {
                        id: 1,
                        food: "Postre",
                        members: [
                            "Pay de Limón",
                            "Flan"
                        ],
                    },
                    {
                        id: 1,
                        food: "Guarnición",
                        members: [
                            "Arrocito",
                            "Frijolitos"
                        ],
                    },
                    {
                        id: 1,
                        food: "Cena",
                        members: ["Arroz"],
                    },
                ],
                turn: "Comida",
            },
        ],
    },
];

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <div className="container">
        <div className="col-12 text-center justify-content-center d-flex">
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
        </div>
    </div>
);