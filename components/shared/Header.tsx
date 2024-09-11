import { CustomPortableText } from '@/components/shared/CustomPortableText'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
}
export function Header(props: HeaderProps) {
  const { title, description, centered = false } = props
  if (!description && !title) {
    return null
  }
  return (
    <header className="flex w-full flex-col items-center text-[16px]">
      <section className="flex flex-col items-center justify-between gap-[25px] px-10 py-[65px] sm:gap-[50px] lg:flex-row">
        <Image
          src="/Logo.svg"
          width={263}
          height={97}
          alt="Dubby logo"
          className="min-w-[263px] md:min-w-[600px] md:max-w-[1500px]"
        />
        <div className="flex flex-col justify-center gap-2 pt-[65px] md:w-full md:max-w-[1200px]">
          <h3>Descrizione del progetto</h3>
          <p className="text-s">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut ali.
          </p>
        </div>
        <div className="flex min-w-[85px] items-center justify-center md:flex-col">
          <Link href="https://www.sky.it/">
            <Image
              src="/sky.svg"
              width={85}
              height={176}
              alt="Sky-Parole Ostili logo"
            />
          </Link>
          <Link href="https://paroleostili.it/">
            <Image
              src="/po.svg"
              width={85}
              height={176}
              alt="Sky-Parole Ostili logo"
            />
          </Link>
        </div>
      </section>
    </header>
  )
}
