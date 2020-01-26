# 테트리스 게임

## 파일 구성
- board.js: 보드 로직
- constants.js: 게임 설정과 규칙을 정의
- index.html: 기본 html
- main.js: 게임 초기화와 종료 로직
- piece.js: 테트리스 조각 로직
- styles.css: 모든 스타일링

## 출처 
- https://medium.com/@michael.karen/learning-modern-javascript-with-tetris-92d532bcd057
- 위의 블로그 내용 보고 했지만 필요한 로직 언급 안한 부분도 많고 로직 실행에 영향을 주는 오타도 많으니 단순히 참고만 할 것

## [포스팅] 직접 만들어 보면서 작성
- [[1편] 레이아웃부터 모션까지 제작](./NOTE/01.md)
- [[2편] 테트리스 기능 구현](./NOTE/02.md)
- [[3편] 점수와 난이도, 게임종료](./NOTE/03.md)

## 리팩토링 할 사안
- ~~키보드 타이밍에 안맞게 누르면 다운되는 버그 고치기~~ [수정]