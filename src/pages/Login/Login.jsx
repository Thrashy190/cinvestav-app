import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CImage,
  CContainer,
  CRow,
  CCol,
} from "@coreui/react";
import { useAuth } from "../../context/AuthProvider.jsx";

import cinvestavLogo from "../../assets/logo_cinvestav_blanco.png";
import police from "../../assets/policia.png";
import banner from "../../assets/CARRETE_FONCYT_C22.jpg";

const Login = () => {
  const [userData, setUserData] = useState({});

  const { login } = useAuth();

  const handleData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#EBEDEF] min-h-screen">
      <div>
        <CContainer className="flex flex-col">
          <CRow className="flex justify-center items-center h-screen">
            <CCol>
              <CCard className="w-96">
                {/*header*/}
                <div className="flex justify-center items-center bg-[#009383] h-50 py-10 gap-5">
                  <CImage src={cinvestavLogo} width={120} height={120} />
                  <CImage src={police} width={140} height={140} />
                </div>
                <CCardBody>
                  <div className="flex justify-center items-center">
                    <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
                  </div>
                  <form>
                    <div className="mb-4">
                      <TextField
                        name="identifier"
                        label="Usuario"
                        variant="outlined"
                        type="text"
                        fullWidth
                        onChange={handleData}
                      />
                    </div>
                    <div className="mb-4">
                      <TextField
                        name="password"
                        label="Contraseña"
                        variant="outlined"
                        type="password"
                        fullWidth
                        onChange={handleData}
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <CButton
                        className="w-full"
                        variant="outline"
                        color="primary"
                        onClick={() => {
                          login(userData);
                        }}
                      >
                        Entrar
                      </CButton>
                    </div>
                  </form>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol>
              <div className="mb-4">
                <span className="font-bold">Contacto: </span>
                anand.sanchez@cinvestav.edu.m
              </div>
              <div className="text-lg font-bold mb-4">
                RYMA (Robotica y Manufactura Avanzada)
              </div>
              <CImage src={banner} />
              <div className="text-2xl font-bold mt-2">Confidencial</div>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </div>
  );
};

export default Login;
