import React from 'react'
import { org_logo } from '../assets/images'
import { navLinks } from '../constants'
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialLink = ({ href, Icon, label }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    aria-label={label}
    className='text-white hover:text-gray-300'
  >
    <Icon className='w-6 h-6' />
  </a>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='text-white pt-8 pb-4'>
      <div className='max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center'>
        <div className='mb-6 md:mb-0 flex flex-col items-center gap-4 w-full md:w-auto'>
          <img src={org_logo} alt='Organization Logo' className='w-24' />
          <p className='text-sm font-light text-center'>
            Empowering youth through sports.
          </p>
        </div>
        <div className='w-full md:w-auto text-center mb-6 md:mb-0'>
          <h5 className='font-bold mb-4'>Quick Links</h5>
          <ul className='grid grid-cols-2 gap-2 text-sm w-36 mx-auto'>
            <li>
              <a href='#' className=''>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className=''>
                About
              </a>
            </li>
            <li>
              <a href='#forms' className=''>
                Forms
              </a>
            </li>
            <li>
              <a href='#gallery' className=''>
                Gallery
              </a>
            </li>
            <li>
              <a href='#calendar' className=''>
                Calendar
              </a>
            </li>
            <li>
              <a href='#board' className=''>
                Board
              </a>
            </li>
            <li>
              <a href='#contact' className=''>
                Contact
              </a>
            </li>
            <li>
              <a href='#location' className=''>
                Location
              </a>
            </li>
          </ul>
        </div>
        <div className='w-full md:w-auto mb-6 md:mb-0 text-center'>
          <h5 className='font-bold mb-4'>Developers</h5>
          <div className='flex flex-col md:flex-row justify-center gap-4'>
            <div>
              <p className='mb-2'>Mohammad</p>
              <div className='flex justify-center gap-4'>
                <SocialLink
                  href='https://www.linkedin.com/in/mohammad-h-rizwan/'
                  Icon={FaLinkedin}
                  label='LinkedIn'
                />
                <SocialLink
                  href='https://github.com/mrizwan83'
                  Icon={FaGithub}
                  label='GitHub'
                />
              </div>
            </div>
            <div>
              <p className='mb-2'>Jordy</p>
              <div className='flex justify-center gap-4'>
                <SocialLink
                  href='https://www.linkedin.com/in/jcorporan/'
                  Icon={FaLinkedin}
                  label='LinkedIn'
                />
                <SocialLink
                  href='https://github.com/j-corp-25'
                  Icon={FaGithub}
                  label='GitHub'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-auto flex justify-center items-center flex-col mb-6 md:mb-0'>
          <h5 className='font-bold mb-4'>Follow Warriors</h5>
          <div className='flex gap-4'>
            <SocialLink
              href='https://www.instagram.com/bronx_warriors_football/'
              Icon={FaInstagram}
              label='Instagram'
            />
            <SocialLink
              href='https://www.facebook.com/TheBronxWarriorsFootball'
              Icon={FaFacebook}
              label='Facebook'
            />
          </div>
        </div>
      </div>
      <div className='text-center font-light text-sm mt-8'>
        © {currentYear} Warriors Football League Inc. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
