import { useSelector } from "react-redux"


export const NavBar = () => {
    const { navbar } = useSelector(state => state.app);
    const { logo, menu } = navbar;
    return (

        <div className="shadow bg-gray-200">
            <div className="mx-auto p-5 flex items-center justify-between">

                <div className="cursor-pointer" >
                    <img className="h-3 sm:h-7" src={logo} />
                </div>
                <ul className="flex items-center gap-5" >
                    <li>
                        <a className="sm:text-2xl text-gray-600 hover:text-blue-500
                                      cursor-pointer transition-colors duration-300"
                        >
                            {menu.contact}
                        </a>
                    </li>
                    <li>
                        <a className="sm:text-2xl text-gray-600 hover:text-blue-500
                                       cursor-pointer transition-colors duration-300"
                        >
                            {menu.lang.title}
                        </a>
                    </li>
                    <li>
                        <select className="text-xs  bg-gray-200  text-black  ">
                            {
                                menu.currency.map(item => {
                                    return (
                                        <option className="hover:text-blue-500
                                        cursor-pointer transition-colors duration-300" key={item} value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                    </li>
                </ul>

            </div>




        </div>

    )
}

/* 
      <div className="flex flex-col items-center justify-center border" >
            <div className="flex flex-col">

                <nav className="bg-gray-300 flex justify-around">
                    <div className="flex items-start" >
                        <img src={logo} />
                    </div>
                    <div className="items-end" >
                        <a className="text-2xl flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300" >
                            {menu.contact}
                        </a>
                        <a className="text-2xl flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300" >
                            {menu.contact}
                        </a>
                    </div>
                </nav>
            </div>
        </div>

*/
