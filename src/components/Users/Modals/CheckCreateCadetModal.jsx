import React, { useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const CheckCreateUserModal = ({
  visibleCreate,
  setVisibleCreate,
  formValues,
  setNotify,
}) => {
  async function createUser() {
    try {
      const result = await fetch("http://127.0.0.1:3000/auth/signup", {
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
      setUsers([formValues, ...users]);
      setNotify({
        isOpen: true,
        message: "Usuario creado correctamente",
        type: "success",
      });
      setVisibleCreate(false);
    } catch (error) {
      setNotify({
        isOpen: true,
        message: "Error al crear usuario o usuario ya existente",
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
        <p>{formValues.genre}</p>
        <div className="text-lg font-semibold">Estado civil: </div>
        <p>{formValues.relationship}</p>
        <div className="text-lg font-semibold">Rango del cadete: </div>
        <p>{formValues.level}</p>
        <div className="text-lg font-semibold">Edad del cadete: </div>
        <p>{formValues.birth}</p>
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          variant="outline"
          onClick={() => setVisibleCreate(false)}
        >
          Cerrar
        </CButton>
        <CButton color="primary" variant="outline" onClick={createUser}>
          Crear usuario
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default CheckCreateUserModal;
