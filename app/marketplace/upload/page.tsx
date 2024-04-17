"use client";

import { uploadProduct } from "@/actions";
import CustomButton from "@/components/CustomButton";
import { Product, productSchema } from "@/utils/productSchema";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import FormSubmitButton from "@/components/FormSubmitButton";

const initialState = {
  message: "",
  errors: null,
}

const Upload = () => {
  const router = useRouter()
  const [state, formAction] = useFormState<any>(uploadProduct as any, initialState)

  // const clientAction = async(formData: FormData) => {
  //   const newProduct = {
  //     name: formData.get('name'),
  //     price: formData.get('price'),
  //     description: formData.get('description'),
  //     imageUrl: formData.get('imageUrl'),
  //     contactEmail: formData.get('contactEmail'),
  //   }
  //   console.log("Form Data: ", newProduct)
  //   const result = productSchema.safeParse(newProduct)
  //   let errorMessage = "";
  //   console.log('Result: ', result)
  //   if(!result.success) {
  //     setErrors({
  //       name: "",
  //       price: "",
  //       description: "",
  //       imageUrl: "",
  //       contactEmail: "",
  //     });
  //     if(result.error.issues.length === 5) {
  //       toast.error("All the fields are empty. Please fill them.");
  //       return;
  //     }
  //     result.error.issues.forEach((issue) => {
  //       setErrors((prev) => {
  //         return { ...prev, [issue.path[0]]: issue.message }
  //       })
  //     })
  //     return;
  //   }
  //   console.log(result.data)
  //   const data = JSON.parse(JSON.stringify(result.data))
  //   data["imageUrl"] = formData.get("imageUrl")
  //   console.log("data", data)
  //   const response = await uploadProduct(data)
  //   if(response?.error){
  //     toast.error(response.error);
  //     return;
  //   }
  //   toast.success("Product succesfully added.")
  //   router.push("/")
  // }

  return (
    <div className="py-6 px-2">
      {/* {state?.type === "error" && <p>{state.message}</p>} */}
      <form action={formAction}>
        <div className="min-h-screen max-w-5xl flex justify-center items-center mx-auto flex-col gap-4 px-14">
          <h1 className="text-xl md:text-3xl tracking-wide my-4">
            Add Product
          </h1>
          <div className="w-full">
            <label
              htmlFor="name"
              className="block mb-2 text-[16px] md:text-xl font-medium"
            >
              Product Name{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Example: PlayStation 5"
              autoComplete="off"
              className="rounded-3xl w-full bg-gray-500 px-4 py-2 placeholder-gray-400 text-white focus:outline-none focus:ring-0 focus:border-gray-900"
            />
            {state?.errors?.name ? (
              <p className="text-red-500 mt-2 text-[13px] md:text-[16px]">{state.errors.name}</p>
            ) : (
              <p className="opacity-0 pointer-events-none mt-2">s</p>
            )}
            {}
          </div>
          <div className="w-full">
            <label
              htmlFor="price"
              className="block mb-2 text-[16px] md:text-xl font-medium"
            >
              Price{" "}
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Example: 95000"
              autoComplete="off"
              className="rounded-3xl w-full bg-gray-500 px-4 py-2 placeholder-gray-400 text-white focus:outline-none focus:ring-0 focus:border-gray-900"
            />
            {state?.errors?.price ? (
              <p className="text-red-500 mt-2 text-[13px] md:text-[16px]">{state.errors.price}</p>
            ) : (
              <p className="opacity-0 pointer-events-none mt-2">s</p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="description"
              className="block mb-2 text-[16px] md:text-xl font-medium"
            >
              Description{" "}
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsam illo ipsa magnam ea eius doloremque quasi maxime cumque voluptatibus saepe vitae distinctio id aliquam vel iste. Dolore, distinctio minima?"
              autoComplete="off"
              className="rounded-3xl w-full bg-gray-500 px-4 py-2 placeholder-gray-400 text-white focus:outline-none focus:ring-0 focus:border-gray-900 overflow-y-auto"
            />
            {state?.errors?.description ? (
              <p className="text-red-500 mt-2 text-[13px] md:text-[16px]">{state.errors.description}</p>
            ) : (
              <p className="opacity-0 pointer-events-none mt-2">s</p>
            )}
          </div>
          <div className="w-full">
            <label
              className="block mb-2 text-[16px] md:text-xl font-medium"
              htmlFor="file_input"
            >
              Upload Image
            </label>
            <input
              className="block w-full text-md text-gray-900 rounded-3xl cursor-pointer bg-gray-500 focus:outline-none focus:ring-0 py-3 px-4"
              id="file_input"
              type="file"
              accept="image/*"
              name="imageUrl"
            />
            {state?.errors?.imageUrl ? (
              <p className="text-red-500 mt-2 text-[13px] md:text-[16px]">{state.errors.imageUrl}</p>
            ) : (
              <p className="opacity-0 pointer-events-none mt-2">s</p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="contact"
              className="block mb-2 text-[16px] md:text-xl font-medium"
            >
              Contact mail{" "}
            </label>
            <input
              type="email"
              id="contact"
              name="contactEmail"
              placeholder="Example: me@me.com"
              autoComplete="off"
              className="rounded-3xl w-full bg-gray-500 px-4 py-2 placeholder-gray-400 text-white focus:outline-none focus:ring-0 focus:border-gray-900"
            />
            {state?.errors?.contactEmail ? (
              <p className="text-red-500 mt-2 text-[13px] md:text-[16px]">{state.errors.contactEmail}</p>
            ) : (
              <p className="opacity-0 pointer-events-none mt-2">s</p>
            )}
          </div>
          {/* <CustomButton text="Submit" /> */}
          <FormSubmitButton />
        </div>
      </form>
    </div>
  );
};
export default Upload;
