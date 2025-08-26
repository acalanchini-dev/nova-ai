"use client"

import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Page = () => {
const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
  onSuccess: () => {
    toast.success("Background job invoked");
  },
  onError: (error) => {
    toast.error(error.message);
  },
}))

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button disabled={invoke.isPending} onClick={() => invoke.mutate({text: "world"})}>Invoke background job</Button>
    </div>
  )
}

export default Page