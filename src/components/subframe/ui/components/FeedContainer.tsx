"use client";
/*
 * Documentation:
 * FeedContainer — https://app.subframe.com/abced8033a23/library?component=FeedContainer_e25f8137-b0bb-4aea-96dd-3bc0ac3426ab
 */

import React from "react";
import * as SubframeUtils from "../utils";

interface FeedContainerRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  content?: React.ReactNode;
  className?: string;
}

const FeedContainerRoot = React.forwardRef<HTMLElement, FeedContainerRootProps>(
  function FeedContainerRoot(
    { content, className, ...otherProps }: FeedContainerRootProps,
    ref
  ) {
    return content ? (
      <div
        className={SubframeUtils.twClassNames(
          "flex h-full w-full flex-col items-start gap-2 rounded-[24px] border border-solid border-neutral-border bg-default-background",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {content}
      </div>
    ) : null;
  }
);

export const FeedContainer = FeedContainerRoot;
