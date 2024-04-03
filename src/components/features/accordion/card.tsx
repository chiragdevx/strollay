import React, { useRef, useState } from "react";

import ALink from "@/components/features/CustomLink";

import SlideToggle from "react-slide-toggle";

export default function Card(props: any) {
  const { adClass, iconClass, type = "normal", url } = props;

  const { title, expanded: defaultExpanded = false, children } = props;
  const [expanded, setExpanded] = useState(defaultExpanded);
  const contentRef = useRef(null);

  const toggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={`card`}>
        <div className={`card-header`} onClick={toggle}>
          <a
            href="#"
            className={`toggle-button ${expanded ? "expanded" : "collapsed"}`}
          >
            {title}
          </a>
        </div>
        <div
          className="card-body overflow-hidden transition-height duration-300 ease-in-out"
          style={{ height: expanded ? contentRef?.current?.scrollHeight : "0" }}
        >
          <div className="card-body overflow-hidden">{props.children}</div>
        </div>
      </div>
    </>
  );

  return "";
}
