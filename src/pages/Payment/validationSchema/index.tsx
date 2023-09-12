import { isValidCNPJ, isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils'


import * as yup from 'yup'


export const schema = yup
  .object({
    fullName: yup
      .string()
      .required('Nome e sobrenome são obrigatórios.')
      .min(3, 'Nome e sobrenome muito curto.')
      .matches(/(\w.+\s).+/gi, 'O nome deve conter sobrenome.'),

    email: yup
      .string()
      .required('O Email é obrigatório.').email('O email deve ser válido.'),

    mobile: yup
      .string().
      required('O Celular é obrigatório')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test('validateMobile', 'Celular Inválido.', (value) => isValidPhone(value)),

    document: yup
      .string()
      .required("O CPF/CNPJ é obrigatório")
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test('validateDocument', 'O CPF/CNPJ é inválido.', (value) => { isValidCPF(value) || isValidCNPJ(value) }),

    zipCode: yup
      .string()
      .required('O CEP é obrigatório')
      .transform((value) => value.replace(/[^\d]/g, '')),

    street: yup.string().required('O endereço é obrigatório;'),
    number: yup.string().required('O numéro é obrigatório.'),
    complement: yup.string(),
    neighborhood: yup.string().required('O Bairro é obrigatório'),
    city: yup.string().required('A cidade é obrigatória'),
    state: yup.string().required("O estado é obrigatório"),
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>
