import * as React from "react";
import "./SaveUkraineBanScreen.css";
import { getUserLanguage } from "../Utility";
import Flag from "../SaveUkraineBanner/Flag";


export const UKRAINE_FLAG_IMAGE_URL = "data:image/svg+xml,%3Csvg class='flag' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23005BBB'/%3E%3Crect width='1200' height='400' y='400' fill='%23FFD500'/%3E%3C/svg%3E";

export interface SaveUkraineBanScreenProps extends React.HTMLProps<HTMLDivElement> {
  text?: JSX.Element;
}

export const defaultProps = {
  text: <>Остановить войну с <b>Украиной</b></>
}

export default function SaveUkraineBanScreen(props: SaveUkraineBanScreenProps) {
  const { text, className, onClick, ...other } = { ...defaultProps, ...props };

  return <div className={ "SaveUkraineBanScreen " + className } {...other}>
    <Flag/>
    <div className="text">
      {text}
    </div>
  </div>
}