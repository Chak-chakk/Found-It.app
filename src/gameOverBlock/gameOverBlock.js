import "./gameOverBlock.css"
import { CapBlock } from "../capBlock/capBlock";
import { useState } from "react";

export function GameOverBlock ({isWin}) {
    const [restartClicked, setReastartClicked] = useState(false);

    const handleRestartClick = () =>{
        setReastartClicked(true);
        window.location.reload();
    }
    return(
        <div className={`main-container__hidden-container ${isWin? "main-container__hidden-container--visible": ""}`}>
            <CapBlock/>
            <div className="hidden-container__restart-window">
                <h2 className="restart-window__main-text">YOU WIN!!!</h2>
                <div className="restart-window__past-stage-img">
                    <img src="../image/background-3searched.jpg" alt="картинка пройденного уровня"/>
                </div>
                <div className="restart-window__container">
                    <span className="container__restart-text">RESTART</span>
                    <button type="submit" className="container__restart-button" onClick={handleRestartClick}>
                        <img src="../image/restart.png" alt="иконка перезагрузки"/>
                    </button>
                </div>
            </div>
            <div className="hidden-container__background-picture">
                <img src="../image/background-3-filtred.jpg" alt="картинка победы"/>
            </div>
        </div>
    );
}