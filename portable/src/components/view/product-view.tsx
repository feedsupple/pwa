import { AttributeTable } from "@components/kit/attribute-table";
import { CartValue } from "@components/kit/cart-value";
import { Container } from "@components/ui/structure/container";
import { Image } from "@components/ui/structure/image";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

interface ProductViewProps {
  image: string;
  name: string;
  description: string;

  attributes: {
    name: string;
    value: string;
  }[];
}

export function ProductView({
  image,
  name,
  description,
  attributes,
}: ProductViewProps) {
  return (
    <Container className={useClasses("product-view")}>
      <Container className={useClasses("product-view-image-container")}>
        <Image
          src={image}
          className={useClasses("product-view-image")}
        />
      </Container>

      <Container className={useClasses("product-view-content")}>
        <Heading size="medium">
          {name}
        </Heading>

        <Text>
          {description}
        </Text>
      </Container>

      <Container className={useClasses("product-view-attributes-container")}>
        <Heading
          size="small"
          className={useClasses("product-view-attributes-heading")}
        >
          More Information
        </Heading>

        <AttributeTable attributes={attributes} />
      </Container>

      <Container
        className={useClasses("product-view-filler")}
        children={null}
      />

      <CartValue qty={2} />
    </Container>
  );
}

