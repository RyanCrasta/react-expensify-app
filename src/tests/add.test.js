const add = (a, b) => {
    return(
        a+b
    )
}

test('should add 2 numbers',() => {
    const res = add(3, 4);

    expect(res).toBe(7);

});


const greet = (name) => {
    return(`Hello ${name}!!!!!`)
}

test('checking name', () => {
    const name = greet('Ryan');

    expect(name).toBe('Hello Ryan!!!!!')
})