import {Header} from "../Header-Section/Header";
import {Banner} from "../Banner-Section/Banner";
import {Logo} from "../Logo-Section/Logo"
import { Feature } from "../Feature-section/Feature";
import { Testimonial } from "../Testimonial-Section/Testimonial";
import { Pricing } from "../Pricing-section/Pricing";
import { FAQ } from "../FAQ-Section/FAQ";
import { Footer } from "../Footer-Section/Footer";
export default function LandingPage() {


  return(
    <>
<Header/>
<Banner/>
<Logo/>
<Feature/>
<Testimonial/>
<Pricing/>
<FAQ/>
<Footer/>
    </>
  )
}