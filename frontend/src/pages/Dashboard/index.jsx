import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledHomePage } from "./style";
import { ContactCard } from "../../components/ContactCard";
import { ContactContext } from "../../contexts/ContactContext";
import { RegisterContactModal } from "../../components/RegisterContactModal";
import { EditContactModal } from "../../components/EditContactModal";
import { ContactsModal } from "../../components/ContactsModal";
import "react-toastify/dist/ReactToastify.css";


export const Dashboard = () => {
  const { client, newLoading } = useContext(AuthContext);
  const {
    modalIsOpen,
    handleModal,
    modalIsEditOpen,
    modalIsContactsOpen,
    handleContactsModal,
  } = useContext(ContactContext);

  const navigate = useNavigate();

  const goLoginClick = () => {
    navigate("/");
    client.client = null;
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENCLIENT");
  };

  const goProfilePage = () => {
    navigate("/profile");
  };
  return (
    <>
      {newLoading && <div>Carregando...</div>}
      {client && (
        <StyledHomePage>
          <div className="areaUser">
            <div className="hello">
              <h2 id="name" className="areaWelcome">
                Olá, {client.client.name}!
              </h2>
            </div>
            <header className="headerHome">
              <button 
                type="button"
                onClick={() => handleModal()}
              >
              <img src="src/images/adicionar.png" alt="" width={40}/>
              </button>
               <button
                type="button"
                className="btOpenModal"
                onClick={() => handleModal()}
              >
                <img src={import.meta.env.BASE_URL +"images/adicionar.png"} alt="Add" width={40} />
              </button>
              <button className="btViewProfile" onClick={goProfilePage}>
                Ver perfil
              </button>
              <button className="btComeBackLogin" onClick={goLoginClick}>
                Sair
              </button>
            </header>
          </div>

          <div className="areaInformation">
            <div className="areaContact">
              <button
                className="bTContactHome"
                onClick={() => handleContactsModal()}
              >
                Visualizar Contatos
              </button>
            </div>
            {client.contacts && client.contacts.length > 0 ? (
              <ul className="ulCardContact">
                {client.contacts.map((elem) => (
                  <ContactCard key={elem.id} elem={elem} />
                ))}
              </ul>
            ) : (
              <div className="areaNoContact">
                <h1 className="freseNoContact">
                  Você não ainda possui contatos cadastrados.
                </h1>
              </div>
            )}
          </div>
          {modalIsOpen && <RegisterContactModal />}
          {modalIsEditOpen && <EditContactModal />}
          {modalIsContactsOpen && <ContactsModal />}
        </StyledHomePage>
      )}
    </>
  );
};
