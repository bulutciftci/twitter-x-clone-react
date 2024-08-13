import {Link} from "react-router-dom";

export default function Logo(){
    return(
        <div className="py-0.5">
            <Link to="/" className="text-[color:var(--color-base)] w-[3.25rem] h-[3.25rem] rounded-full flex items-center justify-center hover:bg-[color:var(--background-third)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.875rem]"
                     viewBox="0 0 16 16">
                    <path
                        fill="currentColor"
                        d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
            </Link>
        </div>
)
}