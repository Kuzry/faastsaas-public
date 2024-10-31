import { ReactNode } from "react";
import {
  AdminLayoutBurger,
  AdminLayoutContainer,
  AdminLayoutMain,
  AdminLayoutMainTitle,
  AdminLayoutNavbar,
  AdminLayoutRoot,
  AdminLayoutMobileOverlay,
  AdminLayoutNavbarMobile,
} from "@faastsaas/ui/layout";

const Navbar = () => <div className="p-4">Super navbar 3000!</div>;

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <AdminLayoutRoot>
      <AdminLayoutMobileOverlay />
      <AdminLayoutNavbar
        mobile={
          <AdminLayoutNavbarMobile>
            <Navbar />
          </AdminLayoutNavbarMobile>
        }
      >
        <Navbar />
      </AdminLayoutNavbar>
      <AdminLayoutMain>
        <AdminLayoutContainer>
          <AdminLayoutMainTitle
            // breadcrumbs={<AdminLayoutBreadcrumbs breadcrumbs={[]} />}
            burger={<AdminLayoutBurger />}
          >
            Dashboard
          </AdminLayoutMainTitle>
        </AdminLayoutContainer>
        {children}
      </AdminLayoutMain>
    </AdminLayoutRoot>
  );
}
