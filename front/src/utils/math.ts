export function getRandomBetween(min: number, max: number, floor: boolean = true) {
    if (floor) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    } else {
        return Math.random() * (max - min ) + min
    }
}