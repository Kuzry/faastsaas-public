import { PropsWithChildren } from "react";
import { cx } from "../../index";
import {
  FrontLayoutBurgerClient,
  FrontLayoutNavbarMobileClient,
  FrontLayoutNavbarMobileOverlayClient,
  FrontLayoutProvider,
} from "./FrontLayout.client";

type PropsWithChildrenAndClassName = PropsWithChildren & {
  className?: string;
};

export const FrontLayoutRoot = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  return (
    <FrontLayoutProvider>
      <div className={cx("", className)}>{children}</div>
    </FrontLayoutProvider>
  );
};

export const FrontLayoutBurger = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <FrontLayoutBurgerClient className={className}>
    {children}
  </FrontLayoutBurgerClient>
);

export const FrontLayoutHeader = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  return (
    <div
      className={cx(
        "sticky flex h-14 items-center border-b border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export const FrontLayoutNavbarMobile = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <FrontLayoutNavbarMobileClient className={className}>
    {children}
  </FrontLayoutNavbarMobileClient>
);

export const FrontLayoutMain = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  return <main className={cx("", className)}>{children}</main>;
};

export const FrontLayoutSection = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  return (
    <div className={cx("border-b border-gray-200 py-16", className)}>
      {children}
    </div>
  );
};

export const FrontLayoutSectionTitle = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <div className={cx("", className)}>{children}</div>
);

export const FrontLayoutContainer = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  return <div className={cx("container", className)}>{children}</div>;
};

export const FrontLayoutHero = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  return (
    <div
      className={cx(
        "mx-auto mb-10 mt-24 flex max-w-6xl flex-col items-center gap-6 text-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export const FrontLayoutHeroTitle = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  return (
    <h1
      className={cx(
        "text-balance py-6 text-5xl font-semibold leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-7xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const FrontLayoutHeroText = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  return (
    <p
      className={cx(
        "text-muted-foreground max-w-[64rem] text-balance px-6 text-lg md:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
};

export const FrontLayoutMobileOverlay = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <FrontLayoutNavbarMobileOverlayClient className={className}>
    {children}
  </FrontLayoutNavbarMobileOverlayClient>
);
