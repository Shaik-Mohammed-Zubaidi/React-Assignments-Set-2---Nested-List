import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow"
          },
          {
            name: "Dewas"
          }
        ]
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit"
          },
          {
            name: "Berasia"
          }
        ]
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur"
          }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad"
          },
          {
            name: "Hirapur"
          }
        ]
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's"
          },
          {
            name: "Faizal khan's"
          }
        ]
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's"
          },
          {
            name: "Guddu bhaiya's"
          }
        ]
      }
    ]
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin"
          },
          {
            name: "Jalah"
          }
        ]
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati"
          },
          {
            name: "Leopard found in IIT Guwahati"
          }
        ]
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh"
          },
          {
            name: "Silchar"
          }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur"
          },
          {
            name: "Maner"
          }
        ]
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur"
          },
          {
            name: "Barachatti"
          }
        ]
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara"
          },
          {
            name: "Jale"
          }
        ]
      }
    ]
  }
];

function App() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const getCities = (stateRcd) => {
    let cities = [];
    states.forEach((state) => {
      if (state.name === stateRcd) {
        cities = state.cities;
      }
    });
    return cities;
  };
  const getTowns = (cityRcd) => {
    let cities = getCities(selectedState);
    let towns = [];
    cities.forEach((city) => {
      if (city.name === cityRcd) {
        towns = city.towns;
      }
    });
    return towns;
  };
  return (
    <div id="main">
      <ol>
        {states.map((state, index) => (
          <li
            key={state.name}
            id={`state${index + 1}`}
            onClick={(event) => setSelectedState(event.target.innerText)}
          >
            {state.name}
            {state.name === selectedState && (
              <ol>
                {getCities(state.name).map((city, index) => (
                  <li
                    key={city.name}
                    id={`city${index + 1}`}
                    onClick={(event) => {
                      setSelectedCity(event.target.innerText);
                      event.stopPropagation();
                    }}
                  >
                    {city.name}
                    {city.name === selectedCity && (
                      <ol>
                        {getTowns(city.name).map((town, index) => (
                          <li key={town.name} id={`town${index + 1}`}>
                            {town.name}
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
