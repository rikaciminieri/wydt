import useSWR, { SWRConfig } from 'swr'
import Image from 'next/image'
import EventCard from '../../components/UI/EventCard'
import Header from '../../components/UI/Header'
import crowdImage from '../../assets/crowd.jpeg'
import Button from '../../components/UI/Button'

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
    `api/ticketmaster?${queryParams.toString()}`,
    fetcher
  )

  if (error) {
    return <div>Error fetching data</div>
  }
  if (!data) {
    return <div>Loading...</div>
  }

  const events = data._embedded.events

  return (
    <div className="min-h-full">
      <Header />
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="relative z-0 grid md:h-96 sm:h-auto w-full place-items-center overflow-hidden">
          <Image className="absolute" src={crowdImage} alt="Crowd at concert" />
          <h1 className="absolute flex flex-col items-center font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
            What are YOU doing tonight?
            <Button className="m-3">
              <p className='sm:text-xs md:text-base lg:text-xl'>Find your next event</p>
            </Button>
          </h1>
        </div>
        <h3 className="p-5 pb-0 text-lg font-semibold text-orange-600">
          Events near {city}, {region}
        </h3>
        <div className="gap-6 p-6 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
            return <EventCard key={event.id} event={event} />
          })}
        </div>
        <div className="flex items-center justify-center">
          <Button className="max-w-fit">View All</Button>
        </div>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async ({ query }) => ({
  props: query,
})
