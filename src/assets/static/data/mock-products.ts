import { Product } from "src/app/models/product";

export const MOCK_PRODUCTS: Product[] = [
	{id: 0, name:'Chocolate Cake', img:'assets/static/images/products/cake_1.jpg', desc:'Chocolate cake made from 96% Gambian chocolate. A',
	tags: ['Nuts', 'Alcohol']},
	{id: 1, name:'Cheese Cake', img:'assets/static/images/products/cake_2.jpg', desc:'Cheesy cake full of cheesy goodness. B',
	tags: ['']},
	{id: 2, name:'Cappuccino', img:'assets/static/images/products/coffee_1.jpg', desc:'Hearty cup of Cappuccino. C', shortDesc: 'Cuppa cappa',
	tags: ['']},
	{id: 3, name:'Coffee', img:'assets/static/images/products/coffee_2.jpg', desc:'Warm cup of Joe. D', shortDesc: 'Contains nuts',
	tags: ['']},
	{id: 4, name:'Gift', img:'assets/static/images/products/gift_1.jpg', desc:'Gift for the entire family. E',
	tags: ['']},
	{id: 5, name:'Toy', img:'assets/static/images/products/toy_1.jpg', desc:'Toy Gift F',
	tags: ['']},
	{id: 6, name:'ToyB', img:'assets/static/images/products/toy_2.jpg', desc:'Toy Gift B',
	tags: ['']},
	{id: 7, name:'ToyC', img:'assets/static/images/products/toy_3.jpg', desc:'Toy Gift C',
	tags: ['']},
];