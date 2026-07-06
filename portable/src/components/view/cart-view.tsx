import { CartAlt } from "@attaditya/iconoir-preact";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

export function CartView() {
  return (<>
    <Container className={useClasses('home-view')}>
      <Heading size="max">
        <CartAlt />
      </Heading>

      <Heading size="max">
        Cart
      </Heading>

      <Text>
        A lightweight, fast, and portable web application framework built with Preact.
      </Text>
    </Container>
  </>);
}

