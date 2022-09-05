import { courses, lessons } from "../consts/courses"
import CourseHeader from './course-header';
import LessonCard from './lesson-card';

interface Props {
    course: string;
}

const Course = ({ course }: Props) => {
    const title = courses.find((item) => item.id === course)?.title || "";
    const lessonList = lessons[course as keyof typeof lessons] || [];

    return <div className="m-4 w-2/3 bg-slate-200">{/*main*/}

        <CourseHeader {...{ course, title }} />

        <div className="flex ">
            <div className="w-1/4 flex flex-col justify-around">
                {lessonList.map((item: string, index: number) =>
                    <div className='rounded-full h-12 w-12 bg-red-400 text-slate-100 leading-10 mx-auto font-medium text-lg'>{index + 1}</div>)
                }
            </div>
            <div className="flex-col w-full h-fit px-2">
                {lessonList.map((item: string, index: number) =>
                    <LessonCard {...{ course, title: item, chapter: index }} />
                )}
            </div>
        </div>
    </div>
}

export default Course;