import { testSchema } from "../models/input";
import { t } from "../trpc";

export const test = t.router({
    hello: t.procedure.input(testSchema).query(() => {return {a:12}})
})