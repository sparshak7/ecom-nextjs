import { createClient } from "@/supabase/client";
import Card from "./Card";
export const revalidate = 1800;

const TopProducts = async () => {
  const supabase = createClient();
  const { data: topProducts, error: topProductsError } = await supabase
    .from("ecom-products")
    .select()
    .eq("featured", true);

  return (
    <div>
      <h1 className="text-3xl tracking-wide">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 my-10">
        {topProducts ? (
          topProducts?.map((product, id) => <Card key={id} product={product} />)
        ) : (
          <p className="pt-6 text-md">No products to retrieve currently.</p>
        )}
      </div>
      <div className="border max-w-5xl mx-auto mb-6 mt-1 border-gray-600" />
    </div>
  );
};
export default TopProducts;
