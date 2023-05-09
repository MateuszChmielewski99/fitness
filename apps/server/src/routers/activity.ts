import { handleGetAllActivities } from "../handlers";
import { t } from "../trpc";

export const activity = t.router({
    getAll: t.procedure.query(handleGetAllActivities)
})