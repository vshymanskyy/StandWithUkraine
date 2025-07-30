import React, { createRef, useEffect, useState } from "react";
import "./StandWithUkraine.css";
import getRelevance from "../relevance";

export interface StandWithUkraineProps {
  single?: boolean;
  team?: boolean;
  contribution?: boolean;
  url?: string;
}

const singleTxt = "This project was created by a developer from Ukraine.";
const teamText  = "This project was created by a team from Ukraine.";
const contributionText = "This project was developed with substantial contributions from Ukrainian developers.";

export default function StandWithUkraine(props: StandWithUkraineProps) {
  const topRef = createRef<HTMLDivElement>();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!topRef.current) return; // wait for the elementRef to be available
    const resizeObserver = new ResizeObserver((e: ResizeObserverEntry[]) => {
      setHeight(e[0].target.clientHeight);
    });
    resizeObserver.observe(topRef.current);
    return () => resizeObserver.disconnect(); // clean up 
  }, []);

  const h = height + "px";
  const { single, team, contribution, url } = props;

  const [relevant, setRelevant] = React.useState<boolean|undefined>();
  if (relevant === undefined)
    getRelevance(setRelevant); 


  return <div hidden={!relevant} className="StantWithUkraine" onClick={() => {
    if (url) {
      window.location.href = url;
    }
    else {
      window.location.href = "http://stand-with-ukraine.pp.ua/";
    }
  }}>
    <div className="top" ref={topRef}>
      {
        single ? 
          <>
            {
              singleTxt
            }
            <br/>
          </>
        : 
          null
      }
      {
        team ?
          <>
            {
              teamText
            }
            <br/>
          </>
        :
          null
      }
      {
        contribution ?
          <>
            {
              contributionText
            }
            <br/>
          </>
        :
          null
      }
      Russia has invaded Ukraine and already killed tens of thousands of civillians,<br/>
      with many more reped or tortured. It's a <b>genocide</b>. We need your help.
    </div>
    <div className="bottom" style={{height: h, lineHeight: h}}>
      Help Ukraine Now {">"}
    </div>
  </div>
}
