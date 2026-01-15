import BookHeroButton from '../../Components/UI/BookHeroButton';
import CalculatePriceButton from '../../Components/UI/CalculatePriceButton';
import heroMobile from '../../Media/images/Hero-section-mobile.webp';
import heroTablet from '../../Media/images/Hero-section-768px.webp';
import heroPc from '../../Media/images/Hero-Section-1028px.webp';




const Hero = () => {
  return (
    <>
    <div>
        <div className=' min-[1028px]:flex min-[1028px]:items-end min-[1028px]:justify-between min-[1028px]:gap-8 min-[1028px]:mb-12'>
          <div className='max-w-lg'>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">Siivouspalvelut Pääkaupunki seudulla koteihin ja yrityksille</h1>
          <p className="mt-5.5 text-[#1b1b1b] text-xl max-w-[485px]">Tarjoamme laadukasta ja huolellista siivousta Helsingissä, Vantaalla sekä Espoossa koteihin ja yrityksille.</p>
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
