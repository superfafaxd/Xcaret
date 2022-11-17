import { useSelector } from "react-redux"

export const HeaderMovil = (props) => {
    const { header } = useSelector(state => state.app);
    const { h1, discount, paragraphs } = header;

    return (
        <>
            <div className="grid bg-gray-300 p-4 py-11">
                <h1 className="text-center text-4xl m-5">
                    {h1}
                </h1>

                <div className="p-6">
                    <h1 className="text-center text-5xl">
                        {discount}
                    </h1>
                </div>
                <p className="text-lg text-center m-2">
                    {paragraphs}
                </p>
                {/* <p className="text-center">
                    {paragraphs[1]}
                </p> */}

            </div>
        </>
    )
}

HeaderMovil.getInitialProps = async (ctx) => {
    
   
    return { }
  }