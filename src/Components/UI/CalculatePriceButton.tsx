

interface CalculatePriceButtonProps  {
  label: string
} 

const CalculatePriceButton = ({ label }: CalculatePriceButtonProps) => {
  return (
    <button className="text-[16px] cursor-pointer bg-white text-primary border-stroke border-2 px-3 py-2.5 rounded-4xl font-bold hover:bg-[#f0f0f0] transition-color font-secondary ml-2.5 min-[680px]:ml-0 w-[137px] shrink-0">{label}</button>
  )
}

export default CalculatePriceButton
