# 테트리스 게임
- board.js: 보드 로직
- constants.js: 게임 설정과 규칙을 정의
- index.html: 기본 html
- main.js: 게임 초기화와 종료 로직
- piece.js: 테트리스 조각 로직
- styles.css: 모든 스타일링

## 출처 
- https://medium.com/@michael.karen/learning-modern-javascript-with-tetris-92d532bcd057
- 위의 블로그 내용 보고 했지만 빼먹은거 엄청 많고 잘못 타이핑한 부분도 있으니 참고만 할 것
- 위의 블로그 내용을 각 단계별로 직접 분석하면서 작동 확인하면서 만들면서 커밋했으니 이 레파지토리 소스들은 실행 잘됨!
- 단계별로 커밋했으니 커밋트리 참고

## 리팩토링 할 사안
- 키보드 타이밍에 안맞게 누르면 다운되는 버그 고치기
  - 화면에 블록 나타나고 사라질때까지 키보드 이벤트를 막는 방식으로 처리 할까??