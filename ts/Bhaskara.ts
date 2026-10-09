export default class Bhaskara {
    private a: number
    private b: number
    private c: number

    public constructor(a: number, b: number, c: number) {
        this.a = a
        this.b = b
        this.c = c
    }

    public get delta(): number {
        return this.b * this.b - 4 * this.a * this.c
    }

    /** Duas raizes, uma raiz (delta = 0) ou nenhuma (delta < 0). */
    public calcularRaizes(): number[] {
        const delta = this.delta

        if (delta < 0) {
            return []
        }

        const raizDeDelta = Math.sqrt(delta)

        return [
            (-this.b + raizDeDelta) / (2 * this.a),
            (-this.b - raizDeDelta) / (2 * this.a)
        ]
    }
}
