import Card from "@/components/Card";
import Hero from "@/components/Hero";
import TopProducts from "@/components/TopProduct";
import { createClient } from "@/supabase/client";

// export const revalidate = 0; //no-store
export const revalidate = 0;

export default async function Home() {
  const supabase = createClient();
  const { data: products, error } = await supabase
    .from("ecom-products")
    .select();

  return (
    <div>
      <Hero />
      <TopProducts />
      <div className="text-3xl tracking-wide">All Products</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 my-10">
        {products?.map((product, id) => (
          <Card key={id} product={product} />
        ))}
      </div>
    </div>
  );
}
