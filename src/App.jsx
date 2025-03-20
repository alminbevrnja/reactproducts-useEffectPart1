import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import useFetch from './utils/useFetch';
import CardComponent from './components/CardComponent';
import NavbarComponent from './components/NavbarComponent';

axios.defaults.baseURL = 'https://dummyjson.com';

function App() {
	const { data, isLoading } = useFetch('category');

	return (
		<div className='container mx-auto  '>
			<NavbarComponent />

			<div className='flex flex-wrap gap-3 justify-center items-center mt-10'>
				{isLoading ? (
					data.map((product) => {
						return (
							<CardComponent key={product.id} product={product} />
						);
					})
				) : (
					<h1 className='text-red-600 font-bold'>LOADING....</h1>
				)}
			</div>

			<ToastContainer />
		</div>
	);
}

export default App;
