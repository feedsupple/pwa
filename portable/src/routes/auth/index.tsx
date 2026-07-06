import { AuthView } from "@components/view/auth-view";
import { PageProps, useRouter } from "@utils/router";

function Layout() {
  return (<>
    <AuthView />
  </>);
}

export function AuthPage({ forwarded } : PageProps) {
  return useRouter(forwarded, Layout, {
    "in": () => <></>,
    "up": () => <></>,
  });
}

