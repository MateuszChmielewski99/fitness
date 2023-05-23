import { Container } from "../Container";
import { Button } from "primereact/button";
import "./index.css";
import { ControlledCalendar } from "../../../../common/components";
import { useFormContext } from "react-hook-form";

export const Date = () => {
  const { control } = useFormContext();

  return (
    <Container>
      <h2 className="date__header">Kiedy</h2>

        <ControlledCalendar
          name="date"
          control={control}
          placeholder="No kiedy"
          className="date__calendar"
        />
        {/* <Button
          label="Zapisz"
          icon="pi pi-check"
          iconPos="right"
          style={{
            position: "absolute",
            bottom: "2rem"
          }}
        /> */}

    </Container>
  );
};
