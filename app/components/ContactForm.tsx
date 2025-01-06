"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/lib/action";
import { ActionResponse } from "@/lib/types";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useActionState } from "react";
import AlertMessage from "./AlertMessage";

const initialState: ActionResponse = {
  success: false,
  message: "",
};

function ContactForm() {
  const [state, action, isPending] = useActionState(
    submitContact,
    initialState
  );

  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-lg text-blue-500 font-semibold sm:text-xl md:text-2xl lg:text-3xl">
        Talk to us!
      </h3>
      <Card className="shadow-none border-none space-y-4">
        <CardContent className="p-0">
          <form action={action} className="space-y-4">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="fullName">FullName</Label>
                <Input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="john Doe"
                  defaultValue={state.inputs?.fullName}
                  required
                  className={`${
                    state.errors?.fullName ? "border-red-500" : ""
                  } bg-slate-200 rounded-sm `}
                />
                {state.errors?.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.errors.fullName[0]}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  defaultValue={state.inputs?.email}
                  className={`${
                    state.errors?.email ? "border-red-500" : ""
                  } bg-slate-200 rounded-sm `}
                />
                {state.errors?.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Contact Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+27 83 521 6789"
                  defaultValue={state.inputs?.phone}
                  required
                  className={`${
                    state.errors?.phone ? "border-red-500" : ""
                  } bg-slate-200 rounded-sm `}
                />
                {state.errors?.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.errors.phone[0]}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Acme Inc."
                  defaultValue={state.inputs?.company}
                  required
                  className={`${
                    state.errors?.company ? "border-red-500" : ""
                  } bg-slate-200 rounded-sm `}
                />
                {state.errors?.company && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.errors.company[0]}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="message">Enquiry</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your enquiry here."
                  defaultValue={state.inputs?.message}
                  required
                  className={`${
                    state.errors?.message ? "border-red-500" : ""
                  } bg-slate-200 rounded-sm `}
                />
                {state.errors?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.errors.message[0]}
                  </p>
                )}
              </div>
            </div>

            {state?.message && (
              <Alert
                className="flex flex-col justify-center gap-2 "
                variant={state.success ? "default" : "destructive"}
              >
                {state.success ? (
                  <CheckCircle2 color="green" className="h-5 w-5" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                )}
                <AlertDescription
                  className={`${
                    state.success ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {state.message}
                </AlertDescription>
              </Alert>
            )}

            <Button
              size={"lg"}
              className="w-full text-base font-medium  rounded-none hover:bg-black transition-all duration-200"
            >
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactForm;
