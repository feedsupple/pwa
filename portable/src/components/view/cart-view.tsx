import { CartAlt } from "@attaditya/iconoir-preact";
import { CheckoutItem } from "@components/kit/checkout-item";
import { Button } from "@components/ui/interactive/button";
import { LinkButton } from "@components/ui/interactive/link-button";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { useClasses } from "@styles";

export function CartView() {
  return (<>
    <Container className={useClasses('cart-view')}>
      <Container className={useClasses("cart-view-header")}>
        <Container className={useClasses("cart-view-header-icon")}>
          <CartAlt />
        </Container>

        <Heading size="max">
          Your Cart
        </Heading>
      </Container>

      <Container className={useClasses("cart-view-content")}>
        <CheckoutItem />
        <CheckoutItem />
        <CheckoutItem />
        <CheckoutItem />
        <CheckoutItem />
      </Container>

      <Container
        className={useClasses("cart-view-filler")}
        children={null}
      />

      <Container className={useClasses("cart-view-footer")}>
        <LinkButton
          title="Proceed to Checkout"
          icon="PiggyBankRegular"
          url="/checkout"
          urlText="Checkout Page"
          newTab={false}
        />
      </Container>
    </Container>
  </>);
}

