import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

import { useState, useContext } from 'react';

import { ShoppingCartContext } from '../../Context';

import Notification from '../Notification';



const Card = (data) => {
    const [showNotification, setShowNotification] = useState(false);
    const context = useContext(ShoppingCartContext)

    const productToShowInDetails = (productDetail) => {

        context.setProductDetailShow(productDetail)

        context.closeCheckout_SideMenu()
        context.openProductDetail()
    }


    const addProductToCart = (event, product) => {

        event.stopPropagation()    // Evitar la propagación del evento al contenedor padre
        context.increment()

        // los ... son para que no se sobreescriba el array, sino que se agregue un nuevo elemento
        // en este caso se agrega el producto que se le pasa como 2 parametro
        context.setCartProducts([...context.cartProducts, product])

        context.closeProductDetail()
        context.openCheckout_SideMenu()

        context.setNotification(true)
    }


    const renderIcon = (id) => {

        // Si el producto esta en el carrito ( es > a 0), se renderiza el icono de check
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {

            return (
                <CheckIcon className='text-white bg-black 
                rounded-full h-6 w-6'
                />
            )
        } else {

            return (
                <PlusIcon className='text-black bg-white 
                rounded-full h-6 w-6'

                    // IMPORTANTE: 
                    //  El evento onClick se ejecuta en el contenedor padre, 
                    // por lo que se debe evitar la propagación del evento al 
                    // contenedor padre ( esta dentro del metodo addProductToCart)
                    onClick={(event) => {
                        addProductToCart(event, data.data)
                        setShowNotification(true)
                        setTimeout(() => {
                            setShowNotification(false);
                        }, 500);
                    }}
                />

            )
        }
    }

    return (

        <div>
            <button
                className="bg-white cursor-pointer w-56 h-60 rounded-lg"
                onClick={() => productToShowInDetails(data.data)}
            >

                <figure className="relative mb-2 w-full h-4/5">
                    <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                        {data.data.category.name}
                    </span>
                    <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt="imagen de producto" />




                    <button className="absolute top-0 right-0 flex justify-center items-center rounded-full m-2 p-1"
                    //bsolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1

                    // IMPORTANTE: 
                    //  El evento onClick se ejecuta en el contenedor padre, 
                    // por lo que se debe evitar la propagación del evento al 
                    // contenedor padre ( esta dentro del metodo addProductToCart)
                    /* onClick={(event) => {
                        addProductToCart(event, data.data)
                        setShowNotification(true)
                        setTimeout(() => {
                            setShowNotification(false);
                        }, 500);
                    }} */
                    >
                        {renderIcon(data.data.id)}


                    </button>

                    {/* cuando shownotification esta a true se renderiza notificacion */}
                    {showNotification && <Notification />}


                    <p className="flex justify-between mt-2">
                        <span className="text-sm font-light">
                            {data.data.title}
                        </span>
                        <span className="text-lg font-medium">
                            {data.data.price} $
                        </span>
                    </p>

                </figure>
            </button >
        </div >
    )
}

export default Card;