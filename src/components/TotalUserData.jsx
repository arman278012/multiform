import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'

const TotalUserData = () => {

    const imagePath = require('../components/images/FOTO.jpeg');
    const imagePath2 = require('../components/images/sujeet adhar.jpeg');
    const imagePath3 = require('../components/images/voter foto.jpeg');
    const data1 = JSON.parse(localStorage.getItem("item1"))
    const data2 = JSON.parse(localStorage.getItem("item2"))
    const data3 = JSON.parse(localStorage.getItem("item3"))
    return (
        <div>
            {
                data1?.map((element) => {
                    return (
                        <div className='flex justify-center items-center flex-col mt-10'>
                            <div className=' thumbs-up'>
                                <FaThumbsUp className='w-[60px] h-[60px]'></FaThumbsUp>
                            </div>
                            <p className='text-[40px] font-bold text-gray-400'>The user data</p>

                            <div className='flex flex-col gap-5'>
                                <p >Name of the User is: <span className='font-bold text-lg text-blue-700'> {element.firstName}  {element.lastName}</span> </p>
                                <p>Email address of the user: <span className='font-bold text-lg text-blue-700'> {element.email}</span> </p>
                                <p>Phone number of the user:  <span className='font-bold text-lg text-blue-700'>{element.phone}</span> </p>
                                <p>Message from the user:  <span className='font-bold text-lg text-blue-700'>{element.message}</span> </p>
                            </div>

                        </div>

                    )

                })
            }


            <div className='flex justify-center items-center flex-col p-10 mt-5 ml-10'>
                {
                    data2?.map((element) => {
                        return (
                            <div>
                                <div className='flex gap-3'>
                                    <p>Full address of the user</p>
                                    <p className='font-bold text-lg text-blue-700'>{element.streetAddress}, {element.city}, {element.state}, {element.postalCode}</p>
                                </div>
                                <p>Gender of the User: <span className='font-bold text-lg text-blue-700'>{element.gender}</span> </p>
                                <p>Qualification of the User is: <span className='font-bold text-lg text-blue-700'>{element.highSchool} {element.intermediate} {element.doploma} {element.graduation}</span> </p>
                                <p>DOB: <span className='font-bold text-lg text-blue-700'>{element.dob}</span></p>
                            </div>
                        )
                    })
                }
            </div>
            {/* C:\Users\aa278\Desktop\stepForm\multiform\public\FOTO.jpeg */}
            <div>
                {
                    data3.map((element) => {
                        return (
                            <div>
                                <div className='flex justify-center items-center gap-5 mt-5'>
                                    {
                                        element.adharCard == "C:\\fakepath\\FOTO.jpeg" ? (<div>
                                            <img src={imagePath} alt="Adhar-Image" className='h-[80px] w-[80px]' />
                                        </div>) : (<></>)
                                    }

                                    {
                                        element.panCard = "C:\\fakepath\\sujeet adhar.jpeg" ? (<div>
                                            <img src={imagePath2} alt="pancard" className='h-[80px] w-[80px]' />
                                        </div>) : (<></>)
                                    }

                                    {
                                        element.markSheet == "C:\\fakepath\\voter foto.jpeg" ? (<div>
                                            <img src={imagePath3} alt="marksheet" className='h-[80px] w-[80px]' />
                                        </div>) : (<></>)
                                    }
                                </div>
                            </div>


                        )
                    })
                }
            </div>









        </div>
    )
}

export default TotalUserData