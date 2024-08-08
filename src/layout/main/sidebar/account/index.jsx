import {Popover, Transition ,PopoverButton, PopoverPanel} from "@headlessui/react";
import {useAccount} from "~/store/auth/hooks.js";
import More from "~/layout/main/sidebar/account/more";

export default function Account() {

    const account = useAccount();


    return (
        <div className="mt-auto">
            <Popover className="relative">
                <PopoverButton
                    className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left transition-colors items-center outline-none"
                >
                    <img src={account.avatar} className="w-10 h-10 rounded-full" alt=""/>
                    <div className="mx-3 text-[15px]">
                        <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
                        <div className="text-[#7176b] ">
                            @{account.userName}
                        </div>
                    </div>
                    <svg viewBox="0 0 24 24" className="text-white ml-auto" width={18.75} height={18.75}>

                            <path
                                fill="currentColor"
                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>

                    </svg>

                </PopoverButton>
                <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform opacity-100"
                    leaveTo="transform opacity-0"
                >
                <PopoverPanel className="absolute bottom-full w-[300px] py-3 left-1/2  overflow-hidden -translate-x-1/2 bg-black shadow-box rounded-2xl">
                    {({ close }) => (
                        <More close={close}/>
                    )}
                </PopoverPanel>
                    </Transition>
            </Popover>
        </div>
    )
}