import { Product } from 'src/app/models/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 0,
    name: '2001',
    img: 'assets/static/images/products/2001.jpg',
    desc: 'Venture into the unknown with an unheard of combination- ghost pepper and coconut. Fluffy coconut sponge cake made fresh daily.',
    tags: ['Ghost Pepper', 'Coconut'],
    price: 50,
    notes: 'Cherry, Chocolate, Almond',
	italics: [10, 11], // Compulsory to list because constructor not used.
  },
  {
    id: 1,
    name: 'American Beauty',
    img: 'assets/static/images/products/american_beauty.jpg',
    desc: 'For the red velvet fans. A classic fudgy cake that would make anyone fall in love.',
    tags: ['Red Velvet'],
    price: 45,
    colour: 'yellow',
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 2,
    name: 'Basic Biche',
    img: 'assets/static/images/products/basic_biche.jpg',
    desc: 'The best a lava cake can get. Fudgy goodness oozing with gooey chocolate sauce. Our sauce made in-house with ethiopian source. ',
    shortDesc: 'Sourced humanely from Ethopia',
    tags: ['Chocolate', 'Whisky'],
    price: 10,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 3,
    name: 'Chicken Pie',
    img: 'assets/static/images/products/chicken_pie.jpg',
    desc: "The leanest chicken pie you'll find.",
    shortDesc: 'Contains nuts',
    tags: ['Chicken', 'Ghost Pepper'],
    price: 10,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 4,
    name: 'Gift',
    img: 'assets/static/images/products/chocolate_fudge_cake.jpg',
    desc: 'Gift for the entire family. E',
    tags: [''],
    price: 25,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 5,
    name: 'Toy',
    img: 'assets/static/images/products/chocolate_sour.jpg',
    desc: 'Cute Teddy Bear',
    tags: [''],
    price: 40,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 6,
    name: 'ToyB',
    img: 'assets/static/images/products/drizzle_up.jpg',
    desc: 'Cute Bunny Rabbit',
    tags: [''],
    price: 42,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 7,
    name: 'ToyC',
    img: 'assets/static/images/products/eden.jpg',
    desc: 'Cute Dog Huggie',
    tags: [''],
    price: 45,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 8,
    name: 'Chocolate Cake 2 Aa',
    img: 'assets/static/images/products/elmos_world.jpg',
    desc: 'Chocolate cake made from 96% Gambian chocolate.',
    tags: ['Nuts', 'Alcohol'],
    price: 50,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 9,
    name: 'Cheese Cake 2 Bb',
    img: 'assets/static/images/products/felicidads.jpg',
    desc: 'Cheesy cake full of cheesy goodness.',
    tags: [''],
    price: 45,
    colour: 'yellow',
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 10,
    name: 'Cappuccino 2 Cc',
    img: 'assets/static/images/products/gone_nuts.jpg',
    desc: 'Hearty cup of Cappuccino.',
    shortDesc: 'Sourced humanely from Ethopia',
    tags: [''],
    price: 10,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 11,
    name: 'Coffee 2 Dd',
    img: 'assets/static/images/products/just_like_mommas.jpg',
    desc: "Warm cup of Classic'.",
    shortDesc: 'Contains nuts',
    tags: [''],
    price: 10,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 12,
    name: 'Gift 2 Ee',
    img: 'assets/static/images/products/la_cama.jpg',
    desc: 'Gift for the entire family. E',
    tags: [''],
    price: 25,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 13,
    name: 'Toy 2 Ff',
    img: 'assets/static/images/products/le_cochon.jpg',
    desc: 'Cute Teddy Bear',
    tags: [''],
    price: 40,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 14,
    name: 'ToyB 2 Gg',
    img: 'assets/static/images/products/love_from_beldam.jpg',
    desc: 'Cute Bunny Rabbit',
    tags: [''],
    price: 42,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 15,
    name: 'ToyC 2 Hh',
    img: 'assets/static/images/products/middleton.jpg',
    desc: 'Cute Dog Huggie',
    tags: [''],
    price: 45,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 16,
    name: 'Chocolate Cake 3 Ii',
    img: 'assets/static/images/products/monroe.jpg',
    desc: 'Chocolate cake made from 96% Gambian chocolate.',
    tags: ['Nuts', 'Alcohol'],
    price: 50,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 17,
    name: 'Cheese Cake 3 Jj',
    img: 'assets/static/images/products/my_feuille.jpg',
    desc: 'Cheesy cake full of cheesy goodness.',
    tags: [''],
    price: 45,
    colour: 'yellow',
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 18,
    name: 'Cappuccino 3 Kk',
    img: 'assets/static/images/products/pecan_pancake.jpg',
    desc: 'Hearty cup of Cappuccino.',
    shortDesc: 'Sourced humanely from Ethopia',
    tags: [''],
    price: 10,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 19,
    name: 'Coffee 3 Ll',
    img: 'assets/static/images/products/pillow.jpg',
    desc: "Warm cup of Classic'.",
    shortDesc: 'Contains nuts',
    tags: [''],
    price: 10,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 20,
    name: 'Gift 3 Mm',
    img: 'assets/static/images/products/rocky_rock.jpg',
    desc: 'Gift for the entire family. E',
    tags: [''],
    price: 25,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 21,
    name: 'Toy 3 Nn',
    img: 'assets/static/images/products/strawberry_cheesecake.jpg',
    desc: 'Cute Teddy Bear',
    tags: [''],
    price: 40,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 22,
    name: 'ToyB 3 Oo',
    img: 'assets/static/images/products/strawberryShortcake.jpg',
    desc: 'Cute Bunny Rabbit',
    tags: [''],
    price: 42,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 23,
    name: 'ToyC 3 Pp',
    img: 'assets/static/images/products/the_peak.jpg',
    desc: 'Cute Dog Huggie',
    tags: [''],
    price: 45,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 24,
    name: 'Chocolate Cake 4 Qq',
    img: 'assets/static/images/products/tequila_sunrise.jpg',
    desc: 'Chocolate cake made from 96% Gambian chocolate.',
    tags: ['Nuts', 'Alcohol'],
    price: 50,
    notes: 'Cherry, Chocolate, Almond',
	italics: [],
  },
  {
    id: 25,
    name: 'Fuschia Limelight',
    img: 'assets/static/images/products/pink_lime_cake.jpg',
    desc: 'lime fudge infused with rose petals, toped off with the fluffiest chantilly cream',
    tags: ['Eco'],
    price: 45,
    notes: 'Lime, Rose, Chantilly',
	italics: [],
  },
  {
    id: 26,
    name: 'Bloody Mary',
    img: 'assets/static/images/products/bloody_mary.jpg',
    desc: 'fudge made from a grapefruit and mango blend, topped off with coconut-infused whipped cream',
    tags: [''],
    price: 45,
    notes: 'Grapefruit, Mango, Coconut',
	italics: [],
  },
  {
    id: 27,
    name: 'Bloody Mary',
    img: 'assets/static/images/products/bloody_mary.jpg',
    desc: 'fudge made from a grapefruit and mango blend, topped off with coconut-infused whipped cream',
    tags: [''],
    price: 45,
    notes: 'Grapefruit, Mango, Coconut',
	italics: [],
  },
  new Product(28, "Shortcut Jane", 'assets/static/images/products/bloody_mary.jpg', 'Unknown drink from an unknown vendor', 500, ""),
];
