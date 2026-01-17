import BookHeroButton from "@/Components/UI/BookHeroButton"
import PriceCalculator from "../Sections/PriceCalculator"
import Contact from "../Sections/Contact"


const Kotisiivous = () => {
  return (
    <>
    <div className="mb-5">
      <div className=" items-center flex flex-col  mx-auto">
        <h2 className="text-primary text-center flex mb-4.5 font-bold text-2xl max-w-[250px] sm:max-w-[350px] md:max-w-[500px] sm:text-3xl sm600:text-4xl md:text-5xl">Kotisiivous Ammattitaidolla</h2>
        <BookHeroButton label="Varaa siivous"/>
      </div>
      <div className="mx-auto mt-6 max-w-3xl text-[15px] leading-relaxed text-[#3b3b3b] sm:text-base sm:leading-7 md:text-lg md:leading-8 space-y-4">
        <p>Kotisiivous on helppo tapa vapauttaa aikaa tärkeämpiin asioihin.
           Tarjoamme ammattitaitoista ja joustavaa kotisiivousta, joka mukautuu juuri sinun tarpeisiisi – olipa kyseessä säännöllinen ylläpitosiivous tai kertaluonteinen perusteellisempi siivous.</p>
        <p>Käytämme laadukkaita ja turvallisia siivousaineita sekä huolellisesti koulutettua henkilökuntaa.
           Työ tehdään aina sovitussa aikataulussa ja sovitun sisällön mukaisesti.</p>
           <h3 className="mt-6 text-primary font-bold text-lg sm:text-xl md:text-2xl">Mitä kotisiivous sisältää?</h3>
           <p>Kotisiivouksen sisältö voidaan räätälöidä, mutta tyypillisesti se sisältää:</p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Lattioiden imurointi ja moppaus</li>
          <li>Pölyjen pyyhintä tasopinnoilta</li>
          <li>Keittiön siivous (työtasot, liesi, altaat, ulkopinnat)</li>
          <li>Kylpyhuoneen ja WC:n siivous (pesualtaat, WC-istuin, suihku, peilit)</li>
          <li>Roskien poisto</li>
          <li>Peilien ja lasipintojen pyyhintä</li>
          <li>Mattojen imurointi</li>
        </ul>
        <p>Lisäpalveluina voidaan sopia esimerkiksi:</p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Uunin tai jääkaapin puhdistus</li>
          <li>Ikkunanpesu</li>
          <li>Vaatekaappien tai kaappien sisäpuhdistus</li>
        </ul>
        <h3 className="mt-6 text-primary font-bold text-lg sm:text-xl md:text-2xl">Kenelle kotisiivous sopii?</h3>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Kiireisille perheille</li>
          <li>Yksinasuville ja senioreille</li>
          <li>Etätyötä tekeville</li>
          <li>Kaikille, jotka arvostavat siistiä kotia ilman vaivaa</li>
        </ul>
        <h3 className="mt-6 text-primary font-bold text-lg sm:text-xl md:text-2xl">Hyvä tietää</h3>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Voit valita kertasiivouksen tai säännöllisen siivouksen</li>
          <li>Kaikki siivoojamme ovat luotettavia ja vakuutettuja</li>
          <li>Palvelu voidaan toteuttaa arkisin tai sopimuksen mukaan</li>
        </ul>
      </div>
      <PriceCalculator />
      <Contact/>
    </div>
    </>
  )
}

export default Kotisiivous
