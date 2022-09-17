import { lessons } from "../consts/courses"
import Image from "next/image";
import hexCheck from "./hex-check.png"
import Link from "next/link";

interface Props {
    course: string | null;
    lesson: number | null;
    done: Function;
}

const Overview = ({ course = null, lesson = null, done = () => { } }: Props) => {
    const courseContent = lessons && course && lessons[course as keyof typeof lessons] || [];
    const lessonContent = lesson && courseContent[lesson - 1] || null;
    const title = lessonContent?.title || "";
    const overview = lessonContent?.overview || [];

    console.log("Overview", lesson, title, overview, courseContent, lessonContent)

    return <div className="flex flex-col max-w-lg text-roboto text-center mx-auto w-full h-full p-8  pb-32 justify-between">
        <div className="w-full transition-all animate-slidedown">
            <h3 className="text-2xl uppercase font-nunito font-bold text-green-600 my-2 delay-100 animate-fadein">{title}</h3>
            <p className="text-md uppercase font-nunito text-slate-400 my-2 delay-500 animate-fadein">What you'll learn in this lesson</p>
            <div className="my-8 delay-1000 animate-slidedown">
                {
                    overview.map(item =>
                        <div className="flex w-full transition-all delay-1000 duration-1000 translate-y-6">
                            <div className="pt-2 px-2">
                                <Image src={hexCheck} width={30} height={30} />
                            </div>
                            <span className="my-auto tracking-wider text-md">{item}</span>
                        </div>
                    )
                }
            </div>
        </div>
        <button className='bg-emerald-500 px-12 uppercase text-xl text-slate-100 font-semibold py-2' onClick={() => done()}>Get Started</button>
    </div>
}

export default Overview