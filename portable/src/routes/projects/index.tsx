import { ErrorView } from "@components/view/not-found-view";
import { ProductView } from "@components/view/product-view";
import { LayoutProps, PageProps, useRouter } from "@utils/router";

function Layout({ dynamic }: LayoutProps) {
  if (!dynamic)
    return (<>
      <ErrorView
        code={404}
        message="Product not available"
      />
    </>);

  return (<>
    <ProductView
      image="https://picsum.photos/id/932/720/480"
      name="Product Name"

      description={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        + "Sed do eiusmod tempor incididunt ut labore et dolore magna"
        + "aliqua."
      }

      attributes={[
        { name: "Color", value: "Red" },
        { name: "Size", value: "Medium" },
        { name: "Material", value: "Cotton" },
        { name: "Brand", value: "Brand Name" },
      ]}
    />
  </>);
}

export function ProductPage({ forwarded } : PageProps) {
  return useRouter(forwarded, Layout, {});
}

