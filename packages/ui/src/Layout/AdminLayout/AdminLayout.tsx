import { PropsWithChildren, ReactElement } from "react";
import { cx } from "../../index";
import {
  AdminLayoutBurgerClient,
  AdminLayoutNavbarMobileClient,
  AdminLayoutNavbarMobileOverlayClient,
  AdminLayoutProvider,
} from "./AdminLayout.client";

type PropsWithChildrenAndClassName = PropsWithChildren & {
  className?: string;
};

export const AdminLayoutRoot = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <AdminLayoutProvider>
    <div className={cx("bg-gray-50", className)}>{children}</div>
  </AdminLayoutProvider>
);

export const AdminLayoutBurger = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <AdminLayoutBurgerClient className={className}>
    {children}
  </AdminLayoutBurgerClient>
);

export const AdminLayoutHeader = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <div
    className={cx(
      "sticky flex h-14 items-center border-b border-dashed border-gray-300 px-6",
      className
    )}
  >
    {children}
  </div>
);

export const AdminLayoutNavbarMobile = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <AdminLayoutNavbarMobileClient className={className}>
    {children}
  </AdminLayoutNavbarMobileClient>
);

export const AdminLayoutNavbar = ({
  className,
  children,
  mobile,
}: PropsWithChildrenAndClassName & {
  mobile?: ReactElement;
}) => (
  <>
    <div
      className={cx(
        "fixed z-10 hidden h-full w-[260px] border-r border-dashed border-gray-300 lg:block",
        className
      )}
    >
      {children}
    </div>
    {mobile}
    {/*<AdminLayoutNavbarMobileClient>*/}
    {/*  <span>*/}
    {/*    As we began rolling out Remix to https://www.shopify.com, we realized*/}
    {/*    just how big that site is. When you take into account all of the*/}
    {/*    routes and their internationalized URLs (i.e., /pricing, /en/pricing,*/}
    {/*    /es/precios and many more)—the app had over 1300 routes! And because*/}
    {/*    Remix does have a good solution for URL aliasing (yet!), many of the*/}
    {/*    route entries were duplicates pointing to the same route module, and*/}
    {/*    thus duplicating the module information (its path, its other module*/}
    {/*    imports, etc.). This resulted in a manifest that was ~85Kb compressed,*/}
    {/*    and ~10Mb uncompressed. On slower devices, this could have a*/}
    {/*    noticeable impact on page load times for the device to decompress,*/}
    {/*    parse, compile, and execute the JS module. As we began rolling out*/}
    {/*    Remix to https://www.shopify.com, we realized just how big that site*/}
    {/*    is.aaa*/}
    {/*  </span>*/}
    {/*</AdminLayoutNavbarMobileClient>*/}
  </>
);

export const AdminLayoutMain = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <div
    className={cx("min-h-dvh flex-1 bg-gray-50 pb-6 lg:ml-[260px]", className)}
  >
    {children}
  </div>
);

export const AdminLayoutBreadcrumbs = ({
  breadcrumbs,
}: {
  breadcrumbs: string[];
}) => (
  <div className="mb-1 flex gap-2 text-sm">
    <div className={`after:ml-2 after:content-['>'] last:after:content-['']`}>
      Home
    </div>
    {breadcrumbs.map((breadcrumb, index) => (
      <div
        key={index}
        className={`text-nowrap after:ml-2 after:content-['>'] last:after:content-['']`}
      >
        {breadcrumb}
      </div>
    ))}
  </div>
);

export const AdminLayoutMainTitle = ({
  children,
  breadcrumbs,
  burger = <AdminLayoutBurger />,
}: PropsWithChildren & {
  breadcrumbs?: ReactElement;
  burger?: ReactElement;
}) => (
  <div>
    <div className="flex flex-col justify-center py-8">
      {breadcrumbs}
      <div className="flex items-center gap-2">
        {burger}
        <h1 className="text-2xl font-semibold">{children}</h1>
      </div>
    </div>
  </div>
);

export const AdminLayoutContainer = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <div className={cx("container", className)}>{children}</div>
);

export const AdminLayoutMobileOverlay = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <AdminLayoutNavbarMobileOverlayClient className={className}>
    {children}
  </AdminLayoutNavbarMobileOverlayClient>
);
