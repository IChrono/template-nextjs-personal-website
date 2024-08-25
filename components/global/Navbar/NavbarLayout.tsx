import Link from 'next/link'
import Image from 'next/image'

import { resolveHref } from '@/sanity/lib/utils'
import type { MenuItem, SettingsPayload } from '@/types'

export default function Navbar() {
  return (
    <nav className="flex justify-between px-[14px] py-[16px] bg-[#272559] md:px-[80px] ">
      <div className="flex gap-[32px]">
        <Link href="/">
          <Image
            src="./Navbar/logo_nav.svg"
            width={89}
            height={30}
            alt="Logo dubby nav"
            className="md:w-[120px] h-[48px]"
          />
        </Link>
        <Image
          src="./Navbar/logo_nav_search.svg"
          width={32}
          height={32}
          alt="Logo dubby nav"
          className="hidden md:w-[32px] h-[32px]"
        />
      </div>
      <Image
        src="./Navbar/logo_nav_search.svg"
        width={32}
        height={32}
        alt="Logo dubby nav"
        className="md:w-[48px] h-[48px]"
      />

      <div className="flex gap-[32px]">
        <Image
          src="./Navbar/darkmode_nav.svg"
          width={89}
          height={30}
          alt="Logo dubby nav"
          className="hidden md:block w-[143px] h-[48px] "
        />
        <Image
          src="./Navbar/menu_nav.svg"
          width={32}
          height={32}
          alt="Logo dubby nav"
          className="md:w-[48px] h-[48px]"
        />
      </div>
    </nav>
  )
}
