import {z} from "zod"
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const productSchema = z.object({
  name: z.string({ required_error: "Enter a valid name for the product." }),
  price: z.string({ required_error: "Enter the price of the product." }),
  description: z.string({
    required_error: "Enter a valid description for the product.",
  }),
  contactEmail: z.string().email("Enter a valid email."),
  imageUrl: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});