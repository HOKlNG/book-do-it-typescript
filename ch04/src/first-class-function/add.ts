export type NumberToNumberFunc = (number) => number

export const add = (a:number): NumberToNumberFunc => {
    const _add: NumberToNumberFunc = (b:number): number => {
        return a+b
    }
}
