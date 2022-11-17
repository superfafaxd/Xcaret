import React from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2';

export const Promotions = () => {
    const { promotions } = useSelector(state => state.app);
    const { title, logoPromo, Subtitle, paragraphs, button, imagePromo } = promotions[0];

    const onSubmit = () =>{
       const numPedido = Math.floor(Math.random() * 1000);
       Swal.fire({
        title: 'Codigo de compra ' + numPedido,
        text: "Resumen: " + title,
        icon: 'info',
        confirmButtonColor: '#3085d6'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Gracias por tu compra!',
            '',
            'success'
          )
        }
      })
    }

    //console.log({title, logoPromo, Subtitle, paragraphs, button, imagePromo } )
    return (
        <div className='m-3 sm:m-32'>{/* m-32 para desktop // m-3 para movil*/}

            <div className="flex flex-col items-center shadow-xl xl:flex-row  rounded-3xl">
                
                <img className="cursor-pointer rounded-3xl " src={imagePromo} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <img className='m-2 py-5 w-48 ' src={logoPromo}  />
                    <h5 className="m-2 xl:text-6xl text-3xl text-center ">{title} </h5>
                    <p className="m-2 xl:text-3xl text-xl font-normal text-gray-900">{Subtitle} </p>
                    <p className="m-2 xl:text-3xl text-xl font-normal text-gray-900">{paragraphs} </p>

                    <button 
                     className="py-2.5 px-5 mr-2 m-2 text-xl   bg-white rounded-lg border border-black hover:bg-gray-200 "
                     onClick={onSubmit}
                     >
                        {button.text}
                    </button>

                </div>
            </div>
        </div>
    )
}
