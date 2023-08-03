import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório!")
    .min(3, "O nome precisa ter pelo 3 caracteres.")
    .max(127, "O nome pode ter no máximo 127 caracteres."),

  email: yup
    .string()
    .required("O email é obrigatório")
    .email("É necessário fornecer um email."),

  password: yup
    .string()
    .required("A senha obrigatória")
    .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caractere especial"
    )
    .min(8, "É necessário uma senha de pelos 8 caracteres"),

  phone: yup.string().required("Campo Obrigatório"),
});
