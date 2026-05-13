export type Place = {
  name: string;
  tag: string;
  description: string;
  image: string;
  websiteUrl?: string;
  mapsUrl: string;
};

export const restaurants: Place[] = [
  {
    name: "Sénéquier",
    tag: "BREAKFAST · PORT DE SAINT-TROPEZ",
    description:
      "The red awnings on the quay since 1887. Coffee and croissants with the boats — no better start to a morning in Saint-Tropez.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/79/70/d6/le-senequier-saint-tropez.jpg?w=700&h=400&s=1",
    websiteUrl: "https://www.senequier.com",
    mapsUrl: "https://maps.google.com/?q=Senequier+Saint-Tropez",
  },
  {
    name: "Beefbar",
    tag: "LUNCH · LOU PINET",
    description:
      "The celebrated meat temple transplanted to the Riviera. Prime cuts, perfect service, and a terrace made for long afternoons.",
    image:
      "https://beefbar.com/wp-content/uploads/revslider/slider-beefbar-saint-tropez/St-Tropez.jpg",
    websiteUrl: "https://beefbar.com/saint-tropez/",
    mapsUrl: "https://maps.google.com/?q=Beefbar+Saint-Tropez",
  },
  {
    name: "La Petite Plage",
    tag: "LUNCH · HARBOUR FRONT",
    description:
      "Tucked just off the port, this is the kind of place locals keep to themselves. Honest cooking, sea views, and unhurried pace.",
    image:
      "https://cdn.prod.website-files.com/67e51580d1804b4d2ffaf9b6/67e51580d1804b4d2ffaf9f3_home-slider_image%20(1).webp",
    websiteUrl: "https://www.restaurant-lapetiteplage.com/en/saint-tropez",
    mapsUrl: "https://maps.google.com/?q=La+Petite+Plage+Saint-Tropez",
  },
  {
    name: "Louis Vuitton Restaurant",
    tag: "LUNCH · MAISON LOUIS VUITTON",
    description:
      "Inside the iconic Maison, a restaurant as considered as the house itself. Riviera cuisine under one of the world's great brands.",
    image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/LV/louis-vuitton--Stfi_Louis_Vuitton_St_Tropez_Resort.jpg?wid=1200",
    websiteUrl: "https://eu.louisvuitton.com/eng-e1/point-of-sale/france/louis-vuitton-restaurant-saint-tropez",
    mapsUrl: "https://maps.google.com/?q=Louis+Vuitton+Restaurant+Saint-Tropez",
  },
];
