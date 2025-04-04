// 1. Crear arreglo de frutas e imprimirlo por consola
const frutas = ['manzana', 'banano', 'uva', 'pera', 'sandia', 'kiwi', 'naranja'];
console.log("Arreglo original de frutas:");
console.log(frutas);

// 2. Ordenar el arreglo alfabéticamente
frutas.sort();
console.log("Arreglo ordenado alfabéticamente:");
console.log(frutas);

// 3. Crear función SingularAPlural()
function singularAPlural(palabra) {
    // Verificar si la palabra ya termina en "s"
    if (!palabra.endsWith('s')) {
        return palabra + 's';
    }
    return palabra; // Si ya termina en "s", la devolvemos sin cambios
}

// 4. Recorrer el arreglo y pasar las frutas a plural
const frutasPlural = [];
for (const fruta of frutas) {
    frutasPlural.push(singularAPlural(fruta));
}
console.log("Arreglo de frutas en plural:");
console.log(frutasPlural);

// 5. Crear función existeFruta()
function existeFruta(frutaBuscada) {
    return frutas.includes(frutaBuscada);
}

// Probar la función con "mango" y "uva"
console.log("¿Existe mango en el arreglo? " + existeFruta('mango'));
console.log("¿Existe uva en el arreglo? " + existeFruta('uva'));

// 6. Filtrar frutas con menos o igual a 4 letras
const frutasCortas = frutas.filter(fruta => fruta.length <= 4);
console.log("Frutas con 4 letras o menos:");
console.log(frutasCortas);

// 7. Función para eliminar una fruta
function eliminarFruta(frutaEliminar) {
    const indice = frutas.indexOf(frutaEliminar);
    if (indice !== -1) {
        frutas.splice(indice, 1);
        return true;
    }
    return false;
}

// Probamos la función eliminando "uva"
console.log("Eliminando 'uva': " + eliminarFruta('uva'));
console.log("Arreglo después de eliminar 'uva':");
console.log(frutas);

// Probamos eliminando una fruta que no existe
console.log("Eliminando 'mango': " + eliminarFruta('mango'));
console.log("Arreglo final:");
console.log(frutas);