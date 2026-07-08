import { CartValue } from "@components/kit/cart-value";
import { Button } from "@components/ui/interactive/button";
import { Container } from "@components/ui/structure/container";
import { Image } from "@components/ui/structure/image";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

export function CheckoutItem() {
  return (<>
    <Container className={useClasses("checkout-item")}>
      <Container className={useClasses("checkout-item-image")}>
        <Image
          src="https://picsum.photos/id/932/720/480"
          alt="Product Name"
        />
      </Container>

      <Container className={useClasses("checkout-item-content")}>
        <Heading
          size="small"
          className={useClasses("checkout-item-name")}
        >
          Item Name
        </Heading>

        <Text>
          Quantity: 5 pc
        </Text>

        <Text>
          Price: $500.00
        </Text>
      </Container>

      <Container className={useClasses("checkout-item-actions")}>
        <Button
          icon="EditRegular"
          hoverIcon="ArrowUpRegular"
          hoverTo={["top"]}
        />
      </Container>
    </Container>
  </>);
}

