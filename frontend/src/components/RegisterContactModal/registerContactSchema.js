import * as yup from "yup";

export const registerContactSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("O nome é obrigatório!")
    .min(3, "O nome precisa ter pelo 3 caracteres.")
    .max(127, "O nome pode ter no máximo 127 caracteres."),

  email: yup
    .string()
    .required("O email é obrigatório")
    .email("É necessário fornecer um email."),

  phone: yup.string().required("Campo Obrigatório"),
});
