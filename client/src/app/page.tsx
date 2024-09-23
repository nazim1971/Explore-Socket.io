import FeatureSection from "@/components/base/FeatureSection"
import Footer from "@/components/base/Footer"
import HeroSection from "@/components/base/HeroSection"
import UserReviews from "@/components/base/UserReviews"

const page = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold">
        This is quick - app 
      </h3>
      <HeroSection/>
     <FeatureSection/>
     <UserReviews/>
     <Footer/>
    </div>
  )
}

export default page