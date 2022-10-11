
import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const arr = ['Blizzards', 'Calm', "Dusty_Road", "Escape", "Payday", "Retreat", "Seasonal", "Vespers"];
  const deg = 360 / arr.length;
  return (
    <figure>
      <Header />
      <section>
        {
          arr.map((data, index) => {
            let rotatePanel = { transform: `rotate(${deg * index}deg) translateY(-100vh)` }
            let picImg = { backgroundImage: `url(${process.env.PUBLIC_URL}/img/${data}.jpg)` }
            return (
              <article key={index} style={rotatePanel}>
                <div className="inner">
                  <div className="pic" style={picImg}>
                    <div className="dot"></div>
                  </div>

                  <div className="txt">
                    <h2>{data}</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </article>
            )
          })
        }


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

/*
각 그림의 정보를 배열로만들예정 원래 리액트 문법으로는 배열이 아닌 스테이트라는 개념으로 관리해서 실시간으로 변경될때마다 재 렌더링을 시켜야 하는데 스테이트개념은 이후에 배울에정 
지금은 배열로 하겠다

리턴문 밖에서 배열 생성
{
          arr.map((data, index) => {
            return (
              
            )
          })
        }

        이제 이 리턴문 안에다가 우리가 만든 아티클을 넣어줌

        개발자 툴을 열어서 아티클생성확인, 그러나 모든 값이 같을것임


        또 콘솔에 오류가남 - 각각의 자식요소는 무조건 고유의 키값이라는 프롭이 있어야한다고하네요

        리액트의 반복요소는 고유의 프롭으로 키값을 적용해야됨

        아티클에 key 값을 부여함

         {
          arr.map((data, index) => {
            return (
              <article key={index}>
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
            )
          })
        }

        키없다는 오류는 사라짐
        이제 title에 해당 키값 즉 이미지의 이름값이 들어가야됨
         <h2>Title</h2> =>  <h2>{data}</h2>
         개발자 툴에서 확인

         그럼 이미지도 위의 data가 반복되서 들어가는 것처럼 할 수 있지 않을까??
         위의 이미지 값을 잘라내서 리턴 위쪽에 붙이고
         이미지 이름을 ${data}로 수정 
         개발자 툴에서 확인

         한바퀴 도는것도 한번해보자

        const arr변경
       const deg = 360 / arr.length; 부여
let picImg 위에 
let rotatePanel = { transform: `rotate(${deg * index}deg)` }
하면 돌아가지면서 8각형모양이 갖춰짐
회전된 방향으로 올라가야되므로 
 let rotatePanel = { transform: `rotate(${deg * index}deg) translateY(-100vh)` }

 sass에서 전체적인 ui를 조금 내려서 위치를 맞춰줌 

 섹션의 top값을 50% -> 150%로 변경

 피규어 태그에 오버플로우 히든을 부여하면서 포지션 렐러티브도 부여

 이처럼 리액트는 
 이전에는 동적이든 html이든 번거롭게 해야되지만
 jsx에서는 태그상에서(진짜태그는 아니지만) 반복문과 또 js이므로 변수까지, 데이터도 바로 바인딩이 가능 DOM상에서 가능하다
 style에서 바뀌지 않는것은 scss에 바뀌는것은 동적으로 이 페이지 에서 가능
 모든 것을 한 페이지에서 컨트롤이 가능하다 

 이제 이것마져도 패널이라는 컴포넌트를 만들어보자 - 이때 전달하는 프롭스도 배워보자
*/