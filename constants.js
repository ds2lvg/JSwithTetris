'use strict';

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

// 키코드로 키매핑
const KEY = {
  LEFT: 37,
  RIGHT: 39,
  DOWN: 40
}
// 불변으로 만드는 값은 1레벨에서만 동작한다 -> 객체 안에 하위의 객체는 불변하게 만들 수 없다.
Object.freeze(KEY);
