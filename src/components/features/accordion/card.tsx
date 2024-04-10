import React, { useRef, useState } from "react";

import ALink from "@/components/features/CustomLink";

import { parseContent } from "../../../utils";

export default function Card(props: any) {
  const { adClass, iconClass, type = "normal", url } = props;

  const { title, expanded: defaultExpanded = false, children } = props;
  const [expanded, setExpanded] = useState(defaultExpanded);
  const contentRef = useRef(null);

  const toggle = () => {
    setExpanded(!expanded);
  };

  return "parse" === type ? (
    <div
      className={`border-top: 3px solid;
    padding-top: 2rem;
    padding-bottom: 2rem card`}
    >
      <div
        className={`border-t border-gray-200 pt-4 py-4 card-header`}
        onClick={toggle}
      >
        <a
          className={`toggle-button ${expanded ? "expanded" : "collapsed"}`}
          dangerouslySetInnerHTML={parseContent(title)}
        ></a>
      </div>
      <div
        className="card-body overflow-hidden transition-height duration-300 ease-in-out"
        style={{ height: expanded ? contentRef?.current?.scrollHeight : "0" }}
      >
        <div className="card-body overflow-hidden">{props.children}</div>
      </div>
    </div>
  ) : (
    <>
      <div className={`py-3 card`}>
        <div className={`card-header`} onClick={toggle}>
          <a className={`toggle-button ${expanded ? "expanded" : "collapsed"}`}>
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
}
