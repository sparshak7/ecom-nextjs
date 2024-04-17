import { useFormStatus } from "react-dom"

const FormSubmitButton = () => {
  const {pending} = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className={`border border-indigo-400 px-16 py-3 rounded-3xl text-xl mt-4 hover:bg-gray-600 ${
        pending && "cursor-not-allowed"
      }`}
    >
      {pending ? (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        />
      ) : (
        "Add"
      )}
    </button>
  );
}
export default FormSubmitButton