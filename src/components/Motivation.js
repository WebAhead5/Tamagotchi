import React, { useEffect } from "react";
var src1 = "/home/amir/repo01/projects/Tamagotchi/public/22220.png"

const Motivation = props => {
    const [Cegaret, setCegaret] = React.useState([])
    const handleCegaretChange = (number) => {
        var arr = [];
        for (let i = 0; i < number; i++) {
            arr.push("");
        }
        setCegaret(arr);
    }
    React.useEffect(() => {
        console.log("hii")
        handleCegaretChange(props.timeToDeath / 6);

    }, [props.timeToDeath]);

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); }}>
                <fieldset>
                    <div>
                        <h2>Motivation:</h2>
                        {Cegaret.map(() => <img src={src1} />)}
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Motivation;
