function greet(person: string): string{
    return `Hello, ${person}`
}

const user:string = "world"
console.log(greet(user))


let subs: number | string = '1M'

let airplaneSeat: 'window' | 'aisle' | 'middle' = 'window'
airplaneSeat = "aisle"