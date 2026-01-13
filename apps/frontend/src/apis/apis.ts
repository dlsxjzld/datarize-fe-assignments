interface GetRequestOptions {
  endpoint: string
}

const API_BASE_URL = 'http://localhost:4000'

export const apiGet = async <T>({ endpoint }: GetRequestOptions): Promise<T> => {
  const url = new URL(`${API_BASE_URL}${endpoint}`)

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`GET error입니다. status: ${response.status}`)
  }

  return response.json()
}
