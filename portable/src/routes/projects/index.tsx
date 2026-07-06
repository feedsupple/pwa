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
    <ProductView />
  </>);
}

export function ProductPage({ forwarded } : PageProps) {
  return useRouter(forwarded, Layout, {});
}

