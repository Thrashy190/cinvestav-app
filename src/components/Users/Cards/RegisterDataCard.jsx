import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CForm,
  CRow,
} from "@coreui/react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const RegisterDataCard = ({ cadetId, setCadetId, cadet, setCadet }) => {
  const [cadets, setCadets] = useState([]);

  useEffect(() => {
    fetchCadets();
  }, []);

  const fetchCadets = async () => {
    const response = await fetch("http://localhost:3000/cadets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    setCadets(data);
  };

  const fetchCadetData = async (id) => {
    const response = await fetch(`http://localhost:3000/cadets/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    setCadet(data.cadet);
  };

  return (
    <CCard className="mt-4">
      <CCardHeader>
        <CCardTitle className="pt-2">
          Agregar Archivos/evidencia del cadete
        </CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CForm>
          <CRow>
            <CCol xs={12} md={12} className="flex justify-between">
              <div className="flex flex-row">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={cadets}
                  inputValue={cadetId}
                  onInputChange={(event, newInputValue) => {
                    setCadetId(newInputValue);
                  }}
                  getOptionLabel={(option) => option.identifier}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Identificador" />
                  )}
                />
                <CButton
                  variant="outline"
                  color="primary"
                  className=" ml-2 px-10"
                  onClick={() => {
                    fetchCadetData(cadetId);
                  }}
                >
                  Buscar
                </CButton>
                <CButton
                  variant="outline"
                  color="primary"
                  className=" ml-2 px-10"
                  onClick={() => {
                    setCadet(null);
                  }}
                >
                  Limpiar campo
                </CButton>
              </div>
            </CCol>

            {cadet && (
              <div className="mt-10">
                <CRow>
                  <CCol xs={12} md={4}>
                    <h3 className="text-lg font-semibold">
                      Identificador del cadete:
                    </h3>
                    <div className="text-base">{cadet.identifier}</div>
                  </CCol>
                  <CCol xs={12} md={4}>
                    <h3 className="text-lg font-semibold">Estado civil: </h3>
                    <div className="text-base">{cadet.maritalStatus}</div>
                  </CCol>
                  <CCol xs={12} md={4}>
                    <h3 className="text-lg font-semibold">Genero: </h3>
                    <div className="text-base">{cadet.gender}</div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={12} md={4}>
                    <h3 className="text-lg font-semibold">
                      Rango del cadete:{" "}
                    </h3>
                    <div className="text-base">{cadet.rank}</div>
                  </CCol>
                  <CCol xs={12} md={4}>
                    <h3 className="text-lg font-semibold">Edad del cadete: </h3>
                    <div className="text-base">{cadet.birthDate}</div>
                  </CCol>
                  <CCol xs={12} md={4}>
                    <h3 className="text-lg font-semibold">
                      Fecha de creacion:{" "}
                    </h3>
                    <div className="text-base">{cadet.createdAt}</div>
                  </CCol>
                </CRow>
              </div>
            )}
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default RegisterDataCard;
