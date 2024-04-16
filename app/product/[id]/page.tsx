import { createClient } from "@/supabase/client";

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

const page = ({params}: SingleProductType) => {
  return (
    <div>{params.id}</div>
  )
}
export default page