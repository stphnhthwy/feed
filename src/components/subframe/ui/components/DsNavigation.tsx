"use client";
/*
 * Documentation:
 * DS Navigation — https://app.subframe.com/abced8033a23/library?component=DS+Navigation_a5284b1d-a26a-4aca-9bc1-8676aee537f9
 * Switch — https://app.subframe.com/abced8033a23/library?component=Switch_7a464794-9ea9-4040-b1de-5bfb2ce599d9
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  selected?: boolean;
  rightSlot?: React.ReactNode;
  className?: string;
}

const NavItem = React.forwardRef<HTMLElement, NavItemProps>(function NavItem(
  {
    icon = null,
    children,
    selected = false,
    rightSlot,
    className,
    ...otherProps
  }: NavItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/29ccd386 flex w-full cursor-pointer items-center gap-2 rounded-md py-1",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {icon ? (
        <SubframeCore.IconWrapper
          className={SubframeUtils.twClassNames(
            "text-body font-body text-subtext-color group-hover/29ccd386:text-default-font",
            { "text-default-font": selected }
          )}
        >
          {icon}
        </SubframeCore.IconWrapper>
      ) : null}
      {children ? (
        <span
          className={SubframeUtils.twClassNames(
            "line-clamp-1 text-body font-body text-subtext-color group-hover/29ccd386:text-default-font",
            {
              "text-body-bold font-body-bold text-default-font group-hover/29ccd386:no-underline":
                selected,
            }
          )}
        >
          {children}
        </span>
      ) : null}
      {rightSlot ? <div className="flex items-center">{rightSlot}</div> : null}
    </div>
  );
});

interface NavSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  label?: React.ReactNode;
  className?: string;
}

const NavSection = React.forwardRef<HTMLElement, NavSectionProps>(
  function NavSection(
    { children, label, className, ...otherProps }: NavSectionProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full flex-col items-start gap-4",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex w-full flex-col items-start gap-4">
          {label ? (
            <span className="line-clamp-1 w-full text-caption-bold font-caption-bold text-default-font">
              {label}
            </span>
          ) : null}
        </div>
        {children ? (
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2">
            {children}
          </div>
        ) : null}
      </div>
    );
  }
);

interface DsNavigationRootProps extends React.HTMLAttributes<HTMLElement> {
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const DsNavigationRoot = React.forwardRef<HTMLElement, DsNavigationRootProps>(
  function DsNavigationRoot(
    {
      header,
      children,
      footer,
      className,
      ...otherProps
    }: DsNavigationRootProps,
    ref
  ) {
    return (
      <nav
        className={SubframeUtils.twClassNames(
          "flex w-48 flex-col items-start bg-default-background h-screen",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {header ? (
          <div className="flex w-full flex-col items-start gap-2 pl-4 pr-6 pt-4 pb-3">
            {header}
          </div>
        ) : null}
        {children ? (
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-12 px-4 py-6 overflow-auto">
            {children}
          </div>
        ) : null}
        {footer ? (
          <div className="flex w-full flex-col items-start justify-end gap-2 px-4 pt-2 pb-3">
            {footer}
          </div>
        ) : null}
      </nav>
    );
  }
);

export const DsNavigation = Object.assign(DsNavigationRoot, {
  NavItem,
  NavSection,
});
