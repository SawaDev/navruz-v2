import { Home } from "@/features/home"

export default function index({ params: { locale } }: { params: { locale: string } }) {

  return (<Home locale={locale} />)
}
