import CustomButton from "./CustomButton"

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 items-center py-14">
      <h1 className="text-2xl font-bold tracking-wider">Zephyr</h1>
      <h3 className="italic text-base text-gray-500">Your one-stop shop.</h3>
      <CustomButton />
    </div>
  );
}
export default Hero