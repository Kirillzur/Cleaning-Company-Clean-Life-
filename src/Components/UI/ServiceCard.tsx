import type { MouseEventHandler } from 'react'
import ReadMoreButton from './ReadMoreButton'

type ServiceCardProps = {
  image: string
  tabletImage?: string
  pcImage?: string
  icon: string
  title: string
  buttonText: string
  onReadMore?: MouseEventHandler<HTMLButtonElement>
  className?: string
  buttonClassName?: string
}

const ServiceCard = ({
  image,
  tabletImage,
  pcImage,
  icon,
  title,
  buttonText,
  onReadMore,
  className,
  buttonClassName,
}: ServiceCardProps) => {
  return (
    <div className={`relative w-full max-w-[340px] ${className ?? ''}`.trim()}>
      <picture>
        {pcImage ? <source media="(min-width: 1480px)" srcSet={pcImage} /> : null}
        {tabletImage ? <source media="(min-width: 768px)" srcSet={tabletImage} /> : null}
        <img className="w-full h-auto md:h-full md:object-cover" src={image} alt={title} />
      </picture>
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 pb-4">
        <div className="self-start ml-8">
          <img className="h-10 w-10" src={icon} alt="" aria-hidden="true" />
        </div>
        <h3 className="text-[24px] font-bold text-white">{title}</h3>
        <div className="mb-4 ">
          <ReadMoreButton label={buttonText} onClick={onReadMore} className={buttonClassName} />
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
