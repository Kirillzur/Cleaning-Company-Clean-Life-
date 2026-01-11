import { useState } from "react";
import type { serviceId } from "@/data/services";

interface TypeOfCleaning {
  text: string;
  serviceId: serviceId[];
  value?: serviceId | null;
  onChange?: (value: serviceId) => void;
}

const CleaningType = ({
  text,
  serviceId,
  value,
  onChange,
}: TypeOfCleaning) => {
  const [form, setForm] = useState(false);
  const selected = value ?? null;

  const openForm = () => {
    setForm(true);
  };

  const chooseService = (id: serviceId) => {
    setForm(false);
    onChange?.(id);
  };

  return (
    <div>
      <div className="relative inline-block w-full lg:hidden">
        <div className="md:max-w-full rounded-[14px] border-2 border-stroke bg-white overflow-hidden">
          <button
            onClick={openForm}
            className={`cursor-pointer flex w-full items-center justify-between gap-3 px-3 py-2.5 text-[11px] md:text-[14px]  font-bold text-stroke text-height-10" ${
              selected ? "bg-primary text-white " : "bg-white text-stroke"
            }`}
          >
            {selected ?? text}
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1345 0.179375L7.59372 6.55528L1.05292 0.179375C0.936065 0.0652191 0.779184 0.00130859 0.615822 0.00130859C0.45246 0.00130859 0.29558 0.0652191 0.178722 0.179375C0.122138 0.234816 0.0771843 0.300991 0.0464957 0.374023C0.0158071 0.447056 0 0.525478 0 0.604697C0 0.683915 0.0158071 0.762337 0.0464957 0.83537C0.0771843 0.908402 0.122138 0.974577 0.178722 1.03002L7.13699 7.81423C7.25919 7.93334 7.42308 8 7.59372 8C7.76436 8 7.92825 7.93334 8.05045 7.81423L15.0087 1.03133C15.0657 0.975845 15.111 0.909507 15.1419 0.836233C15.1728 0.762958 15.1888 0.68423 15.1888 0.604697C15.1888 0.525163 15.1728 0.446435 15.1419 0.37316C15.111 0.299886 15.0657 0.233549 15.0087 0.178066C14.8919 0.0639098 14.735 0 14.5716 0C14.4083 0 14.2514 0.0639098 14.1345 0.178066V0.179375Z"
                fill={selected ? "#fff" : "#6A7282"}
              />
            </svg>
          </button>
          {form && (
            <div className="border-t border-stroke">
              {serviceId.map((id) => {
                const isSelected = id === selected;

                return (
                  <button
                    onClick={() => chooseService(id)}
                    className={`block w-full px-3 py-2.5 text-left text-[11px] md:text-[14px] font-bold ${
                      isSelected
                        ? "bg-primary text-white"
                        : "text-stroke hover:bg-gray-100"
                    } border-b border-stroke last:border-b-0`}
                    key={id}
                  >
                    {id}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="hidden lg:block">
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
          {text}
        </p>
        <div className="grid grid-cols-3 gap-4">
          {serviceId.map((id) => {
            const isSelected = id === selected;

            return (
              <button
                type="button"
                onClick={() => chooseService(id)}
                className={`cursor-pointer rounded-[14px] border-2 px-4 py-3 text-[13px] font-bold transition-colors ${
                  isSelected
                    ? "border-primary bg-primary text-white shadow-[0_10px_24px_-16px_rgba(2,126,111,0.8)]"
                    : "border-stroke bg-white text-stroke hover:bg-gray-50"
                }`}
                key={id}
              >
                {id}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CleaningType;
