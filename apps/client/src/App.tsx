import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "./api/trpc";
import { Test } from "./Test";
import "./App.css";
import { Suspense } from "react";

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
        url: "http://localhost:3000/trpc",
      }),
    ],
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Test />
        </Suspense>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
