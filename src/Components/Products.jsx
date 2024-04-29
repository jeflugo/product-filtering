import Product from './Product'
import { useStateContext } from '../context'

function Products() {
	const { products } = useStateContext()
	return (
		<div className='flex flex-wrap justify-evenly gap-4'>
			{products.length !== 0 ? (
				products.map(product => <Product key={product.id} {...product} />)
			) : (
				<h2>nothing to show</h2>
			)}
		</div>
	)
}

export default Products
