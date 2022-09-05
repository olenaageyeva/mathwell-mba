import CourseCard from "./course-card";
import { courses } from "../consts/courses";

const CourseList = () => <div className="m-4 w-2/3 bg-slate-200">
    <div className="bg-blue-400 p-4 text-md text-left font-sans font-normal">
        Great Job! Select a course to continue learning.
    </div>
    <div className="text-lg font-bold p-4 inline-flex flex-wrap w-full ">
        {courses.map((course) => <>
            <CourseCard course={course} />
        </>)

        }
    </div>
</div>

export default CourseList;