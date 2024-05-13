"use client"

import About from "@/components/public/About"
import FAQ from "@/components/public/F&Q"
import Features from "@/components/public/Features"
import { Hero } from "@/components/public/Hero"
import { HowItWorks } from "@/components/public/HowItWorks"
import Newsletter from "@/components/public/Contact"
import Pricing from "@/components/public/Pricing"
import Services from "@/components/public/Services"
import Sponsors from "@/components/public/Skills"
import Statistics from "@/components/public/Statistics"
import Team from "@/components/public/Teams"
import { Testimonials } from "@/components/public/Testimonials"
import { Reviews } from "@/components/public/Reviews"

// import { useSession } from "next-auth/react"

export default function Home(){
    // const session=useSession()
    // console.log(session)
    return(
        <>
        <div className="  overflow-x-hidden">
          <Hero/>
          <Sponsors/>
          <About/>
          
          {/* <Statistics/> */}
          <HowItWorks/>
          <Features/>
          <Services/>
          <Reviews/>
          <Team/>
          
          <Newsletter/>
          <FAQ/>
        </div>
       
        </>
    )
}