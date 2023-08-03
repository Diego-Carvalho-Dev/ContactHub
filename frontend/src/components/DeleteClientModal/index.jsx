import { React, useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext.jsx";
import { createPortal } from "react-dom";
import { StyledContainerDeleteModal } from "./style.js";

export const DeleteClientModal = () => {
  const { handleDeleteClientModal, removeClient, client } =
    useContext(ContactContext);

  const modalDeleteClientContent = (
    <StyledContainerDeleteModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Deletar Perfil</h2>
          <button
            onClick={() => handleDeleteClientModal()}
            className="btCloseModal"
          >
            X
          </button>
        </div>
        <div className="areaDeleteInfo">
          <p className="freseDelete">
            Tem certeza que deseja deletar o seu perfil?
          </p>
          <div className="areaButtonsDelete">
            <button
              className="btConfirmDelete"
              onClick={() => removeClient(client.client.id)}
            >
              Confirmar
            </button>
            <button
              className="btCancelDelete"
              onClick={() => handleDeleteClientModal()}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </StyledContainerDeleteModal>
  );
  return createPortal(
    modalDeleteClientContent,
    document.getElementById("modalClientDelete-root")
  );
};
