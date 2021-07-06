const Main = require('./main')

module.exports = class Vaccine extends Main {
    constructor(x, y) {
        super(x, y)
        this.energy = 30;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    eat() {
        let found = super.chooseCell(2);
        let exact = found[Math.floor(Math.random() * found.length)];

        if (exact) {
            this.energy += 15;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < covidArr.length; i++) {
                if (covidArr[i].x == x && covidArr[i].y == y) {
                    covidArr.splice(i, 1)
                }
            }

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 3;

            this.x = x;
            this.y = y;

            if (this.energy > 30) {
                super.mul(8, Vaccine, 3, vaccineArr);
            }
        } else {
            this.move();
        }
    }

    move() {
        let found = super.chooseCell(1);
        let exact = found[Math.floor(Math.random() * found.length)];

        if (exact) {
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 3;

            this.x = x;
            this.y = y;

            this.energy -= 2
        }
    }
}