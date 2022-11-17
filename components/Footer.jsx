import { useSelector } from "react-redux"


export const Footer = () => {
    const { footer } = useSelector(state => state.app);
    const { copy, links } = footer;
    return (
        <div className="">

            <footer className="p-4 shadow md:flex md:items-center md:justify-around md:p-6 bg-black" >
                <span className="text-sm text-white" >{copy}</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    {
                        links.map(item => {
                            return (
                                <li>
                                    <a href={item.href} className="mr-4 hover:underline md:mr-6" key={item.tittle} >
                                        <span className="text-sm text-white" > {item.tittle} </span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </footer>
        </div>
    )
}
