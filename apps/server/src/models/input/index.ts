import { z } from "zod";

export const testSchema = z.object({
    name: z.string().min(1)
})

export type TestInput = z.infer<typeof testSchema>;