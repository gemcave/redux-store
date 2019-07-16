export default class BookstoreService {

	data = [
		{	id: 1,
			 title: 'Learning React: Functional Web Development with React and Redux',
			 author: 'Alex Banks',
			 price: 23,
			 coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg'
		},
		{
			id: 2,
			title: 'Learning GraphQL: Declarative Data Fetching for Modern Web Apps',
			author: 'Alex Banks',
			price: 32,
			coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg'
		}
	];

	getBooks () {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.75) {
					reject(new Error('Something bad happened'));
				}
				resolve(this.data);
			}, 700);
		});
	}
}