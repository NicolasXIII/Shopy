import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import OrderCard from '../../Components/OrderCard';
import { Link } from "react-router-dom"


function MyOrder() {

    const context = useContext(ShoppingCartContext)

    const currentPath = window.location.pathname
    //let index = currentPath.split("/")[2]
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    console.log("index", index)
    if (index === "last") {

        index = context.cartOrder?.length - 1
    } else {
        index = Number(index)
    }

    return (
        <div >

            <div className="flex items-center relative w-80 mb-5">

                <Link to={"/my-orders"} className=" left-3">
                    <svg className="w-6 h-6 text-black cursor-pointer mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                </Link>




                <h1 className='text-lg'>
                    My Order
                </h1>
            </div>


            <div className='flex flex-col w-80'>

                {/*
                    El método slice() devuelve una copia superficial de una porción de un array en un nuevo array. 
                    Aquí, se está utilizando con -1 como argumento, lo que significa que se está obteniendo una 
                    copia del último elemento del array cartOrder. El resultado es un nuevo array que contiene solo
                    el último elemento de cartOrder 
                
                {context.cartOrder?.slice(-1)[0].products.map(product => */}
                {context.cartOrder?.[index]?.products.map(product =>
                (
                    <OrderCard
                        key={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        id={product.id}
                    />
                )
                )}
            </div>

        </div>
    )
}

export default MyOrder