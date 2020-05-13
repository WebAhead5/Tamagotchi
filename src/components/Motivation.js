import React, { useEffect } from "react";
var src1 = '../../public/22220.png'




const Motivation = props => {
    const [Cegaret, setCegaret] = React.useState([])
    const [toggled, setToggled] = React.useState(false)

    const handleCegaretChange = (number) => {
        var arr = [];
        console.log(number);
        for (let i = 0; i < number; i++) {
            arr.push("");
        }
        setCegaret(arr);
    }



    React.useEffect(() => {
         handleCegaretChange((props.timeToDeath)/ 6);
        const interval = setInterval(() => setToggled(toggled => !toggled), 300)
    return() => clearInterval(interval);

    }, []);
    console.log(Cegaret)
    return (
        
        <div>
            <form onSubmit={(e) => { e.preventDefault(); }}>
                <fieldset>
                    <div>
                        <h2>Motivation:</h2>
                        {Cegaret.map((cegarete, index) => <img style={{ opacity: (toggled && index === Cegaret.length - 1) ? 0.5 : 1 }} width="10%" src={require('../../public/22220.png')} />)}
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Motivation;
