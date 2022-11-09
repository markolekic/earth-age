export const projectData = [
  {
    id: 1,
    isLeft: true,
    title: "The Hadeon Eon",
    yearsAgo: "4.5 to 3.8 Billion Years Ago",
    description: "The Age of Planetary Formation",
    summery: "The young, molten Earth endures massive meteor impacts",
    quote: '"In the beginning God created the heavens and the earth. Now the earth was formless and empty..." - Genesis 1:1-2',
    planetImage: require("../../images/hadean/planet.jpg"),
    imageAlt: "Planet in Hadeon",
    eonColor: "#ffe9ec",
    geographyInfo: {
      mainInfo: ["Formation of the Earth", "A huge planetoid crushes into Earth & splits off Moon", "Massive meteor bombardments pound Earth and Moon", "Interior of the molten Earth separates into layers", "Dense, very hot atmosphere of hydrogen, CO², steam, ammonia & methane - no oxygen", "Boiling steam begins to condense into oceans", "Earliest known rocks on Earth date from the Hadean"],
    },
    lifeInfo: {
      mainInfo: ["None", "Organic chemical components of the building blocks of life (amino acids, RNA and DNA) first appear"],
    },
    timeImage: [{ img: require("../../images/hadean/image1.png"), alt: "Hadeon", caption: "Moonrise over the Archean ocean and methane sky" }],
    gallery: [
      { img: require("../../images/hadean/image2.jpg"), alt: "Headen" },
      { img: require("../../images/hadean/image3.webp"), alt: "Headen" },
    ],
  },
  {
    id: 2,
    isLeft: false,
    title: "The Archeon Eon",
    yearsAgo: "3.8 to 2.5 Billion Years Ago",
    description: "The Age of Slow Stabilization",
    summery: "The hot and violent Earth settles down - Life first appears",
    quote: 'And God said, "Let the water under the sky be gathered to one place, and let dry ground appear." - Genesis 1:9',
    planetImage: require("../../images/archeon/planet.jpg"),
    imageAlt: "Planet in Archeon",
    eonColor: "#FF9900",
    geographyInfo: {
      mainInfo: ["The Earth's temperature 3 times hotter than today", "The Earth's crust very thin", "Enormous volcanic and tectonic activity", "Protocontinents begin to form over hotspots", "Dense, hot atmosphere of CO², methane and ammonia", "Oceans hot, acidic and filled with dissolved metals"],
    },
    lifeInfo: {
      mainInfo: ["First life appears as simple prokaryote bacteria", "Single-celled archaea extemophiles appear", "Cyanobacteria appear & begin forming stromatolites", "Cyanobacteria develop photosynthesis & begin pumping oxygen into the atmosphere"],
    },
    timeImage: [{ img: require("../../images/archeon/image1.jpg"), alt: "Archeon", caption: "Moonrise over the Archean ocean and methane sky" }],
    gallery: [
      { img: require("../../images/archeon/image2.webp"), alt: "Archeon" },
      { img: require("../../images/archeon/image3.jfif"), alt: "Archeon bacteria" },
    ],
  },
];
