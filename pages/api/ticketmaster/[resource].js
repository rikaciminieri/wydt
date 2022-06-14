export default async function handler(req, res) {
  const { resource, ...ticketmasterQueryParams } = req.query
  
  const baseURL = `https://app.ticketmaster.com/discovery/v2/${resource}.json?apikey=${process.env.API_KEY}`

  const queryString = new URLSearchParams(ticketmasterQueryParams).toString()
  const endpoint = `${baseURL}&${queryString}`

  const response = await fetch(endpoint)
  const data = await response.json()
  res.status(200).json(data)
}
