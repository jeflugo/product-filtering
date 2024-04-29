import { useContext, createContext, useState } from 'react'
import { v4 } from 'uuid'

const Context = createContext()

const initialProducts = [
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

export default function StateContext({ children }) {
	const [products, setProducts] = useState(initialProducts)
	const [formOptions, setFormOptions] = useState({
		price: '-',
		rating: '-',
		category: '-',
	})

	const changeOptions = e => {
		setFormOptions(prevFormOptions => ({
			...prevFormOptions,
			[e.target.name]: e.target.value,
		}))
	}
	const filterProducts = e => {
		e.preventDefault()

		setProducts(() => initialProducts.filter(product => isValidate(product)))
	}

	const isValidate = product => {
		let checkRating = parseInt(formOptions.rating) === product.rating
		let checkPrice = false
		if (parseInt(formOptions.price) === 100)
			checkPrice = product.price < parseInt(formOptions.price)
		else if (parseInt(formOptions.price) === 500)
			checkPrice = product.price < parseInt(formOptions.price)
		else if (parseInt(formOptions.price) === 600)
			checkPrice = product.price > parseInt(formOptions.price)
		let checkCategory = product.categories.includes(formOptions.category)

		if (formOptions.rating === '-') checkRating = true
		if (formOptions.price === '-') checkPrice = true
		if (formOptions.category === '-') checkCategory = true

		if (checkRating && checkPrice && checkCategory) return true
		return false
	}

	return (
		<Context.Provider value={{ products, filterProducts, changeOptions }}>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context)
