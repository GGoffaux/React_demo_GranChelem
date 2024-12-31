import AOLogo from "./assets/Logo_Open_Australie.png";
import RGLogo from "./assets/Logo_RolandGarros.png";
import WLogo from "./assets/Logo_Wimbledon.png";
import USLogo from "./assets/Logo_USOpen.png";


export const GS_SUMMARYDATA = [
  {
    image: AOLogo,
    code: "AustralianOpen",
    title: "Australian Open",
    description:
      "The Australian Open has been hosted at Melbourne Park since 1988, and is the first of the four Grand Slams on the calendar - held every January. ",
  },
  {
    image: RGLogo,
    code : "RolandGarros",
    title: "Roland Garros",
    description:
      "Roland Garros, unofficially known as the French Open, is held over two weeks at the Stade Roland Garros and usually takes place in late May each year. ",
  },
  {
    image: WLogo,
    code : "Wimbledon",
    title: "Wimbledon",
    description:
      "Wimbledon - or The Championships - is the world's oldest tennis tournament, having first been played in 1877. ",
  },
  {
    image: USLogo,
    code : "USOpen",
    title: "US Open",
    description:
      "The US Open, held at the USTA Billie Jean King National Tennis Center in New York, is the second-oldest major sporting event in the USA.",
  },
];

export const GS_2024_data = {
  AustralianOpen : {
    title:"Australian Open",
    dates:"14–28 January 2024",
    menSingles:"Jannik Sinner (ITA)",
    womenSingles: "Aryna Sabalenka (BEL)"
  },
  RolandGarros : {
    title:"Roland Garros",
    dates:"26 May – 9 June 2024",
    menSingles:"Carlos Alcaraz (SPA)",
    womenSingles: "Iga Swiatek (POL)"
  },
  Wimbledon : {
    title:"Wimbledon",
    dates:"1–14 July 2024",
    menSingles:"Carlos Alcaraz (SPA)",
    womenSingles: "Barbora Krejčíková (TCH)"
  },
  USOpen : {
    title:"US Open",
    dates:"August 26 – September 8 2024",
    menSingles:"Jannik Sinner (ITA)",
    womenSingles: "Aryna Sabalenka (BEL)"
  }
};