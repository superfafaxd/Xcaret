import { useSelector } from "react-redux"
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { Numbers } from "./Numbers";
import { SocialNetworks } from "./SocialNetworks";
import { useDeviceDetected } from "../hooks/useDeviceDetected";



export const PreFooter = () => {
    const { movil, browser } = useDeviceDetected();
    const { prefooter } = useSelector(state => state.app);
    const { contactCenter, numbers } = prefooter;
    return (

        <div className="mx-auto flex-col bg-storm-gray-300 p-3">
           
           {
            (movil) ?<SocialNetworks />: <></>
           }
                
           

            <div className="flex flex-col items-stretch" >
                <div className="flex justify-around">
                    <span className="text-xs text-white">{contactCenter.title} </span>
                  
                  {
                    (browser) ? <SocialNetworks /> : <></>
                  }


                </div>

                <div className="flex justify-around">
                    <span className="text-xs text-white" >{contactCenter.email}</span>
                    <span className="text-xs text-white" ></span>
                </div>

                <div className="flex justify-around">
                    {
                        numbers.map((item, index) => {
                            return (
                                (index < 2)
                                    ? <Numbers key={index} name={item.name} number={item.number} />
                                    : <></>

                            )
                        })
                    }
                    <ul>
                        <li>
                            <select className="text-xs  bg-storm-gray-300  dark:text-white  ">
                                {
                                    numbers.map((item, i) => {
                                        return (
                                            (i > 1)
                                                ?  <option className="
                                                hover:text-blue-500 cursor-pointer transition-colors duration-300"
                                                    key={item.name} value={item.name}>{item.name} {item.number} </option>
                                                : <></>

                                        )
                                    })
                                }
                            </select>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
