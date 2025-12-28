
interface BookHeroButtonProps {
  label: string;
}

const BookHeroButton = ({ label }: BookHeroButtonProps) => {
  return (
   <button className="text-[16px] cursor-pointer  bg-primary text-white px-3 py-3 rounded-4xl font-bold hover:bg-[#015a50] transition-color font-secondary w-[137px] shrink-0">{label}</button>
  )
}

export default BookHeroButton
