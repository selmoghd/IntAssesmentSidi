function manipulateArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * 2 : num);
}
// Conceptual Question: == compares values after converting them to a common type (type coercion), while === compares values without conversion, considering both type and value.
