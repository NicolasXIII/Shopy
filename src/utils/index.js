

/**
 * Calculates the total price of an array of products.
 * 
 * @param {Array} products - The array of products.
 * @returns {number} - The total price of the products.
 */
export const total_Price = (products) => {

    // reduce 
    //   es un método que procesa cada elemento del array 
    //  uno por uno, acumulando un resultado a medida que avanza
    //
    //  La función de reducción también toma dos argumentos: 
    //      - el valor acumulado hasta ahora (que se inicia 
    //        con el valor inicial que proporcionaste, en este caso 0) 
    //      - y el valor del elemento actual del array.
    
    return products.reduce((total, current) => total + current.price, 0);

}