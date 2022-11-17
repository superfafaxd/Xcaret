

export const CarouselItem = ({ resource, index}) => {
 
            return (
                <div
                    key={index}
                    className="carousel-item text-center relative w-64 h-64 snap-start"
                >
                    <a

                        className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                        style={{ backgroundImage: `url(${resource.src || ''})` }}
                    >
                        <img
                            src={resource.src || ''}
                            alt={resource.alt}
                            className="w-full aspect-square hidden"
                        />
                    </a>
                    <a

                        className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                    >
                      
                    </a>
                </div>
            )
       
        
}
