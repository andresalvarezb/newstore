import { useEffect, useState } from 'react';

function useFetchData(api) {
	const [products, setProducts] = useState([]);

	const controller = new AbortController();
	const signal = controller.signal;

	useEffect(() => {
		async function getData(api) {
			try {
				const response = await fetch(api, { signal });
				const data = await response.json();
				if (data) {
					setProducts(data);
				}
			} catch (error) {
				console.error('[FETCH DATA ERROR]: ', error);
				return controller.abort();
			}
		}
		getData(api);
	}, []);

	return products;
}

export default useFetchData;
