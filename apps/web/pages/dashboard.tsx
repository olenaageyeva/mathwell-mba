
import CourseList from "../components/Courses/course-list"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/sidebar"
import Head from 'next/head';

const courses = ["UX Design", "Accounting", "Web Presense", "Data & Decisions"]

const Dashboard = () => <>
    <Head>
        <link rel="shortcut icon" href="../public/favicon.ico" />
    </Head>
    <div className="font-nunito min-h-screen h-screen w-full bg-slate-50">
        <Header view="dashboard" />
        <div className="flex max-w-6xl text-center mx-auto w-full space-x-8  h-full p-4">
            <CourseList />
            <Sidebar />
        </div>

</div>

</>



export default Dashboard