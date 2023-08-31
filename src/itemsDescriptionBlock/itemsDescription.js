import "./itemsDescription.css";

export function ItemsDescription ({totalIconsAmount,foundIcons}){
    return(
      <div className="searched-items-block__items-description">
        <span className="items-description__episode-name">Travel to space:</span>
        <div className="items-description__item-counting">
          <span className="item-counting__episode-items">Episode items:</span>
          <span className="item-counting__items-quantity">{foundIcons.length}/{totalIconsAmount}</span>
        </div>
      </div>
    );
}