
import CourseList from "../components/Courses/course-list"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/sidebar"

const courses = ["UX Design", "Accounting", "Web Presense", "Data & Decisions"]

const Dashboard = () => <div className="font-nunito min-h-screen h-screen w-full bg-slate-50">
    <Header view="dashboard"/>
    <div className="flex max-w-6xl text-center mx-auto w-full space-x-8  h-full p-4">
        <CourseList />
        <Sidebar />
    </div>

</div>



export default Dashboard