import ContactForm from '../../Components/UI/ContactForm'
import Yhteystiedot from '../../Components/UI/Yhteystiedot'

const Contact = () => {
  return (
    <section
      id="yhteystiedot"
      className="relative -mb-1.5 md:-mb-5 mt-13 md:mt-33 bg-background_secondary shadow-[0_0_0_100vmax_#FCFCF5] [clip-path:inset(0_-100vmax)]"
    >
      <div className="mx-auto max-w-[1480px] px-4 py-14 sm:px-6 md:px-8 lg:px-10 md:py-18">
        <div className="text-center">
          <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-primary">
            Ota yhteyttä
          </p>
          <h2 className="mt-2 text-4xl font-bold text-primary sm:text-5xl">
            Ota Yhteyttä Meihin
          </h2>
          <p className="mt-3 text-base text-light_gray sm:text-lg">
            Onko sinulla kysyttävää? Haluatko varata siivouksen? Lähetä meille
            viesti tai soita!
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-8 min-[1028px]:flex-row min-[1028px]:items-start min-[1028px]:justify-center">
          <ContactForm />
          <Yhteystiedot />
        </div>
      </div>
    </section>
  )
}

export default Contact
