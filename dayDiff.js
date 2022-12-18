export function diffInDays(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const date1Ms = Date.UTC(
        date1.getFullYear(),
        date1.getMonth(),
        date1.getDate()
    );
    const date2Ms = Date.UTC(
        date2.getFullYear(),
        date2.getMonth(),
        date2.getDate()
    );
    return Math.floor((date1Ms - date2Ms) / (1000 * 60 * 60 * 24)); // could use math.trunc

    // se você quiser que retorne apenas numeros positivos, user math.abs(value)
}
