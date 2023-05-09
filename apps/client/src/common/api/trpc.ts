import { createTRPCReact } from '@trpc/react-query';
import type { FitnessRouter } from '@fitness/server';

export const trpc = createTRPCReact<FitnessRouter>();