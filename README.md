### Quasar로 만든 html, vue 기본 문법 샘플입니다.

### vscode 확장 프로그램
- Vue Language Features (Volar)
  - 해골 모양인데 이게 공식이고 이걸 설치해야 소스가 이쁘게 보여요.
- ESLint
  - 소스코드를 설정(airbnb, standard, google 등)한 스타일로 자동정렬하고 권장하는 코딩 문법 스타일을 알려줘요.( 같이쓰기 위해서 .vscode폴더에 설정을 넣어놨어요.)
  - 반대로 문법이 안맞다고 계속 에러를 내서 화날때도 있어요.

### git 소스받기
```bash
# cmd에서 소스를 받고싶은곳으로 이동 후
git clone https://github.com/dev-HongCheol/vueQuasarBase1.git

```

### 의존성 설치
```bash
yarn

#yarn이 안될 경우 yarn을 전역으로 설치.
#yarn이 좀 더 빠르다고 해서 npm에서 yarn으로 사용하고 있어요! (quasar도)
npm i -g yarn
```

### 개발 서버 실행
```bash
quasar dev
```

### Lint the files
```bash
yarn lint
```

### 소스 빌드
```bash
#최종 html, js파일이 생성됩니다.
quasar build
```
