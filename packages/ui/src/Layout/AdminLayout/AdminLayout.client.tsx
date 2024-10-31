"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { cx } from "../../index";

type PropsWithChildrenAndClassName = PropsWithChildren & {
  className?: string;
};

interface TAdminLayoutContext {
  mobileNavbarOpened: boolean;
  setMobileNavbarOpened: (opened: boolean) => void;
}

const AdminLayoutContext = createContext<TAdminLayoutContext>({
  mobileNavbarOpened: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMobileNavbarOpened: (opened: boolean) => {
    //
  },
});

const useAdminLayoutContext = () => {
  const context = useContext(AdminLayoutContext);

  if (!context) {
    throw new Error(
      "useAdminLayoutContext must be used inside the AdminLayoutProvider"
    );
  }

  return useContext(AdminLayoutContext);
};

export const AdminLayoutProvider = ({ children }: PropsWithChildren) => {
  const [mobileNavbarOpened, setMobileNavbarOpened] =
    useState<TAdminLayoutContext["mobileNavbarOpened"]>(false);

  useEffect(() => {
    const closeNavbarOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileNavbarOpened(false);
      }
    };

    window.addEventListener("keydown", closeNavbarOnEscape);

    return () => window.removeEventListener("keydown", closeNavbarOnEscape);
  }, []);

  return (
    <AdminLayoutContext.Provider
      value={{
        mobileNavbarOpened,
        setMobileNavbarOpened,
      }}
    >
      {children}
    </AdminLayoutContext.Provider>
  );
};

export const AdminLayoutBurgerClient = ({
  className,
  children = "=",
}: PropsWithChildrenAndClassName) => {
  const { mobileNavbarOpened, setMobileNavbarOpened } = useAdminLayoutContext();

  return (
    <button
      className={cx(
        "inline-block h-6 w-6 rounded bg-gray-200 px-2 lg:hidden",
        className
      )}
      onClick={() => setMobileNavbarOpened(!mobileNavbarOpened)}
    >
      {children}
    </button>
  );
};

export const AdminLayoutNavbarMobileOverlayClient = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  const { mobileNavbarOpened, setMobileNavbarOpened } = useAdminLayoutContext();

  if (!mobileNavbarOpened) {
    return false;
  }

  return (
    <div
      className={cx(
        "fixed bottom-0 top-0 z-10 w-full bg-black/60 backdrop-blur-sm lg:hidden",
        className
      )}
      onClick={() => setMobileNavbarOpened(false)}
    >
      {children}
    </div>
  );
};

export const AdminLayoutNavbarMobileClient = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  const { mobileNavbarOpened } = useAdminLayoutContext();

  return (
    <>
      {mobileNavbarOpened && (
        <div
          className={cx(
            "fixed z-20 h-full w-[260px] overflow-scroll overscroll-contain border-gray-300 bg-gray-50 shadow-[2px_0px_3px_-1px_rgba(0,0,0,0.1),1px_0px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:hidden",
            className
          )}
        >
          {children}
        </div>
      )}
    </>
  );
};
