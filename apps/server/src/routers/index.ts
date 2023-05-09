import { t } from "../trpc";
import { test } from "./test";
import { user } from "./user";
import { activity } from "./activity";

export const router = t.router({
  test,
  user,
  activity,
});

export type FitnessRouter = typeof router;
