export function makePersion(name: string, age: number) {
    return {name: name, age: age}
}

export function testMakePersion(){
    console.log(
        makePersion('Jane', 22),
        makePersion('Jack', 33)
    )
}
