import kotisiivousImage from '../Media/images/Kotisiivous-Container.webp'
import kotisiivousTabletImage from '../Media/images/KotiSiivousTablet.webp'
import kotisiivousPcImage from '../Media/images/KotiSiivousPc.webp'
import toimistoSiivousImage from '../Media/images/Toimisto-Siivous-Container.webp'
import toimistoSiivousTabletImage from '../Media/images/ToimistoSiivousTablet.webp'
import toimistoSiivousPcImage from '../Media/images/ToimistoSiivousPc.webp'
import muuttoSiivousImage from '../Media/images/Muutto-Siivous-Container.webp'
import muuttoSiivousTabletImage from '../Media/images/MuuttoSiivousTablet.webp'
import muuttoSiivousPcImage from '../Media/images/MuuttoSiivousPc.webp'
import kotisiivousIcon from '../Media/Icons/KotiSiivous.svg'
import toimistoSiivousIcon from '../Media/Icons/ToimistoSiivous.svg'
import muuttoSiivousIcon from '../Media/Icons/MuuttoSiivous.svg'


export type serviceId = "Kotisiivous" | "ToimistoSiivous" | "MuuttoSiivous";

export interface ResponsiveImages {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Service {
  id: serviceId;
  image: ResponsiveImages;
  icon: string;
  title: string;
  buttonText: string;
  readMoreLabel?: string[];
}

export const services: Service[] = [
  {
    id: "Kotisiivous",
    image: {
      mobile: kotisiivousImage,
      tablet: kotisiivousTabletImage,
      desktop: kotisiivousPcImage,
    },
    icon: kotisiivousIcon,
    title: "Kotisiivous",
    buttonText: "Lue lisää",
    readMoreLabel: [
      "Pölyjen pyyhintä pinnoilta",
      "Lattioiden imurointi ja pesu",
      "Keittiön tasojen, altaan ja kodinkoneiden ulkopintojen puhdistus",
      "WC- ja kylpyhuonetilojen siivous",
      "Roskien vienti"
    ]
  },
  {
    id: "ToimistoSiivous",
    image: {
      mobile: toimistoSiivousImage,
      tablet: toimistoSiivousTabletImage,
      desktop: toimistoSiivousPcImage,
    },
    icon: toimistoSiivousIcon,
    title: "ToimistoSiivous",
    buttonText: "Lue lisää",
    readMoreLabel: [
      "Työpisteiden ja yhteisten pintojen puhdistus",
      "Lattioiden imurointi ja pesu",
      "Keittiö- ja taukotilojen siivous",
      "WC-tilojen puhdistus",
      "Roskien tyhjennys"
    ]
  },
  {
    id: "MuuttoSiivous",
    image: {
      mobile: muuttoSiivousImage,
      tablet: muuttoSiivousTabletImage,
      desktop: muuttoSiivousPcImage,
    },
    icon: muuttoSiivousIcon,
    title: "MuuttoSiivous",
    buttonText: "Lue lisää",
    readMoreLabel: [
      "Kaikkien pintojen perusteellinen puhdistus",
      "Keittiön kaapit, kodinkoneet ja liesituuletin",
      "Kylpyhuoneen ja WC:n tehopuhdistus",
      "Lattioiden pesu ja listojen pyyhintä",
      "Ikkunoiden pesu"
    ]
  },
];
