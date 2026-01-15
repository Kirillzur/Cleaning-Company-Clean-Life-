import { useState, type MouseEventHandler } from 'react'
import type { ResponsiveImages } from '../../data/services'
import ReadMoreButton from './ReadMoreButton'

interface ServiceCardProps {
  image: ResponsiveImages
  icon: string
  title: string
  buttonText: string
  onReadMore?: MouseEventHandler<HTMLButtonElement>
  className?: string
  buttonClassName?: string
  readMoreLabel?: string[];
}

const ServiceCard = ({
  image,
  icon,
  title,
  buttonText,
  className,
  readMoreLabel,
  buttonClassName: buttonClassNameProp,
}: ServiceCardProps) => {
  const [readMoreLabelState, setReadMoreLabel] = useState(false);

   const openLabel = () => {
     setReadMoreLabel(true);
   };
   const closeLabel = () => {
      setReadMoreLabel(false);
   }

  const imageClassName = [
    'transition-opacity duration-300',
    readMoreLabelState ? 'opacity-15' : 'opacity-100',
  ].join(' ');

  const buttonClassName = [
    ' transition-opacity duration-300',
    readMoreLabelState ? 'opacity-0' : 'opacity-100',
    buttonClassNameProp ?? '',
  ].join(' ').trim();

  return (
    <div className={`relative w-full max-w-[340px] ${className ?? ''}`.trim()}>
      <picture>
        <source media="(min-width: 1480px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <img className={imageClassName} src={image.mobile} alt={title} />
      </picture>
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 pb-4">
        <div className="self-start ml-8">
          <img className="h-10 w-10" src={icon} alt="" aria-hidden="true" />
        </div>
        <h3 className="text-[24px] font-bold text-white">{title}</h3>
        <div className="mb-4 ">
          <ReadMoreButton label={buttonText} onClick={openLabel} className={buttonClassName} />
        </div>
      </div>
       {readMoreLabelState && (
          <div className="absolute inset-0 flex flex-col p-6">
          <ul className="list-disc list-inside space-y-2 text-left mt-3 md:mt-6">
          {readMoreLabel?.map((readMoreItem) => (
            <li key={readMoreItem} className="text-stroke font-medium leading-relaxed">
              {readMoreItem}
            </li>
          ))}
          </ul>
            <button
            type="button"
            aria-label="Close sidebar menu"
            onClick={closeLabel}
            className="absolute top-4 right-4 bg-white rounded-full p-1 hover:bg-gray-200 focus:outline-none focus:ring-1"
          >
            <svg
              width="34"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#0E101A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          </div>
          
        )
         }
    </div>
  )
}

export default ServiceCard
