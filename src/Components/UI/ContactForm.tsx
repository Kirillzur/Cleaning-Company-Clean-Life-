import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mojjerkw");
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    if (!state.succeeded) {
      return;
    }

    formRef.current?.reset();
    setShowThanks(true);
  }, [state.succeeded]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      method="POST"
      className="w-full max-w-[560px] rounded-4xl bg-white p-6 shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)] sm:p-8 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-semibold text-primary">
          Nimi
          <input
            type="text"
            name="name"
            placeholder="Matti Meikäläinen"
            className="mt-2 w-full rounded-full border border-secondary bg-secondary/70 px-4 py-2.5 text-sm text-text placeholder:text-light_gray focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </label>
        <label className="text-sm font-semibold text-primary">
          Sähköposti
          <input
            type="email"
            name="email"
            placeholder="matti@esimerkki.fi"
            className="mt-2 w-full rounded-full border border-secondary bg-secondary/70 px-4 py-2.5 text-sm text-text placeholder:text-light_gray focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <ValidationError prefix="email" field="email" errors={state.errors} />
        </label>
        <label className="text-sm font-semibold text-primary md:col-span-2">
          Puhelinnumero
          <input
            type="tel"
            name="phone"
            placeholder="+358 40 123 4567"
            className="mt-2 w-full rounded-full border border-secondary bg-secondary/70 px-4 py-2.5 text-sm text-text placeholder:text-light_gray focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <ValidationError prefix="phone" field="phone" errors={state.errors} />
        </label>
        <label className="text-sm font-semibold text-primary md:col-span-2">
          Viesti
          <textarea
            name="message"
            rows={5}
            maxLength={300}
            placeholder="Kerro meille, miten voimme auttaa..."
            className="mt-2 w-full resize-none rounded-2xl border border-secondary bg-secondary/70 px-4 py-3 text-sm text-text placeholder:text-light_gray focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <ValidationError prefix="message" field="message" errors={state.errors} />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-[0_16px_35px_-20px_rgba(2,126,111,0.85)] transition-colors hover:bg-[#016f62]"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M3 11.5L21 3L13.5 21L11.5 12.5L3 11.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 12.5L21 3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Lähetä Viesti
      </button>
      {showThanks && (
        <div
          className="mt-4 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary"
          role="status"
          aria-live="polite"
        >
          Kiitos viestistäsi. Me otamme teihin pian yhteyttä!
        </div>
      )}
    </form>
  );
};

export default ContactForm;
