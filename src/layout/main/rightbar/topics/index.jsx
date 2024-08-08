import Topic from "~/layout/main/rightbar/topics/topic/index.jsx";
import {topics} from "../../../../../utils/utils.consts.jsx";

export default function Topics(){
    return(
        <section className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c]">
            <h5 className="py-3 px-4 text-xl font-extrabold text-[#e7e9ea]  leading-6items-center ">İlgini çekebilecek gündemler</h5>
            <div className="grid">
                {topics.map((topic,index)=> <Topic item={topic} key={index}/>)}
            </div>
        </section>
    )
}