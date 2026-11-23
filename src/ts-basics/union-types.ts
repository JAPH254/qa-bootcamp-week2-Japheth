function kgToLbs(weight: number | string): number {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));