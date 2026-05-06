"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validators";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const t = useTranslations("forms.contact");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const lgpd = watch("lgpd");

  const onSubmit = async (data: ContactFormData) => {
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contato", ...data }),
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

  const inputClass = "w-full px-[18px] py-[13px] h-auto border-2 border-[#cbd5e1] rounded-[16px] bg-white outline-none focus:border-[#0099CC] focus:ring-4 focus:ring-[#0099CC]/10 transition-all placeholder:text-[#cbd5e1]";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="contact-name" className="text-sm font-semibold text-[#1A2233] block">{t("nameLabel")}</Label>
          <Input id="contact-name" placeholder={t("namePlaceholder")} {...register("name")} className={inputClass} aria-invalid={!!errors.name} />
          {errors.name && <p className="text-xs text-red-500 font-medium" role="alert">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email" className="text-sm font-semibold text-[#1A2233] block">{t("emailLabel")}</Label>
          <Input id="contact-email" type="email" placeholder={t("emailPlaceholder")} {...register("email")} className={inputClass} aria-invalid={!!errors.email} />
          {errors.email && <p className="text-xs text-red-500 font-medium" role="alert">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message" className="text-sm font-semibold text-[#1A2233] block">{t("messageLabel")}</Label>
        <Textarea
          id="contact-message"
          placeholder={t("messagePlaceholder")}
          rows={7}
          {...register("message")}
          className={`${inputClass} resize-none min-h-[180px]`}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-xs text-red-500 font-medium" role="alert">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-3 pt-2">
        <Checkbox
          id="contact-lgpd"
          checked={lgpd === true}
          onCheckedChange={(checked) =>
            setValue("lgpd", checked === true ? true : (undefined as unknown as true), { shouldValidate: true })
          }
          className="mt-1 border-2 border-[#cbd5e1] data-[state=checked]:bg-[#0099CC] data-[state=checked]:border-[#0099CC] rounded-md transition-all"
        />
        <div>
          <label htmlFor="contact-lgpd" className="text-[13px] leading-relaxed font-medium text-[#64748b] cursor-pointer">
            {t("lgpdText")}{" "}
            <a href="/termos-de-uso-e-privacidade" className="underline text-[#0099CC] font-bold" target="_blank">
              {t("lgpdLink")}
            </a>
            .
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
