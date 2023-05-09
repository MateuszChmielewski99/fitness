import { handleGetAllUsers } from "../handlers";
import { t } from "../trpc";

export const user = t.router({
    getAll: t.procedure.query(handleGetAllUsers)
}) 