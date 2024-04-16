"use client";

import { uploadProduct } from "@/actions";
import CustomButton from "@/components/CustomButton";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
  errors: null,
};

const Upload = () => {
  const [state, formAction] = useFormState<any>(
    uploadProduct as any,
    initialState
  );
  // state?.type === "error" && toast.error(state.message, {position: "bottom-right"});

  return (
    <div className="py-4 px-2">
      <form action={formAction}>
        <div className="min-h-screen max-w-5xl flex justify-center items-center mx-auto flex-col gap-4 px-14">
          <h1 className="text-3xl tracking-wide mb-4">
            Add Product to Marketplace
          </h1>
          <div className="mb-4 w-full">
            <label htmlFor="name" className="block mb-2 text-xl font-medium">
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
            {state?.errors?.name && (
              <span id="name-error" className="text-red-600 text-sm">
                {state.errors.name.join(",")}
              </span>
            )}
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="price" className="block mb-2 text-xl font-medium">
              Price{" "}
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Example: 95000"
              autoComplete="off"
              className="rounded-3xl w-full bg-gray-500 px-4 py-2 placeholder-gray-400 text-white focus:outline-none focus:ring-0 focus:border-gray-900"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="description"
              className="block mb-2 text-xl font-medium"
            >
              Description{" "}
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsam illo ipsa magnam ea eius doloremque quasi maxime cumque voluptatibus saepe vitae distinctio id aliquam vel iste. Dolore, distinctio minima?"
              autoComplete="off"
              className="rounded-3xl w-full bg-gray-500 px-4 py-2 placeholder-gray-400 text-white focus:outline-none focus:ring-0 focus:border-gray-900"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block mb-2 text-xl font-medium"
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
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="contact" className="block mb-2 text-xl font-medium">
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
          </div>
          <CustomButton text="Submit" />
        </div>
      </form>
    </div>
  );
};
export default Upload;
