import React, { useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const ShowMediaModal = ({ visibleCreate, setVisibleCreate, data }) => {
  return (
    <CModal
      size="xl"
      backdrop="static"
      alignment="center"
      visible={visibleCreate}
      onClose={() => setVisibleCreate(false)}
    >
      <CModalHeader onClose={() => setVisibleCreate(false)}>
        <CModalTitle>{data.name}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {data.name.includes(".mp4") ? (
          <video className="h-max w-max" src={data.path} controls />
        ) : (
          <img className="h-1/2 w-1/2" src={data.path} alt={data.name} />
        )}
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          variant="outline"
          onClick={() => setVisibleCreate(false)}
        >
          Cerrar
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ShowMediaModal;
