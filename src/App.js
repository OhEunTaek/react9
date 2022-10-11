
import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  let picImg = { backgroundImage: `url(${process.env.PUBLIC_URL}/img/member1.jpg)` }

  return (
    <figure>
      <Header />
      <section>
        <article>
          <div className="inner">
            <div className="pic" style={picImg}>
              <div className="dot"></div>
            </div>

            <div className="txt">
              <h2>Title</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </figure>
  );
}

export default App;

/*
1단계 : pic까지 scss와 절대경로로 이미지 넣기

let picImg = { backgroundImage: `url(${process.env.PUBLIC_URL}/img/member1.jpg)` }

  return (
    <figure>
      <Header />
      <section>
        <article>
          <div className="inner">
            <div className="pic" style={picImg}>
              <div className="dot"></div>
            </div>

            <div className="txt">
              <h2>Title</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </figure>

    하단 그림자효과 즉 블러효과를 넣기
    pic에는 실제이미지는 안보이게하고
    가상선택두개에 상속을 시킴
    백그라운드 사이즈를 지우고
    백그라운드 포지션을 200%로 지정 -> 이미지가 안보임
    하지만 포지션렐러티브는 부여 그래야 여기를 기점으로 가성선택자들의 위치를 지정가능

    이후 가상선택자에 상속시키는 코딩시작 

    저장하고 보면 이미지가 보이는데 개발자툴에서보면 보이는 이미지는 가상선택자임

    dot을 설정할때 가운데 배치를 dot에 앱솔루트로 설정하는것이 아니라 pic에 플렉스를 주어서 설정
    저장하고 보면 안보일텐데 dot에 포지션과 z인덱스를 부여
    쉐도우를 inset 안쪽으로 그림자를 넣음 으로 부여

    리액트는 단순반복이라 사실은 js를 몰라도 얼마든 가능은 함
    하지만 일을 할때 자신이 어떤 코드를 작성하는지를 알지 못함
    이렇게되면 당연히 단순반복작업만 하게되면서 도태되고 실력이 없음
    리액트를 어느수준까지 진입하고나서는 벽이 바로 응용의 문제 ui와 인터렉션의 집입장벽임

    txt코딩함 이후 inner에 보더레디어스값과 그림자효과를 부여

    이제 패널 즉 아티클이 여러게 있어야하는데 패널도만들고 제목도 바꾸고 이미지 이름도 바꿔야함
    리액트에서는 컴포넌트가 핵심임 따라서 컴포넌트에서 반복으로 만들예정
*/