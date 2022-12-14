import Image from 'next/image';
import videoIcon from './video-tutorials.png';
import { lessons } from "../../components/consts/courses"

interface Props {
    course: string;
    title: string;
    chapter: number;
}

const LessonCard = ({ course, title, chapter }: Props) => {
    const lesson = lessons[course as keyof typeof lessons] || null;
    const length = lesson ? lesson[chapter].content.length : 0;

    return <div className="w-full bg-slate-200 my-7 text-gray-400 text-left divide-y divide-gray-200">
        <div className="title flex w-full p-4">
            <div className='w-14 h-14 rounded-full bg-emerald-200 text-center align-middle my-auto'>
                <Image src={videoIcon} height={50} width={50} alt="lesson" />
            </div>
            <span className="w-5/6 text-xl uppercase font-nunito font-bold text-left mx-4">
                {`Chapter ${chapter + 1}.`} <br/>
                {`${title} `}
            </span>
        </div>
        <div className='px-4'>
            <div className="content">
                <p className="py-2">
                    {title}
                </p>
            </div>
            <div className="topic pb-4">
                <p className="uppercase p-1 text-xs border border-solid w-fit">
                    {course}
                </p>
            </div>
            <div className="lesson-count flex py-2 justify-between">
                <div>
                    <div className="uppercase text-xs">
                        lessons
                    </div>
                    <span className="text-4xl font-semibold text-roboto">{length}</span>
                </div>
                <div>
                    <button className='bg-emerald-500 px-12 uppercase text-xl text-slate-100 font-semibold py-2 my-auto'>start</button>
                </div>
            </div>
        </div>
    </div>
}

export default LessonCard;

