## HTML , CSS , JS
- HTML이 웹 페이지의 기본 구조를 담당하고, CSS가 디자인을 담당한다면 JavaScript는 클라이언트 단에서 웹 페이지가 동작하는 것을 담당한다.
- CSS 선택자
  - .선택자 : class 여러곳에 사용가능
  - #선택자 : id. 한곳만 사용
  - \> 선택자 : 하위 엘리먼트
  - 첫번째 자식 선택자, 마지막 자식 선택자, 홀수 번째 선택자 등등
- - -
## vue
- 탄생
  - JS로 Element에 접근해서 내용을 고치고 하는게 너무 불편하다. =>react, vue 등
  - 범용적으로 사용하는 UI를 만들어서 컴포넌트로 제공하겠다. => MUI, quasar, bootstarp 등

- 구조
  - \<template>, \<script>, \<style> 3가지 영역으로 나눠서 코딩
  - template :화면에 보여질 html과 값을 작성하는 곳
  - script: js, vue코드를 작성한는곳
  - style: css를 적용한는곳

## quasar 폴더 구조
<table>
  <tr>
    <td></td>
    <td>
      <ol>
        <li>
          /node_modules : package.json을 기반으로 설치된 외부 패키지들. 용량 및 파일이 엄청 많으니 해당 폴더는 제외하고 커밋, 전달하세요
        </li>
        <li>
          /public : 코드 상에서 웹 URL 접근해야하는 파일들. (js, css, image등). web Root경로
        </li>
        <li>
          /src/assets : 이미지, 폰트, css, js 등 vue로 접근하여 사용하는 리소스들의 폴더
        </li>
        <li>
          /src/boot : Vue 앱 인스턴스가 인스턴스화되기 전에 코드를 실행하는 필요한 소스들(환경설정,  asiox등)
        </li>
        <li>
          /src/components : 화면을 구성하는 각각의 컴포넌트들과(프로필 이미지, 좋아요 버튼 등) 컴포넌트를 조합하여 만든 큰 컴포넌트(인스타 글 하나)
        </li>
        <li>
          /src/css : css, scss파일을 넣어주세요. scss: 전처리되어 변수로 값들을 설정해서 쓸 수 있어요. (테마 색 적용 등등)
        </li>
        <li>
          /src/layouts : 화면을 구성하는 메인틀을 만들고 내부에 router를(children으로 동작) 넣어서 내부 일부 컨텐츠만 변경하게 구성해요. (VSCODE도 위쪽 타이틀, 왼쪽 메인 메뉴 버튼은 고정이고 중앙 에디터 영역만 수정하듯)
        </li>
        <li>
          /src/pages : components에 만들었던 컴포넌트를 조합해서 만든 페이지. 보통 layout에 넣은 router의 영역 호출되는 단위에요!
        </li>
        <li>
          /src/router : url에 따라 보여질 layouts, pages 컴포넌트를 설정해요.
        </li>
        <li>
          /src/App.vue : vue의 시작 파일. 여기는 router를 호출해서 layouts를 호출하는게 끝!
        </li>
        <li>
          /package.json : 프로젝트의 기본 정보, 설정, 사용하는 패키지들의 정보가 들어 있어요(pom.xml)
        </li>
        <li>
          /quasar.conf.js : Quasar 설정파일. 사용할 quasar 라이브러리(폰트, 플러그인 등), 프록시 서버, 앱 형태(electron, ssr등)을 설정할 수 있어요.
        </li>
      </ol>
      <br><br><br><br><br><br><br><br><br></br>
    </td>
  </tr>

</table>

 