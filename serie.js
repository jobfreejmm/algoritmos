const numeros = [-5,-4,-3,-2,-1, 0, 1, 2]
// console.log(numeros[numeros.length-1]);
function serieNumerica(array) {
   let serie = array[1]  - array[0] ;
    const dif =  array[array.length-2] + serie;
if (serie % 1 == 0) {
    if (dif == array[array.length-1]) {
        return true
    }else{
        return false;
    }
} else {
    let difFixed = dif.toFixed(1);
    if (difFixed == array[array.length-1]) {
    return true
    }else{
        return false;
    }
}




};
