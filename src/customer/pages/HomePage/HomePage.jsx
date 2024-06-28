import React, { useEffect } from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import AdComponent from '../../components/AddComponent/AddComponent'
import { mens_shirt } from '../../../data/Mens/mens_shirt'
import {women_t} from '../../../data/Mens/women_t-shirt'
import PromoBanner from '../../components/PromoBanner/PromoBanner'

const HomePage = () => {
  return (
    <div className='mt-[-2.5rem]'>
        <MainCarousel/>
        <AdComponent/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_shirt} sectionName={"Men's"}/>
            <HomeSectionCarousel data={women_t} sectionName={"Women's"}/>
            <HomeSectionCarousel data={mens_shirt} sectionName={"Kid's"}/>
            <HomeSectionCarousel data={women_t} sectionName={"Stuff's"}/>
        </div>
        <div className='mb-[-2.5rem]'>
          <PromoBanner/>
        </div>
    </div>
  )
}

export default HomePage