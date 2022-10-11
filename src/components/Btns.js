import { useState } from "react";

function Btns(props) {


    let [index, setIndex] = useState(0);
    // function plus() {
    //     setIndex(++index);
    //     console.log(props.frame.current);
    //     props.frame.current.style.transform = `rotate(${index * props.deg}deg)`;
    // }
    // function minus() {
    //     setIndex(--index);
    //     props.frame.current.style.transform = `rotate(${index * props.deg}deg)`;
    // }

    function move(num) {
        setIndex(num);
        props.frame.current.style.transform = `rotate(${num * props.deg}deg)`;
    }
    return (
        <>
            <div className="btnPrev" onClick={() => move(--index)}>
                <span>PREV</span>
            </div>

            <div className="btnNext" onClick={() => move(++index)}>
                <span>NEXT</span>
            </div>
        </>
    )
}

export default Btns;