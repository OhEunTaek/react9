
import './css/style.css';
import Header from './components/Header';
import Panels from './components/Panels';
import Btns from './components/Btns';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const arr = ['Blizzards', 'Calm', "Dusty_Road", "Escape", "Payday", "Retreat", "Seasonal", "Vespers"];
  const deg = 360 / arr.length;

  let [txt, setTxt] = useState(arr);
  return (
    <figure>

      <Header />


      <section>
        {
          txt.map((data, index) => {
            return <Panels key={index} num={index} txt={data} deg={deg} />
          })
        }


      </section>
      <Btns />
      <Footer />
    </figure>
  );
}

export default App;


/*
먼저 Panels 컴포넌트 파일을 만들고 함수를 만든뒤 맵반복 안에있는 내용을 Panels에 넣는다 


// function Panels() { 선언적 함수
const Panels = ()=>{ 대입형 함수
  같은 내용이다

export default Panels; 끝에 내보내주고
import Panels from './components/Panels'; 받아서
arr.map((data, index) => {
            return <Panels /> 안에 넣어주는데
          })

          오류가 날것이다 무슨내용인지 살펴보면
Panels컴포넌트 안쪽에 사용되는 deg, data, index를 읽지 못하는것인데
다른 스크립트 파일이기 때문에 전달을 못하는것이다
따라서 프롭을 전달해줘야한다

먼저 키는 반복이 되는 대상에게 줘야하기 때문에 Panels로 옮긴이상 위치를 바꿔줘야한다
따라서 return <Panels key={index} />
이제 프롭스를 넘겨야하는데 사실 return <Panels key={index} /> 여기 키값도 프롭스다
return <Panels key={index} num={index}/>
let rotatePanel = { transform: `rotate(${deg * props.num}deg) translateY(-100vh)` }

return <Panels key={index} num={index} txt={data}/> 추가하고 

let picImg = { backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.txt}.jpg)` }
<h2>{props.txt}</h2>변경해준다
 return <Panels key={index} num={index} txt={data} deg={deg}/>
  let rotatePanel = { transform: `rotate(${props.deg * props.num}deg) translateY(-100vh)` }
  deg,까지 변경하고
function Panels(props) {마지막 이것까지
즉 컴포넌트에 넣어주는 값을 프롭스라고 한다
이렇게 프롭스로 자식 컴포넌트가 부모 컴포넌트로부터 받을 수 있다.

번거롭다 지금이야 뎁스가 하난데 안쪽에 또 프롭스가 있을수 있으니.. 개선하기 위해서
리덕스이다
프롭스 뎁스가 길어질때마다 전달전달하는게 아니라 외부에 바뀌는 모든것을 관장하는것을 만들어 한번에 할 수 있게 하는것이다 이게좀 복잡하고 첫관문임 따라서 지금 단계에서는 안함

값이 바뀌는것을 지금은 배열로 잠시 만들었지만 이제 이것을 리액트방식인 스테이트를 배우겠다
*/

/*
이벤트 연결 방법

버튼태그 생성
이벤트는 리액트에서는 직접 돔에 연결을 해야된다 기존js처럼 쿼리셀렉터로 찾는것이 아님
말그대로 jsx로 가상돔을 만들어 놓은거기 떄문에 이벤트를 걸려고 쿼리셀렉터로 찾을 수가 없음

 <button onClick={()=>{console.log("You Clicked")}}>버튼</button> 
 클릭하면서 콘솔을 보면됨

 h2를 클릭하면 그 안의 글자가 콘솔에 찍히도록 해보자
 패널.js에가서 <h2 onClick={e => { console.log(e.target.innerText) }}>{props.txt}</h2> 
 하면 됨 다시지우자

 실습시간

 이벤트 발생을 걸면서 이제 왜 값이 변하는 애들을 배열로 하면안되고 스테이트를 사용하지를 배울예정이다
*/

/*
기존에 동적으로 변화되는 값을 쿼리셀럭터로 js로 변경을 해왔었ㅎ는데
이제 이런 변경이 많아질경우 관리가 불가능하다
바인딩 데이터중 자주 변경되는 데이터값을 하나로 모아서 해당 값중에 어떤값이든 변경이되면 재 렌더링 시키는게 필요함 이것이 리액트이고 이 개념이 스테이트이다 따라서 대단위 프로젝트에서 리액트가 선호됨

따라서 배열로 받으면 재렌더링이 안됨 확인해보자
버튼을 클릭하면 첫번째 0인덱스 값을 abc로 바꾸고 그렇게 되면서 화면의 값이 재 랜더링되서 abc가 보일지 확인해보자

 <button onClick={() => { console.log("You Clicked") }}>버튼</button> 이것을 바꿈

  <button onClick={() => { 
        arr[0] = 'ABC';
        console.log(arr); 
       }}>버튼</button>
       이전 전개연산자에서 배운내용들인데 이렇게 하면 변경은 되지만 적용은 안된다

따라서 상태관리를 해줘야하는게 즉 유즈스테이트를 만들어야한다

 let [txt, setTxt] = useState() 을 입력하면 순간 import { useState } from 'react'; 가 생길것임
 txt 상태관리할 배열을 그리고 이것을 변경할 함수로 setTxt를 만듦
useState() 괄호 안에 상태관리를 하고 싶은 값을 넣어야됨
let [txt, setTxt] = useState(arr); arr을 넣어보겠음
이것은 구조분해할당의 모습이다 
useState에는 이제 무조건 배열로 반환된 값이 들어있게 된다
첫번째 배열값은 txt에 담을것이고 두번째 배열값은 setTxt 에 담게된다
콘솔로 보면
  let [txt, setTxt] = useState(arr);
  console.log(txt); => 배열이 나옴
    console.log(setTxt); => 이상한 함수가 나옴

    상태관리 할때 값은 무조건 두번째 배열로 받는 위치에서 생성된 함수로 바뀌어야 하는것이다

    let [txt, setTxt] = useState(arr);
  return (
    <figure>
      <button onClick={() => {
        let txt2 = [...txt];
        txt2[0] = "ABC";
        console.log(txt2);
      }}>버튼</button>

      <Header />

      코딩후 버튼을 누르면 블리자드가 abc로 바뀌는것을 볼 수있음

      이제 배열값을 유즈스테이트로 상태관리되고있는 arr값을 바꿔치기 하는데 setText를 이용해야됨
      무슨말이냐??

      <button onClick={() => {
        let txt2 = [...txt];
        txt2[0] = "ABC";
        console.log(txt2);
        setTxt(txt2);
      }}>버튼</button> 이렇게 코딩을 해야된다는 것임
      따라서 이후에 

       arr.map((data, index) =>  에서 arr이 아닌 txt로 바꿔야 함

       그리고 클릭하면 콘솔의 값이 변경되면서 이미지도 사라지고, ABC값으로 렌더링됨

       이제 ABC가 아닌 다른 배열의 값 예를 들면 Retreat으로 바꿔보자
       이제 클릭하면 그림과 글이 바뀜
       초반에는 이 유즈스테이트를 사용하는게 번거로운데 
       대단위 프로젝트를 하게되면 이 유즈스테이트가 빛을 보게된다 즉 유지보수가 아무 편리하게됨 작은 싸이트는 리액트 개발이 오히려 좀더 어려울 수 있음

       정리
       기존의 배열값을 유즈스테이트로 상태관리하는것 
       let [txt, setTxt] = useState(arr);이렇게 두개의 인수를 넣으면 앞의 리턴값은 상태관리가 된 결과값이 반환되고 두번쟤는 이용될 함수값이 들어옴
       버튼클릭시 해당값을 복사해서 새로운 배열을 만들고 통째로 바꿔치지 하고 두번째 함수의 인수로 넣으면 이제 반환된 결과값인 txt에는 바뀐 새로운 배열로 상태값이 바뀌면서 연동된 모든 데이터가 동시가 적용되며 상태유지가 되는것이다
       지금 이해안되도 앞으로 계속 반복될것이니 걱정말라

       지저분하니 외부함수로 뺴자
        const deg = 360 / arr.length;

  let [txt, setTxt] = useState(arr);

  function changeState(){
    let txt2 = [...txt];
    txt2[0] = "Retreat";
    console.log(txt2);
    setTxt(txt2);
  }
 <button onClick={changeState}>버튼</button>

      이렇게 변경 이렇게되면 리턴안은 깔끔해지고 앱함수를 처음 볼때 어떤 변수와 함수가 실행되는지를 볼 수 있어 좋다

이제 좌우버튼을 넣어서 상태값을 변경해보자
*/
/*
좌우버튼 코딩할꺼임
<button onClick={changeState}>버튼</button>
function changeState() {
    let txt2 = [...txt];
    txt2[0] = "Retreat";
    console.log(txt2);
    setTxt(txt2);
  }
  지워줌 좌우버튼클릭시 유즈스테이트 다시 쓸예정임

  섹션 바깥에 호출하고 컴포넌트로 버튼을 만들어보자

  btns컴포넌트만들고 각가 연결해줌
  import Btns from './components/Btns';
   </section>
      <Btns />
      <Footer />

  Btns.js 에서 먼저 두개의 div를 만들고 프레그멘트 복습시키면서 프레그먼트로 감싸줌
  돔이 만들어져있는지 확인할것인데 setTxt사용안했다는 경고 혹시 나오는데 걍 무시

  사스로 가서 버튼 코딩 ->

  가로로 프르브는 왼쪽으로 치우치게 하기위해transform: translate(-20vw,-50%); 함 

  버튼 css 프리브 같이하고 넥스트 시켜보기 

  이제 버튼에 이벤트 부여하고 유즈스테이트를 이용해서 바꿔주면된다

*/