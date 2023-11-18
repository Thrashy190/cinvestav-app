import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { useAuth } from "../../../context/AuthProvider.jsx";
import { iso_to_date } from "../../../utils/dateFormatter.js";

const UserListCard = ({ users, setUsers }) => {
  const { currentUser, logOut } = useAuth();
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    setUsers(data);
  };

  return (
    <CCard className="mt-4">
      <CCardHeader>
        <CCardTitle className="pt-2">Lista de Usuarios</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CTable striped responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Identificador</CTableHeaderCell>
              <CTableHeaderCell>Rol</CTableHeaderCell>
              <CTableHeaderCell>Fecha de creacion</CTableHeaderCell>
              {currentUser.role === "Admin" ? (
                <>
                  <CTableHeaderCell></CTableHeaderCell>
                  <CTableHeaderCell></CTableHeaderCell>
                </>
              ) : null}
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {users.map((user) => (
              <CTableRow key={user.identifier}>
                <td>{user.identifier}</td>
                <td>{user.role}</td>
                <td>{iso_to_date(user.createdAt)}</td>
                {currentUser.role === "Admin" ? (
                  <>
                    <td>
                      <CButton color="primary" variant="outline">
                        Editar
                      </CButton>
                    </td>
                    <td>
                      <CButton color="danger" variant="outline">
                        Eliminar
                      </CButton>
                    </td>
                  </>
                ) : null}
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default UserListCard;
