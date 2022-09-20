
import CourseList from "../components/Courses/course-list"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/sidebar"
import Head from 'next/head';

const courses = ["UX Design", "Accounting", "Web Presense", "Data & Decisions"]

const Dashboard = () => <div className="flex max-w-6xl text-center mx-auto w-full space-x-8  py-4 h-fit">
    <CourseList />
    <Sidebar />
</div>

export default Dashboard