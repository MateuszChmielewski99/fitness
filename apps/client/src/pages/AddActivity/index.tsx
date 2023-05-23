import { Activity } from "./components/Activity";
import { Date } from "./components/Date";
import { User } from "./components/User";
import { FormProvider, useForm } from "react-hook-form";
import "./index.css";

export const AddActivity = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      user: undefined,
      activity: undefined,
      date: undefined
    }
  });
  return (
    <FormProvider {...methods}>
      <div className="add_activity__container">
        <User />
        <Activity />
        <Date />
      </div>
    </FormProvider>
  );
};
