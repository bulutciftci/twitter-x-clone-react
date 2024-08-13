import StickyHeader from "~/components/sticky-header/index.jsx";
import Tab from "~/components/tab/index.jsx";
import ForYou from "~/pages/home/for-you/index.jsx";

export default function Home() {
    return(
        <>
            <Tab activeTab="for-you">
                <StickyHeader title="Anasayfa">
                <Tab.Items>
                   <Tab.Item id="for-you">
                       Sana özel
                   </Tab.Item>
                   <Tab.Item id="followings">
                       Takip ettiklerin
                   </Tab.Item>
               </Tab.Items>
                </StickyHeader>
                <Tab.Content id="for-you">
                    <ForYou/>
                </Tab.Content>
                <Tab.Content id="followings">
                    2. content
                </Tab.Content>
            </Tab>
            home component

        </>
    )
}