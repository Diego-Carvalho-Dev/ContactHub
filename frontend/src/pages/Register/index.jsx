import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledRegisterPage } from "./style";
import { registerSchema } from "./registerSchema";

export const Register = () => {
  const { loading, NewRegister, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const goLoginClick = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const submit = async (data) => {
    setLoading(true);
    try {
      await NewRegister(data);
      reset();
    } catch (error) {
      console.error("Error registering:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledRegisterPage>
      <section className="secRegister">
        <div className="areaRegisterAndGoToLogin">
          <img
            src={import.meta.env.BASE_URL + "images/logo.png"}
            alt=""
            width={130}
            height={100}
          />
        </div>
        <form className="formRegister" onSubmit={handleSubmit(submit)} noValidate>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            className="iptRegister"
            {...register("name")}
          />
          {errors.name && <p className="areaError">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Digite aqui seu email"
            className="iptRegister"
            {...register("email")}
          />
          {errors.email && <p className="areaError">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Digite aqui sua senha"
            className="iptRegister"
            {...register("password")}
          />
          {errors.password && (
            <p className="areaError">{errors.password.message}</p>
          )}

          <InputMask
            type="text"
            mask="(99) 99999-9999"
            placeholder="Digite aqui seu telefone"
            className="iptRegister"
            {...register("phone")}
          />
          {errors.phone && <p className="areaError">{errors.phone.message}</p>}

          <button type="submit" className="btRegister" disabled={loading}>
            {loading ? "Cadastrando" : "Cadastrar"}
          </button>
          <button className="btGoToLogin" onClick={goLoginClick}>
            Retornar para o login
          </button>
        </form>
      </section>
    </StyledRegisterPage>
  );
};
