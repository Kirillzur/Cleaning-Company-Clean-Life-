import OwnerComment from '../../Components/UI/OwnerComment'
import ServiceCard from '../../Components/UI/ServiceCard'
import ServiceInfoContainer from '../../Components/UI/ServiceInfoContainer'
import { services } from '../../data/services'



const OurServices = () => { 
  return (
    <>
    <div id='services' className='mt-13 md:mt-33'>
        <div className='text-center'>
            <h3 className='text-primary font-bold uppercase text-[14px] tracking-widest mb-1.5'>Meidän</h3>
            <h2 className='text-primary font-bold text-4xl'>Palvelumme</h2>
        </div>
          <div className="mt-8 flex flex-col items-center xl:flex-row xl:items-start xl:justify-center">
            <div className="grid grid-cols-1 gap-3 sm:gap-5 md:gap-3 justify-items-center md:grid-cols-2 md:w-full md:max-w-176 xl:mr-12 2xl:mr-7 2xl:max-w-237.5 2xl:gap-3.25">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  image={service.image}
                  icon={service.icon}
                  title={service.title}
                  buttonText={service.buttonText}
                  pageLabel={service.pageLabel}
                  className={
                      index === services.length - 1
                      ? 'md:col-span-2 md:justify-self-stretch  2xl:w-full 2xl:h-auto 2xl:max-w-none'
                      : 'md:w-85  max-md:w-full 2xl:w-116.5 2xl:h-auto 2xl:max-w-none'
                  }
                  buttonClassName={index === services.length - 1 ? 'md:px-73 2xl:px-90' : ''}
                />
              ))}
            </div>
            <div className="hidden xl:grid grid-cols-1 gap-5.5 justify-items-center xl:grid-cols-2 xl:max-w-176">
              <ServiceInfoContainer title="70+" description='Iloista Asiakasta' />
              <ServiceInfoContainer title="9" description='TyönTekijää' />
              <div className="xl:col-span-2 xl:justify-self-center">
                <ServiceInfoContainer
                  title="16v"
                  description='TyöKokemusta'
                  className="xl:w-116 xl:h-55"
                />
                 <OwnerComment title={`"Tehtävämme on tarjota puhdas ja terveellinen ympäristö sinulle ja perheellesi."`} name="Janne Hirvonen" description="Perustaja, CleanLife" />
              </div>
            </div>
          </div>

    </div>
    </>
  )
}

export default OurServices
