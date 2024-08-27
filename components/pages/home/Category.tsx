'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Categories() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const [categories, setCategories] = useState<string[]>([])

    function handleSetCategory(category : string, isChecked: boolean){
        setCategories((prevCategories)=> {
            const updatedCat: string[]= 
            isChecked? [...categories, category]
            : prevCategories.filter((cat)=> cat != category)
            
            const params = new URLSearchParams(searchParams);
            if(updatedCat){            
                params.set("cat", updatedCat.join(" "))
            }else{
                params.delete("cat")
            }
            
            replace(`${pathname}?${params.toString()}`, {scroll:false})
            
            return updatedCat
        }

    )}

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
        className="w-full
                bg-[#EDEDED] p-4 relative
                  after:content-[''] after:absolute after:top-[50px] after:right-[-40px]                   
                  after:border-t-[20px] after:border-t-transparent
                  after:border-b-[20px] after:border-b-transparent
                  after:border-r-[25px] after:border-r-white
                  "
      >
        <ul className="pt-2">
          {categorieFetchate.map((cat: string) => (
            <li key={cat} className=" my-1 flex items-center">
              <div className="flex items-center bg-white p-2 rounded-[6px]">
                <input
                  type="checkbox"
                  id={`${cat}`}
                  name="category"
                  value={`${cat}`}
                  className=" w-6 h-6 appearance-none rounded-full border-2 border-gray-300 checked:bg-[#9940F8] checked:border-transparent focus:outline-none"
                  onChange={(e)=>{handleSetCategory(e.target.value, e.target.checked)}}                                 
                />
                <label className="ml-3 text-xl " htmlFor={`${cat}`}>
                  {cat}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  