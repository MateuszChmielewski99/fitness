import express from 'express';
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { router } from './routers';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({origin: process.env.UI_URL}))

app.use("/trpc",
createExpressMiddleware({
    router,
    createContext: ({ req, res }) => {
        return {}
      },
}))

app.listen(process.env.PORT ?? 3000);
