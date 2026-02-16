"use client";

// UI
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Loader2 } from "lucide-react";

// FORMS
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { FieldValues, useForm } from "react-hook-form";
import * as z from "zod";

// import addMessage from "../actions/form-action";

// FIREBASE
import { firestore } from "@/lib/utils/firebase/config";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z
    .string()
    .min(1, "Please enter your email")
    .email("Email address must be a valid address"),
  message: z
    .string()
    .min(1, "Please enter a message")
    .min(10, "Please enter a longer message (min 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      // console.log(data);
      try {
        await addDoc(collection(firestore, "messages"), {
          data,
          sentAt: Timestamp.now().toDate(),
        });
        toast.success("Message sent successfully!");
        form.reset();
      } catch (err) {
        console.error(err);
        toast.error("Failed to send message. Please try again.");
      }
    },
  });

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values);
  };

  return (
    <main className="container">
      <h1 className="heading">Connect with Me!</h1>
      <Card className="mx-auto mb-10 max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Write me a message!</CardTitle>
          <CardDescription>
            Have a project in mind? Something I can help with? <br /> Totally
            open to hearing from you!
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Please enter your name"
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Please enter your email"
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message here..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {form.formState.isSubmitting ? "Submitting" : "Send Message"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </main>
  );
}
