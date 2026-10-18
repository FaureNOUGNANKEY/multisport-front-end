"use client";

import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import type { ContactFormData } from "@/lib/types";

const subjects = [
  "Demande d'information",
  "Créer un compte",
  "Support technique",
  "Partenariat",
  "Autre",
];

const emptyForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const fieldClass =
  "w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);

    // TODO backend : remplacer ces 2 lignes par un fetch (POST) vers l'API
    console.log(form);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    setSuccess(true);
    setForm(emptyForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6"
    >
      <h2 className="flex items-center gap-2 text-lg font-bold text-black">
        <MessageSquare size={20} className="text-blue-600" />
        Envoyez-nous un message
      </h2>

      <div className="space-y-2">
        <label htmlFor="name" className="text-xs font-semibold text-black">
          Nom complet
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Faure Mariam"
          className={fieldClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-xs font-semibold text-black">
          Adresse Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="Faure02@gmail.com"
          className={fieldClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-xs font-semibold text-black">
          Sujet
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className={fieldClass}
        >
          <option value="">Choisir un sujet</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-semibold text-black">
          Votre Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Comment pouvons-nous vous aider ?"
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-sky-700 py-3 font-semibold text-white transition hover:bg-sky-800 disabled:opacity-60"
      >
        {loading ? "Envoi en cours..." : "Envoyer le message"}
        <Send size={18} />
      </button>

      {success && (
        <p className="text-sm text-green-600">
          Votre message a bien été envoyé.
        </p>
      )}
    </form>
  );
}