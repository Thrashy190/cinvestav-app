import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CContainer,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

import ShowTextFileModal from "../Modals/ShowTextFileModal.jsx";

const CadetTextFileCard = ({ identifier }) => {
  const [textFiles, setTextFiles] = useState([]);
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [data, setData] = useState({ name: "", path: "" });

  useEffect(() => {
    fetchMediaFiles().then(() => {});
  }, []);

  const fetchMediaFiles = async () => {};

  return (
    <CContainer>
      <div>
        <CCard className="mt-4">
          <CCardHeader>
            <CCardTitle className="pt-2">Lista de notas</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CTable striped responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Nombre del archivo</CTableHeaderCell>
                  <CTableHeaderCell></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {textFiles.map((mediaFile, index) => (
                  <CTableRow key={index}>
                    <td>{mediaFile.name}</td>
                    <td>
                      <CButton
                        color="primary"
                        variant="outline"
                        onClick={() => {
                          setVisibleCreate(true);
                          setData(mediaFile);
                        }}
                      >
                        Ver contenido
                      </CButton>
                    </td>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </div>
      <ShowTextFileModal
        visibleCreate={visibleCreate}
        setVisibleCreate={setVisibleCreate}
        data={data}
        identifier={identifier}
      />
    </CContainer>
  );
};

export default CadetTextFileCard;
