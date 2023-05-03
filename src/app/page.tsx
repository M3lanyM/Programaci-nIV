import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Pie from './components/Pie'

export default function Home() {
  return (
<>
    <header>
            <h1 className="h1"> Web portfolio
              <img className = "Logo" src="/logo.png"  />
            </h1>

    </header>

    <section>
    <Pie></Pie>
    </section>
    </>

  )
}
