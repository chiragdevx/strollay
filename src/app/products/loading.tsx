import React from "react";

import { cn } from "@/common/util/commonHelper";

interface ProductCardSkeletonProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export function ProductCardSkeleton({
  className,
  ...props
}: ProductCardSkeletonProps) {
  return (
    <div
      className={cn("h-full overflow-hidden rounded-sm", className)}
      {...props}
    >
      <div className="border-b p-0">
        <div style={{ position: "relative", paddingTop: "75%" }}>
          <div
            className="rounded-none h-full w-full"
            style={{ background: "lightgray" }}
          />
        </div>
      </div>
      <div className="space-y-2.5 p-4">
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-4 w-1/6 bg-gray-300 rounded"></div>
      </div>
      <div className="space-x-2 p-4 pt-1 flex justify-between">
        <div className="h-8 w-full bg-gray-300 rounded"></div>
        <div className="h-8 w-8 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
