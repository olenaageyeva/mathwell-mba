import Image from 'next/image';
import { useRouter } from 'next/router'
import { courses, lessons } from "../consts/courses"
import books from "./books.png"

interface Props {
    course: string;
}

const Course = ({ course }: Props) => {
    const title = courses.find((item) => item.id === course)?.title;
    const lessonList = lessons[course] || []

    console.log("************************", lessonList)

    return <div className="m-4 w-2/3 bg-slate-200">{/*main*/}

        <div className="w-full p-6 text-left bg-green-200 divide-y divide-gray-400"> {/*coure*/}
            <div>
                <div className="w-full px-7 text-left flex">
                    <div className='rounded-full w-24 h-24 bg-slate-50 text-center align-middle'>
                        <Image src={books} height={80} width={80} />
                    </div>
                    <span className="my-auto text-5xl uppercase font-nunito font-bold text-green-600 p-8">{title}</span>
                </div>
                <p className='px-7'>Knowing your customers in advance helps to create right product.</p>
            </div>
            <div className='pt-6 flex justify-between'>
                <div>
                    <p className='text-green-600 uppercase '>Current Chapter</p>
                    <p className='text-green-600 uppercase text-xl'>NEXT UP: Next Chapter</p>
                </div>
                <div>
                    <button className='bg-emerald-500 px-12 uppercase text-xl text-slate-100 font-semibold py-2 my-auto'>start</button>
                </div>
            </div>
        </div>

        <div className="flex ">
            <div className="w-1/4 flex flex-col justify-around">
                {lessonList.map((item, index) =>
                    <div className='rounded-full h-12 w-12 bg-red-400 text-slate-100 leading-10 mx-auto font-medium text-lg'>{index + 1}</div>)
                }
            </div>
            <div className="flex-col w-full h-fit px-2">
                {lessonList.map((item, index) =>
                    <div className="w-full bg-white p-7 my-7 text-gray-400">
                        <div className="title flex">
                            <div className="w-12">
                                <img className="w-fit"></img>
                            </div>
                            <span className="text-xl uppercase font-nunito font-bold ">
                                Chapter {index + 1}
                            </span>
                        </div>
                        <div className="content">
                            <p className="m-2">
                                {item}
                            </p>
                        </div>
                        <div className="topic">
                            <p className="uppercase p-1 text-xs border border-solid w-fit">
                                {course}
                            </p>
                        </div>
                        <div className="lesson-count flex-col">
                            <div className="uppercase text-xs my-2">
                                lessons
                            </div>
                            <span className="text-5xl font-semibold">11</span>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
}

export default Course;