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

interface TFrontLayoutContext {
  mobileNavbarOpened: boolean;
  setMobileNavbarOpened: (opened: boolean) => void;
}

const FrontLayoutContext = createContext<TFrontLayoutContext>({
  mobileNavbarOpened: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMobileNavbarOpened: (opened: boolean) => {
    //
  },
});

const useFrontLayoutContext = () => {
  const context = useContext(FrontLayoutContext);

  if (!context) {
    throw new Error(
      "useFrontLayoutContext must be used inside the FrontLayoutProvider"
    );
  }

  return context;
};

export const FrontLayoutProvider = ({ children }: PropsWithChildren) => {
  const [mobileNavbarOpened, setMobileNavbarOpened] =
    useState<TFrontLayoutContext["mobileNavbarOpened"]>(false);

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
    <FrontLayoutContext.Provider
      value={{
        mobileNavbarOpened,
        setMobileNavbarOpened,
      }}
    >
      {children}
    </FrontLayoutContext.Provider>
  );
};

export const FrontLayoutBurgerClient = ({
  className,
  children = "=",
}: PropsWithChildrenAndClassName) => {
  const { mobileNavbarOpened, setMobileNavbarOpened } = useFrontLayoutContext();

  return (
    <button
      className={cx(
        "mr-2 inline-block h-6 w-6 rounded bg-gray-200 px-2 lg:hidden",
        className
      )}
      onClick={() => setMobileNavbarOpened(!mobileNavbarOpened)}
    >
      {children}
    </button>
  );
};

export const FrontLayoutNavbarMobileOverlayClient = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  const { mobileNavbarOpened, setMobileNavbarOpened } = useFrontLayoutContext();

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

export const FrontLayoutNavbarMobileClient = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  const { mobileNavbarOpened } = useFrontLayoutContext();

  return (
    <>
      {mobileNavbarOpened && (
        <div
          className={cx(
            "fixed top-0 z-20 h-full w-[260px] overflow-scroll overscroll-contain border-gray-300 bg-gray-50 shadow-[2px_0px_3px_-1px_rgba(0,0,0,0.1),1px_0px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:hidden",
            className
          )}
        >
          {children}
        </div>
      )}
    </>
  );
};
