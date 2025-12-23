import BookHeroButton from '../../Components/UI/BookHeroButton';
import CalculatePriceButton from '../../Components/UI/CalculatePriceButton';
import heroMobile from '../../Media/images/Hero-section-mobile.webp';
import heroTablet from '../../Media/images/Hero-section-768px.webp';
import heroPc from '../../Media/images/Hero-Section-1028px.webp';
import heroContainer from '../../Media/images/Hero-Mobile-Container.webp';




const Hero = () => {
  return (
    <>
    <div>
        <div className='min-[1028px]:flex min-[1028px]:items-end min-[1028px]:justify-between min-[1028px]:gap-8 min-[1028px]:mb-12'>
          <div className='max-w-lg'>
          <h1 className="text-6xl sm:text-7xl font-bold text-primary">Koe Luonnon Raikkaus</h1>
          <p className="mt-3.5 text-xl max-w-[485px]">Ammattitaitoinen ja ekologinen siivous, joka muuttaa kotisi rauhan tyyssijaksi. Tuomme kiillon takaisin kotiisi.</p>
          </div>
          <div className='hidden min-[1028px]:flex min-[1028px]:flex-row min-[1028px]:items-end min-[1028px]:gap-3'>
            <CalculatePriceButton label="Laske hinta" />
            <BookHeroButton label="Varaa siivous" />
          </div>
        </div>
        <div className='mt-4.5 min-[680px]:inline-grid min-[680px]:grid-cols-[max-content_max-content] min-[680px]:items-end min-[680px]:justify-start min-[680px]:gap-6 md:grid md:justify-center md:w-full min-[1028px]:block'>
          <div className='flex justify-center min-[680px]:justify-start md:justify-center min-[1028px]:justify-start'>
            <div className='relative inline-flex rounded-[48px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden w-fit min-[1028px]:w-full'>
              <picture className='relative z-0'>
                <source media="(min-width: 1028px)" srcSet={heroPc} />
                <source media="(min-width: 600px)" srcSet={heroTablet} />
                <img className='rounded-[48px] w-full h-auto' src={heroMobile} alt="Hero Image" />
              </picture>
              <img
                className='absolute bottom-4 left-4 z-10 w-[140px] min-[600px]:w-40 min-[1028px]:w-[200px] h-auto pointer-events-none'
                src={heroContainer}
                alt=""
                aria-hidden="true"
              />
            </div>
          </div>
          <div className='mt-9 flex justify-center gap-4 min-[680px]:mt-0 min-[680px]:flex-col min-[680px]:items-end min-[680px]:gap-3 min-[680px]:self-end md:items-center md:self-auto min-[1028px]:hidden'>
            <CalculatePriceButton label="Laske hinta" />
            <BookHeroButton label="Varaa siivous" />
          </div>
        </div>
    </div>
    </>
  )
}

export default Hero
