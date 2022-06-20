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

users.forEach(function ({ avatar, id, email, first_name, last_name }) {
	const container = document.createElement('div');
	const avatarElem = document.createElement('img');
	const idElem = document.createElement('p');
	const emailElem = document.createElement('a');
	const firstNameElem = document.createElement('p');
	const lastNameElem = document.createElement('p');

	idElem.innerText = `Id: ${id}`;
	emailElem.innerText = `email: ${email}`;
	firstNameElem.innerText = `First name: ${first_name}`;
	lastNameElem.innerText = `Last name: ${last_name}`;
	avatarElem.innerText = avatar;

	container.classList.add('peopl');
	idElem.classList.add('id');
	emailElem.classList.add('email');
	firstNameElem.classList.add('first_name');
	lastNameElem.classList.add('last_name');
	avatarElem.classList.add('avatar');

	avatarElem.setAttribute('src', avatar);
	avatarElem.setAttribute('alt', 'photo of worker');

	emailElem.setAttribute('href', `mailto:${email}`);

	container.append(avatarElem, idElem, firstNameElem, lastNameElem, emailElem);
	rootElem.append(container);
});
