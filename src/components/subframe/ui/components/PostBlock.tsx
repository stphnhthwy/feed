"use client";
/*
 * Documentation:
 * PostBlock — https://app.subframe.com/abced8033a23/library?component=PostBlock_7643cb44-3594-4908-8daa-d8d1c6689aa0
 */

import React from "react";
import * as SubframeUtils from "../utils";
import { IconButton } from "./IconButton";
import { FeatherEdit3 } from "@subframe/core";
import { FeatherTrash2 } from "@subframe/core";

interface SubcomponentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Subcomponent = React.forwardRef<HTMLElement, SubcomponentProps>(
  function Subcomponent({ className, ...otherProps }: SubcomponentProps, ref) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex h-full w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-2 py-2 shadow-md",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex w-full grow shrink-0 basis-0 items-start gap-1">
          <IconButton variant="neutral-primary" icon={<FeatherEdit3 />} />
          <IconButton
            variant="destructive-secondary"
            icon={<FeatherTrash2 />}
          />
        </div>
      </div>
    );
  }
);

interface PostBlockRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  variant?: "default";
  editable?: boolean;
  content?: React.ReactNode;
  className?: string;
}

const PostBlockRoot = React.forwardRef<HTMLElement, PostBlockRootProps>(
  function PostBlockRoot(
    {
      variant = "default",
      editable = false,
      content,
      className,
      ...otherProps
    }: PostBlockRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/7643cb44 flex w-full flex-col items-start overflow-hidden rounded-lg bg-neutral-50 px-6 py-6",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div
          className={SubframeUtils.twClassNames(
            "flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-2 py-2 shadow-md",
            {
              "group-hover/7643cb44:flex-col group-hover/7643cb44:flex-nowrap group-hover/7643cb44:gap-4":
                editable,
            }
          )}
        >
          {content ? (
            <div className="flex w-full flex-col items-center gap-6">
              {content}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

export const PostBlock = Object.assign(PostBlockRoot, {
  Subcomponent,
});
