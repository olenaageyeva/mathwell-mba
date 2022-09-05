import { useRouter } from 'next/router'
import Header from '../../../components/Header/Header';

interface Props {
    course: string;
}

const LessonPage = ({ course }: Props) => {
    const router = useRouter()
    const { pid, lid } = router.query

    return <div className="w-full bg-slate-50 max-h-max">
        <Header {...{ view: "lesson", course: pid, lesson: lid }} />
        <div className="flex max-w-6xl text-center mx-auto w-full space-x-8  h-full p-4">
            <div>
                <p>{pid}</p>
                <p>{lid}</p>
            </div>
        </div>

    </div>
}


export default LessonPage