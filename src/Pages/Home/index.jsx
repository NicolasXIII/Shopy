import { useContext } from "react" // el useState es un objeto que contiene los datos de la peticion a la API

import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from '../../Context';


function Home() {

    const context = useContext(ShoppingCartContext)

    /*const renderView = () => {

        if (context.searchByTitle?.length > 0) {

            if (context.itemsFiltered?.length > 0) {
                return (
                    <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                        {
                            // Si item existe, entonces se los recorre
                            context.itemsFiltered?.map((item) => ((
                                <Card key={item.id} data={item} />
                            )))
                        }
                    </div>
                )
            } else {
                return (
                    <div className="flex items-center justify-center relative w-80 mt-4">
                        We don't have it uwu"
                    </div>
                )
            }

        } else {
            return (
                <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                    {
                        // Si item existe, entonces se los recorre
                        context.items?.map((item) => ((
                            <Card key={item.id} data={item} />
                        )))
                    }
                </div>
            )
        }
    }*/




    const renderView = () => {

        if (context.itemsFiltered?.length > 0) {
            return (
                <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                    {
                        // Si item existe, entonces se los recorre
                        context.itemsFiltered?.map((item) => ((
                            <Card key={item.id} data={item} />
                        )))
                    }
                </div>
            )
        } else {
            return (
                <div className="flex items-center justify-center relative w-80 mt-4">
                    We don't have it uwu"
                </div>
            )
        }
    }




    return (

        <div >

            <div className="flex flex-col items-center justify-center">

                <div className="flex items-center justify-center relative w-80 mb-4">
                    <h1 className="font-medium text-xl">
                        Productos
                    </h1>
                </div>

                <input className="rounded-lg border border-black w-80 p-2 mb-4 mt-4 text-center focus:outline-double"
                    type="text" placeholder="Search a product"
                    onChange={(event) => context.setSearchByTitle(event.target.value)} />
            </div>


            {renderView()}


            <ProductDetail />
        </div>
    )
}

export default Home