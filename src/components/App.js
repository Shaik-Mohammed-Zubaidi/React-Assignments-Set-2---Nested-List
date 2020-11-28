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

  const getCities = () => {
    let cities = [];
    states.forEach((state) => {
      if (state.name === selectedState) {
        cities = state.cities;
      }
    });
    return cities;
  };
  const getTowns = () => {
    let cities = getCities();
    let towns = [];
    cities.forEach((city) => {
      if (city.name === selectedCity) {
        towns = city.towns;
      }
    });
    return towns;
  };
  return (
    <div id="main">
      <h1>States</h1>
      {states.map((state, index) => (
        <button
          key={state.name}
          id={`state${index + 1}`}
          onClick={(event) => {
            if (selectedState === event.target.innerText) {
              setSelectedState("");
              setSelectedCity("");
              return;
            }
            setSelectedState(event.target.innerText);
          }}
        >
          {state.name}
        </button>
      ))}
      <h2>Cities</h2>
      {getCities().map((city, index) => (
        <button
          key={city.name}
          id={`city${index + 1}`}
          onClick={(event) => {
            if (selectedCity === event.target.innerText) {
              setSelectedCity("");
              return;
            }
            setSelectedCity(event.target.innerText);
          }}
        >
          {city.name}
        </button>
      ))}
      <h2>Towns</h2>
      {getTowns().map((town, index) => (
        <button key={town.name} id={`town${index + 1}`}>
          {town.name}
        </button>
      ))}
    </div>
  );
}

export default App;
