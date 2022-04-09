import type, { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home = (props) => {
  const { country, city, region, latitude, longitude, data } = props
  const events = data._embedded.events
  console.log(events)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1>What Are YOU Doing Tonight?</h1>
      {events.map((event) => {
        return <p key={event.id}>{event.name}</p>
      })}
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
