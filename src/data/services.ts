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


export type ServiceId = "kotisiivous" | "toimisto-siivous" | "muutto-siivous";

export interface ResponsiveImages {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Service {
  id: ServiceId;
  image: ResponsiveImages;
  icon: string;
  title: string;
  buttonText: string;
}

export const services: Service[] = [
  {
    id: "kotisiivous",
    image: {
      mobile: kotisiivousImage,
      tablet: kotisiivousTabletImage,
      desktop: kotisiivousPcImage,
    },
    icon: kotisiivousIcon,
    title: "Kotisiivous",
    buttonText: "Lue lisää",
  },
  {
    id: "toimisto-siivous",
    image: {
      mobile: toimistoSiivousImage,
      tablet: toimistoSiivousTabletImage,
      desktop: toimistoSiivousPcImage,
    },
    icon: toimistoSiivousIcon,
    title: "ToimistoSiivous",
    buttonText: "Lue lisää",
  },
  {
    id: "muutto-siivous",
    image: {
      mobile: muuttoSiivousImage,
      tablet: muuttoSiivousTabletImage,
      desktop: muuttoSiivousPcImage,
    },
    icon: muuttoSiivousIcon,
    title: "MuuttoSiivous",
    buttonText: "Lue lisää",
  },
];
