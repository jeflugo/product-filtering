import { FaStar } from 'react-icons/fa'
import { useStateContext } from '../context'

const allCategories = ['summer', 'winter', 'spring', 'kids', 'men', 'women']

function ProductsFilter() {
	const { filterProducts, changeOptions } = useStateContext()
	return (
		<div className='mb-6'>
			<h3 className='mb-2 text-xl'>Filters</h3>
			<div>
				<form onSubmit={filterProducts}>
					<div className='mb-4 flex items-center gap-6'>
						<div className='price'>
							<label htmlFor='price'>
								<h4>By price</h4>
							</label>
							<select
								name='price'
								id='price'
								className='border border-gray-900 text-center'
								onChange={changeOptions}
							>
								<option value='-'>-</option>
								<option value='100'>Less than 100$</option>
								<option value='500'>From $100 to $500</option>
								<option value='600'>More than $500</option>
							</select>
						</div>
						<div className='rating'>
							<label htmlFor='rating'>
								<h4>By rating</h4>
							</label>
							<select
								name='rating'
								id='rating'
								className='border border-gray-900 text-center'
								onChange={changeOptions}
							>
								<option value='-'>-</option>
								<option value='1'>1 star</option>
								<option value='2'>2 stars</option>
								<option value='3'>3 stars</option>
								<option value='4'>4 stars</option>
								<option value='5'>5 stars</option>
							</select>
						</div>
						<div className='category'>
							<label htmlFor='category'>
								<h4>By category</h4>
							</label>
							<select
								name='category'
								id='category'
								className='border border-gray-900 text-center'
								onChange={changeOptions}
							>
								<option value='-'>-</option>
								{allCategories.map(cat => (
									<option value={cat} key={cat}>
										{cat}
									</option>
								))}
							</select>
						</div>
					</div>
					<button
						type='submit'
						className='rounded-md bg-green-600 px-2 py-1 text-lg text-gray-100'
					>
						Filter
					</button>
				</form>
			</div>
		</div>
	)
}

export default ProductsFilter
