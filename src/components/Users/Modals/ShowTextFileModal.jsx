import React, { useEffect, useState } from "react";
import {
  CButton,
  CForm,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import Notification from "../../../helpers/Notifications.jsx";

const ShowTextFileModal = ({
  visibleCreate,
  setVisibleCreate,
  data,
  identifier,
}) => {
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    getText().then(() => {});
  }, []);

  const getText = async () => {};

  const editText = async (e) => {
    setEditedText(e.target.value);
  };
  const saveText = async (text) => {};

  return (
    <CModal
      scrollable={true}
      size={"xl"}
      backdrop="static"
      alignment="center"
      visible={visibleCreate}
      onClose={() => {
        setVisibleCreate(false);
        setIsEditing(false);
        setEditedText(text);
      }}
    >
      <CModalHeader onClose={() => setVisibleCreate(false)}>
        <CModalTitle>{data.name}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {isEditing ? (
          <CForm>
            <CFormTextarea
              id="editText"
              label="Editar texto"
              value={editedText}
              rows={20}
              onChange={editText}
            ></CFormTextarea>
          </CForm>
        ) : (
          <div className="text-black">{text}</div>
        )}
      </CModalBody>
      <>
        {isEditing ? (
          <CModalFooter>
            <CButton
              color="secondary"
              variant="outline"
              onClick={() => {
                setIsEditing(false);
                setEditedText(text);
              }}
            >
              Cancelar
            </CButton>
            <CButton
              color="secondary"
              variant="outline"
              onClick={() => saveText(editedText)}
            >
              Guardar
            </CButton>
          </CModalFooter>
        ) : (
          <CModalFooter>
            <CButton
              color="secondary"
              variant="outline"
              onClick={() => setVisibleCreate(false)}
            >
              Cerrar
            </CButton>
            <CButton
              color="secondary"
              variant="outline"
              onClick={() => setIsEditing(true)}
            >
              Editar
            </CButton>
          </CModalFooter>
        )}
      </>
      <Notification notify={notify} setNotify={setNotify} position={"top"} />
    </CModal>
  );
};

export default ShowTextFileModal;
