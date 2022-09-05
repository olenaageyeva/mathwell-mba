import Image from 'next/image';
import Link from 'next/link';
import books from "./books.png"

interface Props {
    title: string;
    course: string;
}

const CourseHeader = ({ course, title }: Props) => <div className="w-full p-6 text-left bg-green-200 divide-y divide-gray-400"> {/*coure*/}
    <div>
        <div className="w-full px-7 text-left flex">
            <div className='rounded-full bg-slate-50 text-center align-middle w-1/6 my-auto'>
                <Image src={books} height={80} width={80} />
            </div>
            <span className="my-auto text-5xl uppercase font-nunito font-bold text-green-600 p-8 w-5/6">{title}</span>
        </div>
        <p className='px-7'>Knowing your customers in advance helps to create right product.</p>
    </div>
    <div className='pt-6 flex justify-between'>
        <div>
            <p className='text-green-600 uppercase '>Current Chapter</p>
            <p className='text-green-600 uppercase text-xl'>NEXT UP: Next Chapter</p>
        </div>
        <Link href={`/course/${course}/abc`}>
            <button className='bg-emerald-500 px-12 uppercase text-xl text-slate-100 font-semibold py-2 my-auto'>start</button>
        </Link>
    </div>
</div>

export default CourseHeader