import React, { useEffect } from "react";
var src1 = '../../public/22220.png'

const Motivation = props => {
    const [Cegaret, setCegaret] = React.useState([])
    const [toggled, setToggled] = React.useState(false)

    const handleCegaretChange = (number) => {
        console.log(number);
        var arr = [];
        console.log(number);
        for (let i = 0; i < number; i++) {
            arr.push("");
        }
        setCegaret(arr);
    }

    React.useEffect(() => {
        handleCegaretChange(props.timeToDeath);
        const interval = setInterval(() => setToggled(toggled => !toggled), 300)
        return () => clearInterval(interval);

    }, [props.timeToDeath]);


    if(!props.userData)return <div></div>

    return (

        <div className="motivation">
            Motivation:
            {Cegaret.map((cegarete, index) => <img style={{opacity: (toggled && index === Cegaret.length - 1) ? 0.5 : 1 }} width="5%" src={require('../../public/22220.png')} />)}
        </div>
    );
}

export default Motivation;
