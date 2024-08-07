import Logo from "~/layout/main/sidebar/logo/index.jsx";
import Menu from "~/layout/main/sidebar/menu/index.jsx";
import Account from "~/layout/main/sidebar/account/index.jsx";

export default function Sidebar(){
    return(
        <aside className="w-[280px] max-h-screen min-h-screen px-2 flex flex-col ">
            <Logo />
            <Menu />
            <Account/>

        </aside>
    )
}