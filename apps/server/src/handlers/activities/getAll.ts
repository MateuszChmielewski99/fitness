import { prisma } from "../../db/prisma"

export const handleGetAllActivities = async () => await prisma.activities.findMany();