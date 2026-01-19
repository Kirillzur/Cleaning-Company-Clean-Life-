import kotisiivousImage from '../Media/images/Kotisiivous-Container.webp'
import kotisiivousImage2x from '../Media/images/kotisiivousmobile-2x.webp'
import kotisiivousTabletImage from '../Media/images/KotiSiivousTablet.webp'
import kotisiivousTabletImage2x from '../Media/images/kotisiivoustablet-2x.webp'
import kotisiivousPcImage from '../Media/images/KotiSiivousPc.webp'
import kotisiivousPcImage2x from '../Media/images/kotisiivouspc-2x.webp'
import toimistoSiivousImage from '../Media/images/Toimisto-Siivous-Container.webp'
import toimistoSiivousImage2x from '../Media/images/toimistosiivousmobile-2x.webp'
import toimistoSiivousTabletImage from '../Media/images/ToimistoSiivousTablet.webp'
import toimistoSiivousTabletImage2x from '../Media/images/toimistosiivoustablet-2x.webp'
import toimistoSiivousPcImage from '../Media/images/ToimistoSiivousPc.webp'
import toimistoSiivousPcImage2x from '../Media/images/toimistosiivouspc-2x.webp'
import muuttoSiivousImage from '../Media/images/Muutto-Siivous-Container.webp'
import muuttoSiivousImage2x from '../Media/images/muuttosiivousmobile-2x.webp'
import muuttoSiivousTabletImage from '../Media/images/MuuttoSiivousTablet.webp'
import muuttoSiivousTabletImage2x from '../Media/images/muuttosiivoustablet-2x.webp'
import muuttoSiivousPcImage from '../Media/images/MuuttoSiivousPc.webp'
import muuttoSiivousPcImage2x from '../Media/images/muuttosiivouspc-2x.webp'
import kotisiivousIcon from '../Media/Icons/KotiSiivous.svg'
import toimistoSiivousIcon from '../Media/Icons/ToimistoSiivous.svg'
import muuttoSiivousIcon from '../Media/Icons/MuuttoSiivous.svg'
import muuttosiivous500px from '../Media/images/MuuttoSiivous500px.webp'
import muuttosiivous500px2x from '../Media/images/muuttosiivousmiddle500px-2x.webp'
import kotisiivous500px from '../Media/images/KotiSiivous500px.webp'
import kotisiivous500px2x from '../Media/images/kotisiivousmiddle500px-2x.webp'
import toimistosiivous500px from '../Media/images/ToimistoSiivous500px.webp'
import toimistosiivous500px2x from '../Media/images/toimistosiivousmiddle500px-2x.webp'


export type serviceId = "Kotisiivous" | "ToimistoSiivous" | "MuuttoSiivous";

export interface ResponsiveImages {
  mobile: string;
  mobile2x: string;
  middle: string;
  middle2x: string;
  tablet: string;
  tablet2x: string;
  desktop: string;
  desktop2x: string;
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
      mobile2x: kotisiivousImage2x,
      middle: kotisiivous500px,
      middle2x: kotisiivous500px2x,
      tablet: kotisiivousTabletImage,
      tablet2x: kotisiivousTabletImage2x,
      desktop: kotisiivousPcImage,
      desktop2x: kotisiivousPcImage2x,
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
      mobile2x: toimistoSiivousImage2x,
      middle: toimistosiivous500px,
      middle2x: toimistosiivous500px2x,
      tablet: toimistoSiivousTabletImage,
      tablet2x: toimistoSiivousTabletImage2x,
      desktop: toimistoSiivousPcImage,
      desktop2x: toimistoSiivousPcImage2x,
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
      mobile2x: muuttoSiivousImage2x,
      middle: muuttosiivous500px,
      middle2x: muuttosiivous500px2x,
      tablet: muuttoSiivousTabletImage,
      tablet2x: muuttoSiivousTabletImage2x,
      desktop: muuttoSiivousPcImage,
      desktop2x: muuttoSiivousPcImage2x,
    },
    icon: muuttoSiivousIcon,
    title: "MuuttoSiivous",
    buttonText: "Lue lisää",
    pageLabel: '/MuuttoSiivous'
  },
];
