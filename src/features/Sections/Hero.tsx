import BookHeroButton from '../../Components/UI/BookHeroButton';
import CalculatePriceButton from '../../Components/UI/CalculatePriceButton';
import heroMobile from '../../Media/images/Hero-section-mobile.png';
import heroTablet from '../../Media/images/Hero-section-768px.png';

const Hero = () => {
  return (
    <>
    <div>
        <div className='max-w-lg'>
        <h1 className="text-6xl sm:text-7xl font-bold text-primary">Koe Luonnon Raikkaus</h1>
        <p className="mt-3.5 text-xl max-w-[485px]">Ammattitaitoinen ja ekologinen siivous, joka muuttaa kotisi rauhan tyyssijaksi. Tuomme kiillon takaisin kotiisi.</p>
        </div>
        <div className='mt-4.5 min-[500px]:grid min-[500px]:grid-cols-[minmax(0,1fr)_auto] min-[500px]:items-end min-[500px]:gap-6 min-[768px]:gap-10'>
          <picture className='inline-flex mx-auto min-[500px]:mx-0 rounded-[48px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden w-fit'>
            <source media="(min-width: 600px)" srcSet={heroTablet} />
            <img className='rounded-[48px]' src={heroMobile} alt="Hero Image" />
          </picture>
          <div className='mt-9 flex justify-center gap-4 min-[500px]:mt-0 min-[500px]:flex-col min-[500px]:items-end min-[500px]:gap-3'>
            <CalculatePriceButton/>
            <BookHeroButton/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Hero
