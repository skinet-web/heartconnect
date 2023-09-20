import Image from 'next/image'
import Container from './components/Container'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

export default function Home() {
  return (
    <main className="">
      <Container>
          <Navbar />
          <Hero />
          <Services />
      </Container>        
    </main>
  )
}
