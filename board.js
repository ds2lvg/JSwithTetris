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

  valid(p) {
    return true;
  }
}

