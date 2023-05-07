
/**
 * 
 * @param {Array<String>} deck Arreglo de cartas completo. 
 * @returns {String} retorna una carta del deck pasado como parametro.
 */

export const pedirCarta = (deck) => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    
    const carta = deck.pop();    
    return carta;
}