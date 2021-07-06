module.exports = class Main {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(char) {
        this.getNewCordinates()
        let result = []

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    result.push(this.directions[i])

                }
            }

        }
        return result
    }

    mul(quantity, das, ind, arr) {
        let found = this.chooseCell(1)
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact && this.energy > quantity) {
            let x = exact[0]
            let y = exact[1]

            let vaccine = new das(x, y)
            matrix[y][x] = ind
            arr.push(vaccine)
            this.energy = 20
        }
        else {
            console.error('there is no way to multiply')
        }
    }
}