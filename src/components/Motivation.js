import React, { useEffect } from "react";
var src1 = '../../public/heart11.png'

const Motivation = props => {
    const [Cegaret, setCegaret] = React.useState([])
    const [toggled, setToggled] = React.useState(false)

    const handleCegaretChange = (number) => {
        var arr = [];
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

    var className = "motivationImagesContanier";
    var label = "Motivation:";
    if(props.timeToDeath === 0){
        className = "displayNon";
        label ="They burnt out!";
    }
    return (
        <div className="motivation">
            {label}
            <div  className={className}>
                {Cegaret.map((cegarete, index) => <img key={index} style={{opacity: (toggled && index === Cegaret.length - 1) ? 0.5 : 1 }} width="10%" src={require('../../public/22220.png')} />)}
            </div>
        </div>
    );
}

export default Motivation;
