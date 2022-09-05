import Image from 'next/image'
import checkmark from "./correct.png"
import checkbox from "./square.png"

const cardStyle = { className: "bg-slate-200 p-4  text-slate-600" };
const Sidebar = () => <div className="m-4 w-1/3 space-y-4">
    <div className="bg-blue-600 text-slate-300 uppercase p-8">
        <p className="font-normal text-lg">Status</p>
        <p className="text-3xl font-bold">On Track</p>
        <div className='my-4'><Image src={checkmark} /></div>
        <p className="font-normal text-lg normal-case">Keep up the good work!</p>
    </div>
    <div className="divide-y divide-gray-400 bg-slate-200 p-4  text-slate-600">
        <div className='p-4'>
            <p className="text-2xl font-medium">Week 19</p>
            <p>September 5- September 12</p>
        </div>
        <div className='py-4 text-left'>
            <p className="text-lg font-medium text-center py-2">Recommended Courses</p>
            <p className='text-red-400 uppercase font-semibold text-left'><Image src={checkbox} width={15} height={15} />
                <span className='text-red-400 uppercase font-semibold text-left px-2'>Characteristics of good UX </span>
            </p>
            <p className='text-red-400 uppercase font-semibold text-left'><Image src={checkbox} width={15} height={15} />
                <span className='text-red-400 uppercase font-semibold text-left px-2'>Product Development Life Cycle </span>
            </p>
            <div className='text-center my-4'>
                <button className="text-center rounded-md border-2 border-slate-400 py-1 px-4">View Full Schedule</button>
            </div>
        </div>
    </div>
    <div {...cardStyle}>
        Events
    </div>
</div >

export default Sidebar