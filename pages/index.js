import useSWR, { SWRConfig } from 'swr'
import Image from 'next/image'
import Link from 'next/link'
import EventCard from '../components/UI/EventCard'
import Header from '../components/UI/Header'
import crowdImage from '../assets/crowd.jpeg'
import Button from '../components/UI/Button'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Home = ({ country, city, region, latitude, longitude }) => {
  const startDate = new Date().toISOString().slice(0, 19) + 'Z'

  const queryParams = new URLSearchParams({
    size: 9,
    latlong: `${latitude},${longitude}`,
    startDateTime: startDate,
    radius: 100,
  })

  const { data, error } = useSWR(
    `api/ticketmaster/events?${queryParams.toString()}`,
    fetcher
  )

  if (error) {
    return <div>Error fetching data</div>
  }
  if (!data) {
    return <Header />
  }

  const events = data._embedded.events

  return (
    <div className="min-h-full">
      <Header />

      <main>
        <div className="relative">
          {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" /> */}

          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="relative z-0 grid w-full place-items-center overflow-hidden sm:h-auto md:h-96">
              <Image
                className="relative"
                src={crowdImage}
                alt="Crowd at concert"
              />
              <h1 className="absolute flex flex-col items-center font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
                What are YOU doing tonight?
                <Button className="m-3">
                  <Link href="/events">
                    <p className="sm:text-xs md:text-base lg:text-xl">
                      Find your next event
                    </p>
                  </Link>
                </Button>
              </h1>
            </div>
            <h3 className="p-5 pb-0 text-lg font-semibold text-orange-600">
              Events near {city}, {region}
            </h3>
            <div className="flex flex-col items-center gap-6 p-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => {
                return <EventCard key={event.id} event={event} />
              })}
            </div>
            <div className="flex items-center justify-center">
              <Button className="max-w-fit">
                <Link href="/events">View All</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async ({ query }) => ({
  props: query,
})
