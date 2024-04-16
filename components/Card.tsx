import Image from "next/image";
import Link from "next/link";

type CardProps = {
  product: {
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    id: string;
  };
};

const Card = ({ product }: CardProps) => {
  return (
    <Link href={`product/${product.id}`}>
      <div className="max-w-lg rounded-sm flex flex-col justify-between h-full overflow-hidden">
        <div>
          <div className="relative h-96 bg-center">
            <Image
              src={`${process.env.SUPABASE_URL}/storage/v1/object/public/storage/${product.imageUrl}`}
              alt={product.name}
              style={{ objectFit: "cover" }}
              fill={true}
              className="rounded-t"
            />
          </div>
          <div className="py-4 flex flex-col gap-2">
            <div className="text-2xl line-clamp-2">{product.name}</div>
            <div className="text-xl">${product.price}</div>
            <div className="truncate italic text-base">
              {product.description}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
