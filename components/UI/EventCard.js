import Link from 'next/link'
import dayjs from 'dayjs'

const Card = ({ event }) => {
  const date = dayjs(event.dates.start.dateTime)
  const formattedDate = date.format('MMM D, YYYY')
  const formattedTime = date.format('h:mm A')

  console.log(event)

  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <Link href={event.url}>
        <a target="_blank">
          <img
            className="w-full"
            src={event.images[0].url}
            alt="Sunset in the mountains"
          />
        </a>
      </Link>
      <div className="px-6 py-4">
        <Link href={event.url}>
          <a className="mb-2 text-xl font-bold" target="_blank">
            {event.name}
          </a>
        </Link>
        <p className="text-base font-semibold text-orange-600">
          {formattedDate} {formattedTime}
        </p>
        <p className="text-base font-medium text-gray-700">
          @ {event._embedded.venues[0].name}
        </p>

        <p className="text-base text-gray-700">{event.distance} miles</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {event.classifications[0].genre.name}
        </span>
        <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {event.classifications[0].segment.name}
        </span>
        <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {event.classifications[0].subGenre.name}
        </span>
      </div>
    </div>
  )
}

export default Card
