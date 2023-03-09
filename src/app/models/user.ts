export class User {
	constructor(
		public id?: string,
		public username?: string,
		public password?: string,
		public email?: string,
		//
		public token?: string) {
	}

	// public User(id?: string, username?: string, password?: string, email?: string, token?: string) {
	// 	this.id = id;
	// 	this.username = username;
	// 	this.email = email;
	// 	this.token = token;
	// }
}