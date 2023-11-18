import { useParams } from "react-router-dom";
import { CButton, CButtonGroup, CCol, CContainer, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import CadetDataCard from "../../components/Users/Cards/CadetDataCard.jsx";
import LinearProgress from "@mui/material/LinearProgress";
import CadetImageVideoCard from "../../components/Users/Cards/CadetImageVideoCard.jsx";
import CadetTextFileCard from "../../components/Users/Cards/CadetTextFileCard.jsx";
import processData from "../../config/process.json";
import LinePlot from "../../components/Users/Charts/LinePlot.jsx";

function generarNumerosAleatorios() {
  let numerosAleatorios = [];

  for (let i = 0; i < 100; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    numerosAleatorios.push(numeroAleatorio);
  }

  return numerosAleatorios;
}

function generarNumerosEnOrden() {
  let numerosEnOrden = [];

  for (let i = 1; i <= 100; i++) {
    numerosEnOrden.push(i);
  }

  return numerosEnOrden;
}

const Cadet = () => {
  const idCadet = useParams();
  const [type, setType] = useState("data");
  const [cadet, setCadet] = useState({
    estres: [
      {
        date: 1,
        time: generarNumerosEnOrden(),
        data: generarNumerosAleatorios(),
      },
    ],
    ritmo_cardiaco: [
      {
        name: "Ritmo cardiaco",
        date: 1,
        time: generarNumerosEnOrden(),
        data: generarNumerosAleatorios(),
      },
      {
        name: "Estres",
        date: 1,
        time: generarNumerosEnOrden(),
        data: generarNumerosAleatorios(),
      },
    ],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [processData, setProcessData] = useState([
    {
      title: "Ritmo Cardiaco y Estres",
      name: "ritmo_cardiaco",
      text: "La frecuencia cardíaca​ es el número de contracciones del corazón o de pulsaciones​ por unidad de tiempo. Se mide en condiciones bien determinadas y se expresa en pulsaciones por minuto a nivel de las arterias periféricas y en latidos por minuto a nivel del corazón.",
    },
    {
      title: "Estres",
      name: "estres",
      text: "El estrés es la respuesta física o mental a una causa externa, como tener muchas tareas o padecer una enfermedad.",
    },
  ]);

  useEffect(() => {
    // fetchCadet().then(() => {});
    setIsLoading(false);
  }, []);

  // const fetchCadet = async () => {
  //   setCadet({
  //     estres: [
  //       {
  //         date: 1,
  //         time: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  //         data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  //       },
  //     ],
  //     ritmo_cardiaco: [
  //       {
  //         date: 1,
  //         time: [10, 15, 61, 7, 12, 16, 71, 73, 8, 12, 154],
  //         data: [10, 15, 61, 7, 12, 16, 71, 73, 8, 12, 154],
  //       },
  //     ],
  //   });
  // };

  return (
    <CContainer className="pb-5">
      {isLoading ? (
        <LinearProgress />
      ) : (
        <div>
          <CadetDataCard cadet={cadet} />
          <div>
            <CRow className="py-2 pt-3">
              <CCol xs={12} md={12}>
                <CButtonGroup role="group" aria-label="Basic outlined example">
                  <CButton
                    onClick={() => {
                      setType("data");
                    }}
                    color="primary"
                    variant="outline"
                  >
                    Graficas
                  </CButton>
                  <CButton
                    onClick={() => {
                      setType("multi");
                    }}
                    color="primary"
                    variant="outline"
                  >
                    Archivos multimedia
                  </CButton>
                  <CButton
                    onClick={() => {
                      setType("text");
                    }}
                    color="primary"
                    variant="outline"
                  >
                    Archivos de text
                  </CButton>
                </CButtonGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={12} md={12}>
                {type === "data" ? (
                  <div>
                    {processData.map((process, index) => {
                      return (
                        cadet[process.name] && (
                          <LinePlot
                            key={index}
                            info={cadet[process.name]}
                            name={process.title}
                            text={process.text}
                          />
                        )
                      );
                    })}
                  </div>
                ) : type === "multi" ? (
                  <CadetImageVideoCard identifier={cadet.identifier} />
                ) : (
                  <CadetTextFileCard identifier={cadet.identifier} />
                )}
              </CCol>
            </CRow>
          </div>
        </div>
      )}
    </CContainer>
  );
};

export default Cadet;
