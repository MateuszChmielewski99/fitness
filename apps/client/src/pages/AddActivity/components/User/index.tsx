import { trpc } from "../../../../common/api/trpc";
import { ControlledDropdown } from "../../../../common/components";
import { Container } from "../Container";
import { useFormContext } from "react-hook-form";
import "./index.css";

export const User = () => {
  const { data } = trpc.user.getAll.useQuery();
  const { control } = useFormContext();
  return (
    <Container>
      <h2 className="user__header">Kto</h2>
      <ControlledDropdown
        name="user"
        control={control}
        options={data?.map((d) => d.name)}
        placeholder="No kto"
        className="user__dropdown"
        clearIcon
      />
    </Container>
  );
};
