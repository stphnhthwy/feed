"use client";
/*
 * Documentation:
 * PostBlock — https://app.subframe.com/abced8033a23/library?component=PostBlock_7643cb44-3594-4908-8daa-d8d1c6689aa0
 * Icon Button — https://app.subframe.com/abced8033a23/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import React from "react";
import * as SubframeUtils from "../utils";
import { IconButton } from "./IconButton";
import { FeatherEdit3 } from "@subframe/core";
import { FeatherTrash } from "@subframe/core";

interface PostBlockRootProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default";
  editMode?: boolean;
  image?: React.ReactNode;
  className?: string;
}

const PostBlockRoot = React.forwardRef<HTMLElement, PostBlockRootProps>(
  function PostBlockRoot(
    {
      variant = "default",
      editMode = false,
      image,
      className,
      ...otherProps
    }: PostBlockRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/7643cb44 flex w-full flex-col items-start gap-6 overflow-hidden rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex w-full flex-col items-start gap-4">
          <span className="w-full text-body font-body text-default-font">
            Label
          </span>
          {image ? (
            <div className="flex w-full items-center gap-6">{image}</div>
          ) : null}
          <div
            className={SubframeUtils.twClassNames(
              "hidden h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border",
              { flex: editMode }
            )}
          />
          <div
            className={SubframeUtils.twClassNames(
              "hidden w-full items-center",
              { flex: editMode }
            )}
          >
            <div className="flex grow shrink-0 basis-0 items-center justify-end gap-1 self-stretch">
              <IconButton icon={<FeatherEdit3 />} />
              <IconButton
                variant="destructive-secondary"
                icon={<FeatherTrash />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export const PostBlock = PostBlockRoot;
