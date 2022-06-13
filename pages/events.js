import Header from '../components/UI/Header'
import { useEffect, useState } from 'react'
import { EventsList } from '../components/EventsList'
import seatsImage from '../assets/seatsImage.jpg'
import Button from '../components/UI/Button'
import Image from 'next/image'

const Events = ({ country, city, region, latitude, longitude }) => {
  const [count, setCount] = useState(0)
  const [pages, setPages] = useState([])

  useEffect(() => {
    setPages([
      ...pages,
      <EventsList
        key={pages.length}
        pageIndex={pages.length}
        latitude={latitude}
        longitude={longitude}
      />,
    ])
  }, [count])

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
        <div className="relative z-0 grid w-full place-items-center overflow-hidden sm:h-auto md:h-96">
          <Image
            className="relative"
            src={seatsImage}
            alt="Sports stadium seats"
          />
          <h1 className="absolute flex flex-col items-center font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl"></h1>
        </div>
      </div>
      <div className="mx-auto max-w-4xl">
        <h3 className="p-5 pb-0 text-lg font-semibold text-orange-600">
          All Events Near {city}, {region}
        </h3>
        {pages}
      </div>
      <div className="flex items-center justify-center p-4">
        <Button className="max-w-fit" onClick={() => setCount(count + 1)}>
          Load More
        </Button>
      </div>
    </div>
  )
}

export default Events

export const getServerSideProps = async ({ query }) => ({
  props: query,
})
