import Image from "next/image";
import { courses, ILesson, ILessons, lessons } from "../consts/courses"
import CourseHeader from './course-header';
import LessonCard from './lesson-card';
import hexCheck from "./hex-check.png"

interface Props {
    course: string;
}

const Course = ({ course }: Props) => {
    const title = courses.find((item) => item.id === course)?.title || "";
    const lessonList = lessons[course as keyof typeof lessons] || [];

    return <div className="m-4 w-2/3">{/*main*/}

        <CourseHeader {...{ course, title }} />

        <div className="flex min-w-max">
            <div className="w-1/4 flex flex-col justify-around">
                {lessonList.map((item: ILesson, index: number) =>
                    <>
                        <div className="relative">
                            <div className='rounded-full h-12 w-12 bg-red-400 text-slate-100 leading-10 mx-auto font-medium text-lg                           
                     
                        '>{index + 1}
                                <div className="absolute bottom-3 left-20">
                                    <Image src={hexCheck} width={20} height={20} />
                                </div>
                            </div>
                            {
                                index !== lessonList.length - 1
                                && <div className="bg-red-400 absolute h-64 w-1 top-12 left-1/2"></div>
                            }
                    </div>

                    </>
                )}
            </div>
            <div className="flex-col w-full h-fit">
                {lessonList.map((item: ILesson, index: number) =>
                    <LessonCard {...{ course, title: item.title, chapter: index }} />
                )}
            </div>
        </div>
    </div>
}

export default Course;