/* array */
let items: Array<number> = [1, 2, 3]
let items2: number[] = [4, 5, 6]

console.log(items)
console.log(items2)

/* tuple */
let items3: [number, string, boolean] = [7, 'a', true]

console.log(items3)

/*enum */
enum Colors {
    red = "#ff0000",
    green = "#008000",
    Blue = "#0000ff"
}

let red: Colors = Colors.red

console.log(red)
