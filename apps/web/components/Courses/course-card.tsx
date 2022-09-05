import CourseIcon from "./course_icon";
import Link from "next/link";

interface Props {
    course: { title: string, id: string };
}

const CourseCard = ({ course }: Props) => <Link href={`/course/${course.id}`} >
    <div className="max-w-44 w-48 text-center drop-shadow-md hover:drop-shadow-xl border-teal-400 p-2 mx-4 my-8">
        <CourseIcon />
        <h3 className="text-lg uppercase text-center font-medium">{course.title}</h3>
    </div>
</Link >

export default CourseCard