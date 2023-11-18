import { useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";
import React from "react";
import { iso_to_date } from "../../../utils/dateFormatter.js";
import { useParams } from "react-router-dom";

const CadetDataCard = () => {
  let { id } = useParams();
  const [cadet, setCadet] = React.useState({});

  useEffect(() => {
    fetchCadet();
  }, []);

  const fetchCadet = async () => {
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
        <CCardTitle className="pt-2">Informacion de cadete</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs={12} md={4}>
            <h3 className="text-lg font-semibold">Identificador del cadete:</h3>
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
            <h3 className="text-lg font-semibold">Rango del cadete: </h3>
            <div className="text-base">{cadet.rank}</div>
          </CCol>
          <CCol xs={12} md={4}>
            <h3 className="text-lg font-semibold">Edad del cadete: </h3>
            <div className="text-base">{iso_to_date(cadet.birthDate)}</div>
          </CCol>
          <CCol xs={12} md={4}>
            <h3 className="text-lg font-semibold">Fecha de creacion: </h3>
            <div className="text-base">{cadet.createdAt}</div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default CadetDataCard;
