import { Container } from "@components/ui/structure/container";
import { Image } from "@components/ui/structure/image";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

interface ProductViewProps {}

export function ProductView({}: ProductViewProps) {
  return (
    <Container className={useClasses("product-view")}>
      <Container className={useClasses("product-view-image-container")}>
        <Image
          src="https://picsum.photos/id/932/720/480"
          className={useClasses("product-view-image")}
        />
      </Container>

      <Container className={useClasses("product-view-content")}>
        <Heading size="medium">
          Product Name
        </Heading>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Text>
      </Container>

      <Container className={useClasses("product-view-attributes-container")}>
        <Container className={useClasses("product-view-attributes")}>
          <Container className={useClasses("product-view-attribute")}>
            <Text>Color</Text>
          </Container>

          <Container className={useClasses("product-view-attribute")}>
            <Text>Red</Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

