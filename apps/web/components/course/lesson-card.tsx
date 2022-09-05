import Image from 'next/image';
import videoIcon from './video-tutorials.png';

interface Props {
    course: string;
    title: string;
    chapter: number;
}

const LessonCard = ({ course, title, chapter }: Props) => <div className="w-full bg-white my-7 text-gray-400 text-left divide-y divide-gray-200">
    <div className="title flex w-full p-4">
        <div className='w-14 h-14 rounded-full bg-emerald-200 text-center align-middle my-auto'>
            <Image src={videoIcon} height={50} width={50} />
        </div>
        <span className="w-5/6 text-xl uppercase font-nunito font-bold text-left mx-4">
            {`Chapter ${chapter + 1}. ${title} `}
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
                <span className="text-5xl font-semibold">11</span>
            </div>
            <div>
            <button className='bg-emerald-500 px-12 uppercase text-xl text-slate-100 font-semibold py-2 my-auto'>start</button>
        </div>
        </div>
    </div>
</div>

export default LessonCard;

