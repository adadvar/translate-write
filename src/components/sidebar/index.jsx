import React from 'react'
import Item from './item'
import { BsPencilSquare, BsTranslate } from "react-icons/bs";
import { TRANSLATE_PAGE, WRITE_PAGE } from '../../utils';
const Sidebar = () => {
  return (
    <div className='min-h-full w-1/5 bg-slate-200 px-4 py-5'>
      <h1 className='text-2xl font-bold mb-10'>Nerd Studio</h1>
      <div className="flex flex-col space-y-7">
        <Item icon={<BsTranslate/>} title={'Translate'} p={TRANSLATE_PAGE}/>
        <Item icon={<BsPencilSquare/>} title={'Write'} p={WRITE_PAGE}/>
      </div>
    </div>
  )
}

export default Sidebar