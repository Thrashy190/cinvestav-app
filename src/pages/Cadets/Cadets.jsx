import { useState } from "react";
import { CContainer } from "@coreui/react";
import CadetListCard from "../../components/Users/Cards/CadetListCard.jsx";
import RegisterCadetCard from "../../components/Users/Cards/RegisterCadetCard.jsx";
import React from "react";
import { useAuth } from "../../context/AuthProvider.jsx";

const Cadets = () => {
  const { currentUser } = useAuth();
  const [cadets, setCadets] = useState([]);

  return (
    <CContainer>
      {currentUser && currentUser.role !== "Lector" && (
        <RegisterCadetCard cadets={cadets} setCadets={setCadets} />
      )}
      <CadetListCard cadets={cadets} setCadets={setCadets} />
    </CContainer>
  );
};

export default Cadets;
