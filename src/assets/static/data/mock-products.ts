import { Product } from "src/app/models/product";

export const MOCK_PRODUCTS: Product[] = [
	{id: 0, name:'Chocolate Cake', img:'assets/static/images/products/cake_1.jpg', desc:'Chocolate cake made from 96% Gambian chocolate.',
	tags: ['Nuts', 'Alcohol'], price: 50},
	{id: 1, name:'Cheese Cake', img:'assets/static/images/products/cake_2.jpg', desc:'Cheesy cake full of cheesy goodness.',
	tags: [''], price: 45, colour: 'yellow'},
	{id: 2, name:'Cappuccino', img:'assets/static/images/products/coffee_1.jpg', desc:'Hearty cup of Cappuccino.', shortDesc: 'Sourced humanely from Ethopia',
	tags: [''], price: 10},
	{id: 3, name:'Coffee', img:'assets/static/images/products/coffee_2.jpg', desc:'Warm cup of Classic\'.', shortDesc: 'Contains nuts',
	tags: [''], price: 10},
	{id: 4, name:'Gift', img:'assets/static/images/products/gift_1.jpg', desc:'Gift for the entire family. E',
	tags: [''], price: 25},
	{id: 5, name:'Toy', img:'assets/static/images/products/toy_1.jpg', desc:'Cute Teddy Bear',
	tags: [''], price: 40},
	{id: 6, name:'ToyB', img:'assets/static/images/products/toy_2.jpg', desc:'Cute Bunny Rabbit',
	tags: [''], price: 42},
	{id: 7, name:'ToyC', img:'assets/static/images/products/toy_3.jpg', desc:'Cute Dog Huggie',
	tags: [''], price: 45},
];