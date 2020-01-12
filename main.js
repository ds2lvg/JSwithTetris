const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// 캔버스 크기 계산
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// 블록 크기 변경: 매번 BLOCK_SIZE로 계산할 필요가 없이 블록의 크기를 1로 취급
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

function play() {
  board.reset(); // 보드판 초기화
  console.table(board.grid);

  let piece = new Piece(ctx);
  piece.draw(); // 테트로미노 그리기

  board.piece=piece;
}

moves = {
  [KEY.LEFT]: p => ({...p, x: p.x - 1}),
  [KEY.RIGHT]: p => ({...p, x: p.x + 1}),
  [KEY.DOWN]: p => ({...p, y: p.y + 1}),
  [KEY.SPACE]: p => ({ ...p, y: p.y + 1 }),
  [KEY.UP]: p => board.rotate(p),
}

document.addEventListener('keydown', event => {
  if(moves[event.keyCode]) {
    event.preventDefault();
    
    // 조각의 새 상태를 얻음
    let p = moves[event.keyCode](board.piece);

    // 스페이스 누를 경우 하드 드롭
    if (event.keyCode === KEY.SPACE) {
      while (board.valid(p)) {
        board.piece.move(p);   
        p = moves[KEY.DOWN](board.piece);
      }
    }

    if(board.valid(p)) {
      // 이동 가능한 조각을 이동
      board.piece.move(p);
      // 그리기 전에 이전 좌표를 삭제
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      // 테트로미노 그림
      board.piece.draw();
    }
  }
});