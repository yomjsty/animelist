export const getDataResponse = async (resource: string, query?: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const data = await response.json()
    return data
}

export const getNestedDataResponse = async (resource: string) => {
    const response = await getDataResponse(resource)
    return response.data.flatMap((item: any) => item.entry)
}
