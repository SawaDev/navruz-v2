export interface PostsResponse {
  success: boolean
  data: Post[]
}

export interface SinglePostResponse {
  success: boolean
  data: {
    id: number
    name: Translation
    description: Translation
    published: boolean
    created_at: string
    details: Detail[]
  }
}

export interface Post {
  id: number
  createdAt: number
  description: Translation
  name: Translation
  published: boolean
  details: Detail[]
}

interface Translation {
  uz: string
  ru: string
  en: string
}

interface Detail {
  id: string
  image: string
  mass: number | null
  pure_mass: number | null
  total_mass: number | null
  expiration_date: number | null
  volume: string | null
  published: boolean | null
  capacity: Translation | null
  name: Translation | null
}