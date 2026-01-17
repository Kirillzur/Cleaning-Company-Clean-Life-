import Contact from '../Sections/Contact'
import PriceCalculator from '../Sections/PriceCalculator'
import BookHeroButton from '@/Components/UI/BookHeroButton'

const Muuttosiivous = () => {
  return (
    <>
    <div className="mb-5">
      <div className=" items-center flex flex-col  mx-auto">
        <h2 className="text-primary text-center flex mb-4.5 font-bold text-2xl max-w-[250px] sm:max-w-[350px] md:max-w-[500px] sm:text-3xl sm600:text-4xl md:text-5xl">Muuttosiivous Ammattitaidolla</h2>
        <BookHeroButton label="Varaa siivous"/>
      </div>
      <div className="mx-auto mt-6 max-w-3xl text-[15px] leading-relaxed text-[#3b3b3b] sm:text-base sm:leading-7 md:text-lg md:leading-8 space-y-4">
        <p>
          Muuttosiivous on yksi muuton tärkeimmistä vaiheista. Ammattimaisesti tehty muuttosiivous
          varmistaa, että asunto täyttää vuokranantajan tai ostajan vaatimukset ja säästää sinut
          stressiltä sekä lisäkustannuksilta.
        </p>
        <p>
          Me huolehdimme siitä, että asunto siivotaan perusteellisesti ja tarkasti – lattiasta
          kattoon.
        </p>
        <h3 className="mt-6 text-primary font-bold text-lg sm:text-xl md:text-2xl">
          Mitä muuttosiivous sisältää?
        </h3>
        <p>Muuttosiivous on normaalia siivousta perusteellisempi ja sisältää mm.:</p>
        <p className="font-semibold text-text">Kaikissa tiloissa</p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Lattioiden imurointi ja pesu</li>
          <li>Pölyjen pyyhintä kaikilta pinnoilta</li>
          <li>Kaappien ja hyllyjen pyyhintä sisältä ja ulkoa</li>
          <li>Ovien, ovenkahvojen ja listojen puhdistus</li>
        </ul>
        <p className="font-semibold text-text">Keittiö</p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Uunin ja liesitason puhdistus</li>
          <li>Jääkaapin ja pakastimen puhdistus</li>
          <li>Kaappien ja työtasojen puhdistus</li>
          <li>Altaan ja hanan puhdistus</li>
        </ul>
        <p className="font-semibold text-text">Kylpyhuone ja WC</p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>WC-istuimen, suihkun ja lavuaarin puhdistus</li>
          <li>Kaakelien ja saumojen pesu</li>
          <li>Lattiakaivon puhdistus</li>
          <li>Peilien ja lasipintojen puhdistus</li>
        </ul>
        <h3 className="mt-6 text-primary font-bold text-lg sm:text-xl md:text-2xl">
          Hyvä tietää ennen muuttosiivousta
        </h3>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Asunnon tulee olla tyhjä huonekaluista</li>
          <li>Sähkön ja veden on oltava käytettävissä</li>
          <li>Ikkunanpesu voidaan tilata lisäpalveluna</li>
          <li>Työ tehdään tarkistuslistan mukaan</li>
        </ul>
        <p>
          Muuttosiivous antaa sinulle mielenrauhan ja varmuuden siitä, että luovutat asunnon
          moitteettomassa kunnossa.
        </p>
      </div>
      <PriceCalculator />
      <Contact/>
    </div>
    </>
  )
}

export default Muuttosiivous
