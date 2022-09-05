import Image from 'next/image'
import track from "./track.png"

const CourseIcon = () => <div className ="inline-flex w-50 h-50 rounded-full bg-green-400">
    <Image src={track} width="100" height={100} alt="course"/>
</div>


export default CourseIcon;