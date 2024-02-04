import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    // Shopping Cart : count
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    // Product Detail - open / close
    const [isProductDetailOpen, setProductDetailOpen] = useState(false)
    const openProductDetail = () => setProductDetailOpen(true)
    const closeProductDetail = () => setProductDetailOpen(false)



    // Product Detail
    const [productDetailShow, setProductDetailShow] = useState({})  // Objeto vacío por defecto

    // Agregara al carrito
    const [cartProducts, setCartProducts] = useState([])

    // useEffect permite realizar efectos secundarios en componentes funcionales
    // useEffect recibe 2 parametros:
    //
    //      1. Una funcion que se ejecutara cuando se monte el componente
    //      2. Un array de dependencias. Cuando alguno de estos valores 
    //      cambia entre renderizaciones, React volverá a ejecutar la función del primer argumento.
    //
    // En este caso, cuando se actualice el carrito, se ejecutara el log
    useEffect(() => {
        console.log("se han actualizado todos los productos ", cartProducts)
    }, [cartProducts])


    // Checkout_SideMenu - open / close
    const [isCheckout_SideMenuOpen, setCheckout_SideMenuOpen] = useState(false)
    const openCheckout_SideMenu = () => setCheckout_SideMenuOpen(true)
    const closeCheckout_SideMenu = () => setCheckout_SideMenuOpen(false)


    // Notification
    const [notification, setNotification] = useState(false);


    // Order
    const [cartOrder, setCartOrder] = useState([])


    // products
    const [items, setItems] = useState([])
    const [itemsFiltered, setItemsFiltered] = useState([])

    useEffect(() => {

        fetch('https://api.escuelajs.co/api/v1/products')   // fetch es una funcion que recibe una url y devuelve una promesa
            .then(response => response.json())                  // .then es una funcion que recibe una funcion como parametro, y devuelve una promesa
            .then(data => setItems(data))
    }, [])


    // products searched by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    const filterByTitle = (items, titleSearched) => {
        return items?.filter(item => item.title.toLowerCase().includes(titleSearched.toLowerCase()))
    }

    // products searched by category
    const [searchByCategory, setSearchByCategory] = useState(null)
    
    const filterByCategory = (items, categorySearched) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(categorySearched.toLowerCase()))
    }

    /*
        El propósito de este useEffect es asegurarse de que, 
        cada vez que cambien el el término de búsqueda (searchByTitle), 
        o los productos disponibles (items) o el término de búsqueda (searchByTitle), 
        se actualice la lista de productos filtrados.
    */
    /* useEffect(() => {

        if(searchByTitle){
            setItemsFiltered(filterByTitle(items, searchByTitle))
        }

    }, [items, searchByTitle])




    


 useEffect(() => {

        if(searchByTitle){
            setItemsFiltered(filterByTitle(items, searchByTitle))
        }

        if(searchByCategory){
            setItemsFiltered(filterByCategory(items, searchByCategory))
        }

    }, [items, searchByTitle, searchByCategory]) 

    useEffect(() => {
        let filteredItems = items;
    
        if(searchByTitle){
            filteredItems = filterByTitle(filteredItems, searchByTitle);
        }
    
        if(searchByCategory){
            filteredItems = filterByCategory(filteredItems, searchByCategory);
        }
    
        setItemsFiltered(filteredItems);
    
    }, [items, searchByTitle, searchByCategory]) */

    console.log("categoria por la que busco", searchByCategory)
    console.log("filtrado: ", itemsFiltered)



    useEffect(() => {
        let filteredItems = items;
    
        if(searchByCategory){
            filteredItems = filterByCategory(filteredItems, searchByCategory);
        }
    
        if(searchByTitle){
            filteredItems = filterByTitle(filteredItems, searchByTitle);
        }
    
        setItemsFiltered(filteredItems);
    
    }, [items, searchByTitle, searchByCategory])










    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            increment,
            decrement,

            isProductDetailOpen,
            setProductDetailOpen,
            openProductDetail,
            closeProductDetail,

            isCheckout_SideMenuOpen,
            setCheckout_SideMenuOpen,
            openCheckout_SideMenu,
            closeCheckout_SideMenu,

            productDetailShow,
            setProductDetailShow,

            cartProducts,
            setCartProducts,

            notification,
            setNotification,

            cartOrder,
            setCartOrder,

            items,
            setItems,

            itemsFiltered,
            setItemsFiltered,

            searchByTitle,
            setSearchByTitle,

            searchByCategory,
            setSearchByCategory,
            
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

