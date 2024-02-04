// React
import { useRoutes, BrowserRouter } from "react-router-dom"    // instalado mediante - npm install react-router-dom

// Pages
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"

// Components
import Navbar from "../../Components/Navbar"
import CheckOut_SideMenu from "../../Components/CheckOut_SideMenu"

// Context
import { ShoppingCartProvider } from '../../Context';   // Entre { } porque no tine "export default"

// Styles
import "./App.css";

// Definimos las rutas de nuestra aplicación
const AppRoutes = () => {

    let routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/:category',
            element: <Home />
        },
        {
            path: '/my-account',
            element: <MyAccount />
        },
        {
            path: '/my-order',
            element: <MyOrder />
        },
        {
            path: '/my-orders',
            element: <MyOrders />
        },
        {
            path: '/my-orders/:id',
            element: <MyOrder />
        },
        {
            path: '/my-orders/last',
            element: <MyOrder />
        },
        {
            path: '/sign-in',
            element: <SignIn />
        },
        {
            path: '/*', // cualquier otra ruta
            element: <NotFound />
        },
    ])

    return routes
}


const App = () => {
    return (

        <ShoppingCartProvider>
            <BrowserRouter>

                <AppRoutes />

                <Navbar />

                

                <CheckOut_SideMenu />

            </BrowserRouter>
        </ShoppingCartProvider>
    )
}

export default App