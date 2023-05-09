import { trpc } from "./api/trpc";

export const Test = () => {
  const { data, refetch } = trpc.activity.getAll.useQuery();

  return (
    <>
      <pre
        style={{
          background: "#ebebeb",
          width: "100%",
          height: "300px",
          textAlign: "center",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
      <button onClick={() => refetch()}>Refresh</button>
    </>
  );
};
