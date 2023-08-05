    import { useContext } from "react";
    import { useNavigate } from "react-router-dom";
    import { AuthContext } from "../../contexts/AuthContext";
    import { useForm } from "react-hook-form";
    import { yupResolver } from "@hookform/resolvers/yup";
    import { StyledRegisterPage } from "./style";
    import { registerSchema } from "./registerSchema";
    import InputMask from "react-input-mask";

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
        setTimeout(async () => {
          const information = { ...data };
          await NewRegister(information);
          reset();
        }, 1000);
      };
      return (
        <StyledRegisterPage>
          <section className="secRegister">
            <div className="areaRegisterAndGoToLogin">
            <img src={import.meta.env.BASE_URL + 'images/logo.png'} alt="" width={130} height={100} />
            </div>
            <form
              className="formRegister"
              onSubmit={handleSubmit(submit)}
              noValidate
            >
              <label htmlFor="name" className="lbRegister">
              </label>
              <input
                type="text"
                placeholder="Digite aqui seu nome"
                className="iptRegister"
                {...register("name")}
              />
              {errors.name && <p className="areaError">{errors.name.message}</p>}
              <label htmlFor="email" className="lbRegister">
              </label>
              <input
                type="email"
                placeholder="Digite aqui seu email"
                className="iptRegister"
                {...register("email")}
              />
              {errors.email && <p className="areaError">{errors.email.message}</p>}
              <label htmlFor="password" className="lbRegister">
              </label>
              <input
                type="password"
                placeholder="Digite aqui sua senha"
                className="iptRegister"
                {...register("password")}
              />
              {errors.password && (
                <p className="areaError">{errors.password.message}</p>
              )}
              <label htmlFor="phone" className="lbRegister">
              </label>
              <InputMask
                type="text"
                mask="(99) 99999-9999"
                placeholder="Digite aqui seu telefone"
                className="iptRegister"
                {...register("phone")}
              />
              {errors.phone && <p className="areaError">{errors.phone.message}</p>}
              <button type="submit" className="btRegister" disabled={loading}>
                {loading ? "cadastrando" : "Cadastrar"}
              </button>
              <button className="btGoToLogin" onClick={goLoginClick}>
                Retornar para o login
              </button>
            </form>
          </section>
        </StyledRegisterPage>
      );
    };
