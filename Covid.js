const Main = require('./main')

module.exports = class Covid extends Main {
    constructor(x, y) {
        super(x, y)
        this.energy = 8
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

    eat() {
        let found = super.chooseCell(1)
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact) {
            this.energy += 7
            let x = exact[0]
            let y = exact[1]

            for (let i = 0; i < peopleArr.length; i++) {
                if (peopleArr[i].x == x && peopleArr[i].y == y) {
                    peopleArr.splice(i, 1)
                }
            }

            matrix[y][x] = 2
            matrix[this.y][this.x] = 2

            this.x = x
            this.y = y

            if (this.energy > 30) {
                super.mul(8, Covid, 2, covidArr)
            }
        }
        else {
            this.move()
        }
    }

    move() {
        let found = super.chooseCell(1)
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact) {
            let x = exact[0]
            let y = exact[1]

            matrix[y][x] = 2
            matrix[this.y][this.x] = 2

            this.x = x
            this.y = y

            this.energy -= 3

            if (this.energy < 0) {
                this.die()
            }
        }
        else {
            this.energy--
            if (this.energy < 0) {
                this.die()
            }
        }
    }

    die() {
        for (let i = 0; i < covidArr.length; i++) {
            if (covidArr[i].x == this.x && covidArr[i].y == this.y) {
                covidArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 1
    }
}