import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from "@coreui/react";
import Notification from "../../../helpers/Notifications.jsx";
import CheckCreateCadetModal from "../Modals/CheckCreateCadetModal.jsx";

const RegisterCadetCard = ({ cadets, setCadets }) => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [formValues, setFormValues] = useState({
    identifier: "",
    gender: "",
    birthDate: "",
    rank: "",
    maritalStatus: "",
  });

  const openCheckModal = () => {
    setVisibleCreate(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClear = () => {
    setFormValues({
      identifier: "",
      gender: "",
      birthDate: "",
      rank: "",
      maritalStatus: "",
    });
  };

  return (
    <CCard>
      <CCardHeader>
        <CCardTitle className="pt-2">Agregar Cadete</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CForm>
          <CRow>
            <CCol xs={12} md={4}>
              <CFormLabel>Identificador</CFormLabel>
              <CFormInput
                type="text"
                name="identifier"
                value={formValues.identifier}
                onChange={handleInputChange}
              />
            </CCol>
            <CCol xs={12} md={4}>
              <CFormLabel>Genero</CFormLabel>
              <CFormSelect
                aria-label="gender"
                name="gender"
                value={formValues.gender}
                onChange={handleInputChange}
              >
                <option>Elige un genero</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otros</option>
              </CFormSelect>
            </CCol>
            <CCol xs={12} md={4}>
              <CFormLabel>Fecha de nacimiento</CFormLabel>
              <CFormInput
                type="date"
                name="birthDate"
                value={formValues.birthDate}
                onChange={handleInputChange}
              />
            </CCol>
          </CRow>
          <CRow className="pt-4">
            <CCol xs={12} md={4}>
              <CFormLabel>Rango</CFormLabel>
              <CFormSelect
                aria-label="Rank"
                name="rank"
                onChange={handleInputChange}
              >
                <option>Elige un rango</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </CFormSelect>
            </CCol>
            <CCol xs={12} md={4}>
              <CFormLabel>Estado civil</CFormLabel>
              <CFormSelect
                aria-label="maritalStatus"
                name="maritalStatus"
                onChange={handleInputChange}
              >
                <option>Elige un estado civil</option>
                <option value="Soltero">Soltero</option>
                <option value="Casado">Casado</option>
                <option value="Viudo">Viudo</option>
              </CFormSelect>
            </CCol>
          </CRow>
          <CRow className="pt-4 ">
            <CCol className="d-flex justify-content-end gap-4">
              <CButton
                variant="outline"
                color="primary"
                className="mr-2"
                onClick={() => openCheckModal()}
              >
                Crear usuario
              </CButton>
              <CButton
                variant="outline"
                color="secondary"
                className="mr-2"
                onClick={() => handleClear()}
              >
                Limpiar campos
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
      <CheckCreateCadetModal
        formValues={formValues}
        visibleCreate={visibleCreate}
        setVisibleCreate={setVisibleCreate}
        setNotify={setNotify}
        setCadets={setCadets}
        cadets={cadets}
      />
      <Notification notify={notify} setNotify={setNotify} position={"top"} />
    </CCard>
  );
};

export default RegisterCadetCard;
