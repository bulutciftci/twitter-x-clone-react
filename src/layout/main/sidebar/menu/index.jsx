import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {mainMenu} from "../../../../../utils/utils.consts.jsx";
import More from "~/layout/main/sidebar/menu/more/index.jsx";
import New from "~/layout/main/sidebar/menu/new/index.jsx";
import {useAccount} from "~/store/auth/hooks.js";

export default function Menu(){

    const account = useAccount()

    return (
        <nav className="mt-0.5 mb-1 " key={account}>
            {mainMenu.map((menu,index) =>(
                // eslint-disable-next-line react/jsx-key
                <NavLink key={index} to={typeof menu.path == 'function' ? menu.path() : menu.path} className="py-[3px] block group">
                    {({ isActive}) => (
                        <div
                            className={classNames("p-3 rounded-full  transition-colors inline-flex items-center gap-5  group-hover:bg-[--background-third]",{
                                "font-bold" : isActive
                            })}>
                            <div className="w-[26.5px] h-[26.5px] relative">
                                {menu?.notification && (
                                    <span
                                        className="w-[18px] h-[18px] rounded-full bg-[color:var(--color-primary)] text-[color:var(--background-primary)] border border-[color:var(--background-primary)] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                                        {menu?.notification}
                                    </span>

                                )}
                                {!isActive && menu.icon.passive}
                                {isActive && menu.icon.active}
                            </div>
                            <div className="pr-4 text-xl">
                                {menu.title}
                            </div>
                        </div>
                    )}
                </NavLink>
            ))}

            <More/>
            <New/>

        </nav>
    )
}