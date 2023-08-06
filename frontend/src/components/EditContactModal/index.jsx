import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactContext } from "../../contexts/ContactContext.jsx";
import { StyledContainerModal } from "./style.js";
import { createPortal } from "react-dom";
import { editContactSchema } from "./editModalSchema.js";
import InputMask from "react-input-mask";

export const EditContactModal = () => {
  const { handleEditModal, editContact, selectContact, loading } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      id: selectContact.id,
      fullName: selectContact.fullName,
      email: selectContact.email,
      phone: selectContact.phone,
    },
    resolver: yupResolver(editContactSchema),
  });

  const submit = async (data) => {
    const information = { ...data };
    await editContact(information);

    reset();
  };

  const modalEditContent = (
    <StyledContainerModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Editar Contato</h2>
          <button onClick={() => handleEditModal()} className="btCloseModal">
            X
          </button>
        </div>
        <form className="formModal" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="fullName" className="labelModal">
            Nome
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Digite seu nome..."
            className="inputModal"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="areaError">{errors.fullName.message}</p>
          )}

          <label htmlFor="email" className="labelModal">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email.."
            className="inputModal"
            {...register("email")}
          />
          {errors.email && <p className="areaError">{errors.email.message}</p>}

          <label htmlFor="phone" className="labelModal">
            Telefone
          </label>
          <InputMask
            type="text"
            mask="(99) 99999-9999"
            name="phone"
            placeholder="Digite seu número.."
            className="inputModal"
            {...register("phone")}
          />
          {errors.phone && <p className="areaError">{errors.phone.message}</p>}
          <button type="submit" className="btRegisterModal" disabled={loading}>
            {loading ? "Editando..." : "Editar Contato"}
          </button>
        </form>
      </div>
    </StyledContainerModal>
  );
  return createPortal(
    modalEditContent,
    document.getElementById("modalEdit-root")
  );
};
