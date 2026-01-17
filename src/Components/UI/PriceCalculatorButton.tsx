import React from "react";

interface PriceCalculatorButtonProps {
  label: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const PriceCalculatorButton = ({
  label,
  type = "button",
}: PriceCalculatorButtonProps) => {
  const [openpopop, setOpenpopop] = React.useState(false);

  const openform = () => {
    setOpenpopop(true);
  };

  const closeform = () => {
    setOpenpopop(false);
  };

  return (
    <>
      <button
        onClick={openform}
        type={type}
        className="cursor-pointer w-full max-w-[420px] rounded-[14px] bg-secondary px-6 py-3 text-[16px] font-bold text-primary shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),_0_8px_10px_-6px_rgba(0,0,0,0.10)] transition-colors hover:bg-[#f2f2f2] font-secondary"
      >
        {label}
      </button>

      {openpopop && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeform}
        >
          <div
            className="w-full max-w-[560px] rounded-2xl bg-white p-6 shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
                  Yhteystiedot
                </p>
                <h2 className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
                  Varaa siivous
                </h2>
                <p className="mt-2 text-sm text-light_gray">
                  Jätä meille yhteystietosi, niin otamme sinuun pian yhteyttä!
                </p>
              </div>
              <button type="button" className="cursor-pointer hover:rounded-3xl py-1 hover:bg-gray-200" onClick={closeform} aria-label="Close">
                 <svg
              width="34"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#0E101A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
              </button>
            </div>

            <form className="mt-4 grid gap-3">
              <input
                className="text-black w-full rounded-xl border border-stroke px-4 py-2 text-sm"
                placeholder="Koko nimi"
                name="name"
                required
              />
              <input
                className="text-black w-full rounded-xl border border-stroke px-4 py-2 text-sm"
                placeholder="Sähköposti"
                type="email"
                name="email"
                required
              />
              <input
                className="text-black w-full rounded-xl border border-stroke px-4 py-2 text-sm"
                placeholder="Puhelinnumero"
                type="tel"
                name="phone"
                required
              />
              <textarea
                className="text-black w-full rounded-xl border border-stroke px-4 py-2 text-sm"
                placeholder="Kirjoita tarvittaessasi lisätietoja..."
                name="message"
                rows={4}
              />
              <button
                type="submit"
                className="cursor-pointer mt-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-[#026b5f]"
              >
                Varaa siivous
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PriceCalculatorButton;
