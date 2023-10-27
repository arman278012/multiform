import React, { useContext, useState } from 'react'
import { AppContext } from './AuthContexts';

const Page3 = () => {


  
  const data=[]
  const { setNumber } = useContext(AppContext)
  const [thirdFormData, setThirdFormData] = useState({
    adharCard: "",
    panCard: "",
    markSheet: "",
    termsAndConstions: "false"
  })
  if (thirdFormData.adharCard != "" && thirdFormData.panCard != "" && thirdFormData.markSheet != "" && thirdFormData.termsAndConstions != "false") {

    data.push(thirdFormData)
    localStorage.setItem("item3",JSON.stringify(data))
   
    setNumber(3)
    
  }
 
  console.log(thirdFormData);

  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center mt-10'>
        <p className='text-[30px] font-bold text-gray-400'>Verify Your documents here</p>
        <p className='text-[20px] font-bold text-gray-400'>Please fill correctly</p>
      </div>

      <div className='h-[3px] w-[60vw] bg-black mx-auto mt-7'></div>

      <div className='flex justify-center items-center flex-col gap-3'>
        <div className='flex flex-col mt-5 gap-2'>
          <p className='font-bold mt-1 text-lg'>Aadhar Card <sup>⭐</sup></p>
          <input type="file"
            className=''
            name='adharCard'
            value={thirdFormData.adharCard}
            onChange={(e) => {
              setThirdFormData(
                {
                  ...thirdFormData,
                  [e.target.name]: e.target.value
                }
              )
            }}
          />
        </div>

        <div className=' flex flex-col mt-5 gap-2 '>
          <p className='font-bold mt-1 text-lg'>Pancard <sup>⭐</sup></p>
          <input type="file"
            className=''
            name='panCard'
            value={thirdFormData.panCard}
            onChange={(e) => setThirdFormData(
              {
                ...thirdFormData,
                [e.target.name]: e.target.value
              }
            )}
          />
        </div>

        <div className=' flex flex-col mt-5 gap-2'>
          <p className='font-bold mt-1 text-lg'>Graduation Marksheet <sup>⭐</sup></p>
          <input type="file"
            className=''
            name='markSheet'
            value={thirdFormData.markSheet}
            onChange={(e) => setThirdFormData(
              {
                ...thirdFormData,
                [e.target.name]: e.target.value
              }
            )}
          />
        </div>
      </div>


      <div className='flex justify-center items-center mt-10'>
        <div className='flex gap-4'>
          <input
            type="checkbox"
            name='termsAndConstions'
            // value={thirdFormData.termsAndConstions}
            onChange={(e) => setThirdFormData(
              {
                ...thirdFormData,
                [e.target.name]: "true"
              }
            )}
          />
          <p>I have read the documents carefully and I totally agree the terms and conditions.</p>
        </div>
      </div>
    </div>
  )
}

export default Page3