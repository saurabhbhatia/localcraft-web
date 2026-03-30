export interface CafeListing {
  name: string;
  url: string;
  image: string;
  suburb: string;
  city: string;
  lat: number;
  lng: number;
}

export interface CityData {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  center: [number, number];
  zoom: number;
  image: string;
  cafes: CafeListing[];
}

const cities: CityData[] = [
  {
    name: "Sydney",
    slug: "sydney",
    tagline: "Where specialty coffee meets harbour vibes",
    description:
      "Sydney's coffee scene is one of the most vibrant in the world. From Surry Hills to Marrickville, every neighbourhood brings its own unique character to the craft. Discover the roasters, cafes, and hidden gems that make Sydney a must-visit destination for coffee lovers.",
    center: [-33.8688, 151.2093],
    zoom: 12,
    image: "./cities/sydney.jpg",
    cafes: [
      {
        name: "Single O",
        url: "/cafes/single-o/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/05/single-o-banner.jpeg",
        suburb: "Surry Hills",
        city: "Sydney",
        lat: -33.8823,
        lng: 151.2104,
      },
      {
        name: "Paramount Coffee Project",
        url: "/cafes/paramount-coffee-project/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/05/pcpimg1.jpeg",
        suburb: "Surry Hills",
        city: "Sydney",
        lat: -33.8833,
        lng: 151.2118,
      },
      {
        name: "Edition Coffee Roasters",
        url: "/cafes/edition-coffee-roasters-haymarket/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/Edition-Coffee-Roasters.jpg",
        suburb: "Haymarket",
        city: "Sydney",
        lat: -33.8795,
        lng: 151.2033,
      },
      {
        name: "bills",
        url: "/cafes/bills-bondibeach/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/bills.jpg",
        suburb: "Bondi Beach",
        city: "Sydney",
        lat: -33.8912,
        lng: 151.2743,
      },
      {
        name: "Sample",
        url: "/cafes/sample-st-peters/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/Sample.jpg",
        suburb: "St Peters",
        city: "Sydney",
        lat: -33.9059,
        lng: 151.1793,
      },
      {
        name: "Circa Espresso",
        url: "/cafes/circa-espresso/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/Circa-Espresso-hero-1.jpg",
        suburb: "Parramatta",
        city: "Sydney",
        lat: -33.8151,
        lng: 151.0011,
      },
      {
        name: "Coffee Alchemy",
        url: "/cafes/coffee-alchemy/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/01/2022-02-02.jpg",
        suburb: "Marrickville",
        city: "Sydney",
        lat: -33.9104,
        lng: 151.1554,
      },
      {
        name: "Artificer Coffee",
        url: "/cafes/artificer-coffee/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/Artificer-Coffee-hero.jpg",
        suburb: "Surry Hills",
        city: "Sydney",
        lat: -33.8847,
        lng: 151.2109,
      },
      {
        name: "Gumption by Coffee Alchemy",
        url: "/cafes/gumption-by-coffee-alchemy/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/Gumption-by-Coffee-Alchemy.jpg",
        suburb: "Sydney CBD",
        city: "Sydney",
        lat: -33.8707,
        lng: 151.2073,
      },
      {
        name: "Ona Coffee",
        url: "/cafes/ona-coffee/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/01/ona-coffee-img1.jpg",
        suburb: "Marrickville",
        city: "Sydney",
        lat: -33.9117,
        lng: 151.1562,
      },
    ],
  },
  {
    name: "Melbourne",
    slug: "melbourne",
    tagline: "The coffee capital of Australia",
    description:
      "Melbourne is widely regarded as the coffee capital of Australia, and for good reason. Its labyrinthine laneways hide world-class espresso bars, and the city's obsession with quality has spawned a global movement. From Carlton to Collingwood, coffee culture is woven into every corner of this vibrant city.",
    center: [-37.8136, 144.9631],
    zoom: 13,
    image: "./cities/melbourne.jpg",
    cafes: [
      {
        name: "Market Lane Coffee",
        url: "/cafes/market-lane-coffee/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/market-lane.jpg",
        suburb: "Carlton",
        city: "Melbourne",
        lat: -37.8005,
        lng: 144.9667,
      },
      {
        name: "Patricia Coffee Brewers",
        url: "/cafes/patricia-coffee-brewers/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/patricia.jpg",
        suburb: "Melbourne CBD",
        city: "Melbourne",
        lat: -37.8133,
        lng: 144.9629,
      },
      {
        name: "Seven Seeds",
        url: "/cafes/seven-seeds/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/Seven-Seeds.jpeg",
        suburb: "Carlton",
        city: "Melbourne",
        lat: -37.7985,
        lng: 144.9682,
      },
      {
        name: "Proud Mary",
        url: "/cafes/proud-mary/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/proud-mary.jpg",
        suburb: "Collingwood",
        city: "Melbourne",
        lat: -37.7974,
        lng: 144.9862,
      },
      {
        name: "Industry Beans",
        url: "/cafes/industry-beans/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/industry-beans.jpg",
        suburb: "Fitzroy",
        city: "Melbourne",
        lat: -37.7977,
        lng: 144.9783,
      },
      {
        name: "St ALi",
        url: "/cafes/st-ali/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/st-ali.jpg",
        suburb: "South Melbourne",
        city: "Melbourne",
        lat: -37.8337,
        lng: 144.9598,
      },
    ],
  },
  {
    name: "San Francisco",
    slug: "san-francisco",
    tagline: "Third wave coffee's West Coast home",
    description:
      "San Francisco has been at the forefront of the third wave coffee revolution. From the iconic Blue Bottle Coffee to the innovative Sightglass, the Bay Area has long been a bastion for coffee innovation, sustainability, and quality. Explore the spots that make SF a pilgrimage for coffee enthusiasts worldwide.",
    center: [37.7749, -122.4194],
    zoom: 13,
    image: "./cities/sanfrancisco.jpg",
    cafes: [
      {
        name: "Blue Bottle Coffee",
        url: "/cafes/blue-bottle-coffee/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/blue-bottle.jpg",
        suburb: "Hayes Valley",
        city: "San Francisco",
        lat: 37.7764,
        lng: -122.4236,
      },
      {
        name: "Sightglass Coffee",
        url: "/cafes/sightglass-coffee/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/sightglass.jpg",
        suburb: "SoMa",
        city: "San Francisco",
        lat: 37.7764,
        lng: -122.4074,
      },
      {
        name: "Ritual Coffee Roasters",
        url: "/cafes/ritual-coffee-roasters/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/ritual.jpg",
        suburb: "Mission",
        city: "San Francisco",
        lat: 37.7563,
        lng: -122.4213,
      },
      {
        name: "Four Barrel Coffee",
        url: "/cafes/four-barrel-coffee/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/four-barrel.jpg",
        suburb: "Mission",
        city: "San Francisco",
        lat: 37.7617,
        lng: -122.4218,
      },
      {
        name: "Equator Coffees",
        url: "/cafes/equator-coffees/",
        image:
          "https://localcraft.app/wp-content/uploads/2024/06/equator.jpg",
        suburb: "Fort Mason",
        city: "San Francisco",
        lat: 37.8037,
        lng: -122.4329,
      },
    ],
  },
];

export default cities;
