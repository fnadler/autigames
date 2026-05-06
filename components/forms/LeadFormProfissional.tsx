"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { professionalLeadSchema, type ProfessionalLeadFormData } from "@/lib/validators";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function LeadFormProfissional() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const t = useTranslations("forms.professional");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ProfessionalLeadFormData>({
    resolver: zodResolver(professionalLeadSchema),
  });

  const role = watch("role");
  const lgpd = watch("lgpd");

  const onSubmit = async (data: ProfessionalLeadFormData) => {
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "profissional", ...data }),
      });
      if (!res.ok) throw new Error("error");
      setSubmitted(true);
    } catch {
      setError(t("error"));
    }
  };

  const roleOptions = [
    { value: "autonomo", label: t("role0") },
    { value: "clinica", label: t("role1") },
    { value: "escola", label: t("role2") },
    { value: "outro", label: t("role3") },
  ];

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 bg-[#3DAA6B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-[#3DAA6B]" />
        </div>
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{t("successTitle")}</h3>
        <p className="text-[#6B6B6B]">{t("successText")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="prof-name" className="text-sm font-semibold text-[#1A2233] block">{t("nameLabel")}</Label>
          <Input
            id="prof-name"
            placeholder={t("namePlaceholder")}
            {...register("name")}
            className="w-full px-[18px] py-[13px] h-auto border-2 border-[#cbd5e1] rounded-[16px] bg-white outline-none focus:border-[#0099CC] focus:ring-4 focus:ring-[#0099CC]/10 transition-all placeholder:text-[#cbd5e1]"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-xs text-red-500 font-medium" role="alert">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="prof-email" className="text-sm font-semibold text-[#1A2233] block">{t("emailLabel")}</Label>
          <Input
            id="prof-email"
            type="email"
            placeholder="seu@email.com.br"
            {...register("email")}
            className="w-full px-[18px] py-[13px] h-auto border-2 border-[#cbd5e1] rounded-[16px] bg-white outline-none focus:border-[#0099CC] focus:ring-4 focus:ring-[#0099CC]/10 transition-all placeholder:text-[#cbd5e1]"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-xs text-red-500 font-medium" role="alert">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="prof-phone" className="text-sm font-semibold text-[#1A2233] block">{t("phoneLabel")}</Label>
          <Input
            id="prof-phone"
            placeholder="(51) 99999-9999"
            {...register("phone")}
            className="w-full px-[18px] py-[13px] h-auto border-2 border-[#cbd5e1] rounded-[16px] bg-white outline-none focus:border-[#0099CC] focus:ring-4 focus:ring-[#0099CC]/10 transition-all placeholder:text-[#cbd5e1]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="prof-city" className="text-sm font-semibold text-[#1A2233] block">{t("cityLabel")}</Label>
          <Input
            id="prof-city"
            placeholder={t("cityPlaceholder")}
            {...register("city")}
            className="w-full px-[18px] py-[13px] h-auto border-2 border-[#cbd5e1] rounded-[16px] bg-white outline-none focus:border-[#0099CC] focus:ring-4 focus:ring-[#0099CC]/10 transition-all placeholder:text-[#cbd5e1]"
          />
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-semibold text-[#1A2233] block">{t("roleLabel")}</Label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {roleOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setValue("role", opt.value as ProfessionalLeadFormData["role"], { shouldValidate: true })}
              className={`px-3 py-3 rounded-[16px] text-xs font-bold border-2 transition-all text-left uppercase tracking-wider ${
                role === opt.value
                  ? "border-[#0099CC] bg-[#0099CC]/5 text-[#0099CC]"
                  : "border-[#E5E5E5] text-[#4A4A4A] hover:border-[#0099CC]/40"
              }`}
              aria-pressed={role === opt.value}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {errors.role && <p className="text-xs text-red-500 font-medium" role="alert">{errors.role.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="prof-patients" className="text-sm font-semibold text-[#1A2233] block">{t("patientsLabel")}</Label>
        <select
          id="prof-patients"
          {...register("patientsCount")}
          className="w-full px-[18px] py-[13px] border-2 border-[#cbd5e1] rounded-[16px] bg-white outline-none focus:border-[#0099CC] focus:ring-4 focus:ring-[#0099CC]/10 transition-all text-sm text-[#1A1A1A] appearance-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 18px center", backgroundSize: "16px" }}
        >
          <option value="">{t("patientsPlaceholder")}</option>
          <option value="1-5">{t("patients0")}</option>
          <option value="6-20">{t("patients1")}</option>
          <option value="21-50">{t("patients2")}</option>
          <option value="51+">{t("patients3")}</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="prof-use" className="text-sm font-semibold text-[#1A2233] block">{t("useLabel")}</Label>
        <Textarea
          id="prof-use"
          placeholder={t("usePlaceholder")}
          rows={3}
          {...register("intendedUse")}
          className="w-full px-[18px] py-[13px] border-2 border-[#cbd5e1] rounded-[16px] bg-white outline-none focus:border-[#0099CC] focus:ring-4 focus:ring-[#0099CC]/10 transition-all placeholder:text-[#cbd5e1] resize-none min-h-[100px]"
        />
      </div>

      <div className="flex items-start gap-3 pt-2">
        <Checkbox
          id="prof-lgpd"
          checked={lgpd === true}
          onCheckedChange={(checked) =>
            setValue("lgpd", checked === true ? true : (undefined as unknown as true), { shouldValidate: true })
          }
          className="mt-1 border-2 border-[#cbd5e1] data-[state=checked]:bg-[#0099CC] data-[state=checked]:border-[#0099CC] rounded-md transition-all"
        />
        <div>
          <label htmlFor="prof-lgpd" className="text-[13px] leading-relaxed font-medium text-[#64748b] cursor-pointer">
            {t("lgpdText")}{" "}
            <a href="/termos-de-uso-e-privacidade" className="underline text-[#0099CC] font-bold" target="_blank">
              {t("lgpdLink")}
            </a>{" "}
            {t("lgpdSuffix")}
          </label>
          {errors.lgpd && <p className="text-xs text-red-500 mt-1 font-medium" role="alert">{errors.lgpd.message}</p>}
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-500 bg-red-50 px-4 py-3 rounded-xl border border-red-100" role="alert">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0099CC] hover:bg-[#33B5E5] text-white font-bold py-7 rounded-[16px] text-lg transition-all hover:-translate-y-1 shadow-lg shadow-[#0099CC]/30 active:scale-[0.98]"
      >
        {isSubmitting ? (
          <><Loader2 size={20} className="animate-spin mr-2" />{t("submitting")}</>
        ) : (
          t("submit")
        )}
      </Button>
    </form>
  );
}
