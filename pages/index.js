import type, { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import EventCard from '../components/UI/EventCard'
import Header from '../components/UI/Header'
import crowdImage from '../assets/crowd.jpeg'

const Home = (props) => {
  const { country, city, region, latitude, longitude, data } = props
  const events = data._embedded.events
  console.log(events)
  return (
    <div>
      <Header />
      <div className="relative grid place-items-center z-0 h-96 w-full overflow-hidden">
        <Image className='absolute' src={crowdImage} alt="Crowd at concert" />
        <h1 className="absolute text-4xl font-bold text-white">
          What are YOU doing tonight?
        </h1>
      </div>
      <h3 className='p-5 font-semibold text-lg text-blue-400'>
        Events near {city}, {region}
      </h3>
      <div className="grid grid-cols-3 gap-6 p-6">
        {events.map((event) => {
          return <EventCard key={event.id} event={event} />
        })}
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async ({ query }) => {
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.API_KEY}&latlong=${query.latitude},${query.longitude}`
  )
  const data = await res.json()

  console.log(data)
  console.log(query)
  return { props: { ...query, data } }
}
