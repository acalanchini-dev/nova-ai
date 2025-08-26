// "use client" add only on client side
//import { caller } from "@/trpc/server" // add only on server side
// import { useTRPC } from "@/trpc/client" // add only on client side
// import { useQuery } from "@tanstack/react-query" // add only on client side
import { getQueryClient, trpc } from "@/trpc/server"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";

const Page = async () => {

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.hello.queryOptions({ text: "world" }))

  // client side
  // const trpc = useTRPC()
  // const {data} = useQuery(trpc.hello.queryOptions({text: "world"}))

  // server side
  // const data = await caller.helloProcedure({text: "world"})
  // console.log(data)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  )
}

export default Page