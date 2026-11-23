type Employee = {
    readonly id: number, name: string
    retire: (date: Date) => void
}

export {};

let employee: Employee = {
    id: 1,
    name: "Japheth",
    retire: (date: Date) => {
        console.log(date);
    }
}

