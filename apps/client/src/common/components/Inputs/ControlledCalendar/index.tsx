import { Calendar, CalendarProps } from "primereact/calendar";
import { Controller, type Control, type FieldValues } from "react-hook-form";

type Props = Omit<CalendarProps, "onChange"> & {
  name: string;
  control: Control<FieldValues>;
};

export const ControlledCalendar = ({ name, control, ...rest }: Props) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
        <Calendar
          {...rest}
          inputId={field.name}
          value={field.value}
          onChange={field.onChange}
        />
    )}
  />
);
