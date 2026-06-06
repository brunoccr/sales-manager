"use client";

import { logout } from "@/actions/auth";
import { useCookie } from "@/components/hooks/useCookie";
import { Drawer, DrawerItem } from "@/components/ui/Drawer";
import {
  BarcodeIcon,
  ClipboardPlusIcon,
  FileUserIcon,
  HomeIcon,
  SquareCheckBigIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useDrawerOptions } from "../contexts/DrawerOptionsContext";

export function AppDrawer() {
  const router = useRouter();
  const [options] = useDrawerOptions();

  async function handleLogout() {
    await logout();
    router.push("/login");
  }

  return (
    <Drawer
      title={options.title || ""}
      subtitle={options.subtitle || undefined}
      showBack={options.showAsSubpage || false}
      menu={options.menu}
    >
      <DrawerItem title="Início" icon={<HomeIcon />} route="/home" />
      <DrawerItem title="Clientes" icon={<FileUserIcon />} route="/customers" />
      <DrawerItem
        title="Pedidos"
        icon={<ClipboardPlusIcon />}
        route="/orders"
      />
      <DrawerItem title="Produtos" icon={<BarcodeIcon />} route="/products" />
      <DrawerItem
        title="Checklists"
        icon={<SquareCheckBigIcon />}
        route="/checklists"
      />
      <DrawerItem
        title="Sair"
        variant="button"
        onClick={() => handleLogout()}
      />
    </Drawer>
  );
}
