import { useState } from "react";

function Btns(props) {


    let [index, setIndex] = useState(0);
    function plus(e) {
        setIndex(++index);
        const frame = e.target.closest("figure").querySelector('section');
        frame.style.transform = `rotate(${index * props.deg}deg)`
    }
    function minus(e) {
        setIndex(--index);
        const frame = e.target.closest("figure").querySelector('section');
        frame.style.transform = `rotate(${index * props.deg}deg)`
    }
    return (
        <>
            <div className="btnPrev" onClick={e => minus(e)}>
                <span>PREV</span>
            </div>

            <div className="btnNext" onClick={e => plus(e)}>
                <span>NEXT</span>
            </div>
        </>
    )
}

export default Btns;