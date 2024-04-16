import Card from "@/components/Card";
import TopProducts from "@/components/TopProduct";
import { createClient } from "@/supabase/client";

// export const revalidate = 0; //no-store
export const revalidate = 1800;

export default async function Home() {
  const supabase = createClient();
  const { data: products, error } = await supabase
    .from("ecom-products")
    .select();

  return (
    <div>
      <TopProducts />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products?.map((product, id) => (
          <Card key={id} product={product} />
        ))}
      </div>
    </div>
  );
}
