import { MenuButton } from "@components/ui/interactive/menu-button";

export function CartButton() {
  const goToCartPage = () => {
    window.location.href = "/cart";
  }

  return (<>
    <MenuButton
      onClick={goToCartPage}
      icon="CartRegular"
    />
  </>);
}

