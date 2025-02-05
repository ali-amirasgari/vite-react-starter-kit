import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import AppRouter from "./routes";
import ToastProvider from "./components/global/ToastContainer";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AppRouter />
          <ToastProvider />
        </ThemeProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
}

export default App;
