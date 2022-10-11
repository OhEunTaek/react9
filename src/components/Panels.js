function Panels(props) {
    // const Panels = ()=>{
    let rotatePanel = { transform: `rotate(${props.deg * props.num}deg) translateY(-100vh)` }
    let picImg = { backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.txt}.jpg)` }
    return (
        <article style={rotatePanel}>
            <div className="inner">
                <div className="pic" style={picImg}>
                    <div className="dot"></div>
                </div>

                <div className="txt">
                    <h2>{props.txt}</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </article>
    )
}

export default Panels;