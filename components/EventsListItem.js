import {
  ChevronRightIcon,
  CalendarIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid'
import dayjs from 'dayjs'

export const EventsListItem = ({ event }) => {
  const startDate = dayjs(
    event.dates.start?.dateTime || event.dates.start.localDate
  )

  const endDate = event.dates.end?.localDate && dayjs(event.dates.end.localDate)

  const formattedEndDate = endDate?.format('MMM DD').toUpperCase()
  const formattedEndDay = endDate?.format('ddd')

  const formattedStartDate = startDate.format('MMM DD').toUpperCase()
  const formattedStartDay = startDate.format('ddd')
  const formattedTime = startDate.format('h:mm A')

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        <li>
          <a
            href={event.url}
            target="_blank"
            className="block hover:bg-gray-50"
          >
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="flex min-w-0 flex-1 items-center">
                <div className="hidden flex-shrink-0 md:block">
                  <img className="h-10 w-16" src={event.images[8].url} alt="" />
                </div>
                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <p className="truncate text-sm font-medium text-orange-600">
                      {event.name}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500">
                      <LocationMarkerIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="truncate">
                        {event._embedded.venues[0]?.name} -{' '}
                        {event._embedded.venues[0]?.city.name},{' '}
                        {event._embedded.venues[0]?.state.stateCode}
                      </span>
                    </p>
                  </div>
                  <div>
                    <div>
                      <p className="text-sm font-medium text-orange-900">
                        {endDate ? (
                          <span>
                            {formattedStartDate} - {formattedEndDate}
                          </span>
                        ) : (
                          <span>{formattedStartDate}</span>
                        )}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <CalendarIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-orange-400"
                          aria-hidden="true"
                        />
                        {event.dates.start.noSpecificTime ? (
                          <span>
                            {' '}
                            {formattedStartDay}
                            {endDate && <span> - {formattedEndDay} </span>}
                          </span>
                        ) : (
                          <span>
                            {formattedStartDay} @ {formattedTime}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}
