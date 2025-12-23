

type ServiceInfoContainerProps = {
    title: string;
    description: string;
    className?: string;
}

const ServiceInfoContainer = ({ title, description, className }: ServiceInfoContainerProps) => {
  return (
    <>
    <div className={`bg-background_secondary w-56 h-62 rounded-[12px] shadow-[0_6px_9px_rgba(0,0,0,0.20)] text-center flex flex-col items-center justify-center ${className ?? ''}`.trim()}>
        <h3 className="text-text font-bold text-[48px]">{title}</h3>
        <p className="text-light_gray font-bold text-[15px]">{description}</p>
    </div>
    </>
  )
}

export default ServiceInfoContainer
