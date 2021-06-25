
/**
 * Ejecuta un ciclo de tantas iteraciones, según su parámetro.
 * 
 * @param {number} iterations - Numero de iteraciones.
 * @returns {string} con el número de iteraciones completadas.
 */
export const heavyProcess = (iterations) => {
    console.log('heavyProcess()');
    for (let i = 0; i < iterations; i++) { }
    return `${iterations} iterations completed!`;
};