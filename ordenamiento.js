
function ordenamiento(arr) {
    console.log(arr);
    debugger;
    for (let i = 0; i < arr.length; i++) {
        debugger;
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                debugger;
                let a = arr[i];
                debugger;
                arr[i] = arr[j];
                debugger;
                arr[j] = a;
                debugger;
            }
            debugger;

        }
    }
    return arr;
};
const numeros = [4, 5, 8, 2, 4]
console.log(ordenamiento(numeros))
