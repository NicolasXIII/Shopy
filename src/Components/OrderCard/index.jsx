import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {

    const { title, imageUrl, price, handle_Delete, id } = props


    return (

        <div className="flex justify-between items-center mb-3 px-6 scroll-auto">

            <div className='flex items-center gap-2'>

                <figure className='w-20 h-20'>
                    <img src={imageUrl} alt={title}
                        className='w-full h-full object-cover rounded-lg' />
                </figure>

                <p className='text-sm font-light'>
                    {title}
                </p>
            </div>





            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>
                    {price}
                </p>

                {/* 
                    Este es un ejemplo de renderizado condicional en línea en React. 
                
                        Si handle_Delete es verdadero (en este caso, si existe), 
                            entonces se renderiza el componente XMarkIcon. 
                        Si handle_Delete es falso (o null o undefined), 
                            entonces no se renderiza nada. 
                */}
                {
                    handle_Delete

                    &&

                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer"
                        onClick={() => handle_Delete(id)} />
                }

            </div>

        </div>
    )

}

export default OrderCard;