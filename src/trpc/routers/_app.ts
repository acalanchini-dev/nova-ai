import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { inngest } from '@/inngest/client';

// create a router
export const appRouter = createTRPCRouter({


  invoke: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .mutation( async ({ input }) =>{
      await inngest.send({
        name: "test/hello.world",
        data: {
          email: input.text,
        },
      })
      return {
       message: "Background job invoked",
      }
    }),





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