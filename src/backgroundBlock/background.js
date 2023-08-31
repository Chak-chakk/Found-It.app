import"./background.css"
import React, {useState} from "react"

export function BackgroundBlock({icons, onClickHandler}){
    const [hints, setHints] = useState(1); // Начальное количество подсказок

    const onClick = (id) => (e) =>{
        onClickHandler(e, id);
    }

    const useHint = () =>{
        if(hints > 0){
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            onClickHandler(null, randomIcon.id); // Добавляем случайный элемент в список найденных
            setHints((prevHints) => prevHints - 1); // Уменьшаем количество подсказок на 1
        };
    }

    return(
    <div className="main-container__background-image">
        {icons.map((elem) => {
            return <button key={elem.id} className="background-image__button" style={{top: `${elem.top}%`, left: `${elem.left}%`}}  onClick={onClick(elem.id)}>
                <img src={elem.picture} alt={elem.alt}/>   
            </button>
        })}
        <button type="button" className="background-image__hint-magnet" onClick={useHint}  disabled={hints === 0}>
            <img src="../image/magnit.png" alt="подсказка магнит"></img>
            <span className="hint-magnet__quantity">{hints}</span>
        </button>
        <img src="../image/background-3.jpg" className="background-image__desktop" alt="space image"></img>
    </div>
    );
}