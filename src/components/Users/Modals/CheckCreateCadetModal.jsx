import React, { useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const CheckCreateCadetModal = ({
  visibleCreate,
  setVisibleCreate,
  formValues,
  setNotify,
  cadets,
  setCadets,
}) => {
  async function createCadet() {
    try {
      const result = await fetch("http://127.0.0.1:3000/cadets/cadet", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json());

      if (result.error) {
        setNotify({
          isOpen: true,
          message: result.error,
          type: "error",
        });
        return;
      }
      setCadets([formValues, ...cadets]);
      setNotify({
        isOpen: true,
        message: "Cadete creado correctamente",
        type: "success",
      });
      setVisibleCreate(false);
    } catch (error) {
      setNotify({
        isOpen: true,
        message: "Error al crear cadete o cadete ya existente",
        type: "error",
      });
      setVisibleCreate(false);
    }
  }

  return (
    <CModal
      alignment="center"
      visible={visibleCreate}
      onClose={() => setVisibleCreate(false)}
    >
      <CModalHeader onClose={() => setVisibleCreate(false)}>
        <CModalTitle>Confirmar información</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <div className="text-lg font-semibold">Identificador del cadete: </div>
        <p>{formValues.identifier}</p>
        <div className="text-lg font-semibold">Genero del cadete: </div>
        <p>{formValues.gender}</p>
        <div className="text-lg font-semibold">Estado civil: </div>
        <p>{formValues.maritalStatus}</p>
        <div className="text-lg font-semibold">Rango del cadete: </div>
        <p>{formValues.rank}</p>
        <div className="text-lg font-semibold">
          Fecha de nacimiento del cadete:{" "}
        </div>
        <p>{formValues.birthDate}</p>
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          variant="outline"
          onClick={() => setVisibleCreate(false)}
        >
          Cerrar
        </CButton>
        <CButton color="primary" variant="outline" onClick={createCadet}>
          Crear Cadete
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default CheckCreateCadetModal;
