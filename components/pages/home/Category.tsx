'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Categories() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const [categories, setCategories] = useState<string[]>([])

    // Carica i parametri iniziali una sola volta al montaggio
    useEffect(() => {
      const params = new URLSearchParams(searchParams);
      const urlParams = params.get("cat");

      if (urlParams) {
          setCategories(urlParams.split(' '));
      }
    
    }, []); 

    // Aggiorna l'URL quando lo stato categories cambia
    useEffect(() => {
      const params = new URLSearchParams(searchParams);
      if (categories.length > 0) {
          params.set("cat", categories.join(" "));
      } else {
          params.delete("cat");
      }
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, [categories]); // Esegui questo effetto ogni volta che `categories` cambia

    function handleSetCategory(category: string, isChecked: boolean) {
        setCategories((prevCategories) => {
            if (isChecked) {
                return [...prevCategories, category];
            } else {
                return prevCategories.filter((cat) => cat !== category);
            }
        });
    }

    const categorieFetchate: string[] = [
      'Tutte le categorie',
      'LGBTQIA+',
      'Multiculturalità',
      'Salute',
      'Genere',
      'Età',
      'Generale',
    ]

    return (
      <div
        className="w-full bg-[#EDEDED] p-4 relative after:content-[''] after:absolute after:top-[50px] after:right-[-40px] after:border-t-[20px] after:border-t-transparent after:border-b-[20px] after:border-b-transparent after:border-r-[25px] after:border-r-white"
      >
        <ul className="pt-2">
          {categorieFetchate.map((cat: string) => (
            <li key={cat} className="my-1 flex items-center">
              <div className="flex items-center bg-white p-2 rounded-[6px]">
                <input
                  type="checkbox"
                  id={`${cat}`}
                  name="category"
                  value={`${cat}`}
                  checked={categories.includes(cat)}
                  className="w-6 h-6 appearance-none rounded-full border-2 border-gray-300 checked:bg-[#9940F8] checked:border-transparent focus:outline-none"
                  onChange={(e) => handleSetCategory(e.target.value, e.target.checked)}
                />
                <label className="ml-3 text-xl" htmlFor={`${cat}`}>
                  {cat}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
