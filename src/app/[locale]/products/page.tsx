import Heading from "@/components/heading";
import { products } from "@/dummyData";
import { useTranslations } from "next-intl";
import { ProductCard } from "../../../components/product-card/product-card";

const index = () => {
  const t = useTranslations();

  return (
    <div className=''>
      <Heading text="Our" title="Products" />
      <section className='flex flex-wrap justify-around g-5 mb-10'>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            index={index}
            image={product.content[0].img}
            type={product.content[0].type}
          />
        ))}
      </section >
    </div>
  )
}

export default index