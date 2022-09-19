import Course from "../../components/course/course"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/sidebar"
import { useRouter } from 'next/router'

interface Props {
    course: string;
}

const CoursePage = ({ course }: Props) => {
    const router = useRouter()
    const { pid } = router.query

    return <div className="flex max-w-6xl min-w-max text-center mx-auto w-full space-x-8  h-full p-4">
        <Course course={String(pid)} />
        <Sidebar />
    </div>

}


export default CoursePage