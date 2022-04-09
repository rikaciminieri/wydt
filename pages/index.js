import type, { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home = ({ results }) => {
  // const events = results._embedded.events
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1>What Are YOU Doing Tonight?</h1>
      {/* {events.map((event) => {
        return <div key={event.name}>{event.name}</div>
      })} */}
    </div>
  )
}

export default Home

// export async function getServerSideProps() {

//   const res = await fetch(
//     'https://app.ticketmaster.com/discovery/v2/events.json?apikey=' +
//       process.env.API_KEY
//   )
//   const data = await res.json()
//   console.log(data)

//   return {
//     props: {
//       results: data
//     },
//   }
// }

export const getServerSideProps = ({ query }) => {
  console.log(query)
  return { props: query }
}
