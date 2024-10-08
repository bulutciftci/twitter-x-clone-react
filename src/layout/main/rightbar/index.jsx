import Search from "~/layout/main/rightbar/search/index.jsx";
import Premium from "~/layout/main/rightbar/premium/index.jsx";
import Topics from "~/layout/main/rightbar/topics/index.jsx";
import WhoFollow from "~/layout/main/rightbar/who-follow/index.jsx";
import Footer from "~/layout/main/rightbar/footer/index.jsx";

export  default function RightBar(){
return(
    <aside className="w-[350px] mr-2.5">
        <Search/>
        <Premium/>
        <Topics/>
        <WhoFollow/>
        <Footer/>
    </aside>
)
}