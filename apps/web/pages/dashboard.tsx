import Header from "../components/Header/Header"

const Dashboard =()=>    <div className="min-h-screen h-screen w-full">
<Header />
<div className="w-full h-full bg-stone-200 p-7 flex-col">{/*main*/}
  <div className="w-full bg-white p-7"> {/*coure*/}
    <span className="text-xl uppercase font-nunito font-bold text-gray-400">Markets and Economies</span>
  </div>
  <div className="flex">
    <div className="p-7">Hello</div>
    <div className="flex-col w-full">
      <div className="w-full bg-white p-7 my-7 text-gray-400">
        <div className="title flex">
          <div className="w-12">
            <img className="w-fit"></img>
          </div>
          <span className="text-xl uppercase font-nunito font-bold ">
            Chapter
          </span>
        </div>
        <div className="content">
          <p className="m-2">
            Some random text
          </p>
        </div>
        <div className="topic">
          <p className="uppercase p-1 text-xs border border-solid w-fit">
            Economics
          </p>
        </div>
        <div className="lesson-count flex-col">
          <div className="uppercase text-xs my-2">
            lessons
          </div>
          <span className="text-5xl font-semibold">11</span>
        </div>
      </div>
      <div className="w-full bg-white p-7 my-7">
        <span className="text-xl uppercase font-nunito font-bold text-gray-400">Chapter</span>
      </div>
      <div className="w-full bg-white p-7 my-7">
        <span className="text-xl uppercase font-nunito font-bold text-gray-400">Chapter</span>
      </div>
    </div>
  </div>
</div>
</div>


export default Dashboard