class Board {
  grid;
  // 보드 초기화
  reset() {
    this.grid = this.getEmptyBoard();
  }
  // 행(20)만큼 length를 가진 객체를 배열로 만들껀데 열(10)을 0으로 배열로 만들어라
  getEmptyBoard() {
    return Array.from(
      {length: ROWS}, () => Array(COLS).fill(0)
    );
  }

  insideWalls(x) {
    return x >= 0 && x < COLS;
  }

  aboveFloor(y) {
    return y <= ROWS;
  }

  notOccupied(x, y) {
    return this.grid[y] && this.grid[y][x] === 0;
  }

  valid(p) {
    // 조각의 모든 블록 좌표를 계산하고 유효한 위치인지 확인한다
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;
        return (
          value === 0 ||
          (this.insideWalls(x) && this.aboveFloor(y) && this.notOccupied(x, y))
        );
      });
    });
  }
}

