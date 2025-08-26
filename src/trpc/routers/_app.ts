import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';

// create a router
export const appRouter = createTRPCRouter({
  hello: baseProcedure // baseProcedure is a helper function that creates a procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),

// create a procedure 
 helloProcedure: baseProcedure.input(
  z.object({
    text: z.string(), 
  }),
).query((opts) => {
  return {
    greeting: `hello ${opts.input.text}`,
  };
}),







});// close the router



// export type definition of API
export type AppRouter = typeof appRouter;