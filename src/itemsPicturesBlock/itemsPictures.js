import "./itemsPictures.css";
import {items} from "../data/data";

export function ItemsPicturesBlock ({totalStats,foundStats}){
    return(
        <div className="searched-items-block__items-picture">
          {items.map((el) => {
            return <div key={el.id} className="items-picture__element">
            <img src={el.picture} alt={el.alt}/>  
              <span className="items-picture__item-name">{foundStats[el.id] || 0}/{totalStats[el.id]}</span>
            <div className="items-picture__hidden-block">
              <p className="hidden-block__text">{el.name}</p>
              </div> 
          </div>
          })}
        </div>
    );
}