import { z } from "zod";

export const professionalLeadSchema = z.object({
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  role: z.enum(["autonomo", "clinica", "escola", "outro"], {
    error: "Selecione seu tipo de atuação",
  }),
  city: z.string().optional(),
  patientsCount: z.string().optional(),
  intendedUse: z.string().optional(),
  lgpd: z.literal(true, { error: "Você precisa aceitar a política de privacidade" }),
});

export const companyLeadSchema = z.object({
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  company: z.string().min(2, "Informe o nome da empresa"),
  jobTitle: z.string().optional(),
  interests: z.array(z.string()).min(1, "Selecione ao menos um modelo de interesse"),
  message: z.string().optional(),
  lgpd: z.literal(true, { error: "Você precisa aceitar a política de privacidade" }),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Mensagem deve ter ao menos 10 caracteres"),
  lgpd: z.literal(true, { error: "Você precisa aceitar a política de privacidade" }),
});

export type ProfessionalLeadFormData = z.infer<typeof professionalLeadSchema>;
export type CompanyLeadFormData = z.infer<typeof companyLeadSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
