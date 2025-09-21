import * as React from "react";
import "./SaveUkraineRibbon.css";
import Flag from "./Flag";
import getRelevance from "../relevance";


export const UKRAINE_FLAG_IMAGE_URL = "data:image/svg+xml,%3Csvg class='flag' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23005BBB'/%3E%3Crect width='1200' height='400' y='400' fill='%23FFD500'/%3E%3C/svg%3E";

export interface SaveUkraineRibbonProps extends React.HTMLProps<HTMLDivElement> {
  position?: "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";
  url?: string;
  noRedirect?: boolean;
}

export const defaultProps = {
  position: "TOP_LEFT",
  url: "http://stand-with-ukraine.pp.ua/",
  noRedirect: false,
}

export default function SaveUkraineRibbon(props: SaveUkraineRibbonProps) {
  const { position, noRedirect, url, className, onClick, ...other } = { ...defaultProps, ...props };

  const [relevant, setRelevant] = React.useState<boolean|undefined>();
  if (relevant === undefined)
    getRelevance(setRelevant);
  
  if (!relevant) 
    return null;

  return <div className={"SaveUkraineBanner " + position + " " + className} {...other} onClick={(e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (!noRedirect)
      window.location.href = url
  }}>
    <Flag/>
  </div>
}