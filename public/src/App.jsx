import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

import IconsThumbnails from './pages/portfolio/IconsThumbnails'
import IconDetail from './pages/portfolio/IconDetail'

import IllustrationThumbnails from './pages/portfolio/IllustrationThumbnails'
import IllustrationDetail from './pages/portfolio/IllustrationDetail'

import MotionThumbnails from './pages/portfolio/MotionThumbnails'
import MotionList from './pages/portfolio/MotionList'
import MotionDetail from './pages/portfolio/MotionDetail'

import InfographicsThumbnails from "./pages/portfolio/InfographicsThumbnails"
import InfographicsDetail from "./pages/portfolio/InfographicsDetail"

import CaseStudy from "./pages/portfolio/CaseStudy"
import CaseStudyThumbnails from "./pages/portfolio/CaseStudyThumbnails"

export default function App() {

  return (

    <div className="min-h-screen bg-white">

      <Navbar />

      <main className="pt-20 px-6 md:px-12 lg:px-24">

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/portfolio" element={<Portfolio />}>

            <Route index element={<Navigate to="icons" replace />} />

            {/* ICONS */}
            <Route path="icons" element={<IconsThumbnails />} />
            <Route path="icons/:iconId" element={<IconDetail />} />

            {/* ANIMATION */}
            <Route path="animation" element={<IconsThumbnails isAnimation />} />
            <Route path="animation/:iconId" element={<IconDetail isAnimation />} />

            {/* MOTION */}
            <Route path="motion" element={<MotionThumbnails />} />
            <Route path="motion/:collectionId" element={<MotionList />} />
            <Route path="motion/:collectionId/:motionId" element={<MotionDetail />} />

            {/* ILLUSTRATION */}
            <Route path="illustration" element={<IllustrationThumbnails />} />
            <Route path="illustration/:illustrationId" element={<IllustrationDetail />} />

            {/* PATTERN */}
            <Route path="pattern" element={<IllustrationThumbnails isPattern />} />
            <Route path="pattern/:patternId" element={<IllustrationDetail isPattern />} />

            {/* INFOGRAPHICS */}
            <Route path="infographics" element={<InfographicsThumbnails />} />
            <Route path="infographics/:infographicId" element={<InfographicsDetail />} />

            {/* CASE STUDY */}
            <Route path="casestudy" element={<CaseStudyThumbnails />} />
            <Route path="casestudy/:id" element={<CaseStudy />} />
            

          </Route>

        </Routes>

      </main>

    </div>
  )
}