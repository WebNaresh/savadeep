"use client";
import InputField from "@/components/shadcn-input-toolkit/InputField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {
  const form_schema = z.object({
    name: z.string().nonempty(),
    age: z.number(),
  });

  const form = useForm({
    resolver: zodResolver(form_schema),
  });
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>Form</CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={form.handleSubmit((data) => console.log(data))}
            >
              <InputField
                label="Name"
                name="name"
                placeholder="Name"
                type="text"
                form={form}
                Icon={Star}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
