import { XMarkIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { ShoppingCartContext } from '../../Context';

import OrderCard from '../OrderCard';

import { total_Price } from '../../utils';

import "./styles.css"



const CheckOut_SideMenu = () => {

    const context = useContext(ShoppingCartContext)

    const handle_Delete = (id) => {

        const filtedProducts = context.cartProducts.filter((product) => product.id !== id)

        context.setCartProducts(filtedProducts)

        context.decrement()
    }

    const handleCheckOut = () => {

        const orderToAdd = {
            date: new Date().toLocaleDateString(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: total_Price(context.cartProducts)
        }

        if (orderToAdd.totalProducts > 0) {

            context.setCartOrder([...context.cartOrder, orderToAdd])
            
            context.setCartProducts([])
            context.setSearchByTitle('')
            context.setCount(0)

            context.closeCheckout_SideMenu()

        } else {
            console.log('No hay productos para comprar')
        }
    }


    return (
        <aside className={`checkout_sideMenu flex flex-col fixed bg-white right-0 border border-gray-500 rounded-lg mt-3 
        ${context.isCheckout_SideMenuOpen ? 'flex' : 'hidden'}
        scrollable-cards
        `}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">
                    My Order
                </h2>

                <button onClick={() => context.closeCheckout_SideMenu()}>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
                </button>
            </div>

            <div>
                {context.cartProducts.map((product) => {
                    
                    return (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            id={product.id}
                            handle_Delete={handle_Delete}
                        />
                    )
                })}
            </div>

            <div className='p-6 
            flex-1 mb-6'>
                <p className='flex justify-between items-center'>
                    <span >
                        Total
                    </span>
                    <span className='font-medium text-2xl'>
                        {total_Price(context.cartProducts)} $
                    </span>
                </p>

                <Link to='/my-orders/last'>
                    <button className='w-full bg-black text-white rounded-xl p-2 mt-2'
                        onClick={() => handleCheckOut()}>
                        Check Out
                    </button>
                </Link>
            </div>


        </aside>
    )

}

export default CheckOut_SideMenu;