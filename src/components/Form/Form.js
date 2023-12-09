import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import Modal from './Modal'

import { Rating } from 'react-simple-star-rating'

import { RiEmpathizeFill } from "react-icons/ri";
import { RiEmpathizeLine } from "react-icons/ri";

import { TbBulbFilled } from "react-icons/tb";
import { TbBulb } from "react-icons/tb";

import { PiMountains } from "react-icons/pi";
import { PiMountainsFill } from "react-icons/pi";
import axios from 'axios';

function Form() {
  const [open, setOpen] = useState(false)

  const [ratingOne, setRatingOne] = useState(0)
  const [ratingTwo, setRatingTwo] = useState(0)
  const [ratingThree, setRatingThree] = useState(0)

  const [bookDetail, setBookDetail] = useState([])

  const data = {"ans1":ratingOne, "ans2":ratingTwo, "ans3":ratingThree}

  const handleRatingOne = (rate) => {
    setRatingOne(rate)
  }

  const handleRatingTwo = (rate) => {
    setRatingTwo(rate)
  }

  const handleRatingThree = (rate) => {
    setRatingThree(rate)
  }
  
  const fetchData = () => {
    setOpen(true)
    axios
    .post("http://localhost:3000/rate-book", data)
    .then( async(res) => {
        setBookDetail(res.data.matched_books)
    });
  }

  // Optinal callback functions
//   const onPointerEnter = () => console.log('Enter')
//   const onPointerLeave = () => console.log('Leave')
//   const onPointerMove = (value, index) => console.log(value, index)

  console.log("vales", ratingOne, ratingTwo, ratingThree);
  console.log("hello",bookDetail);

  return (
        <div className='md:w-2/3 lg:w-3/6 w-[22rem] h-[38rem] flex items-center justify-center bg-white rounded-2xl'>
            <Fade>
                <div className='text-xs lg:text-lg w-[20rem] h-[35rem] lg:w-[35rem] p-2 lg:p-0'>
                    <div className='flex flex-col gap-y-10'>
                    <div className='mt-0 lg:mt-6 font-bold'>On a scale of 1 to 5 answer the following questions:</div>
                    <div>
                        <label class="block">
                            <span className="block text-sm lg:text-xl font-medium text-slate-700 mb-4"><Fade direction='left' delay={400} duration={500}>
                                How open are you to trying new things, ideas, or experiences?</Fade></span>
                                <Fade delay={600}>
                                    <Rating transition
                                            size={45}
                                            fillIcon={<RiEmpathizeFill size={45}/>}
                                            emptyIcon={<RiEmpathizeLine size={45}/>} 
                                            fillColorArray={['#EB7B7B', '#DA6767', '#C95353', '#B83E3E', '#A72A2A']} 
                                            onClick={handleRatingOne}                            
                                            />
                                </Fade>
                        </label>
                    </div>
                    <div>
                        <label class="block">
                            <span className="block text-sm lg:text-xl font-medium text-slate-700 mb-4"><Fade direction='left' delay={400} duration={500}>
                            How optimistic and positive are you about the future?
                            </Fade></span>
                            <Fade delay={600}>
                                <Rating transition
                                    size={45}
                                    fillIcon={<TbBulbFilled size={45}/>}
                                    emptyIcon={<TbBulb size={45}/>} 
                                    fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']} 
                                    onClick={handleRatingTwo}
                                    /></Fade>
                        </label>
                    </div>
                    <div>
                        <label class="block">
                            <span className="block text-sm lg:text-xl font-medium text-slate-700 mb-4"><Fade direction='left' delay={400} duration={500}>
                            How much do you enjoy taking risks and seeking out new adventures?
                            </Fade></span>
                            <Fade delay={600}>
                            <Rating transition
                                    size={45}
                                    fillIcon={<PiMountainsFill size={45}/>}
                                    emptyIcon={<PiMountains size={45}/>} 
                                    fillColorArray={['#ACD38F', '#94C075', '#7CAD5C', '#639A42', '#4B8728']} 
                                    onClick={handleRatingThree}
                                    />
                            </Fade>
                        </label>
                    </div>
                    <Fade direction='up' delay={1500}><button onClick={() => fetchData()} className="btn btn-primary">
                        Submit
                    </button></Fade>
                    </div>
                </div>
            </Fade>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="columns-2 md:columns-3 space- text-center w-60 sm:w-80 md:w-[40rem] lg:w-[50rem]">
                {bookDetail?.map((book)=>{
                    return(
                        <div key={book.index} className="w:24 sm:w-32 md:w-48 md:h-[28rem] rounded overflow-hidden shadow-lg mx-4 mb-4">
                        <img className="w-32 md:w-48 h-62 md:h-68" src={book.img_link} alt={book.book}/>
                        <div className="px-4 py-2 h-[6rem] md:h-[18 rem]">
                            <div className="font-semibold md:font-bold md:text-xl text-[.6rem] sm:text-xs mb-2">{book.book}</div>
                            <p className="text-gray-700 text-[.5rem] sm:text-xs md:text-lg">{book.author}</p>
                        </div>
                        </div>
                    )
                })}
                {/* <Trash size={56} className="mx-auto text-red-500" /> */}
                {/* <div className="mx-auto my-4 w-48">
                    <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
                    <p className="text-sm text-gray-500">
                    Are you sure you want to delete this item?
                    </p>
                </div> */}
                {/* <div className="flex gap-4">
                    <button className="btn btn-danger w-full">Delete</button>
                    <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen(false)}
                    >
                    Cancel
                    </button>
                </div> */}
                </div>
            </Modal>
        </div>
  )
}

export default Form