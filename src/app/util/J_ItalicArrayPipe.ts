import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
/*

Italicise words in a sentence based on their indices.

*/
@Pipe({
  standalone: true,
  name: 'italicArray'
})
export class ItalicArrayPipe implements PipeTransform {
  transform(sentence: string, array: number[]): string { // This method works, but <i> is not rendered.

	let final: string = "";

	let words = sentence.split(" ");

	// Unoptimised - but number array can be unsorted
	let i: number = 0;
	let italicise: Boolean = false;
	words.forEach(word => {
		++i;
		italicise = false;

		array.forEach(index => {
			if (index == i) {
				italicise = true;
			}
		})

		// Add word
		if (italicise) {
			final += "<span><i>";
		}
		final += word;
		if (italicise) {
			final += "</i></span>";
		}
		final += (i == words.length - 1) ? "" : " ";

	})

	return final;
  }
}