import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function ContactForm() {
  return (
    <Card className="shadow-none border-none">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fullName">FullName</Label>
              <Input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="john Doe"
                required
                className="bg-slate-200 rounded-sm"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="bg-slate-200 rounded-sm"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phoneNumber">Contact Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                placeholder="+27 83 521 6789"
                required
                className="bg-slate-200 rounded-sm"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                type="text"
                name="company"
                placeholder="Acme Inc."
                required
                className="bg-slate-200 rounded-sm"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="enquiry">Enquiry</Label>
              <Textarea
                id="enquiry"
                name="enquiry"
                placeholder="Type your enquiry here."
                required
                className="bg-slate-200 rounded-sm"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          size={"lg"}
          className="w-full text-base font-medium  rounded-none hover:bg-black transition-all duration-200"
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ContactForm;
