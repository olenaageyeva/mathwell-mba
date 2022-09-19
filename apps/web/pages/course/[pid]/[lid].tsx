import { useRouter } from 'next/router'
import Header from '../../../components/Header/Header';
import { lessons } from "../../../components/consts/courses"
import Image from 'next/image';
import steve from "./steve-harvey.png"
import Link from 'next/link';
import { selectProgressState, setProgressState } from "../../../store/progressSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import Overview from '../../../components/overview/overview';
import Summary from '../../../components/summary/summary';

interface Props {
    index: number;
}

const LessonPage = () => {
    const router = useRouter()
    const { pid, lid, index } = router.query
    const lesson = lessons[pid as keyof typeof lessons] || null;
    const lessonNumber = Number(lid) - 1;
    const length = lesson ? lesson[lessonNumber].content.length : 0;
    const isLastPage = Number(index) === length || false;
    const image = !isLastPage && lesson && lesson[lessonNumber].content[Number(index) || 0].image || "";
    const text = !isLastPage && lesson ? lesson[lessonNumber].content[Number(index) || 0].text : [];

    const progress = useSelector(selectProgressState);
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(0);
    const [overviewShown, setOverviewShown] = useState(false);

    console.log("overview", overviewShown)

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
    }, [index, progress, dispatch, progress.length])

    const handleClick = (back: boolean) => {
        const idx = Number(index) || 0;
        const isBack = back && idx > 0;
        const isForward = !isLastPage;
        setCurrent(isBack ? idx - 1 : isForward ? idx + 1 : idx);
        console.log("back", back, current, index)
    }

    const isTopText = text.find(item=>item.place==="top")

    return <div className="w-full bg-slate-50 h-screen">
        {/* <Header {...{ view: "lesson", course: String(pid), lesson: lid, current }} /> */}
        {overviewShown || Number(index) ?
            !isLastPage ?
                <div className="flex-col justify-items-end h-full w-full h-5/6 pt-8 ">

                    <div className="w-full h-4/5">
                        {isTopText &&<div className='w-full text-2xl p-4 h-1/6'>
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
                        </div>}
                        <div className='w-1/2 h-2/3 mx-auto mb-12 relative'>
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
                    <div className='flex justify-items-end h-1/5  w-full  justify-between'>
                        <Link href={`/course/${pid}/${lid}?index=${Number(index) > 0 ? Number(index) - 1 : 0}`}>
                            <button onClick={() => handleClick(true)} className='text-xl font-nunito font-normal text-emerald-600 px-12 py-4 m-4 self-end bg-emerald-100 uppercase'>previous</button>
                        </Link>
                        <Link href={`/course/${pid}/${lid}?index=${isLastPage ? index : index ? Number(index) + 1 : 1}`}>
                            <button onClick={() => handleClick(false)} className='text-xl font-nunito font-normal text-slate-100 px-12 py-4 m-4 self-end bg-emerald-600 uppercase'>next</button>
                        </Link>
                    </div>


                </div> :
                <Summary  {...{ course: String(pid), lesson: Number(lid), done: () => { } }} />
            : <Overview  {...{ course: String(pid), lesson: Number(lid), done: () => setOverviewShown(true) }} />}
    </div>
}


export default LessonPage