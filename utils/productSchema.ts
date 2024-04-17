import {z} from "zod"
const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const productSchema = z.object({
  name: z
    .string({ required_error: "Enter a valid name for the product." })
    .trim()
    .min(4, { message: "Name of product should be at least 4 characters." })
    .max(1000, {
      message: "Name of product should not exceed 1000 characters.",
    }),
  price: z
    .string({ required_error: "Enter the price of the product." })
    .trim()
    .min(1, { message: "Price of product should be at least 1." }),
  description: z
    .string({
      required_error: "Enter a valid description for the product.",
    })
    .trim()
    .min(5, { message: "Description of product should be at least 5 characters." })
    .max(1000, {
      message: "Description of product should not exceed 1000 characters.",
    }),
  contactEmail: z.string({required_error: "Enter the contact email."}).email("Enter a valid email.").trim(),
  imageUrl: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

export type Product = z.infer<typeof productSchema>;