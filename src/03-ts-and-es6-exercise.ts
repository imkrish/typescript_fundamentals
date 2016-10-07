namespace ts_and_es6_exercise {

    const double = (value: number): number => value * 2
    console.log(double(10))

    const greet = (name: string = 'Krish'): void => console.log('Hello, ' + name)
    greet()
    greet('Keerati')

    const numbers = [-3, 33, 38, 5]
    console.log(Math.min(...numbers))

    let newArray = [55, 20]
    newArray.push(...numbers)
    console.log(newArray)

    const testResults = [3.89, 2.99, 1.38]
    const [result1, result2, result3] = testResults
    console.log(result1, result2, result3)

    const scientist = {firstName: 'Krish', experience: 1.5}
    const {firstName: name, experience} = scientist
    console.log(name, experience)

}
