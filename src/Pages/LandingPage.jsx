import Header from '../Components/Header/Header'
import RatesTypeC from '../Components/LandingPage/RatesTypeS/RatesTypeS'
import CardTypeC from '../Components/LandingPage/Blogs/CardType'
import BlogsTypeC from '../Components/LandingPage/Blogs/Blogs'
import AdvitivismentTypeC from '../Components/LandingPage/Advitisment/Advitisment'
import Footer from '../Components/Footer/Footer'

function LandingPage() {
  return (
    <div>
        <Header />
        <RatesTypeC />
        <CardTypeC />
        <BlogsTypeC />
        <AdvitivismentTypeC />
        <Footer />
    </div>
  )
}

export default LandingPage