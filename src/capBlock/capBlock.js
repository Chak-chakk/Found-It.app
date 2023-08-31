import "./capBlock.css"

export function CapBlock(){
    return (
    <div className="main-container__cap">
        <button type="submit"  className="cap__home-page-button">
            <img src="../image/home.svg" className="home-page-icon__svg" alt="home-icon"></img>
        </button>
        <h1 className="cap__header-text">Found it!</h1>
        <button type="submit" className="cap__settings-button">
            <img src="../image/settings.svg" className="settings-icon__svg" alt="settings-icon" ></img>
        </button>
    </div>
    );
}