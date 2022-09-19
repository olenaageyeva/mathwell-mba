
import CourseList from "../components/Courses/course-list"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/sidebar"
import Head from 'next/head';

const Profile = () =>
    <div className="font-nunito min-h-screen h-screen w-full bg-slate-50">
        <Header view="profile" />
        <div className="flex text-center w-full h-full justify-start bg-slate-200">
            <div className="bg-slate-100 p-4  text-slate-600 w-60">Sidebar</div>
            <div className="p-4  text-slate-600 grow p-12">
                <div className="max-w-3xl mx-auto bg-slate-100 h-full rounded-lg divide-y divide-gray-400">
                    <div className="p-8 text-2xl">Account</div>
                    <div className="p-8 text-2xl">Photo</div>
                    <div className="p-8 text-2xl">Basic Info</div>
                    <div className="p-8 text-2xl">Payment Info</div>
                </div>
            </div>
        </div>

    </div>

export default Profile