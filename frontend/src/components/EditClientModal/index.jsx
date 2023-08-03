import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactContext } from "../../contexts/ContactContext.jsx";
import { StyledContainerModal } from "./style.js";
import { createPortal } from "react-dom";
import { editClientSchema } from "./editClientSchema.js";
import InputMask from "react-input-mask";

export const EditClientModal = () => {
  const { handleEditClientModal, editClient, loading, client } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      id: client.client.id,
      name: client.client.name,
      email: client.client.email,
      phone: client.client.phone,
    },
    resolver: yupResolver(editClientSchema),
  });

  const submit = async (data) => {
    const information = { ...data };
    await editClient(information);

    reset();
  };

  const modalClientContent = (
    <StyledContainerModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Editar Perfil</h2>
          <button
            onClick={() => handleEditClientModal()}
            className="btCloseModal"
          >
            X
          </button>
        </div>
        <form className="formModal" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="fullName" className="labelModal">
            Nome
          </label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            className="inputModal"
            {...register("name")}
          />
          {errors.name && <p className="areaError">{errors.name.message}</p>}

          <label htmlFor="email" className="labelModal">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
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
            placeholder="Digite seu telefone"
            className="inputModal"
            {...register("phone")}
          />
          {errors.phone && <p className="areaError">{errors.phone.message}</p>}

          <button type="submit" className="btRegisterModal" disabled={loading}>
            {loading ? "Editando..." : "Editar Perfil"}
          </button>
        </form>
      </div>
    </StyledContainerModal>
  );
  return createPortal(
    modalClientContent,
    document.getElementById("modalClientEdit-root")
  );
};
