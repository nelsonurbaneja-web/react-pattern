export const fetchGiphy = async ({ limit = 5, page = 0}) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/search?api_key=${import.meta.env.VITE_API_KEY}&q=perros&limit=${limit}&offset=${page * limit}&rating=g&lang=es`)
  const data = await response.json()
  return data.data
}