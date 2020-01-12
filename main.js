const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// 캔버스 크기 계산
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// 블록 크기 변경: 매번 BLOCK_SIZE로 계산할 필요가 없이 블록의 크기를 1로 취급
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
