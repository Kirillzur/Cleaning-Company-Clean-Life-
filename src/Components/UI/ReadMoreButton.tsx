import { useNavigate } from 'react-router-dom';

interface ReadMoreButtonProps {
  label: string
  className?: string
  pageLabel?: string;
}



const ReadMoreButton = ({ label, className, pageLabel }: ReadMoreButtonProps) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(pageLabel || '/');
  }

  return (
    <button
      className={`bg-secondary cursor-pointer text-primary font-bold px-20 py-2 rounded-full hover:bg-background_secondary transition-colors duration-300 md:px-25 2xl:px-35 ${className ?? ''}`.trim()}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default ReadMoreButton
