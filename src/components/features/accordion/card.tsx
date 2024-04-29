import React, { useRef, useState } from "react";
import ALink from "@/components/features/CustomLink";
import { parseContent } from "../../../utils";

export default function Card(props: any) {
  const { adClass, iconClass, type = "normal", url } = props;
  const { title, expanded: defaultExpanded = false, children } = props;
  const [expanded, setExpanded] = useState(defaultExpanded);
  const contentRef = useRef<HTMLDivElement>(null); // Correct type for ref

  const toggle = () => {
    setExpanded(!expanded);
  };

  return type === "parse" ? (
    <div className={`border-t border-gray-200 pt-4 py-4 card ${adClass}`}>
      <div className="card-header" onClick={toggle}>
        <div
          className={`toggle-button ${expanded ? "expanded" : "collapsed"}`}
          dangerouslySetInnerHTML={parseContent(title)}
        />
      </div>
      <div
        className="card-body overflow-hidden transition-height duration-300 ease-in-out"
        style={{
          height: expanded ? contentRef?.current?.scrollHeight ?? "0" : "0",
        }}
      >
        <div ref={contentRef} className="card-body overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  ) : (
    <div className={`py-3 card ${adClass}`}>
      <div className="card-header" onClick={toggle}>
        <div className={`toggle-button ${expanded ? "expanded" : "collapsed"}`}>
          {title}
        </div>
      </div>
      <div
        className="card-body overflow-hidden transition-height duration-300 ease-in-out"
        style={{
          height: expanded ? contentRef?.current?.scrollHeight ?? "0" : "0",
        }}
      >
        <div ref={contentRef} className="card-body overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
