import useSWR from 'swr'
import { EventsListItem } from './EventsListItem'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const EventsList = ({ pageIndex, latitude, longitude }) => {
  const startDate = new Date().toISOString().slice(0, 19) + 'Z'

  const queryParams = new URLSearchParams({
    latlong: `${latitude},${longitude}`,
    startDateTime: startDate,
    radius: 100,
    page: pageIndex,
  })

  const { data, error } = useSWR(
    `api/ticketmaster/events?${queryParams.toString()}`,
    fetcher
  )

  if (error) {
    return <div>Error fetching data</div>
  }
  if (!data) {
    return <div>Loading...</div>
  }

  const events = data?._embedded.events

  return events
    ? events?.map((event) => <EventsListItem key={event.id} event={event} />)
    : null
}
