"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { companyLeadSchema, type CompanyLeadFormData } from "@/lib/validators";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function LeadFormEmpresa() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const t = useTranslations("forms.company");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CompanyLeadFormData>({
    resolver: zodResolver(companyLeadSchema),
    defaultValues: { interests: [] },
  });

  const interests = watch("interests") ?? [];
  const lgpd = watch("lgpd");

  const interestOptions = [
    { value: "institucional", label: t("interest0") },
    { value: "cocriacao", label: t("interest1") },
    { value: "corporativo", label: t("interest2") },
    { value: "entender", label: t("interest3") },
  ];

  const toggleInterest = (value: string) => {
    const updated = interests.includes(value)
      ? interests.filter((v) => v !== value)
      : [...interests, value];
    setValue("interests", updated, { shouldValidate: true });
  };

  const onSubmit = async (data: CompanyLeadFormData) => {
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "empresa", ...data }),
      });
      if (!res.ok) throw new Error("error");
      setSubmitted(true);
    } catch {
      setError(t("error"));
    }
  };

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
          <Label htmlFor="emp-name" className="text-sm font-semibold text-[#1A2233] block">{t("nameLabel")}</Label>
          <Input
            id="emp-name"
            placeholder={t("namePlaceholder")}
            {...register("name")}
            className="w-full px-[18px] py-[13px] h-auto border-2 border-[#cbd5e1] rounded-[16px] bg-white outline-none focus:border-[#3DAA6B] focus:ring-4 focus:ring-[#3DAA6B]/10 transition-all placeholder:text-[#cbd5e1]"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-xs text-red-500 font-medium" role="alert">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="emp-email" className="text-sm font-semibold text-[#1A2233] block">{t("emailLabel")}</Label>
          <Input
            id="emp-email"
            type="email"
            placeholder={t("emailPlaceholder")}
            {...register("email")}
            className="w-full px-[18px] py-[13px] h-auto border-2 border-[#cbd5e1] rounded-[16px] bg-white outline-none focus:border-[#3DAA6B] focus:ring-4 focus:ring-[#3DAA6B]/10 transition-all placeholder:text-[#cbd5e1]"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-xs text-red-500 font-medium" role="alert">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="emp-company" className="text-sm font-semibold text-[#1A2233] block">{t("companyLabel")}</Label>
          <Input
            id="emp-company"
            placeholder={t("companyPlaceholder")}
            {...register("company")}
            className="w-full px-[18px] py-[13px] h-auto border-2 border-[#cbd5e1] rounded-[16px] bg-white outline-none focus:border-[#3DAA6B] focus:ring-4 focus:ring-[#3DAA6B]/10 transition-all placeholder:text-[#cbd5e1]"
            aria-invalid={!!errors.company}
          />
          {errors.company && <p className="text-xs text-red-500 font-medium" role="alert">{errors.company.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="emp-job" className="text-sm font-semibold text-[#1A2233] block">{t("jobLabel")}</Label>
          <Input
            id="emp-job"
            placeholder={t("jobPlaceholder")}
            {...register("jobTitle")}
            className="w-full px-[18px] py-[13px] h-auto border-2 border-[#cbd5e1] rounded-[16px] bg-white outline-none focus:border-[#3DAA6B] focus:ring-4 focus:ring-[#3DAA6B]/10 transition-all placeholder:text-[#cbd5e1]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="emp-phone" className="text-sm font-semibold text-[#1A2233] block">{t("phoneLabel")}</Label>
        <Input
          id="emp-phone"
          placeholder="(51) 99999-9999"
          {...register("phone")}
          className="w-full px-[18px] py-[13px] h-auto border-2 border-[#cbd5e1] rounded-[16px] bg-white outline-none focus:border-[#3DAA6B] focus:ring-4 focus:ring-[#3DAA6B]/10 transition-all placeholder:text-[#cbd5e1]"
        />
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-semibold text-[#1A2233] block">{t("interestLabel")}</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {interestOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggleInterest(opt.value)}
              className={`px-4 py-3.5 rounded-[16px] text-xs font-bold border-2 transition-all text-left uppercase tracking-wider ${
                interests.includes(opt.value)
                  ? "border-[#3DAA6B] bg-[#3DAA6B]/5 text-[#3DAA6B]"
                  : "border-[#E5E5E5] text-[#4A4A4A] hover:border-[#3DAA6B]/40"
              }`}
              aria-pressed={interests.includes(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {errors.interests && <p className="text-xs text-red-500 font-medium" role="alert">{errors.interests.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="emp-message" className="text-sm font-semibold text-[#1A2233] block">{t("messageLabel")}</Label>
        <Textarea
          id="emp-message"
          placeholder={t("messagePlaceholder")}
          rows={4}
          {...register("message")}
          className="w-full px-[18px] py-[13px] border-2 border-[#cbd5e1] rounded-[16px] bg-white outline-none focus:border-[#3DAA6B] focus:ring-4 focus:ring-[#3DAA6B]/10 transition-all placeholder:text-[#cbd5e1] resize-none min-h-[120px]"
        />
      </div>

      <div className="flex items-start gap-3 pt-2">
        <Checkbox
          id="emp-lgpd"
          checked={lgpd === true}
          onCheckedChange={(checked) =>
            setValue("lgpd", checked === true ? true : (undefined as unknown as true), { shouldValidate: true })
          }
          className="mt-1 border-2 border-[#cbd5e1] data-[state=checked]:bg-[#3DAA6B] data-[state=checked]:border-[#3DAA6B] rounded-md transition-all"
        />
        <div>
          <label htmlFor="emp-lgpd" className="text-[13px] leading-relaxed font-medium text-[#64748b] cursor-pointer">
            {t("lgpdText")}{" "}
            <a href="/termos-de-uso-e-privacidade" className="underline text-[#3DAA6B] font-bold" target="_blank">
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
        className="w-full bg-[#3DAA6B] hover:bg-[#4ADE80] text-white font-bold py-7 rounded-[16px] text-lg transition-all hover:-translate-y-1 shadow-lg shadow-[#3DAA6B]/30 active:scale-[0.98]"
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
