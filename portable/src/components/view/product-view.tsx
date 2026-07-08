import { AttributeTable } from "@components/kit/attribute-table";
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
        <Heading
          size="small"
          className={useClasses("product-view-attributes-heading")}
        >
          More Information
        </Heading>

        <AttributeTable attributes={[
          { name: "Color", value: "Red" },
          { name: "Size", value: "Medium" },
          { name: "Material", value: "Cotton" },
        ]} />
      </Container>
    </Container>
  );
}

