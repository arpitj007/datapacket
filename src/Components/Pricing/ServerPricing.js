import React from "react";
const inputLocation = (location) => {
  switch (location) {
    case "atlantaUSA":
      return [
        {
          name: "E-2236",
          cores: 6,
          threads: 12,
          RAM: "16GB",
          space: "2×500 GB HDD",
          uplink: "40GBPS",
          bandWidth: "40GBPS",
          price: 630,
          link: "/",
        },
        {
          name: "2xE5-2620v4",
          cores: 16,
          threads: 32,
          RAM: "64GB",
          space: "2×500 GB HDD",
          uplink: "40GBPS",
          bandWidth: "40GBPS",
          price: 910,
          link: "/",
        },
        {
          name: "2 × E 4208",
          cores: 16,
          threads: 32,
          RAM: "64GB",
          space: "2×500 GB HDD",
          uplink: "40GBPS",
          bandWidth: "40GBPS",
          price: 960,
          link: "/",
        },
        {
          name: "2 × E 4210",
          cores: 64,
          threads: 128,
          RAM: "128GB",
          space: "2×500 GB HDD",
          uplink: "40GBPS",
          bandWidth: "40GBPS",
          price: 1130,
          link: "/",
        },
        {
          name: "2 × E 4216",
          cores: 32,
          threads: 64,
          RAM: "128GB",
          space: "2×500 GB HDD",
          uplink: "40GBPS",
          bandWidth: "40GBPS",
          price: 1660,
          link: "/",
        },
        {
          name: "EPYC 7702P",
          cores: 16,
          threads: 32,
          RAM: "64GB",
          space: "2×500 GB HDD",
          uplink: "40GBPS",
          bandWidth: "40GBPS",
          price: 1930,
          link: "/",
        },
      ];
    default:
      return "";
  }
};

export default inputLocation;

export const countriesNA = [
  {
    name: "United States",
    value: "US",
  },
  {
    name: "Canada",
    value: "CA",
  },
  {
    name: "Mexico",
    value: "MX",
  },
  {
    name: "United States",
    value: "US",
  },
];

export const countriesSA = [
  {
    name: "Brazil",
    value: "BR",
  },
  {
    name: "Argentina",
    value: "AG",
  },
  {
    name: "Colombia",
    value: "CB",
  },
];
export const countriesAPAC = [
  {
    name: "India",
    value: "IN",
  },
  {
    name: "China",
    value: "CN",
  },
  {
    name: "Japan",
    value: "JP",
  },
  {
    name: "Singapore",
    value: "SG",
  },
  {
    name: "Russia",
    value: "RU",
  },
];

export const countriesAU = [
  {
    name: "Australia",
    value: "AU",
  },
];

export const countriesEU = [
  {
    name: "United Kingdom",
    value: "UK",
  },
  {
    name: "Austria",
    value: "AS",
  },
  {
    name: "Belgium",
    value: "BG",
  },
  {
    name: "Czech Republic",
    value: "CZ",
  },
  {
    name: "France",
    value: "FR",
  },
  {
    name: "Poland",
    value: "PL",
  },
  {
    name: "Germany",
    value: "DE",
  },
  {
    name: "Italy",
    value: "IT",
  },
  {
    name: "Portugal",
    value: "PT",
  },
  {
    name: "Spain",
    value: "ES",
  },
];

export const continents = [
  {
    name: "Asia Pacific",
    value: "APAC",
  },
  {
    name: "North America",
    value: "NA",
  },
  {
    name: "South America",
    value: "SA",
  },
  {
    name: "Europe",
    value: "EU",
  },
  {
    name: "Australia",
    value: "AU",
  },
];
