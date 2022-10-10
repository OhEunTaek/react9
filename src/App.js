
import './css/style.css';
import { Logo, Menu } from './components/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <figure>
      <Logo />
      <Menu />


      <Footer></Footer>
    </figure>
  );
}

export default App;


/*
메모장 이후의 내용시작

이렇게 style을 입히면 개발자창에서 엘리멘츠를 보면 head부분에 style로 넣어지게 되는것을 확인
태그 안에 자동완성기능을 하고싶지만 기존처럼 되지 않는다

세팅에서 
"emmet.includeLanguages": {
        "javascript": "javascriptreact"
     }, 을 적용시켜야 한다

이후 자동완성기능을 한번 사용해본다


폰트어썸 사용
원래는 npm이나 yan으로 패키지를 설치해야되는데 번거로우니 기존에 하던대로 사용하겠다
index.html에 기존에 하던대로 폰트어썸 스크립트를 복사 붙여넣기 한다

타이틀 뮤직플레이어로 변경

app.js에서 h1부터 코딩시작

br태그시 기존 html과 달리 닫기코드를 작성되어야한다
<br></br>이거나 <br />으로

a태그에 클래스를 부여할때
리액트는 기존html에 클래스를 부여할 떄와는 달리 class가 아닌 className으로 부여
하지만 자동완성기능을 사용해서 a.menu라고 해도 자동으로 classNmae으로
하지만 기존html에서 사용되던 폰트어썸 자동완성 확장기능은 적용이안됨

<figure>
      <h1>
        <strong>DCODELAB</strong><br />
        <span>UI/UX DESIGN & DEVELPMENT</span>
      </h1>

      <a href="#" className="menu">
        <i className='fas fa-bars'></i>
      </a>

      <p>2022 DCODELAB &copy; ALL RIGHTS RESERVED.</p>
    </figure>

    이후 css시작

font-size0 인라인요소의 간격제거

리액트를 이용하는 이유 컴포넌트 외부파일로 분리해서  외부파일로 관리하는것
지금은 콘텐츠가 적어 비효율적이어 보이지만

이후 컴포넌트 폴더 제작후
푸터.js 만들고 제작

function Footer() {
    return (
        <p>2022 DCODELAB &copy; ALL RIGHTS RESERVED.</p>
    )
}
export default Footer;
리턴문안쪽에 꼭 넣기 , 내보내야하므로 export도 꼭
내보내고 불러와야함

import Footer from './components/Footer';

<Footer></Footer> or <Footer />

이렇게 하나의 파일에 하나의 컴포넌트를 넣어서 임포트해줄수도있고
하나의 파일에 여러 컴포넌트를 넣어서 할수도있다

compornents폴더에 Layout.js를 만들어서 코딩시작

layout.js는 두개의 컴포넌트인데 default 로 내보내는것이 아님 export {Logo, Menu}
불러올때는
import { Logo, Menu } from './components/Layout'; 이방법으로


이렇게 하는것은 구조분해할당이라는 문법으로
배열이나 객체의 값을 키값에 맞춰 뽑아오는것 

비구조화 할당 , 구조분해 할당(Destructure Assignment)

두개를 내보낼 수 있다는 것을 배운것이고 이건 좀 비효율적이라서 합쳐보겠다

하나의 헤더로 내보내보자

*/

