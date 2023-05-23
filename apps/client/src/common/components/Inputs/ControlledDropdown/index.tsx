import { Dropdown, DropdownProps } from "primereact/dropdown";
import { Controller, type Control, type FieldValues } from "react-hook-form";

type Props = Omit<DropdownProps, "onChange"> & {
  name: string;
  control: Control<FieldValues>;
};

export const ControlledDropdown = ({ name, control, ...rest }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Dropdown {...rest} id={field.name} {...field} />}
    />
  );
};
