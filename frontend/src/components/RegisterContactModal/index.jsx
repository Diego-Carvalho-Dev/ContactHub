import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactContext } from "../../contexts/ContactContext.jsx";
import { registerContactSchema } from "./registerContactSchema.js";
import { StyledContainerModal } from "./style.js";
import { createPortal } from "react-dom";
import InputMask from "react-input-mask";

export const RegisterContactModal = () => {
  const { handleModal, RegisterContact, loading } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
    resolver: yupResolver(registerContactSchema),
  });

  const submit = async (data) => {
    const information = { ...data };
    await RegisterContact(information);

    reset();
  };

  const modalContent = (
    <StyledContainerModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Cadastrar Contato</h2>
          <button onClick={() => handleModal()} className="btCloseModal">
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
            placeholder="Digite seu nome"
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
            placeholder="Digite seu nome"
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
            placeholder="Digite seu nome"
            className="inputModal"
            {...register("phone")}
          />
          {errors.phone && <p className="areaError">{errors.phone.message}</p>}
          <button type="submit" className="btRegisterModal" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>
    </StyledContainerModal>
  );
  return createPortal(modalContent, document.getElementById("modal-root"));
};
