import { ReactNode } from "react";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import theme from "./theme/theme";

interface ProviderProps {
  children: ReactNode;
}

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// ------------------------- React query setup -------------------------

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function Provider({ children }: ProviderProps) {
  return (
    <CacheProvider value={cacheRtl}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
}

export default Provider;
