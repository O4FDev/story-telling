import { ImagesGrid } from './../components/ImagesGrid'
import type { NextPage } from 'next'
import Navbar from '../components/Navbar/Navbar'
import Text from '../components/Text'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex h-[84vh] flex-col justify-center px-12 text-center">
        <h1 className="text-3xl font-bold md:text-5xl">
          the day everything changed
        </h1>
        <span className="mt-6 font-serif text-3xl font-bold md:text-5xl">
          by Luke Lucas
        </span>
      </main>
      <main
        className="flex h-[100vh] flex-col justify-center px-12 text-center"
        id="whathappened"
      >
        <div className="flex flex-col items-center justify-center gap-12 text-center md:flex-row">
          <h1 className="text-2xl font-bold md:text-4xl">
            far too many
            <br />
            <span className="font-normal">Promises</span>
          </h1>
          <h1 className="text-2xl font-bold md:text-4xl">
            1
            <br />
            <span className="font-normal">Space Launch</span>
          </h1>
          <h1 className="text-2xl font-bold md:text-4xl">
            708
            <br />
            <span className="font-normal">Art works saved</span>
          </h1>
        </div>
      </main>
      <main
        className="flex h-[100vh] flex-col justify-center px-12 text-center"
        id="mypromises"
      >
        <div className="flex flex-col items-center justify-center gap-12 text-center md:flex-row">
          <h1 className="text-2xl font-bold md:text-4xl">
            2
            <br />
            <span className="font-normal">Movies</span>
          </h1>
          <h1 className="text-2xl font-bold md:text-4xl">
            10
            <br />
            <span className="font-normal">Research Papers</span>
          </h1>
          <h1 className="text-2xl font-bold md:text-4xl">
            5
            <br />
            <span className="font-normal">Books</span>
          </h1>
        </div>
      </main>
      <main className="flex h-[100vh] flex-col justify-center px-12 text-center">
        <div className="flex flex-col items-center justify-center gap-12 text-center md:flex-row">
          <h1 className="text-2xl font-bold md:text-4xl">
            2
            <br />
            <span className="font-normal">Idgets</span>
          </h1>
        </div>
      </main>
      <article
        className="flex h-[100vh] flex-col justify-center px-12 text-center"
        id="apoem"
      >
        <div className="flex flex-col items-center justify-center gap-12 text-center md:flex-row lg:px-64">
          <h1 className="text-xl font-normal md:text-2xl">
            No more running, not from you. <br />
            <br /> One step forward into the unknown, a drop so deep and narrow.
            I don't fall, but for you, I fell.
            <br />
            <br /> A desire of a flame burning so frame. A fitting fate on solid
            ground when I stare into your eyes, adventure looms chasing bears
            through deserts, rainforests, and rivers on mountains that I can see
            clear as day through your inventions I peer into your soul.
            <br />
            <br />
            by
            <span className="font-serif"> Luke Lucas to Diora</span>
          </h1>
        </div>
      </article>
    </>
  )
}

export default Home
