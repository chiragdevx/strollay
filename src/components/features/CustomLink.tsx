import Link from "next/link";

import { parseContent } from "../../utils";

export default function ALink({
  children,
  className,
  content,
  style,
  ...props
}: any) {
  const preventDefault = (e: any) => {
    if (props.href === "#") {
      e.preventDefault();
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };

  if (content) {
    // When `content` is provided, use `dangerouslySetInnerHTML` and pass `href` directly to `Link`
    return (
      <Link {...props}>
        <a
          className={className}
          style={style}
          onClick={preventDefault}
          dangerouslySetInnerHTML={parseContent(content)}
        />
      </Link>
    );
  } else {
    // For simple cases without `content`, avoid nesting `<a>` inside `<Link>`
    // Instead, attach the event handler and other props directly to `Link`
    return (
      <Link
        {...props}
        className={className}
        style={style}
        onClick={preventDefault}
      >
        {children}
      </Link>
    );
  }
}
