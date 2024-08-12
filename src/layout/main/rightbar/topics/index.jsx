import Topic from "~/layout/main/rightbar/topics/topic/index.jsx";
import {topics} from "../../../../../utils/utils.consts.jsx";
import SidebarSection from "~/components/sidebar-section/index.jsx";

export default function Topics(){
    return(
        <SidebarSection
            title="İlgini çekebilecek gündemler"
            more="/trens"
        >
            {topics.map((topic,index)=> <Topic item={topic} key={index}/>)}
        </SidebarSection>
    )
}