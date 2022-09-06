import { useRouter } from 'next/router'
import Header from '../../../components/Header/Header';
import { lessons } from "../../../components/consts/courses"
import Image from 'next/image';
import steve from "./steve-harvey.png"
import Link from 'next/link';
import { selectProgressState, setProgressState } from "../../../store/progressSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

interface Props {
    index: number;
}

const LessonPage = () => {
    const router = useRouter()
    const { pid, lid, index } = router.query
    const lesson = lessons[pid as keyof typeof lessons] || null;
    const image = lesson && lesson[0].content[Number(index) || 0].image || "";
    const text = lesson ? lesson[0].content[Number(index) || 0].text : [];
    const length = lesson ? lesson[0].content.length : 0;
    const isLastPage = Number(index) + 1 === length || false;
    const progress = useSelector(selectProgressState);
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (progress.length) {
            switch (progress[Number(index)]) {
                case 0: {
                    const newProgress = [...progress];
                    newProgress[Number(index)] = 1;
                    dispatch(setProgressState(newProgress));
                    break;
                };
            }
        } else {
            const newProgress = Array(length).fill(0);
            newProgress[0] = 1;
            dispatch(setProgressState(newProgress))
        }
    }, [index, progress])

    const handleClick = (back: boolean) => {
        const idx = Number(index) || 0;
        const isBack = back && idx > 0;
        const isForward = !isLastPage;
        setCurrent(isBack ? idx - 1 : isForward ? idx + 1 : idx);
        console.log("back", back, current, index)
    }

    return <div className="w-full bg-slate-50 h-screen">
        <Header {...{ view: "lesson", course: String(pid), lesson: lid, current }} />
        <div className="flex justify-items-end h-full p-20 w-full  justify-between">
            <Link href={`/course/${pid}/${lid}?index=${Number(index) > 0 ? Number(index) - 1 : 0}`}>
                <button onClick={() => handleClick(true)} className='text-xl font-nunito font-normal text-emerald-600 px-12 py-4 m-4 self-end bg-emerald-100 uppercase'>previous</button>
            </Link>
            <div className="max-w-6xl w-full h-full">
                <div className='w-full text-2xl p-4'>
                    {text?.map(item => {
                        if (item.place === "top") {
                            switch (item.type) {
                                case "plain": return (<span className=''>{item.text}</span>)
                                case "list": return (<ul className='list-disc list-inside w-fit text-left'>
                                    {Array.isArray(item.text) && item.text.map((element: string) => <li>{element}</li>)}
                                </ul>)
                                case "paragraph": return (<p className=''>{item.text}</p>)
                            }
                        }
                    }
                    )}
                </div>
                <div className='w-1/3 h-1/3 mx-auto mb-12 relative'>
                    <Image src={`${image}`} layout="fill" objectFit='contain' alt="image" />
                </div>
                <div className='w-full text-2xl p-4'>
                    {text?.map(item => {
                        if (!item.place) {
                            switch (item.type) {
                                case "plain": return (<span className=''>{item.text}</span>)
                                case "list": return (<ul className='list-disc list-inside w-fit mx-auto'>
                                    {Array.isArray(item.text) && item.text.map((element: string) => <li className=''>{element}</li>)}
                                </ul>)
                                case "paragraph":
                                case "center":
                                    return (<p className='text-center'>{item.text}</p>)
                            }
                        }
                    }
                    )}
                </div>
            </div>
            <Link href={`/course/${pid}/${lid}?index=${isLastPage ? index : index ? Number(index) + 1 : 1}`}>
                <button onClick={() => handleClick(false)} className='text-xl font-nunito font-normal text-slate-100 px-12 py-4 m-4 self-end bg-emerald-600 uppercase'>next</button>
            </Link>
        </div>
    </div>
}


export default LessonPage