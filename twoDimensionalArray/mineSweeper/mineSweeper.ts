const mineSweeper = (bombs, numRows, numCols) => {
    const field = [];
    for (let i = 0; i < numRows; i++) {
        field.push([]);
        for (let j = 0; j < numCols; j++) {
            field[i][j] = 0;
        }
    }

    for (let [ib, jb] of bombs) {
        field[ib][jb] = -1;
        for (let i = ib - 1; i <= ib + 1; i++) {
            for (let j = jb - 1; j <= jb + 1; j++) {
                if (i < 0 || j < 0 || i == numRows || j == numCols || field[i][j] == -1) continue;
                field[i][j] += 1;
            }
        }
    }
    return field;
};

console.log(mineSweeper([[0, 2], [2, 0]], 3, 3));

export default mineSweeper;