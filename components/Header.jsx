import { useSelector } from "react-redux"


export const Header = () => {
    const { header } = useSelector(state => state.app);
    const { h1, discount, paragraphs } = header;

    return (
        <div className="grid bg-gray-300 p-28 px-40">

            <h1 className="pl-16 text-6xl">
                {h1}
            </h1>

            <div className="flex m-10">

                <div className="p-10">

                    <h1 className="text-6xl">
                        {discount}
                    </h1>
                </div>
                <p className="text-2xl text-center pt-12">
                    {paragraphs}
                </p>
               
            </div>
        </div>
    )
}
