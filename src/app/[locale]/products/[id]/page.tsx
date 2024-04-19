import { Contact } from "@/components/contact"
import { SingleProduct } from "@/features/single-product"
import { products } from '@/dummyData';
import { Metadata, ResolvingMetadata } from "next";

interface SingleProductTypes {
  params: {
    id: number
  }
}

type Props = {
  params: { id: number }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id

  const product = products[id]

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.content[0].type + "jele",
    openGraph: {
      title: product.content[0].type + "jele",
      images: [...previousImages],
    },
  }
}

const index: React.FC<SingleProductTypes> = ({
  params: {
    id
  }
}) => {

  return (
    <>
      <SingleProduct id={id} />
      <div className='mt-10'>
        <Contact />
      </div>
    </>
  )
}

export default index