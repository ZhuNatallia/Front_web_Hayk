const users = [
	{
		id: 1,
		email: 'michael.lawson@reqres.in',
		first_name: 'Michael',
		last_name: 'Lawson',
		avatar: 'https://reqres.in/img/faces/7-image.jpg',
	},
	{
		id: 2,
		email: 'lindsay.ferguson@reqres.in',
		first_name: 'Lindsay',
		last_name: 'Ferguson',
		avatar: 'https://reqres.in/img/faces/8-image.jpg',
	},
	{
		id: 3,
		email: 'tobias.funke@reqres.in',
		first_name: 'Tobias',
		last_name: 'Funke',
		avatar: 'https://reqres.in/img/faces/9-image.jpg',
	},
];

const rootElem = document.querySelector('#root');

users.forEach(({ email, first_name, last_name, avatar }) => {
	const user_container = document.createElement('div');
	const email_elem = document.createElement('a');
	const name_elem = document.createElement('p');
	const avatar_elem = document.createElement('img');

	user_container.classList.add('user-container');
	user_container.append(avatar_elem, name_elem, email_elem);
	rootElem.append(user_container);
	name_elem.innerText = `${first_name} ${last_name}`;
	email_elem.setAttribute('href', `mailto:${email}`);
	email_elem.innerText = email;
	avatar_elem.setAttribute('src', avatar);
});
