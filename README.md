# js-movie-search-engine🌐 
## 🎬 시연 영상
![working_search_engine1](https://user-images.githubusercontent.com/70738281/160238421-7092f335-401d-4078-a6da-448bda1fc172.gif)
## ⛳ 프로젝트 실행 방법
```
npm install

npm run dev
```

## 📌 설명
- Vanilla JS를 사용해서 제작한 영화 검색기 프로젝트입니다.
- 상위에서 하위로 **데이터**를, 하위에서 상위로는 **이벤트**를 전달합니다.
## 🗂️ 디렉토리
```
📜index.html
┗ 📂src
  ┣ 📂api
  ┣ 📂assets
  ┃ ┗ 📂icon
  ┣ 📂components
  ┃ ┣ 📂atomic
  ┃ ┗ 📂domain
  ┣ 📂style
  ┣ 📂data
  ┃ ┗ 📂constant
  ┣ 📂utils
  ┣ 📜App.js
  ┗ 📜main.js

```
- main.js : `App` 함수와 html을 연결해주는 파일
- App.js : 최상위에서 로직을 구성하며 데이터를 관리하는 파일
- api : `api` 호출을 위한 파일을 저장하는 폴더
- assets : 페이지 구성에 필요한 자료 저장하는 폴더
- components 
  - atomic : 화면을 구성하는 가장 작은 단위의 컴포넌트 파일을 저장하는 폴더
  - domain : `atomic` 파일을 병합하여 구현된 컴포넌트 파일을 저장하는 폴더
- data : 개발시 필요한 데이터 파일을 저장하는 폴더
  - constant : 상수화한 파일을 저장하는 폴더
- style : 페이지에 적용하는 `css` 저장하는 폴더
- utils : 파일의 가독성을 위해 분리한 함수와 중복되는 코드 모듈화한 파일을 저장하는 폴더

