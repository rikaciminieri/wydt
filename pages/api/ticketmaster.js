export default async function handler(req, res) {
  // `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.API_KEY}&latlong=${query.latitude},${query.longitude}&size=9&startDateTime=${startDate}&radius=100`
  const queryParams = new URLSearchParams(req.query)

  const baseURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
    process.env.API_KEY
  }&${queryParams.toString()}`

  const response = await fetch(baseURL)
  const data = await response.json()
  res.status(200).json(data)
}