import { AccountButton } from "@components/kit/account-button";
import { BackButton } from "@components/kit/back-button";
import { CartButton } from "@components/kit/cart-button";
import { ScrollTopButton } from "@components/kit/scroll-top-button";
import { Container } from "@components/ui/structure/container";
import { Menu } from "@components/ui/structure/menu";
import { useClasses } from "@styles";

interface NavbarProps {
  path: string;
}

export function Navbar({ path }: NavbarProps) {
  return (<>
    <Menu position="top">
      <Container className={useClasses("menu-block")}>
        <BackButton path={path} />
      </Container>

      <Container className={useClasses("menu-block")}>
        <ScrollTopButton />
        <CartButton />
        <AccountButton />
      </Container>
    </Menu>
  </>);
}

