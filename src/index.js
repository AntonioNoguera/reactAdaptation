import React from "react";
import ReactDOM from 'react-dom/client'; // Importa ReactDOM de la manera estándar
import HeaderComp from "./HeaderComponent";
import RowComponent from "./RowComponent";

console.log("test");
window.preStartFunction = preStartFunction;
window.testingApi = testingApi;
window.clearAll = clearAll;
window.calligAPI = calligAPI;
window.clearBack = clearBack;

const paleta = ["#ff6666", "#ffbd55", "#EDE532", "#9de24f", "#A632ED", "#A0C4FF", "#725fe2", "#FFC6FF", "#FFFFFC"]
var membersAbove = new Map();

//INDEX CODE
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
    turnsOfDay: [" ", "Desayuno", "Comida"],
};
console.log("dataOUTf",dataOUT);


var dataIN = [
    {
        "turnoSemanal": [
            {
                "id": 0,
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
        "week_ID": 1
    }
];
console.log("dataINf",dataIN);
function testingApi() {
    const apiUrl = 'http://localhost:8000/Automatization';

    fetch(apiUrl)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Error al obtener los datos de la API');
            }
        })
        .then(data => {
            //Funcionando
            console.log(data)
            const mainTags = ["Desayuno", "Comida", "Cena"]

            //Dish Distribution 
            const contenedor = document.getElementById('typesTagBar');
            for (var i = 0; i < data.dish_Distribution.length; i++) {
                var tagIte = data.dish_Distribution[i];

                if (!mainTags.includes(tagIte.name)) { membersAbove.set(tagIte.id, tagIte.name) }
                //TAGS
                const nuevoTag = document.createElement('div');
                nuevoTag.className = 'col';

                const tag = document.createElement('span');
                tag.className = "color-cuadro";
                tag.style.backgroundColor = paleta[i];

                nuevoTag.appendChild(tag);

                const tagText = Math.round(tagIte.members * 100.0) / 100.0 + "% " + tagIte.name;

                nuevoTag.appendChild(document.createTextNode(tagText));

                contenedor.appendChild(nuevoTag);

                //BARS
                //Father
                const navBar = document.getElementById("dishTypeBar");

                const newBarH = document.createElement('div');
                newBarH.className = 'progress';
                newBarH.style.width = tagIte.members + "%";


                //Son
                const newBarM = document.createElement('div');
                newBarM.className = "progress-bar progress-bar-striped progress-bar-animated";
                newBarM.style.backgroundColor = paleta[i];

                newBarH.appendChild(newBarM);
                navBar.appendChild(newBarH);
            }
            console.log(membersAbove);

            //Temperature Distribution
            const tempFrioValue = data.temperature_Distribution.find(item => item.name === "Frío").members;
            const tempCaliValue = data.temperature_Distribution.find(item => item.name === "Caliente").members;
            const temIrrelValue = data.temperature_Distribution.find(item => item.name === "Irrelevante").members;

            document.getElementById("progBarTempFri").style.width = tempFrioValue + "%";
            document.getElementById("progBarTempIrr").style.width = temIrrelValue + "%";
            document.getElementById("progBarTempCal").style.width = tempCaliValue + "%";

            document.getElementById("tagFri").innerHTML = Math.round(tempFrioValue*10)/10;
            document.getElementById("tagIrr").innerHTML = Math.round(temIrrelValue*10)/10;
            document.getElementById("tagCal").innerHTML = Math.round(tempCaliValue*10)/10;

            //Assamble distribution 
            const assamFalseValue = data.assamble_Distribution.find(item => item.id === 0).members;
            const assamTrueValue = data.assamble_Distribution.find(item => item.id === 1).members;

            document.getElementById("progBarAssTrue").style.width = assamTrueValue + "%";
            document.getElementById("progBarAssFalse").style.width = assamFalseValue + "%";

            document.getElementById("tagAssamTrue").innerHTML = Math.round(assamTrueValue*100)/100;
            document.getElementById("tagAssamFalse").innerHTML = Math.round(assamFalseValue*100)/100;
        })
        .catch(error => {
            console.log("TESTING ERROR");
        });

}

function clearAll() {
    document.getElementById("dServicio").value = "";
    document.getElementById("tDia").value = "";
    document.getElementById("dPlatillo").value = "";
    document.getElementsByName("temp")[0].checked = true;
}

function clearBack(){
    document.getElementById("title").innerHTML = "Crea tu menú";
    document.getElementById("capturing").style.display = "block";
    document.getElementById("displaying").style.display = "none";
    
}

function calligAPI() {
    var dias = document.getElementById("dServicio").value.split(/\s*,\s*/);
    var turnos = document.getElementById("tDia").value.split(/\s*,\s*/);
    var distribucion = document.getElementById("dPlatillo").value.split(/\s*,\s*/);
    var temp = document.getElementsByName("temp")[0].checked; 
    var objectMembers = [];

    var i = 0; 
    membersAbove.forEach((valor, clave) => {
        var jsonObj = {};
        jsonObj["id"] = clave;
        jsonObj["name"] = valor;
        jsonObj["recurrence"] = distribucion[i];
        objectMembers.push(jsonObj);
        i++;
    });
    var jsonObj = {};
        jsonObj["id"] = 0;
        jsonObj["name"] = "mainDish";
        jsonObj["recurrence"] = distribucion[i];
        objectMembers.push(jsonObj);
        i++;
    

    console.log(objectMembers);

    temp = temp ? true : false;

    console.log(dias, " - ", turnos, " - ", distribucion, " - ", temp);

    var postJson = {
        nameServiceDays: dias,
        turnsOfDay: turnos,
        turnFormat: objectMembers,
        booleanTemp: temp
    }
    //

    post(postJson);
    dataOUT = postJson;
    console.log("dataOUTn",postJson)

    //settingOFFspan
    document.getElementById("title").innerHTML = "Verifica Tu Menú";
    document.getElementById("capturing").style.display = "none";
    document.getElementById("displaying").style.display = "flex";
}

function post(data) {
    const url = 'http://localhost:8000/Automatization'; // Reemplaza con la URL de tu API

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Ajusta el tipo de contenido según tus necesidades
        },
        body: JSON.stringify(data) // Convierte el objeto a JSON
    })
        .then(response => response.json()) // Si esperas una respuesta JSON
        .then(data => {
            //dataIN = data;
            dataIN = data;
            console.log("dataINn",data); // Maneja la respuesta aquí
            preStartFunction();
        })
        .catch(error => {
            console.error('Error:', error);
        });

}

testingApi();

var actualWeekId;

const root = ReactDOM.createRoot(document.getElementById("root"));

var turnoSemanalSel;

function preStartFunction(actualW = 1) {
    console.log(dataIN);
    console.log(dataOUT);

    actualWeekId = actualW;
    const foundObject = dataIN.find(item => item.week_ID === actualWeekId);

    if (foundObject) {
        turnoSemanalSel = foundObject.turnoSemanal;
        console.log(turnoSemanalSel);
        document.getElementById("weekLapse").innerHTML = foundObject.periodo_Semanal; 
        document.getElementById("weekGrade").innerHTML = Math.round(foundObject.calificacion_Prom*100)/100;
        document.getElementById("semanaNumber").innerHTML = foundObject.week_ID;
    } else {
        console.log('No se encontró un objeto con ecl week_ID deseado.');
    }

    root.render(
        <>
            <table className="table">
                <thead className="estilo">
                    <tr className="estilo">
                        <th> </th>
                        <HeaderComp datos={dataOUT.turnsOfDay} />
                    </tr>
                </thead>
                <tbody>

                    {turnoSemanalSel.map((day, index) => (
                        <RowComponent data={day} index={index+1} />
                    ))}
                </tbody> 
                
            </table>
        </>
    );
}

