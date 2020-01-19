class Board {
  grid;    // 보드 그리드
  piece;   // 현재 조각 객체

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

  rotate(p){
    // 불변성을 위해 JSON으로 복사
    let clone = JSON.parse(JSON.stringify(p));
    
    // 행과 열을 서로 바꾸는 반사행렬 처리
    for (let y = 0; y < p.shape.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [p.shape[x][y], p.shape[y][x]] = 
        [p.shape[y][x], p.shape[x][y]];
      }
    }
    
    // 열 순서대로 뒤집는다.
    p.shape.forEach(row => row.reverse());

    return clone;
  }

  drop() {
    let p = moves[KEY.DOWN](this.piece);
    if (this.valid(p)) {
      this.piece.move(p);
    } else {
      // 유효한 공간이 아니면 못움직이게 고정
      this.freeze();
      if (this.piece.y === 0) {
        // Game over
        return false;
      }
    }
    return true;
  }

  freeze() {
    this.piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.grid[y + this.piece.y][x + this.piece.x] = value;
        }
      });
    });
  }

}

