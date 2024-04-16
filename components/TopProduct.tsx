import { createClient } from "@/supabase/client";
import Card from "./Card";
export const revalidate = 1800;

const TopProducts = async () => {
  const supabase = createClient();
  const { data: topProducts, error: topProductsError } = await supabase
    .from("ecom-products")
    .select()
    .eq("featured", true);

  console.log({ topProducts });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
      {topProducts?.map((product, id) => (
        <Card key={id} product={product} />
      ))}
    </div>
  );
};
export default TopProducts;
