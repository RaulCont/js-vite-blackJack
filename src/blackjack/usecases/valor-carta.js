/**
 * Obtener el valor de la carta.
 * @param {Array<String>} carta Retorna el valor de una carta que es pasada como argumento.
 * @returns {Number} El valor a retornar
 */

export const valorCarta = ( carta ) => {    
    const valor = carta.substring(0, carta.length - 1);    
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}