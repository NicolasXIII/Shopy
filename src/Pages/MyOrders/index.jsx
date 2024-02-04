import OrdersCard from "../../Components/OrdersCard"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"

function MyOrders() {

    const context = useContext(ShoppingCartContext)

    
    return (
        <div>
           <h1 className="flex items-center relative w-80 mb-4">
                My Orders
            </h1>

           {
                // el index es el numero indice del vector orden
                context.cartOrder.map((order, index) => (
                    <Link key={index} to={`${index}`}>
                        <OrdersCard
                            date={order.date}
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                ))
            }
 {/*  
            {
                context.cartOrder.map((order) => (


                    <OrdersCard
                        date={order.date}
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts}
                    />
                ))

            } 
*/}
        </div >
    )
}

export default MyOrders