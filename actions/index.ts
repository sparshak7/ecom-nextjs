'use server'

import { productSchema } from "@/utils/productSchema"

export async function uploadProduct (prevState: string | undefined | null, formData: FormData) {
  const validatedFields = productSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    imageUrl: formData.get('imageUrl'),
    contactEmail: formData.get('contactEmail'),
  })
  if(!validatedFields.success) {
    console.log("Errors: ", validatedFields.error)
    return {
      type: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields, could not create product.'
    }
  }

}
