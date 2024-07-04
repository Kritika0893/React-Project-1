import { Link } from "react-router-dom"

export const ProductCard = () => {
    

   
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to="/"className="relative" >
            
            <img className="rounded-t-lg w-full h-64" src="/assets/images/pic12.avif" alt="" />
        </Link>
        <div className="p-5">
            <Link to="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">lorem</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">lorem

            </p>
            
            <div className="flex items-center my-2">
                
            </div>

            <p className="flex justify-between items-center">
                <span className="text-2xl dark:text-gray-200">
                <span>$</span><span></span>
                </span>
                <button className="primary">Add to cart</button>
                
            </p>
        </div>
    </div>
  )
}
