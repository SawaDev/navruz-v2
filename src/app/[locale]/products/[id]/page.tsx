"use client"

import { Contact } from "@/components/contact"
import { SingleProduct } from "@/features/single-product"

interface SingleProductTypes {
  params: {
    id: number
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