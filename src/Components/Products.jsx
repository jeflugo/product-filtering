import { v4 } from 'uuid'
import Product from './Product'

const products = [
	{
		id: v4(),
		name: 'Blue',
		colorName: 'bg-blue-700',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
		categories: ['summer', 'kids'],
		price: 200,
		rating: 4,
	},
	{
		id: v4(),
		name: 'Cyan',
		colorName: 'bg-cyan-500',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
		categories: ['winter', 'kids'],
		price: 20,
		rating: 4,
	},
	{
		id: v4(),
		name: 'Gold',
		colorName: 'bg-yellow-600',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
		categories: ['summer', 'men'],
		price: 50,
		rating: 4,
	},
	{
		id: v4(),
		name: 'Orange',
		colorName: 'bg-orange-500',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
		categories: ['spring', 'women'],
		price: 900,
		rating: 1,
	},
	{
		id: v4(),
		name: 'Turquoise',
		colorName: 'bg-cyan-300',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
		categories: ['summer', 'women'],
		price: 600,
		rating: 5,
	},
	{
		id: v4(),
		name: 'Green',
		colorName: 'bg-green-500',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
		categories: ['winter', 'men'],
		price: 150,
		rating: 4,
	},
	{
		id: v4(),
		name: 'Red',
		colorName: 'bg-red-500',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
		categories: ['spring', 'kids'],
		price: 1000,
		rating: 3,
	},
	{
		id: v4(),
		name: 'Gray',
		colorName: 'bg-gray-700',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
		categories: ['summer', 'kids'],
		price: 2000,
		rating: 2,
	},
]

function Products() {
	return (
		<div className='flex flex-wrap justify-evenly gap-4'>
			{products.map(product => (
				<Product key={product.id} {...product} />
			))}
		</div>
	)
}

export default Products
