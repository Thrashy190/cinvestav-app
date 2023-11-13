import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";
import { unix_to_date } from "../../../utils/dateFormatter.js";

const CadetListCard = ({ cadets, setCadets }) => {
  const navigate = useNavigate();

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

  const handleCadetData = (id) => {
    navigate(`/dashboard/cadets/${id}`);
  };

  return (
    <CCard className="mt-4">
      <CCardHeader>
        <CCardTitle className="pt-2">Lista de Cadetes</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CTable striped responsive hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Identificador</CTableHeaderCell>
              <CTableHeaderCell>Genero</CTableHeaderCell>
              <CTableHeaderCell>Estado civil</CTableHeaderCell>
              <CTableHeaderCell>Rango</CTableHeaderCell>
              <CTableHeaderCell>Fecha de nacimiento</CTableHeaderCell>
              <CTableHeaderCell></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {cadets.map((cadet) => (
              <CTableRow key={cadet.identifier} className="cursor-pointer">
                <td>{cadet.identifier}</td>
                <td>{cadet.gender}</td>
                <td>{cadet.maritalStatus}</td>
                <td>{cadet.rank}</td>
                <td>{cadet.birthDate}</td>
                <td>
                  <CButton
                    color="primary"
                    variant="outline"
                    onClick={() => handleCadetData(cadet.identifier)}
                  >
                    Ver datos
                  </CButton>
                </td>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default CadetListCard;
