import Link from 'next/link'

const Card = ({ event }) => {
  const date = new Date(event.dates.start.dateTime).toDateString()

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
          <a className="mb-2 text-xl font-bold" target="_blank">{event.name}</a>
        </Link>
        <p className="text-base text-gray-700">Date: {date}</p>
        <p className="text-base text-gray-700">
          Time: {event.dates.start.localTime}
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
