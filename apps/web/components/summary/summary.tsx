import Image from "next/image";
import Link from "next/link";
import { lessons } from "../consts/courses"
import medal from "./medal.png"
import like from "./thumbs-down.png"
import dislike from "./dislike.png"


interface Props {
    course: string | null;
    lesson: number | null;
    done: Function;
}

const Summary = ({ course = null, lesson = null, done = () => { } }: Props) => {
    const courseContent = lessons && course && lessons[course as keyof typeof lessons] || [];
    const lessonContent = lesson && courseContent[lesson - 1] || null;
    const title = lessonContent?.title || "";
    const overview = lessonContent?.keyTerms || [];

    console.log("Overview", lesson, title, overview, courseContent, lessonContent)

    return <div className="pattern-dots pattern-slate-100 pattern-bg-slate-200 pattern-opacity-100 pattern-size-4 h-full p-12">
        <div className="flex flex-col max-w-md text-roboto text-center mx-auto w-full h-fit p-8  bg-slate-100 divide-y divide-gray-400">
            <div className="w-full font-nunito animate-slidedown">
                <div>
                    <Image src={medal} />
                </div>
                <h3 className="text-2xl uppercase  font-bold text-green-600 my-2 delay-100 animate-fadein">{title}</h3>
                <p className="text-md uppercase  text-slate-400 my-2 delay-500 animate-fadein">Key terms</p>
            </div>
            <div>
                <div className="my-8 animate-slidedown">
                    {
                        overview.map(item =>
                            <span className="my-auto tracking-wider text-md transition-all delay-1000 duration-1000 translate-y-6">{item}</span>
                        )
                    }
                </div>
                <div className="flex justify-center">
                    <span className="text-slate-400 my-auto">Give feedback on this lesson</span>
                    <div className="flex my-auto px-2 space-x-1">
                        <div className="w-8 h-8 layout='fill' my-auto">
                            <Image src={like}  />
                        </div>
                        <div className="w-7 h-7 layout='fill' my-auto">
                            <Image src={dislike} />
                        </div>
                    </div>
                </div>
                <Link href={`/course/${course}`}>
                    <div className='bg-emerald-500 px-4 uppercase text-slate-100 py-2 h-fit font-nunito mt-8' onClick={() => done()}>
                        <p className="text-xxs  tracking-wider">Next Lesson</p>
                        <span className="text-md font-semibold">{title}</span>
                    </div>
                </Link>

            </div>

        </div>
    </div>
}

export default Summary