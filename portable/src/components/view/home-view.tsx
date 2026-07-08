import { LargeCard } from "@components/block/large-card";
import { SearchBar } from "@components/kit/search-bar";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { useClasses } from "@styles";

export function HomeView() {
  return (<>
    <Container className={useClasses('home-view')}>
      <Container
        className={useClasses("home-view-header")}
      >
        <Heading size="large">
          FeedSupple
        </Heading>
      </Container>

      <SearchBar />
      <Container className={useClasses("home-view-content")}>
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
      </Container>
    </Container>
  </>);
}

