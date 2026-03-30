import type { CafeListing } from "./cities";

export interface NeighbourhoodData {
  name: string;
  slug: string;
  url: string;
  image: string;
  city: string;
  tagline: string;
  description: string;
  center: [number, number];
  zoom: number;
  cafes: CafeListing[];
}

export const neighbourhoods: NeighbourhoodData[] = [
  {
    name: "Inner West",
    slug: "inner-west",
    url: "/neighbourhood/inner-west",
    image: "https://localcraft.app/wp-content/uploads/2024/08/IMG_3850w.jpg",
    city: "Sydney",
    tagline: "The beating heart of Sydney's specialty coffee scene",
    description:
      "Sydney's Inner West is famous for its eclectic culture, craft breweries, and most importantly, world-class coffee roasters. From Marrickville to St Peters, industrial warehouses have been transformed into coffee institutions.",
    center: [-33.9104, 151.1554], // roughly Marrickville
    zoom: 14,
    cafes: [
      {
        name: "Coffee Alchemy",
        url: "/cafes/coffee-alchemy/",
        image: "https://localcraft.app/wp-content/uploads/2024/01/2022-02-02.jpg",
        suburb: "Marrickville",
        city: "Sydney",
        lat: -33.9104,
        lng: 151.1554,
      },
      {
        name: "Ona Coffee",
        url: "/cafes/ona-coffee/",
        image: "https://localcraft.app/wp-content/uploads/2024/01/ona-coffee-img1.jpg",
        suburb: "Marrickville",
        city: "Sydney",
        lat: -33.9117,
        lng: 151.1562,
      },
      {
        name: "Sample",
        url: "/cafes/sample-st-peters/",
        image: "https://localcraft.app/wp-content/uploads/2024/06/Sample.jpg",
        suburb: "St Peters",
        city: "Sydney",
        lat: -33.9059,
        lng: 151.1793,
      },
    ],
  },
  {
    name: "Surry Hills",
    slug: "surry-hills",
    url: "/neighbourhood/surry-hills",
    image: "https://localcraft.app/wp-content/uploads/2024/08/Neighborhoods_SurryHills-8_e6jwft.jpg",
    city: "Sydney",
    tagline: "Leafy streets and iconic espresso bars",
    description:
      "Surry Hills is a vibrant, leafy neighbourhood packed with some of the most influential cafes in Australia. This is where Sydney's third-wave coffee movement gained momentum and continues to thrive today.",
    center: [-33.8823, 151.2104], // roughly Single O
    zoom: 15,
    cafes: [
      {
        name: "Single O",
        url: "/cafes/single-o/",
        image: "https://localcraft.app/wp-content/uploads/2024/05/single-o-banner.jpeg",
        suburb: "Surry Hills",
        city: "Sydney",
        lat: -33.8823,
        lng: 151.2104,
      },
      {
        name: "Paramount Coffee Project",
        url: "/cafes/paramount-coffee-project/",
        image: "https://localcraft.app/wp-content/uploads/2024/05/pcpimg1.jpeg",
        suburb: "Surry Hills",
        city: "Sydney",
        lat: -33.8833,
        lng: 151.2118,
      },
      {
        name: "Artificer Coffee",
        url: "/cafes/artificer-coffee/",
        image: "https://localcraft.app/wp-content/uploads/2024/06/Artificer-Coffee-hero.jpg",
        suburb: "Surry Hills",
        city: "Sydney",
        lat: -33.8847,
        lng: 151.2109,
      },
    ],
  },
  {
    name: "Sydney CBD",
    slug: "sydney-cbd",
    url: "/neighbourhood/sydney-cbd",
    image: "https://localcraft.app/wp-content/uploads/2024/08/164478l3.jpg",
    city: "Sydney",
    tagline: "Fueling the city's hustle",
    description:
      "Hidden in bustling arcades and sleek office lobbies, CBD cafes cater to a fast-paced crowd without compromising on quality. It's the perfect blend of efficiency and excellence.",
    center: [-33.8707, 151.2073],
    zoom: 15,
    cafes: [
      {
        name: "Gumption by Coffee Alchemy",
        url: "/cafes/gumption-by-coffee-alchemy/",
        image: "https://localcraft.app/wp-content/uploads/2024/06/Gumption-by-Coffee-Alchemy.jpg",
        suburb: "Sydney CBD",
        city: "Sydney",
        lat: -33.8707,
        lng: 151.2073,
      },
      {
        name: "Edition Coffee Roasters",
        url: "/cafes/edition-coffee-roasters-haymarket/",
        image: "https://localcraft.app/wp-content/uploads/2024/06/Edition-Coffee-Roasters.jpg",
        suburb: "Haymarket",
        city: "Sydney",
        lat: -33.8795,
        lng: 151.2033,
      },
    ],
  },
  {
    name: "Eastern Suburbs",
    slug: "eastern-suburbs",
    url: "/neighbourhood/eastern-suburbs",
    image: "https://localcraft.app/wp-content/uploads/2024/08/easternsuburbs.jpeg",
    city: "Sydney",
    tagline: "Coffee with a coastal breeze",
    description:
      "From Bondi to Bronte, the Eastern Suburbs pair stunning ocean views with an exceptional cafe lifestyle. Here, brunch and long blacks are a daily ritual.",
    center: [-33.8912, 151.2743],
    zoom: 14,
    cafes: [
      {
        name: "bills",
        url: "/cafes/bills-bondibeach/",
        image: "https://localcraft.app/wp-content/uploads/2024/06/bills.jpg",
        suburb: "Bondi Beach",
        city: "Sydney",
        lat: -33.8912,
        lng: 151.2743,
      },
    ],
  },
  {
    name: "Parramatta",
    slug: "parramatta",
    url: "/neighbourhood/parramatta",
    image: "https://localcraft.app/wp-content/uploads/2024/08/Parramatta_Skyline_2022.jpg",
    city: "Sydney",
    tagline: "The second CBD's thriving coffee culture",
    description:
      "As Sydney's geographic center and second CBD, Parramatta boasts a rapidly growing dining and coffee scene led by passionate local operators.",
    center: [-33.8151, 151.0011],
    zoom: 15,
    cafes: [
      {
        name: "Circa Espresso",
        url: "/cafes/circa-espresso/",
        image: "https://localcraft.app/wp-content/uploads/2024/06/Circa-Espresso-hero-1.jpg",
        suburb: "Parramatta",
        city: "Sydney",
        lat: -33.8151,
        lng: 151.0011,
      },
    ]
  }
];

export default neighbourhoods;