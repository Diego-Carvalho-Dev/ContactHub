import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext.jsx";
import { StyleCardContact } from "./style.js";
import moment from "moment";
import "moment/locale/pt-br";

export const ContactCard = ({ elem }) => {
  const { removeContact, handleEditModal, setSelectContact } =
    useContext(ContactContext);
  const currentDateTime = new Date(elem.registerDate);
  const formattedDate = moment(currentDateTime).format("DD/MM/YYYY");
  const formattedTime = moment(currentDateTime).format("HH:mm:ss");
  return (
    <StyleCardContact key={elem.id}>
      <div className="areaClient">
        <h3 className="identification">
          <span className="emphasis">Name:</span> {elem.fullName}
        </h3>
        <p className="identification">
          <span className="emphasis">E-mail:</span> {elem.email}
        </p>
        <p className="identification">
          <span className="emphasis">Phone:</span> {elem.phone}
        </p>
        <p className="registerDate">Register Date:</p>
        <div className="areaDate">
          <p className="identification">
            <span className="emphasis">Date:</span> {formattedDate}
          </p>
          <p className="identification">
            <span className="emphasis">Hour:</span> {formattedTime}
          </p>
        </div>
        <div class="butt">
          <button
            className="btEdit"
            onClick={() => {
              handleEditModal();
              setSelectContact(elem);
            }}
          ></button>
          <button
            type="button"
            onClick={() => removeContact(elem.id)}
            className="btDelete"
          ></button>
        </div>
      </div>
      <div className="areabuttons"></div>
    </StyleCardContact>
  );
};
