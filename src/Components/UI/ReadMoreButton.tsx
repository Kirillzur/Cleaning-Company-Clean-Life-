import type { MouseEventHandler } from 'react'

type ReadMoreButtonProps = {
  label: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

const ReadMoreButton = ({ label, onClick, className }: ReadMoreButtonProps) => {
  return (
    <button
      className={`bg-secondary cursor-pointer text-primary font-bold px-20 py-2 rounded-full hover:bg-secondary transition-colors duration-300 md:px-25 2xl:px-35 ${className ?? ''}`.trim()}
      onClick={onClick}
    >
      <a href="#">{label}</a>
    </button>
  )
}

export default ReadMoreButton
