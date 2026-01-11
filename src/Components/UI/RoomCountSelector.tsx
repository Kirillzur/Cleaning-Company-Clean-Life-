import { useState } from "react";
import type { RoomValue } from "@/data/pricing";

interface RoomOption {
  label: string;
  value: RoomValue;
}

interface RoomCountSelectorProps {
  text: string;
  options: readonly RoomOption[];
  value?: RoomValue | null;
  onChange?: (value: RoomValue) => void;
}

const RoomCountSelector = ({
  text,
  options,
  value,
  onChange,
}: RoomCountSelectorProps) => {
  const [form, setForm] = useState(false);
  const selectedOption =
    options.find((option) => option.value === value) ?? 0;
  const values = options.map((option) => option.value);
  const minValue = values.length ? Math.min(...values) : 1;
  const maxValue = values.length ? Math.max(...values) : minValue;
  const currentValue = selectedOption ? selectedOption.value : minValue;
  const progress =
    maxValue === minValue
      ? 0
      : ((currentValue - minValue) / (maxValue - minValue)) * 100;

  const openForm = () => {
    setForm(true);
  };

  const selectOption = (option: RoomOption) => {
    setForm(false);
    onChange?.(option.value);
  };

  return (
    <div>
      <div className="relative inline-block w-full lg:hidden">
        <div className=" md:w-full rounded-[14px] border-2 border-stroke bg-white overflow-hidden">
          <button
            onClick={openForm}
            className={`cursor-pointer flex w-full items-center justify-between gap-3 px-3 py-2.5 text-[11px] md:text-[14px] font-bold text-stroke text-height-10" ${
              selectedOption ? "bg-primary text-white " : "bg-white text-stroke"
            }`}
          >
            {selectedOption ? selectedOption.label : text}
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1345 0.179375L7.59372 6.55528L1.05292 0.179375C0.936065 0.0652191 0.779184 0.00130859 0.615822 0.00130859C0.45246 0.00130859 0.29558 0.0652191 0.178722 0.179375C0.122138 0.234816 0.0771843 0.300991 0.0464957 0.374023C0.0158071 0.447056 0 0.525478 0 0.604697C0 0.683915 0.0158071 0.762337 0.0464957 0.83537C0.0771843 0.908402 0.122138 0.974577 0.178722 1.03002L7.13699 7.81423C7.25919 7.93334 7.42308 8 7.59372 8C7.76436 8 7.92825 7.93334 8.05045 7.81423L15.0087 1.03133C15.0657 0.975845 15.111 0.909507 15.1419 0.836233C15.1728 0.762958 15.1888 0.68423 15.1888 0.604697C15.1888 0.525163 15.1728 0.446435 15.1419 0.37316C15.111 0.299886 15.0657 0.233549 15.0087 0.178066C14.8919 0.0639098 14.735 0 14.5716 0C14.4083 0 14.2514 0.0639098 14.1345 0.178066V0.179375Z"
                fill={selectedOption ? "#fff" : "#6A7282"}
              />
            </svg>
          </button>
          {form && (
            <div>
              {options.map((option) => {
                const isSelected = option.value === value;
                return (
                  <button
                    onClick={() => selectOption(option)}
                    className={`block w-full px-3 py-2.5 text-left text-[11px] font-bold ${
                      isSelected
                        ? "bg-primary text-white"
                        : "text-stroke hover:bg-gray-100"
                    } border-b border-stroke last:border-b-0`}
                    key={option.label}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
            {text}
          </p>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-[16px] font-bold text-primary border-2 border-stroke">
            {currentValue}
          </span>
        </div>
        <div className="mt-3">
          <input
            type="range"
            min={minValue}
            max={maxValue}
            step={1}
            value={currentValue}
            onChange={(event) => {
              const nextValue = Number(event.target.value);
              const nextOption = options.find(
                (option) => option.value === nextValue,
              );

              if (nextOption) {
                onChange?.(nextOption.value);
              }
            }}
            className="price-range w-full"
            style={{
              background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${progress}%, var(--secondary) ${progress}%, var(--secondary) 100%)`,
            }}
            aria-label={text}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] text-stroke">
          <span>Yksio</span>
          <span>6+</span>
        </div>
      </div>
    </div>
  );
};

export default RoomCountSelector;
