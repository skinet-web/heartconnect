import Image from 'next/image'
import Container from './components/Container'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Destination from './components/Destination'
import BookSection from './components/BookSection'
import Subscribe from './components/Subscribe'

export default function Home() {
  return (
    <main className="">
      <Container>
          <Navbar />
          <Hero />
          <Services />
          <Destination />
          <BookSection />
          <Subscribe />
      </Container>        
    </main>
  )
}
