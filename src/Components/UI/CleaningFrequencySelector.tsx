import type { CleaningFrequency } from "@/data/pricing";

interface CleaningFrequencySelectorProps {
  text: string;
  options: readonly CleaningFrequency[];
  value?: CleaningFrequency | null;
  onChange?: (value: CleaningFrequency) => void;
}

const CleaningFrequencySelector = ({
  text,
  options,
  value,
  onChange,
}: CleaningFrequencySelectorProps) => {
  const chooseFrequency = (frequency: CleaningFrequency) => {
    onChange?.(frequency);
  };

  return (
    <div>
      <div className="relative inline-block w-full lg:hidden">
        <div className="md:w-full rounded-[14px] border-2 border-stroke bg-white overflow-hidden">
          <div className="border-t border-stroke">
            {options.map((option) => {
              const isSelected = option === value;
              return (
                <button
                  onClick={() => chooseFrequency(option)}
                  className={`block w-full px-3 py-2.5 text-left text-[11px] md:text-[14px] font-bold ${
                    isSelected
                      ? "bg-primary text-white"
                      : "text-stroke hover:bg-gray-100"
                  } border-b border-stroke last:border-b-0`}
                  key={option}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:mt-5">
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
          {text}
        </p>
        <div className="grid grid-cols-4 gap-4">
          {options.map((option) => {
            const isSelected = option === value;

            return (
              <button
                type="button"
                onClick={() => chooseFrequency(option)}
                className={`cursor-pointer rounded-[14px] border-2 px-3 py-3 text-[13px] font-bold transition-colors ${
                  isSelected
                    ? "border-primary bg-primary text-white shadow-[0_10px_24px_-16px_rgba(2,126,111,0.8)]"
                    : "border-stroke bg-white text-stroke hover:bg-gray-50"
                }`}
                key={option}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CleaningFrequencySelector;
