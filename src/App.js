import "./styles.css";
import { items} from "./data/data";
import { useState, useEffect } from "react";
import { CapBlock } from "./capBlock/capBlock";
import { BackgroundBlock } from "./backgroundBlock/background";
import { ItemsPicturesBlock } from "./itemsPicturesBlock/itemsPictures";
import { ItemsDescription } from "./itemsDescriptionBlock/itemsDescription"
import { GameOverBlock } from "./gameOverBlock/gameOverBlock";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export default function App() {
  const [totalIconsAmount, setTotalIconsAmount] = useState(0);
  const [foundIcons, setFoundIcons] = useState([]);
  const [icons, setIcons] = useState([]);
  const [totalStats, setTotalStats] = useState({});
  const [foundStats, setFoundStats] = useState({});
  const [isWin, setIsWin] = useState(false);

  useEffect( () =>{
    if(foundIcons.length === totalIconsAmount && totalIconsAmount !== 0){
      setIsWin(true);
    }
  },[foundIcons,totalIconsAmount])
  
  useEffect( () => {
    const newIcons = items.reduce((acc, elem) =>{
      for(let i = 0; i < 2; i++ ){
        acc.push({
          ...elem, 
          top: getRandomInt(0,95),
          left: getRandomInt(0,95),
          id: `${elem.id}-${i}`,
          category: elem.id
        })
      }
      return acc;
    },[])
    setIcons(newIcons);
    setTotalIconsAmount(newIcons.length);

    const newStats = newIcons.reduce((acc, elem) => {
      const type = elem.category;
      if(acc.hasOwnProperty(type)){
        acc[type] += 1;
      }else{
        acc[type] = 1;
      }
      return acc;
    }, {})
    setTotalStats(newStats)
  }, [setIcons]);

  useEffect(() =>{
    const newFoundStats = foundIcons.reduce((acc,elem) => {
      const type = elem.category;
      if(acc.hasOwnProperty(type)){
        acc[type] += 1;
      }else{
        acc[type] = 1;
      }
      return acc;
    }, {})
    setFoundStats(newFoundStats);
  }, [foundIcons])

  const onClickHandler = (e, id) =>{
    const index = icons.findIndex((el) => {
      if(el.id === id){
        return true
      }
      return false
    })
    const newIconsArr = [...icons];
    const removed = newIconsArr.splice(index, 1);
    setFoundIcons(foundIcons.concat(removed));
    setIcons(newIconsArr);
  }
  return <div className="App">
    <div className="main-container">
      <GameOverBlock isWin={isWin}/>
      <CapBlock/>
      <BackgroundBlock icons={icons} onClickHandler={onClickHandler}/>
      <div className="main-container__searched-items-block">
        <ItemsDescription totalIconsAmount={totalIconsAmount} foundIcons={foundIcons}/>
        <ItemsPicturesBlock foundStats={foundStats} totalStats={totalStats}/>
      </div>
    </div>
  </div>;
}
