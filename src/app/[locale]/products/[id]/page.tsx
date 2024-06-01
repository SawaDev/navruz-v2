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

const index: React.FC<SingleProductTypes> = async ({
  params: {
    id
  }
}) => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${process.env.API_TOKEN}`);

  const getData = async () => {
    try {

      const res = await fetch(
        process.env.API_URL + '/posts/' + id,
        {
          method: 'GET',
          headers: headers
        }
      )

      return res.json()
    } catch (err) {
      console.log(err)
    }
  }

  const data = await getData()

  return (
    <>
      <SingleProduct id={id} data={data} />
      <div className='mt-10'>
        <Contact />
      </div>
    </>
  )
}

export default index