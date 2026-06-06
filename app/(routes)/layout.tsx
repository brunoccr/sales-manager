import { AppDrawer } from "../components/AppDrawer";
import { DrawerOptionsProvider } from "../contexts/DrawerOptionsContext";

export default function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DrawerOptionsProvider>
        <AppDrawer />
        <div className="mt-14">{children}</div>
      </DrawerOptionsProvider>
    </div>
  );
}
