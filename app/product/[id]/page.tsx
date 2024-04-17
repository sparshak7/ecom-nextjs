import { createClient } from "@/supabase/client";
import Image from "next/image";

type SingleProductType = {
  params: {
    id: string;
  }
}

export async function generateStaticParams() {
  const supabase = createClient()
  const { data: products, error } = await supabase
    .from("ecom-products")
    .select();

  if(!products) {
    return []
  }

  return products.map((product) => ({
    id: product.id,
  }))
}

const SingleProduct = async ({params}: SingleProductType) => {
  const supabase = createClient();
   const { data: product } = await supabase
     .from("ecom-products")
     .select()
     .match({ id: params.id })
     .single()

  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/storage/${product.imageUrl}`}
            alt={product.name}
            className="rounded-t"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <h3 className="italic text-gray-400 text-xl">${product.price}</h3>
          <p className="text-lg">{product.description}</p>
          {product.featured && (
            <p className="text-lg text-indigo-400">Currently on Feature</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default SingleProduct