import { FaStar, FaRegStar } from 'react-icons/fa'

const stars = [1, 2, 3, 4, 5]

function Product({ name, colorName, desc, categories, price, rating }) {
	return (
		<div className='w-64 cursor-pointer shadow-md transition-all hover:scale-105'>
			<div className={`${colorName} h-48`} />
			<div className='px-2 py-1'>
				<div className='flex items-center justify-between'>
					<h3 className='font-bold'>{name}</h3>
					<p>${price}</p>
				</div>
				<p>{desc}</p>
				<p className='mb-2 flex gap-2 text-green-600'>
					{categories.map((cat, index) => (
						<span key={index}>{`#${cat}`}</span>
					))}
				</p>
				<div className='flex gap-1'>
					{stars.map(star => {
						if (rating >= star)
							return <FaStar key={star} className='text-yellow-500' />
						return <FaRegStar key={star} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Product
