"use server";

import { productSchema } from "@/utils/productSchema";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function uploadProduct(prevState: any, formData: FormData) {
  const result = productSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    contactEmail: formData.get("contactEmail"),
    price: formData.get("price"),
    imageUrl: formData.get("imageUrl"),
  });
  let errorMessages: string[] = []
  if (!result.success) {
    console.log(result.error)
    return {
      type: "error",
      errors: result.error.flatten().fieldErrors,
      message: "All fields are required.",
    };
  }
  const { name, description, contactEmail, price, imageUrl } = result.data;

  try {
    const fileName = `${Math.random()}-${imageUrl.name}`;
    const supabase = createServerActionClient({ cookies });
    const { data, error } = await supabase.storage
      .from("storage")
      .upload(fileName, imageUrl, {
        cacheControl: "1800",
        upsert: false,
      });
    if (error) {
      return {
        error: "Database error. Failed to upload image.",
      };
    }

    if (data) {
      const path = data.path;

      const { error: productError } = await supabase
        .from("ecom-products")
        .insert({ name, description, contactEmail, price, imageUrl: path });

        if(productError) {
          return {
            error: "Database error. Failed to upload product.",
          };
        }
    }
  } catch (error) {
    return {
      error: "Database error. Try again.",
    };
  }
  revalidatePath("/");
  redirect("/");
}
