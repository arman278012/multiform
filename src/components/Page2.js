import React, { useContext, useState } from 'react'
import { AppContext } from './AuthContexts'

const Page2 = () => {
  const data = []
  const { setNumber } = useContext(AppContext)
  const [secondFormData, setsecondFormData] = useState({
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    gender: "",
    highSchool: "",
    intermediate: "",
    graduation: "",
    diploma: "",
    dob: ""
  })

  if (secondFormData.streetAddress != "" && secondFormData.city != "" && secondFormData.state != "" && secondFormData.postalCode != ""
    && secondFormData.gender != "" && (secondFormData.highSchool != "" || secondFormData.intermediate != "" || secondFormData.graduation != "" ||
      secondFormData.diploma) && secondFormData.dob != "") {
    data.push(secondFormData)
    localStorage.setItem("item2", JSON.stringify(data))
    setNumber(2)
  }



  console.log(secondFormData)

  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <p className='text-[30px] font-bold text-gray-400'>Enter your Educational Details Here</p>
        <p className='text-[20px] font-bold text-gray-400'>Please fill correctly</p>
      </div>

      <div className='h-[3px] w-[60vw] bg-black mx-auto mt-7'></div>

      <div className='flex justify-center items-center mt-10'>
        <div className='flex gap-20'>
          <p className='font-bold mt-1 text-lg'>Full Address <sup>⭐</sup></p>
          <div className='flex flex-col gap-10'>
            <div className='flex gap-10'>
              <div>
                <input
                  type="text"
                  name='streetAddress'
                  value={secondFormData.streetAddress}
                  onChange={(e) => setsecondFormData(
                    {
                      ...secondFormData,
                      [e.target.name]: e.target.value
                    }
                  )}
                  className='border-[1px] border-black h-[40px]'
                />
                <p className='text-gray-400'>street Address</p>
              </div>

              <div>
                <input type="text"
                  name='city'
                  value={secondFormData.city}
                  onChange={(e) => setsecondFormData(
                    {
                      ...secondFormData,
                      [e.target.name]: e.target.value
                    }
                  )}
                  className='border-[1px] border-black h-[40px]' />
                <p className='text-gray-400'>City</p>
              </div>
            </div>

            <div className='flex gap-10'>
              <div className=''>
                <input type="text"
                  name='state'
                  value={secondFormData.state}
                  onChange={(e) => setsecondFormData(
                    {
                      ...secondFormData,
                      [e.target.name]: e.target.value
                    }
                  )}
                  className='border-[1px] border-black h-[40px]' />
                <p className='text-gray-400'>State/Province</p>
              </div>
              <div>
                <input type="text"
                  name='postalCode'
                  value={secondFormData.postalCode}
                  onChange={(e) => setsecondFormData(
                    {
                      ...secondFormData,
                      [e.target.name]: e.target.value
                    }
                  )}
                  className='border-[1px] border-black h-[40px]' />
                <p className='text-gray-400'>Postal Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-evenly mt-10'>
        <div className='flex gap-20 ml-[-99px]'>
          <p className='font-bold mt-1 text-lg'>Gender <sup>⭐</sup></p>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-5'>
              <p>Male</p>
              <input type="radio"
                value="male"
                name="gender"
                onChange={(e) => setsecondFormData(
                  {
                    ...secondFormData,
                    [e.target.name]: e.target.value
                  }
                )}
                className='w-[15px]' />
            </div>

            <div className='flex gap-5'>
              <p>Female</p>
              <input type="radio"
                value="female"
                name="gender"
                onChange={(e) => setsecondFormData(
                  {
                    ...secondFormData,
                    [e.target.name]: e.target.value
                  }
                )}
                className='w-[15px]' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-evenly mt-10 ml-[-19px]'>
        <div className='flex gap-20 ml-[-99px]'>
          <p className='font-bold mt-1 text-lg'>Qualifications <sup>⭐</sup></p>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-5'>
              <p>High School</p>
              <input type="checkbox"
                name="highSchool"
                value="highSchool"
                onChange={(e) => setsecondFormData(
                  {
                    ...secondFormData,
                    [e.target.name]: e.target.value
                  }
                )}
                className='w-[15px]' />
            </div>

            <div className='flex gap-5'>
              <p>Intermediate</p>
              <input type="checkbox"
                name='intermediate'
                value='intermediate'
                onChange={(e) => setsecondFormData(
                  {
                    ...secondFormData,
                    [e.target.name]: e.target.value
                  }
                )}
                className='w-[15px]' />
            </div>

            <div className='flex gap-5'>
              <p>Graduation</p>
              <input type="checkbox"
                name='graduation'
                value='graduation'
                onChange={(e) => setsecondFormData(
                  {
                    ...secondFormData,
                    [e.target.name]: e.target.value
                  }
                )}
                className='w-[15px]' />
            </div>

            <div className='flex gap-5'>
              <p>Diploma</p>
              <input type="checkbox"
                name='diploma'
                value='diploma'
                onChange={(e) => setsecondFormData(
                  {
                    ...secondFormData,
                    [e.target.name]: e.target.value
                  }
                )}
                className='w-[15px]' />
            </div>
          </div>
        </div>
      </div>



      <div className='flex justify-center items-center mt-10'>
        <div className='flex gap-20 ml-[8px]'>
          <p className='font-bold mt-1 text-lg'>Date of birth <sup>⭐</sup></p>
          <div className='flex gap-10'>
            <div>
              <input type="date"
                name='dob'
                value={secondFormData.dob}
                onChange={(e) => setsecondFormData(
                  {
                    ...secondFormData,
                    [e.target.name]: e.target.value
                  }
                )}
                className='border-[1px] border-black h-[40px] w-[250px]' />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2