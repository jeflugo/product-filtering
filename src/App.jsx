import Products from './Components/Products'
import ProductsFilter from './Components/ProductsFilter'

function App() {
	return (
		<div className='mx-auto w-[620px]'>
			<h1 className='mb-6 text-center text-4xl text-blue-500'>
				Great products page
			</h1>
			<ProductsFilter />
			<Products />
		</div>
	)
}

export default App
