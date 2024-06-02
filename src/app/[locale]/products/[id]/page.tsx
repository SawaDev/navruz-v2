import { Contact } from "@/components/contact"
import { SingleProduct } from "@/features/single-product"
import { Metadata, ResolvingMetadata } from "next";
import { api } from "@/lib/api";
import { SinglePostResponse } from "@/types/PostsResponse";

interface SingleProductTypes {
  params: {
    id: number
  }
}

type Props = {
  params: { id: number, locale: "uz" | "ru" | "en" }
}

async function getData(id: number) {
  const res = await api.get<SinglePostResponse>(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)

  return res.data
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await getData(params.id)

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${data.data.name[params.locale]} Jele`,
    description: data.data.description[params.locale],
    openGraph: {
      title: `${data.data.name[params.locale]} Jele`,
      description: data.data.description[params.locale],
      images: data.data.details.length ? [data.data.details[0].image] : [...previousImages],
    },
  }
}

const index: React.FC<SingleProductTypes> = async ({
  params: {
    id
  }
}) => {
  const data = await getData(id)

  return (
    <>
      <SingleProduct data={data.data} />
      <div className='mt-10'>
        <Contact />
      </div>
    </>
  )
}

export default index