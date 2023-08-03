import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("É necessário fornecer um email."),

  password: yup.string().required("A senha obrigatória"),
});
