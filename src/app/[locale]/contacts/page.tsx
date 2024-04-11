import { Contact } from "@/components/contact"
import Heading from "@/components/heading"
import { Contact as ContactFeature } from "@/features/contacts"

export default function index() {

  return (
    <>
      <Heading title="Contacts" />
      <ContactFeature />
      <Contact />
    </>
  )
}
