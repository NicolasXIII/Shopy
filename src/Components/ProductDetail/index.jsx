import { XMarkIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react';

import { ShoppingCartContext } from '../../Context';

import "./styles.css"



const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)

    

    return (
        <aside className={`product-detail flex flex-col fixed bg-white right-0 border border-gray-500 rounded-lg mt-3 
        ${context.isProductDetailOpen ? 'flex' : 'hidden'}`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">
                    Detail
                </h2>

                <button onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
                </button>
            </div>

            <figure className='px-6'>
                <img className='w-full h-auto rounded-lg' 
                src={context.productDetailShow?.images} alt={context.productDetailShow.tittle} 
                />

                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>
                        {context.productDetailShow.title}
                    </span>
                    <span className='font-medium text-xl'>
                        {context.productDetailShow.price} $
                    </span>
                    <span className='font-light text-sm mt-4'>
                        {context.productDetailShow.description}
                    </span>
                </p>
            </figure>
        </aside>
    )
}

export default ProductDetail;