"use client";
/*
 * Documentation:
 * Post — https://app.subframe.com/abced8033a23/library?component=Post_b00708b1-98d8-44b0-bcb1-15c7453d0e33
 * Button — https://app.subframe.com/abced8033a23/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Text Area — https://app.subframe.com/abced8033a23/library?component=Text+Area_4ec05ee8-8f1c-46b2-b863-5419aa7f5cce
 */

import React from "react";
import * as SubframeUtils from "../utils";
import { Button } from "./Button";
import { FeatherXCircle } from "@subframe/core";
import { TextArea } from "./TextArea";

interface PostRootProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const PostRoot = React.forwardRef<HTMLElement, PostRootProps>(function PostRoot(
  { className, ...otherProps }: PostRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex flex-col items-start gap-2",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex w-full flex-col items-start gap-2">
        <div className="flex w-full items-center gap-2">
          <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
            Label
          </span>
          <Button
            disabled={false}
            variant="brand-tertiary"
            size="medium"
            icon={<FeatherXCircle />}
            iconRight={null}
            loading={false}
          />
        </div>
        <TextArea
          className="max-h-[320px] w-auto grow shrink-0 basis-0"
          error={false}
          variant="outline"
          label=""
          helpText=""
        />
        <div className="flex w-full items-center justify-end gap-2">
          <Button variant="brand-secondary">Secondary</Button>
          <Button>Primary</Button>
        </div>
      </div>
    </div>
  );
});

export const Post = PostRoot;
