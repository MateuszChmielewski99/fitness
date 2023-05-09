import { prisma } from "../../db/prisma"

export const handleGetAllUsers = async () => await prisma.user.findMany();