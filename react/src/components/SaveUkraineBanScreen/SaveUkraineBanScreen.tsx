import * as React from "react";
import "./SaveUkraineBanScreen.css";
import { getUserLanguage, randomItem } from "../Utility";
import Flag from "../SaveUkraineRibbon/Flag";
import { CSSTransition } from "react-transition-group";
import getRelevance from "../relevance";


export const UKRAINE_FLAG_IMAGE_URL = "data:image/svg+xml,%3Csvg class='flag' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23005BBB'/%3E%3Crect width='1200' height='400' y='400' fill='%23FFD500'/%3E%3C/svg%3E";

export interface SaveUkraineBanScreenProps extends React.HTMLProps<HTMLDivElement> {
  text?: JSX.Element;
  hideBlood?: boolean;
  isGraphicIncluded?: boolean | string;
  countries?: string[];
  isCancelable?: boolean;
  forceShow?: boolean,
}

export const defaultProps = {
  text: <>Остановить войну с <b>Украиной</b></>,
  hideBlood: false,
  isGraphicIncluded: true,
  countries: ['ru', 'by'],
  isCancelable: false,
  forceShow: false,
}

export default function SaveUkraineBanScreen(props: SaveUkraineBanScreenProps) {
  const { text, hideBlood, countries, isCancelable, forceShow, isGraphicIncluded, className, ...other } = { ...defaultProps, ...props };
  const [banned, removeBan] = React.useState(true);

  const [relevant, setRelevant] = React.useState<boolean|undefined>();
  if (relevant === undefined)
    getRelevance(setRelevant);

  const lang = getUserLanguage();
  if ((countries.indexOf(lang) === -1) && !forceShow) {
    return null
  }

  return <CSSTransition
    in={banned && relevant}
    timeout={{
      enter: 0,
      exit: 200
    }}
    unmountOnExit
    classNames="slide-down-ban-screen"
  >
    <div className={ "SaveUkraineBanScreen " + className } {...other}>
      <Flag/>
      {
        isGraphicIncluded ?
          <img src={getGraphicUrl(isGraphicIncluded)} className="graphics"/>
        :
        null
      }
      <div className="text">
        {text}
      </div>
      {
        !hideBlood ?
          <img src="https://raw.githubusercontent.com/JulianWww/StandWithUkraine/main/assets/with-drops-of-blood.png" className="blood"/>
        :
          null
      }
      {
        isCancelable
          ? <button className="cancel" onClick={() => removeBan(false)}>✖</button>
          : null
      }
    </div>
  </CSSTransition>
}

function getGraphicUrl(isGraphicIncluded: string | boolean) {
  if (typeof isGraphicIncluded === 'string') {
      return isGraphicIncluded;
  } else {
      return randomItem(
          `https://raw.githubusercontent.com/hejny/Ukraine/main/assets/graphic/war1.jpg`,
          // TODO: More images @see https://facebook.com/story.php?story_fbid=10221678909548124&id=1416254989&m_entstream_source=timeline
      );
  }
}