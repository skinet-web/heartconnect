import Image from 'next/image'
import Container from './components/Container'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="">
      <Container>
          <Navbar />
          <Hero />
      </Container>        
    </main>
  )
}
