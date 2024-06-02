import Heading from "@/components/heading";
import { products } from "@/dummyData";
import { ProductCard } from "../../../components/product-card/product-card";
import { api } from "@/lib/api";
import { PostsResponse } from "@/types/PostsResponse";
import { useLang } from "@/utils/useLang";

async function getData() {
  const res = await api.get<PostsResponse>(`${process.env.NEXT_PUBLIC_API_URL}/posts`)

  return res.data
}

const index = async () => {
  const {locale} = useLang()

  const data = await getData()

  return (
    <div className=''>
      <Heading text="Our" title="Products" />
      <section className='flex flex-wrap justify-around g-5 mb-10'>
        {data.data.filter(d => d.published).map((product) => (
          <ProductCard
            key={product.id}
            index={product.id}
            image={product.details.length ? product.details[0].image : products[0].content[0].img}
            type={product.name[locale]}
          />
        ))}
      </section >
    </div>
  )
}

export default index