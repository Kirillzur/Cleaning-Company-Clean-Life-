

interface PriceCalculatorButtonProps {
  label: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const PriceCalculatorButton = ({
  label,
  type = "button",
}: PriceCalculatorButtonProps) => {
  return (
    <button
      type={type}
      className=
        "cursor-pointer w-full max-w-[420px] rounded-[14px] bg-secondary px-6 py-3 text-[16px] font-bold text-primary shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),_0_8px_10px_-6px_rgba(0,0,0,0.10)] transition-colors hover:bg-[#f2f2f2] font-secondary" 
    >
      {label}
    </button>
  );
};

export default PriceCalculatorButton;
