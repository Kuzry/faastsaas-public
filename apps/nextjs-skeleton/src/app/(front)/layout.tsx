import {
  FrontLayoutContainer,
  FrontLayoutHeader,
  FrontLayoutMain,
  FrontLayoutRoot,
  FrontLayoutMobileOverlay,
  FrontLayoutNavbarMobile,
  FrontLayoutBurger,
} from "@faastsaas/ui/layout";
import { ReactNode } from "react";

export default function FrontLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <FrontLayoutRoot>
      <FrontLayoutHeader>
        <FrontLayoutContainer>asd</FrontLayoutContainer>
      </FrontLayoutHeader>
      <FrontLayoutMain>{children}</FrontLayoutMain>
    </FrontLayoutRoot>
  );
}
