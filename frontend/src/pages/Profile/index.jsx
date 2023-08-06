import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/pt-br";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledProfilePage } from "./style";
import { ContactContext } from "../../contexts/ContactContext";
import { EditClientModal } from "../../components/EditClientModal";
import { DeleteClientModal } from "../../components/DeleteClientModal";
import "react-toastify/dist/ReactToastify.css";

export const Profile = () => {
  const { client, newLoading } = useContext(AuthContext);
  const {
    setSelectClient,
    modalIsEditClientOpen,
    handleEditClientModal,
    handleDeleteClientModal,
    modalIsDeleteClientOpen,
  } = useContext(ContactContext);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/dashboard");
  };

  const formattedRegisterDate = moment(client.client.registerDate).format("DD/MM/YYYY HH:mm:ss");

  return (
    <>
      {newLoading && <div>Carregando...</div>}
      {client && (
        <StyledProfilePage>
          <header className="headerHome">
            <button className="btComeBackHome" onClick={goToHome}>
              Home
            </button>
          </header>
          <div className="areaClientProfile" key={client.client.id}>
            <h2 className="NameClientProfile">{client.client.name}</h2>
            <p className="clientProfile">E-mail: {client.client.email}</p>
            <p className="clientProfile">Phone: {client.client.phone}</p>
            <h3 className="clientProfile">Register Date:</h3>
            <div className="areaDateHourProfile">
              <p className="clientProfile">Date: {formattedRegisterDate}</p>
            </div>
            <div className="areaButtonsProfile">
              <button
                className="btEditProfile"
                onClick={() => {
                  handleEditClientModal();
                  setSelectClient(client.client);
                }}
              >
                Editar
              </button>
              <button
                type="button"
                className="btDeleteProfile"
                onClick={handleDeleteClientModal}
              >
                Deletar
              </button>
            </div>
          </div>
          {modalIsEditClientOpen && <EditClientModal />}
          {modalIsDeleteClientOpen && <DeleteClientModal />}
        </StyledProfilePage>
      )}
    </>
  );
};
