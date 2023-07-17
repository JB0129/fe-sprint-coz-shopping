# 요구사항

## 일반 요구사항

 - [] 북마크 기능이 있는 상품 리스트 조회 애플리케이션
    - [] 북마크 체크 시 북마크 리스트에 추가 되어야 한다.

- [] 상품의 종류는 총 4가지 ( 상품, 카테고리, 기획전, 브랜드 )
    - [] 필터링 기능이 있으며, 상품 종류 선택 시 리스트가 바껴야 한다.

- [] 모든 페이지에 Header, Footer 존재

- [] 최소 세 가지의 페이지를 제작 (SPA 구성 방식)
    1. Main
    2. Product_List
    3. Bookmark_List


## 세부 요구사항

### Header 요구사항

- [] 스크롤 할 때 Header는 상단에 고정되어야 한다.
- [] Header에는 메인로고 및 제목과 햄버거 버튼(메뉴 버튼)이 존재한다.
- [] 메인 로고 및 제목을 클릭 시, Main 페이지로 이동
- [] 메뉴 버튼 클릭 시, 드롭 다운 형식이 출력된다. 드롭 다운에는 다음과 같은 3가지 요소가 존재한다.
    1. 'OOO 님 안녕하세요!'
    2. 상품 리스트 => 클릭 시 Product_List로 이동
    3. 북마크 리스트 => 클릭 시 Bookmark_List로 이동

### Main_Page 요구사항

- [] 상품 리스트와 북마크 리스트가 존재한다.
- [] 각 리스트에는 4가지 요소만 출력된다.

### Product_List_Page 요구사항

- [] 상품 종류 선택 버튼이 존재한다. (일반 요구사항 내용)
- [] 상품 종류 선택 시, 리스트의 내용은 필터링 되어야한다.
- [] 무한 스크롤 기능을 적용한다.

### Bookmark_List_Page 요구사항

- [] 상품 종류 선택 버튼이 존재한다. (일반 요구사항 내용)
- [] 상품 종류 선택 시, 리스트의 내용은 필터링 되어야한다.


### 그 외 추가사항

- [] 상품 이미지 클릭 시, 상품 모습이 확대 된 모달창이 출력되어야 한다.
- [] 리스트가 존재하지 않으면, 존재하지 않다는 문구 출력하기.
- [] 북마크 체크 박스를 선택 시, 즉시 북마크 리스트에 추가되며, 색상이 바껴야한다.
- [] 북마크 체크 유무를 알리는 토스트 창 출력하기
