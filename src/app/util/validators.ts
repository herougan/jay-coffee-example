import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export function matchValidator(
	controlOne: AbstractControl,
	controlTwo: AbstractControl,
): ValidatorFn {
	return () => {
		// console.log(controlOne.value + " : " + controlTwo.value);
		// if (controlOne.value === "") return null;
		if (controlOne.value !== controlTwo.value)
		  return { mismatch : 'Value does not match' };
		return null;
	};
}

// export function matchValidator(

/// Validation Factory
// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
// 	return (control: AbstractControl): ValidationErrors | null => {
// 	  const forbidden = nameRe.test(control.value);
// 	  return forbidden ? {forbiddenName: {value: control.value}} : null;
// 	};
//   }

/// Form Validator
export function checkPasswordValidator(group: FormGroup) {
	let pass = group.controls['password'].value;
	let pass2 = group.controls['confirmPassword'].value;
	return pass === pass2 ? null : { mismatch: true };
}