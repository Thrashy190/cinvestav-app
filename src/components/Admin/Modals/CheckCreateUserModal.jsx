import React, { useState } from "react";
import {
  CButton,
  CFormCheck,
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
  users,
  setUsers,
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
        <div className="text-lg font-semibold">Identificador del usuario: </div>
        <p>{formValues.identifier}</p>
        <div className="text-lg font-semibold">Rol del usuario: </div>
        <p>{formValues.role}</p>
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
