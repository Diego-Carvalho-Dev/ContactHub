import { useContext } from "react";
import { createPortal } from "react-dom";
import { ContactContext } from "../../contexts/ContactContext";
import { StyledContainerContactsModal } from "./style";
import moment from "moment";
import "moment/locale/pt-br";

export const ContactsModal = () => {
  const { handleContactsModal, client } = useContext(ContactContext);

  const registerDate = client.contacts.map((elem) => elem.registerDate);

  const currentDateTime = new Date(registerDate[0]);
  const formattedDate = moment(currentDateTime).format("DD/MM/YYYY");
  const formattedTime = moment(currentDateTime).format("HH:mm:ss");

  const modalContactsContent = (
    <StyledContainerContactsModal>
      <div className="modalContentContacts">
        <div className="headerModal">
          <h2 className="titleModal">Visulizar Contatos</h2>
          <button
            onClick={() => handleContactsModal()}
            className="btCloseModal"
          >
            X
          </button>
        </div>
        {client.contacts && client.contacts.length > 0 ? (
          <ul className="handleListContacts">
            {client.contacts.map((contact) => (
              <li key={contact.id} className="liContactsModal">
                <div>
                  <h2 className="infoFullNameContact">{contact.fullName}</h2>
                  <p className="infoContact">E-mail: {contact.email}</p>
                  <p className="infoContact">Phone: {contact.phone}</p>
                  <h3 className="titleRegisterDateContact">Register Date:</h3>
                  <div className="dateAndHour">
                    <p className="infoContact">Date: {formattedDate}</p>
                    <p className="infoContact">Hour: {formattedTime}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="areaNoContactModal">
            <h1 className="freseNoContactModal">
              Você não ainda possui contatos cadastrados.
            </h1>
          </div>
        )}
      </div>
    </StyledContainerContactsModal>
  );
  return createPortal(
    modalContactsContent,
    document.getElementById("modalContacts-root")
  );
};
