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
import muuttosiivous500px from '../Media/images/MuuttoSiivous500px.webp'
import kotisiivous500px from '../Media/images/KotiSiivous500px.webp'
import toimistosiivous500px from '../Media/images/ToimistoSiivous500px.webp'


export type serviceId = "Kotisiivous" | "ToimistoSiivous" | "MuuttoSiivous";

export interface ResponsiveImages {
  mobile: string;
  middle: string;
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
  pageLabel?: string;
}

export const services: Service[] = [
  {
    id: "Kotisiivous",
    image: {
      mobile: kotisiivousImage,
      middle: kotisiivous500px,
      tablet: kotisiivousTabletImage,
      desktop: kotisiivousPcImage,
    },
    icon: kotisiivousIcon,
    title: "Kotisiivous",
    buttonText: "Lue lisää",
    pageLabel: '/Kotisiivous'
  },
  {
    id: "ToimistoSiivous",
    image: {
      mobile: toimistoSiivousImage,
      middle: toimistosiivous500px,
      tablet: toimistoSiivousTabletImage,
      desktop: toimistoSiivousPcImage,
    },
    icon: toimistoSiivousIcon,
    title: "ToimistoSiivous",
    buttonText: "Lue lisää",
    pageLabel: '/ToimistoSiivous'
  },
  {
    id: "MuuttoSiivous",
    image: {
      mobile: muuttoSiivousImage,
      middle: muuttosiivous500px,
      tablet: muuttoSiivousTabletImage,
      desktop: muuttoSiivousPcImage,
    },
    icon: muuttoSiivousIcon,
    title: "MuuttoSiivous",
    buttonText: "Lue lisää",
    pageLabel: '/MuuttoSiivous'
  },
];
