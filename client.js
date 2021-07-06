var socket = io()

var side = 10

function setup() {
    createCanvas(105 * side, 105 * side)
    background("#acacac")
}

function matrix_draw(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("#4EA6CF")
            }
            else if (matrix[y][x] == 1) {
                fill("#F4D03F")
            }
            else if (matrix[y][x] == 2) {
                fill('red')
            }
            else if (matrix[y][x] == 3) {
                fill('#CAABF8')
            }
            rect(x * side, y * side, side, side)
        }
    }
}

setInterval(
    function () {
        socket.on('send matrix', matrix_draw)
    },
    1000
)