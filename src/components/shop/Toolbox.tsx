import { useRouter } from "next/router";
import { useEffect } from "react";

import ALink from "@/components/features/CustomLink";

// import SidebarFilterThree from "~/components/partials/shop/sidebar/sidebar-filter-three";

export default function ToolBox(props: any) {
  const { type = "left" } = props;
  const router = useRouter();
  const query: any = router.query;
  const gridType: any = query.type ? query.type : "grid";
  const sortBy: any = query.sortby ? query.sortby : "default";
  const perPage: any = query.per_page ? query.per_page : 12;
  let tmp = 0;

  useEffect(() => {
    window.addEventListener("scroll", stickyToolboxHandler);

    return () => {
      window.removeEventListener("scroll", stickyToolboxHandler);
    };
  }, []);

  const onChangeAttri = (e: any, attri: any) => {
    e.preventDefault();
    let url = router.pathname.replace("[grid]", query.grid);
    let arr = [`${attri}=${e.target.value}`, "page=1"];
    for (let key in query) {
      if (key !== attri && key !== "page" && key !== "grid")
        arr.push(key + "=" + query[key]);
    }
    url = url + "?" + arr.join("&");
    router.push(url);
  };

  const showSidebar = () => {
    if (type === "navigation" && window.innerWidth > 991) {
      const body = document.querySelector(
        ".navigation-toggle-btn",
      ) as HTMLButtonElement;
      if (body) body.click();
    } else {
      const body = document.querySelector("body");
      if (body)
        body.classList.add(
          `${type === "left" || type === "off-canvas" || type === "navigation" || type === "horizontal" ? "sidebar-active" : "right-sidebar-active"}`,
        );
    }
  };

  const stickyToolboxHandler = (e: any) => {
    const pageContent = document.querySelector(".page-content") as HTMLElement;
    let top = pageContent
      ? pageContent.offsetTop +
        (document.querySelector("header")!.offsetHeight ?? 0) +
        100
      : 600;
    let stickyToolbox = document.querySelector(".sticky-toolbox");
    let height = 0;

    if (stickyToolbox) {
      const stickyToolboxElement = stickyToolbox as HTMLElement;
      height = stickyToolboxElement.offsetHeight;
    }

    if (
      window.pageYOffset >= top &&
      window.innerWidth < 768 &&
      e.currentTarget.scrollY < tmp
    ) {
      if (stickyToolbox) {
        stickyToolbox.classList.add("fixed");
        if (!document.querySelector(".sticky-toolbox-wrapper")) {
          let newNode = document.createElement("div");
          newNode.className = "sticky-toolbox-wrapper";
          if (stickyToolbox && stickyToolbox.parentNode) {
            let newNode = document.createElement("div");
            newNode.className = "sticky-toolbox-wrapper";
            stickyToolbox.parentNode.insertBefore(newNode, stickyToolbox);
            document
              .querySelector(".sticky-toolbox-wrapper")
              ?.insertAdjacentElement("beforeend", stickyToolbox);
          }
        }
        const wrapper = document.querySelector(".sticky-toolbox-wrapper");
        if (wrapper && !wrapper.getAttribute("style")) {
          wrapper.setAttribute("style", "height: " + height + "px");
        }
      }
    } else {
      if (stickyToolbox) {
        stickyToolbox.classList.remove("fixed");
      }

      const wrapper = document.querySelector(".sticky-toolbox-wrapper");
      if (wrapper) {
        wrapper.removeAttribute("style");
      }
    }

    const wrapper = document.querySelector(
      ".sticky-toolbox-wrapper",
    ) as HTMLElement;
    if (wrapper && window.outerWidth > 767) {
      wrapper.style.height = "auto";
    }

    tmp = e.currentTarget.scrollY;
  };

  return (
    <nav
      className={`toolbox sticky-toolbox sticky-content fix-top ${type === "horizontal" ? "toolbox-horizontal" : ""}`}
    >
      {/* {type === "horizontal" ? <SidebarFilterThree /> : ""} */}
      <div className="toolbox-left">
        {type === "left" ||
        type === "off-canvas" ||
        type === "navigation" ||
        type === "horizontal" ? (
          <ALink
            href="#"
            className={`toolbox-item left-sidebar-toggle btn btn-outline btn-primary btn-rounded ${type === "navigation" ? "btn-icon-left btn-sm" : "btn-sm btn-icon-right"} ${type === "off-canvas" || type === "navigation" ? "" : "d-lg-none"}`}
            onClick={showSidebar}
          >
            {type === "navigation" ? <i className="d-icon-filter-2"></i> : ""}
            Filter
            {type === "navigation" ? (
              ""
            ) : (
              <i className="d-icon-arrow-right"></i>
            )}
          </ALink>
        ) : (
          ""
        )}

        <div
          className={`toolbox-item toolbox-sort ${type === "boxed" || type === "banner" ? "select-box text-dark" : "select-menu"}`}
        >
          {type === "boxed" || type === "banner" ? (
            <label>Sort By :</label>
          ) : (
            ""
          )}
          <select
            name="orderby"
            className="form-control"
            defaultValue={query.sortby ? query.sortby : "default"}
            onChange={(e) => onChangeAttri(e, "sortby")}
          >
            <option value="default">Default</option>
            <option value="popularity">Most Popular</option>
            <option value="rating">Average rating</option>
            <option value="date">Latest</option>
            <option value="price-low">Sort forward price low</option>
            <option value="price-high">Sort forward price high</option>
            <option value="">Clear custom sort</option>
          </select>
        </div>
      </div>
      <div className="toolbox-right">
        <div className="toolbox-item toolbox-show select-box text-dark">
          <label>Show :</label>
          <select
            name="count"
            className="form-control"
            defaultValue={perPage}
            onChange={(e) => onChangeAttri(e, "per_page")}
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>
        <div
          className={`toolbox-item toolbox-layout ${type === "right" ? "mr-lg-0" : ""}`}
        >
          <ALink
            href={{
              pathname: router.pathname,
              query: { ...query, type: "list" },
            }}
            scroll={false}
            className={`d-icon-mode-list btn-layout ${gridType === "list" ? "active" : ""}`}
          ></ALink>
          <ALink
            href={{
              pathname: router.pathname,
              query: { ...query, type: "grid" },
            }}
            scroll={false}
            className={`d-icon-mode-grid btn-layout ${gridType !== "list" ? "active" : ""}`}
          ></ALink>
        </div>

        {type === "right" ? (
          <ALink
            href="#"
            className="toolbox-item right-sidebar-toggle btn btn-sm btn-outline btn-primary btn-rounded btn-icon-right d-lg-none"
            onClick={showSidebar}
          >
            Filter<i className="d-icon-arrow-left"></i>
          </ALink>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
