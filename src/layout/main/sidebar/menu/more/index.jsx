import {Popover , Disclosure} from "@headlessui/react";
import {Link} from "react-router-dom";
import classNames from "classnames";
import {setModal} from "~/store/modal/actions.js";

export default function More() {
    return (
        <Popover className="relative  ">
            <Popover.Button className="py-[3px] w-full text-left group outline-none">
                    <div
                        className="p-3 rounded-full transition-colors inline-flex items-center gap-5  group-hover:bg-[--background-third]">
                        <div className="w-[1.641rem] h-[1.641rem] relative">
                            <svg viewBox="0 0 24 24" className="h-[1.641rem]">
                                <path
                                    fill="currentColor"
                                    d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"/>
                            </svg>

                        </div>
                        <div className="pr-4 text-xl">
                            Daha fazla
                        </div>
                    </div>
            </Popover.Button>
            <Popover.Panel
                className="w-[318px] absolute bottom-0 left-0 bg-[color:var(--background-primary)] shadow-box rounded-xl overflow-hidden">

                <Link to={"/"}>
                    <button
                        className="px-4 h-14 w-full  transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                        <div className="w-[1.641rem] h-[1.641rem] relative">
                            <svg viewBox="0 0 24 24" className="h-[1.5rem]">
                                <path
                                    fill="currentColor"
                                    d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"/>
                            </svg>
                        </div>
                        <div className="pr-4 text-xl font-bold">
                            Para Kazan
                        </div>
                    </button>
                </Link>

                <Link to={"/"}>
                    <button
                        className="px-4 h-14 w-full  transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                        <div className="w-[1.641rem] h-[1.641rem] relative">
                            <svg viewBox="0 0 24 24" className="h-[1.5rem]">
                                <path
                                    fill="currentColor"
                                    d="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z"/>
                            </svg>

                        </div>
                        <div className="pr-4 text-xl font-bold">
                            Reklamlar
                        </div>
                    </button>
                </Link>

                <Link to={"/"}>
                    <button
                        className="px-4 h-14 w-full  transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                        <div className="w-[1.641rem] h-[1.641rem] relative">
                            <svg viewBox="0 0 24 24" className="h-[1.5rem]">
                                <path
                                    fill="currentColor"
                                    d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zm11 14c0 .28-.22.5-.5.5h-15c-.27 0-.5-.22-.5-.5v-3.04c.59.35 1.27.54 2 .54h5v1h2v-1h5c.73 0 1.41-.19 2-.54v3.04zm0-6.49c0 1.1-.9 1.99-2 1.99h-5v-1h-2v1H6c-1.1 0-2-.9-2-2V8.5c0-.28.23-.5.5-.5h15c.28 0 .5.22.5.5v3.51z"/>
                            </svg>

                        </div>
                        <div className="pr-4 text-xl font-bold">
                            İşler
                        </div>
                    </button>
                </Link>

                <Link to={"/"}>
                    <button
                        className="px-4 h-14 w-full  transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                        <div className="w-[1.641rem] h-[1.641rem] relative">
                            <svg viewBox="0 0 24 24" className="h-[1.5rem]">
                                <path
                                    fill="currentColor"
                                    d="M12 22.25c-4.99 0-9.18-3.393-10.39-7.994l1.93-.512c.99 3.746 4.4 6.506 8.46 6.506s7.47-2.76 8.46-6.506l1.93.512c-1.21 4.601-5.4 7.994-10.39 7.994zM5 11.5c0 3.866 3.13 7 7 7s7-3.134 7-7V8.75c0-3.866-3.13-7-7-7s-7 3.134-7 7v2.75zm12-2.75v2.75c0 2.761-2.24 5-5 5s-5-2.239-5-5V8.75c0-2.761 2.24-5 5-5s5 2.239 5 5zM11.25 8v4.25c0 .414.34.75.75.75s.75-.336.75-.75V8c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm-3 1v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm7.5 0c0-.414-.34-.75-.75-.75s-.75.336-.75.75v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9z"/>
                            </svg>

                        </div>
                        <div className="pr-4 text-xl font-bold">
                            Sohbet Odanı Oluştur
                        </div>
                    </button>
                </Link>

                <Link to={"/"}>
                    <button
                        className="px-4 h-14 w-full  transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                        <div className="w-[1.641rem] h-[1.641rem] relative">
                            <svg viewBox="0 0 24 24" className="h-[1.5rem]">
                                <path
                                    fill="currentColor"
                                    d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"/>
                            </svg>

                        </div>
                        <div className="pr-4 text-xl font-bold">
                            Ayarlar ve Gizlilik
                        </div>
                    </button>
                </Link>

                    <div className="h-px bg-[color:var(--background-third)] my-0.5 w-[89%] mx-auto"/>

                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                className="flex items-center justify-between w-full p-4 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                                İçerik Üretici Stüdyosu
                                <svg className={classNames( "h-[1.172rem]",{
                                    "rotate-90 text-[color:var(--color-primary)]" : open
                                })} viewBox="0 0 24 24" >
                                    <path
                                        fill="currentColor"
                                        d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"/>
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel >
                                <p className="flex items-center w-full px-4 font-bold">Kullanmak için Premium'a abone
                                    olun</p>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({open}) => (
                        <>
                        <Disclosure.Button
                            className="py-2 flex items-center justify-between w-full p-4 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                            Profesyonel Araçlar
                            <svg  className={classNames("h-[1.172rem]",{
                                "rotate-90 text-[color:var(--color-primary)]" : open
                            })}
                                  viewBox="0 0 24 24" >
                                <path
                                    fill="currentColor"
                                    d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"/>
                            </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                            <p className="flex items-center w-full px-4 font-bold">Kullanmak için Premium'a abone olun</p>
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({open}) => (
                        <>
                        <Disclosure.Button className=" flex items-center justify-between w-full p-4 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                            Erişilebilirlik
                            <svg className={classNames("h-[1.172rem]",{
                                "rotate-90 text-[color:var(--color-primary)]" : open
                            })}
                                 viewBox="0 0 24 24" >
                                <path
                                    fill="currentColor"
                                    d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"/>
                            </svg>
                        </Disclosure.Button>
                            <Disclosure.Panel >
                                <button
                                    onClick={() => setModal('appearance')}
                                    className="flex items-center px-3 h-11 w-full gap-3 font-medium hover:bg-[color:var(--background-secondary)] transition-colors ">
                                    <svg viewBox="0 0 24 24" className="h-[1.172rem]">
                                        <path
                                            fill="currentColor"
                                            d="M22.21 2.793c-1.22-1.217-3.18-1.26-4.45-.097l-10.17 9.32C5.02 12.223 3 14.376 3 17v5h5c2.62 0 4.78-2.022 4.98-4.593L22.3 7.239c1.17-1.269 1.12-3.229-.09-4.446zM8 20H5v-3c0-1.657 1.34-3 3-3s3 1.343 3 3-1.34 3-3 3zM20.83 5.888l-8.28 9.033c-.5-1.09-1.38-1.971-2.47-2.47l9.03-8.28c.48-.44 1.22-.424 1.68.036s.48 1.201.04 1.681z"/>
                                    </svg>
                                    Görünümü Özelleştir
                                </button>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </Popover.Panel>
        </Popover>
    )
}