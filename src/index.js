import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./HeaderComponent";
import RowComponent from "./RowComponent";

var dataOUT = {
    nameServiceDays: ["Lunes", "Martes", "Miercoles"],
    turnsOfDay: [" ","Desayuno", "Comida"],
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
                        members: ["xd"],
                    },
                    {
                        id: 1,
                        food: "Guarnición",
                        members: ["A"],
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
                        members: ["xd"],
                    },
                    {
                        id: 1,
                        food: "Guarnición",
                        members: ["A"],
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
                ],
                turn: "Comida",
            },
        ],
    },
];

//
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <table >
        <thead>
            <tr>
                <HeaderComp datos={dataOUT.turnsOfDay} />
            </tr>
        </thead> 
        <tbody>
        <RowComponent data = {dataIN.find(item => item.day === "Lunes")} />
        <RowComponent data = {dataIN.find(item => item.day === "Martes")} />
        </tbody>
    </table>
    </div>
);