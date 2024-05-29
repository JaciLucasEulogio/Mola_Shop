import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_shirt } from '../../../data/Mens/mens_shirt'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_shirt} sectionName={"Men's"}/>
            <HomeSectionCarousel data={mens_shirt} sectionName={"Women's"}/>
            <HomeSectionCarousel data={mens_shirt} sectionName={"Kid's"}/>
            <HomeSectionCarousel data={mens_shirt} sectionName={"Stuff's"}/>
        </div>
    </div>
  )
}

export default HomePage