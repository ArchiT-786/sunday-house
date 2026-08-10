"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email.",
  }),
});

export function NewsletterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    form.reset();

    toast({
      title: "You're subscribed!",
      description: `We'll send updates to ${data.email}.`,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="flex w-full flex-col gap-3 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="h-12 w-full rounded-full px-5"
                    {...field}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    rounded="full"
                    className="h-12 px-7 sm:shrink-0"
                  >
                    Subscribe
                  </Button>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}