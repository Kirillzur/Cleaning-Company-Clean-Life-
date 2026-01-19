import Contact from '../Sections/Contact'
import PriceCalculator from '../Sections/PriceCalculator'
import BookHeroButton from '@/Components/UI/BookHeroButton'

const Toimistosiivous = () => {
  return (
    <>
    <div className="mb-5">
      <div className=" items-center flex flex-col  mx-auto">
        <h2 className="text-primary text-center flex mb-4.5 font-bold text-2xl max-w-[250px] sm:max-w-[350px] md:max-w-[500px] sm:text-3xl sm600:text-4xl md:text-5xl">Toimistosiivous Ammattitaidolla</h2>
        <BookHeroButton label="Varaa siivous"/>
      </div>
      <div className="mx-auto mt-6 max-w-3xl text-[15px] leading-relaxed text-[#3b3b3b] sm:text-base sm:leading-7 md:text-lg md:leading-8 space-y-4">
        <p>
          Puhdas ja hyvin hoidettu toimisto lisää työhyvinvointia, parantaa viihtyvyyttä ja antaa
          ammattimaisen ensivaikutelman asiakkaille ja yhteistyökumppaneille. Tarjoamme luotettavaa
          ja joustavaa toimistosiivousta yrityksesi tarpeiden mukaan.
        </p>
        <p>
          Palvelu voidaan toteuttaa säännöllisesti tai kertaluonteisesti, esimerkiksi ennen
          tarkastuksia tai tapahtumia.
        </p>
        <h3 className="mt-6 text-primary font-bold text-lg sm:text-xl md:text-2xl">
          Mitä toimistosiivous sisältää?
        </h3>
        <p>Toimistosiivouksen sisältö sovitaan aina erikseen, mutta se voi sisältää:</p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Lattioiden imurointi ja pesu</li>
          <li>Työpisteiden ja tasojen pölyjen pyyhintä</li>
          <li>Roskien tyhjennys ja kierrätys</li>
          <li>Keittiö- ja taukotilojen siivous</li>
          <li>WC-tilojen siivous ja tarvikkeiden täyttö</li>
          <li>Ovien, kahvojen ja kosketuspintojen puhdistus</li>
        </ul>
        <h3 className="mt-6 text-primary font-bold text-lg sm:text-xl md:text-2xl">Lisäpalvelut</h3>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Ikkunanpesu</li>
          <li>Kokoustilojen erikoissiivous</li>
          <li>Perussiivous tai kausisiivous</li>
        </ul>
        <h3 className="mt-6 text-primary font-bold text-lg sm:text-xl md:text-2xl">
          Kenelle toimistosiivous sopii?
        </h3>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Pienille ja keskisuurille yrityksille</li>
          <li>Toimistoille ja liiketiloille</li>
          <li>Coworking-tiloille</li>
          <li>Palvelualan yrityksille</li>
        </ul>
        <h3 className="mt-6 text-primary font-bold text-lg sm:text-xl md:text-2xl">
          Miksi valita meidät?
        </h3>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Luotettava ja ammattitaitoinen henkilökunta</li>
          <li>Joustavat aikataulut, myös iltaisin</li>
          <li>Selkeä hinnoittelu ja sopimukset</li>
          <li>Tasainen ja laadukas lopputulos</li>
        </ul>
      </div>
      <PriceCalculator />
      <Contact/>
    </div>
    </>
  )
}

export default Toimistosiivous
