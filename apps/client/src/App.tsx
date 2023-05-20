import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "./common/api/trpc";
import "./App.css";
import { Suspense } from "react";
import { LoadingScreen } from "./common/components";
import { Layout } from "./common/components/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AddActivity } from "./pages/AddActivity";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: "https://fitness-server.azurewebsites.net/trpc",
      }),
    ],
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<LoadingScreen />}>
            <Layout>
              <Routes>
                <Route path="/" element={<AddActivity />} />
              </Routes>
            </Layout>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
