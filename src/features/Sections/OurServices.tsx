import kotisiivousImage from '../../Media/images/Kotisiivous-Container.png'
import toimistoSiivousImage from '../../Media/images/Toimisto-Siivous-Container.png'
import muuttoSiivousImage from '../../Media/images/Muutto-Siivous-Container.png'
import kotisiivousTabletImage from '../../Media/images/KotiSiivousTablet.png'
import toimistoSiivousTabletImage from '../../Media/images/ToimistoSiivousTablet.png'
import muuttoSiivousTabletImage from '../../Media/images/MuuttoSiivousTablet.png'
import kotisiivousPcImage from '../../Media/images/KotiSiivousPc.png'
import toimistoSiivousPcImage from '../../Media/images/ToimistoSiivousPc.png'
import muuttoSiivousPcImage from '../../Media/images/MuuttoSiivousPc.png'
import kotisiivousIcon from '../../Media/Icons/KotiSiivous.svg'
import toimistoSiivousIcon from '../../Media/Icons/ToimistoSiivous.svg'
import muuttoSiivousIcon from '../../Media/Icons/MuuttoSiivous.svg'
import ServiceCard from '../../Components/UI/ServiceCard'
import ServiceInfoContainer from '../../Components/UI/ServiceInfoContainer'

const services = [
  {
    id: 'kotisiivous',
    image: kotisiivousImage,
    tabletImage: kotisiivousTabletImage,
    pcImage: kotisiivousPcImage,
    icon: kotisiivousIcon,
    title: 'Kotisiivous',
    buttonText: 'Lue lisää',
  },
  {
    id: 'toimisto-siivous',
    image: toimistoSiivousImage,
    tabletImage: toimistoSiivousTabletImage,
    pcImage: toimistoSiivousPcImage,
    icon: toimistoSiivousIcon,
    title: 'ToimistoSiivous',
    buttonText: 'Lue lisää',
  },
  {
    id: 'muutto-siivous',
    image: muuttoSiivousImage,
    tabletImage: muuttoSiivousTabletImage,
    pcImage: muuttoSiivousPcImage,
    icon: muuttoSiivousIcon,
    title: 'MuuttoSiivous',
    buttonText: 'Lue lisää',
  },
]

const OurServices = () => {
  return (
    <>
    <div>
        <div className='text-center'>
            <h3 className='text-primary font-bold text-[14px] mb-1.5'>Mitä Teemme</h3>
            <h2 className='text-primary font-bold text-4xl'>Palvelumme</h2>
        </div>
          <div className="mt-8 flex flex-col items-center xl:flex-row xl:items-start xl:justify-center">
            <div className="grid grid-cols-1 gap-3 justify-items-center md:grid-cols-2 md:max-w-[704px] md:mr-12 2xl:mr-7 2xl:max-w-[950px] 2xl:gap-[13px]">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  image={service.image}
                  tabletImage={service.tabletImage}
                  pcImage={service.pcImage}
                  icon={service.icon}
                  title={service.title}
                  buttonText={service.buttonText}
                  className={
                      index === services.length - 1
                      ? 'md:col-span-2 md:justify-self-center md:max-w-none md:w-[704px] md:h-[340px] max-md:w-full max-md:max-w-[330px] 2xl:w-[950px] 2xl:h-auto 2xl:max-w-none'
                      : 'md:w-[340px] md:h-[330px] max-md:w-full max-md:max-w-[330px]  2xl:w-[466px] 2xl:h-auto 2xl:max-w-none'
                  }
                  buttonClassName={index === services.length - 1 ? 'md:px-73 2xl:px-90' : ''}
                />
              ))}
            </div>
            <div className="hidden xl:grid grid-cols-1 gap-5.5 justify-items-center xl:grid-cols-2 xl:max-w-[704px]">
              <ServiceInfoContainer title="70+" description='Iloista Asiakasta' />
              <ServiceInfoContainer title="9" description='TyönTekijää' />
              <div className="xl:col-span-2 xl:justify-self-center">
                <ServiceInfoContainer
                  title="16v"
                  description='TyöKokemusta'
                  className="xl:w-[464px] xl:h-[220px]"
                />
              </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default OurServices
