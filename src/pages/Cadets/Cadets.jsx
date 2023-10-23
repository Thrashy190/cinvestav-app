import { CContainer } from "@coreui/react";
import CadetListCard from "../../components/Users/Cards/CadetListCard.jsx";
import RegisterCadetCard from "../../components/Users/Cards/RegisterCadetCard.jsx";
import React from "react";
import { useAuth } from "../../context/AuthProvider.jsx";

const Cadets = () => {
  const { currentUser } = useAuth();
  return (
    <CContainer>
      {currentUser && currentUser.role !== "Lector" && <RegisterCadetCard />}
      <CadetListCard />
    </CContainer>
  );
};

export default Cadets;
