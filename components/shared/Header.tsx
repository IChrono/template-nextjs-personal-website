import { CustomPortableText } from '@/components/shared/CustomPortableText'
import Image from 'next/image'

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
    <header className="w-full flex flex-col items-center text-[16px]">
      <section className="flex flex-col w-full h-2/6 justify-between items-center px-20 py-[65px] gap-[25px] md:flex-row md:w-2/3  ">
        <Image
          src="/Logo.svg"
          width={263}
          height={97}
          alt="Dubby logo"
          className="min-w-[263px] md:w-[700px] "
        />
        <div className="py-[65px] flex flex-col justify-center gap-2 md:w-full max-w-[1200px]  ">
          <h3>Descrizione del progetto</h3>
          <p className="text-s ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut ali.
          </p>
        </div>
        <div className="flex justify-center pb-[65px]  min-w-[85px] md:flex-col items-center ">
          <Image
            src="/sky.svg"
            width={85}
            height={176}
            alt="Sky-Parole Ostili logo"
          />
          <Image
            src="/po.svg"
            width={85}
            height={176}
            alt="Sky-Parole Ostili logo"
          />
        </div>
      </section>
    </header>
  )
}
