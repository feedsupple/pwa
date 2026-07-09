import { LinkButton } from "@components/ui/interactive/link-button";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { useClasses } from "@styles";

interface AuthViewProps {
  mode?: "in" | "up" | "unknown";
}

export function AuthView({
  mode = "unknown",
}: AuthViewProps) {
  return (
    <Container className={useClasses("auth-view")}>
      <Heading size="medium">
        Let's bring you ready!
      </Heading>

      <Container className={useClasses("auth-options")}>
        {(mode === "up" || mode === "unknown") && (
          <LinkButton
            newTab={false}
            url="/auth/in"
            urlText="Sign in to your account"
            title={
              mode === "unknown"
                ? "I'm an existing user!"
                : "Actually, I'm new here"
            }
            icon="PineTreeRegular"
          />
        )}

        {(mode === "in" || mode === "unknown") && (
          <LinkButton
            newTab={false}
            url="/auth/up"
            urlText="Create a new account"
            title={
              mode === "unknown"
                ? "I'm a new user!"
                : "Actually, I'm not new"
            }
            icon="FlowerRegular"
          />
        )}
      </Container>
    </Container>
  );
}

