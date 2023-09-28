import React from 'react'
import SuperPriceOffer from '../components/home/SuperPriceOffer'
import AdCards from '../components/home/AdCards'
import Herousel from '../components/home/Herousel'

const HomePage = () => {
  return (
    <div>
      <Herousel />
      <SuperPriceOffer />
      <AdCards />
    </div>
  )
}

export default HomePage