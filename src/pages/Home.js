import NavbarWeb from '../components/NavbarWeb';
import ProgressBar from "../components/ProgressBar"
import About from '../components/About';
import More from '../components/More';
import Services from '../components/Services';
import Catalog from '../components/Catalog';
import Footer from '../components/Footer';
import Home1 from '../components/Home1';

const Home = () => {
    return (
        <div>
            <NavbarWeb />
            <ProgressBar />
            <Home1 />
            <More />
            <About />
            <Services />
            <Catalog />

            <Footer />
        </div>
    )
}

export default Home 