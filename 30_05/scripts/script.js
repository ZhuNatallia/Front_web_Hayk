class User {
	static roles = ['admin', 'manager', 'user'];

	constructor(name, lastname, role) {
		this.name = name;
		this.lastname = lastname;
		this.role = role;
	}

	get_info() {
		console.log(
			`Имя: ${this.name}, Фамилия: ${this.lastname}, роль: ${this.role} `
		);
	}

	change_role(new_role) {
		for (let i = 0; i < User.roles.length; i++) {
			if (User.roles[i] === new_role) {
				this.role = new_role;
			}
		}
	}
}
const user_1 = new User('Ivan', 'Ivanov', 'manager');

user_1.get_info();
console.log(user_1.role);
user_1.change_role('admin');
console.log(user_1.role);
