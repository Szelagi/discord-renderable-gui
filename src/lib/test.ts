export default function (a: string, b: number) {
    let str = '';
    for (let i = 0; i < b; i++) {
        str += a;
    }
    return str;
}