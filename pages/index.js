import Image from 'next/image'
import EventCard from '../components/UI/EventCard'
import Header from '../components/UI/Header'
import crowdImage from '../assets/crowd.jpeg'
import Button from '../components/UI/Button'

const Home = (props) => {
  const { country, city, region, latitude, longitude, data } = props
  const events = data._embedded.events
  const page = data.page

  console.log(page)
  return (
    <div className='min-h-full'>
      <Header />
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className="relative z-0 grid h-96 w-full place-items-center overflow-hidden">
          <Image className="absolute" src={crowdImage} alt="Crowd at concert" />
          <h1 className="absolute flex flex-col items-center text-4xl font-bold text-white">
            What are YOU doing tonight?
            <Button className="m-3">Find your next event</Button>
          </h1>
        </div>
        <h3 className="p-5 pb-0 text-lg font-semibold text-orange-600">
          Events near {city}, {region}
        </h3>
        <div className="grid grid-cols-3 gap-6 p-6">
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

export const getServerSideProps = async ({ query }) => {
  const startDate = new Date().toISOString().slice(0, 19) + 'Z'
  console.log(startDate)
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.API_KEY}&latlong=${query.latitude},${query.longitude}&size=9&startDateTime=${startDate}&radius=100`
  )
  const data = await res.json()

  console.log(data)
  console.log(query)
  return { props: { ...query, data } }
}
