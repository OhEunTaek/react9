
import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Panels from './components/Panels';

function App() {
  const arr = ['Blizzards', 'Calm', "Dusty_Road", "Escape", "Payday", "Retreat", "Seasonal", "Vespers"];
  const deg = 360 / arr.length;
  return (
    <figure>
      <Header />
      <section>
        {
          arr.map((data, index) => {
            return <Panels key={index} num={index} txt={data} deg={deg} />
          })
        }


      </section>
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