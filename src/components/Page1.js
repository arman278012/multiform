import React, { useContext, useState } from 'react'
import { AppContext } from './AuthContexts'

const Page1 = () => {
  const data = []
  const { number, setNumber, userData, setUserData } = useContext(AppContext)
  const [firstFormData, setFirstFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })
  if (firstFormData.firstName != "" && firstFormData.lastName != "" && firstFormData.email != "" && firstFormData.message != "") {
    // setUserData({...userData,firstFormData})
    data.push(firstFormData)
    localStorage.setItem("item1", JSON.stringify(data))
    setNumber(1)
  } else {
    setNumber(0)
    // alert("Please fill all the detials")
  }
  console.log(firstFormData)
  console.log(userData)
  console.log(data)
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center mt-10'>
        <p className='text-[30px] font-bold text-gray-400'>Enter your Personal Details Here</p>
        <p className='text-[20px] font-bold text-gray-400'>Please fill correctly</p>
      </div>

      <div className='h-[3px] w-[60vw] bg-black mx-auto mt-7'></div>

      <form action="">
        <div className='flex justify-center items-center mt-10'>
          <div className='flex gap-20'>
            <p className='font-bold mt-1 text-lg'>Full name <sup>⭐</sup></p>
            <div className='flex gap-10'>
              <div>
                <input type="text"
                  className='border-[1px] border-black h-[40px]'
                  name='firstName'
                  value={firstFormData.firstName}
                  onChange={(e) => setFirstFormData(
                    {
                      ...firstFormData,
                      [e.target.name]: e.target.value
                    }
                  )}
                />
                <p className='text-gray-400'>First</p>
              </div>

              <div>
                <input type="text"
                  className='border-[1px] border-black h-[40px]'
                  name='lastName'
                  value={firstFormData.lastName}
                  onChange={(e) => setFirstFormData(
                    {
                      ...firstFormData,
                      [e.target.name]: e.target.value
                    }
                  )}
                />
                <p className='text-gray-400'>Last</p>
              </div>

            </div>
          </div>
        </div>

        <div className='flex justify-center items-center mt-10'>
          <div className='flex gap-20 ml-[-99px]'>
            <p className='font-bold mt-1 text-lg'>Email <sup>⭐</sup></p>
            <div className='flex gap-10'>
              <div>
                <input type="text"
                  className='border-[1px] border-black h-[40px] w-[300px]'
                  name='email'
                  value={firstFormData.email}
                  onChange={(e) => setFirstFormData(
                    {
                      ...firstFormData,
                      [e.target.name]: e.target.value
                    }
                  )}
                />
              </div>

            </div>
          </div>
        </div>

        <div className='flex justify-center items-center mt-10'>
          <div className='flex gap-20 ml-[-102px]'>
            <p className='font-bold mt-1 text-lg'>Phone <sup>⭐</sup></p>
            <div className='flex gap-10'>
              <div>
                <input type="number"
                  className='border-[1px] border-black h-[40px] w-[300px]'
                  name='phone'
                  value={firstFormData.phone}
                  onChange={(e) => setFirstFormData(
                    {
                      ...firstFormData,
                      [e.target.name]: e.target.value
                    }
                  )}
                />
              </div>

            </div>
          </div>
        </div>

        <div className='flex justify-center items-center mt-10'>
          <div className='flex gap-20 ml-[-72px]'>
            <p className='font-bold mt-1 text-lg'>Message <sup>⭐</sup></p>
            <div className='flex gap-10'>
              <div>
                <input type="text"
                  className='border-[1px] border-black h-[80px] w-[350px]'
                  name='message'
                  value={firstFormData.message}
                  onChange={(e) => setFirstFormData(
                    {
                      ...firstFormData,
                      [e.target.name]: e.target.value
                    }
                  )}
                />
              </div>

            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Page1