import { trpc } from "../../../../common/api/trpc";
import { ControlledDropdown } from "../../../../common/components";
import { useFormContext } from "react-hook-form";
import { Container } from "../Container";
import "./index.css";

export const Activity = () => {
  const { data } = trpc.activity.getAll.useQuery();
  const { control } = useFormContext();

  return (
    <Container>
      <h2 className="activity__header">Co</h2>
      <ControlledDropdown
        name="activity"
        control={control}
        options={data?.map((d) => d.name)}
        placeholder="No co"
        className="activity__dropdown"
      />
    </Container>
  );
};
