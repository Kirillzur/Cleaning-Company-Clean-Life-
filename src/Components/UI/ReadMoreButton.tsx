import type { MouseEventHandler } from 'react'

interface ReadMoreButtonProps {
  label: string
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}



const ReadMoreButton = ({ label, onClick, className }: ReadMoreButtonProps) => {
   
  return (
    <button
      className={`bg-secondary cursor-pointer text-primary font-bold px-20 py-2 rounded-full hover:bg-background_secondary transition-colors duration-300 md:px-25 2xl:px-35 ${className ?? ''}`.trim()}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default ReadMoreButton
