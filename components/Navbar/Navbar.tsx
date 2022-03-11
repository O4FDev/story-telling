import Link from 'next/link'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { Links } from '../Links'
import { Head } from 'next/document'

function hoveredLink() {
  const [activeLink, setActiveLink] = useState('')
  return {
    setActiveLink,
    activeLink,
  }
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const useHoveredLink = hoveredLink()
  return (
    <header>
      <nav className="">
        <div className="flex flex-row justify-between p-12 font-semibold">
          <div className="flex flex-row items-center">
            <Link href="/">
              <img src="https://cdn.hildey.com/Diora.png" alt="Diora Logo" />
              {/* <h1 className="cursor-pointer font-serif text-xl font-semibold">
                D.U.O.L.E
              </h1> */}
            </Link>
          </div>
          <div className="flex flex-row items-center">
            <MenuIcon
              className="sticky right-12 top-12 h-5 w-5 md:hidden"
              onClick={() => {
                setMenuOpen(!menuOpen)
              }}
            />
            <ul className="hidden gap-4 text-[16px] md:flex">
              {/* If anyIsHovered is false then just render normally, if one is hovered but not the current element give it a 0.3 opacity, if it is being hovered then render it normally. There should be an ease on the animation opactity of 0.2s */}
              {Links.map((link, index) => {
                return (
                  <li id={`${index}`} key={index}>
                    <Link href={link.link}>
                      <a
                        className={
                          useHoveredLink.activeLink === link.link
                            ? useHoveredLink.activeLink !== link.name
                              ? 'text-gray-600 opacity-30 transition-opacity duration-300 ease-in-out'
                              : hoveredLink().activeLink === link.name
                              ? 'text-gray-600 opacity-100'
                              : 'text-gray-600 opacity-30 transition-opacity duration-300 ease-in-out'
                            : 'text-gray-600 opacity-100 transition-opacity duration-300 ease-in-out'
                        }
                        onMouseEnter={() => {
                          useHoveredLink.setActiveLink(link.link)
                        }}
                        onMouseLeave={() => {
                          useHoveredLink.setActiveLink('')
                        }}
                      >
                        {link.name}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        {menuOpen && (
          <div className="h-screen">
            <div className="absolute top-0 right-0 flex h-full w-screen flex-col items-center justify-center bg-white shadow-xl md:hidden lg:w-2/5">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <XIcon
                    className="absolute right-12 top-12 h-5 w-5"
                    onClick={() => {
                      setMenuOpen(!menuOpen)
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="">
                  <div className="flex flex-col gap-4 text-left text-2xl font-bold lg:gap-8 lg:text-4xl">
                    {Links.map((link, index) => {
                      return (
                        <div key={index}>
                          <Link href={link.link}>
                            <a className="">{link.name}</a>
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="flex flex-row py-6 text-lg">
                  <div className="flex flex-col gap-4 text-left font-bold">
                    <a
                      className="text-[#FF635C] underline"
                      href="mailto:luke.lucas@ou.ac.uk
                                "
                    >
                      luke.lucas@ou.ac.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
