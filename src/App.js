import Page from "./components/Page";
import { InputStateProvider } from "./lib/InputState";
import Router from "./Router";

export default function App() {
  return (
    <InputStateProvider>
      <Page>
        <Router />
      </Page>
    </InputStateProvider>
  );
}

// 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
