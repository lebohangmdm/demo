"use server";

import { contactFormSchema } from "./formSchema";
import { sendEmail } from "./sendEmail";
import { ActionResponse, contactFormData } from "./types";

export async function submitContact(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const rawData: contactFormData = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    // Validate the form data
    const validatedData = contactFormSchema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        message: "Please fix the errors in the form",
        errors: validatedData.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }

    const { email, message } = validatedData.data;

    await sendEmail({
      to: email,
      subject: "Test your email via Mailtrap",
      text: message,
    });

    // Here you would typically save the address to your database
    console.log("email submitted:", validatedData.data);

    return {
      success: true,
      message: "Form submitted successfully!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}
