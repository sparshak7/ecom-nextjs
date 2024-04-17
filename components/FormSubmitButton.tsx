import { useFormStatus } from "react-dom"

const FormSubmitButton = () => {
  const {pending} = useFormStatus()
  return (
    <button type="submit" disabled={pending} className={`border border-indigo-400 px-16 py-2 rounded-3xl text-xl hover:bg-gray-600 ${pending && "cursor-not-allowed"}`}>
      {pending ? "Adding..." : "Add"}
    </button>
  )
}
export default FormSubmitButton