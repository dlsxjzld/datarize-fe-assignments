type SearchParams = Record<string, string | number | boolean | undefined>

interface GetRequestOptions {
  endpoint: string
  params?: SearchParams
}

const API_BASE_URL = 'http://localhost:4000'

const buildQueryString = (params?: SearchParams) => {
  if (!params) {
    return ''
  }

  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) {
      return
    }

    searchParams.append(key, value.toString())
  })

  return searchParams.toString()
}

export const apiGet = async <T>({ endpoint, params }: GetRequestOptions): Promise<T> => {
  const url = new URL(`${API_BASE_URL}${endpoint}`)

  const queryString = buildQueryString(params)
  if (queryString) {
    url.search = queryString
  }

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`GET error입니다. status: ${response.status}`)
  }

  return response.json()
}
