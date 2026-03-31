import { CheckCircle2 } from 'lucide-react'
import { toast } from 'react-toastify'

const Product = ({product,carts,setCarts}) => {
    const{name,description,price,period,tag,tagType,features,icon}=product;
    const isInCart = carts.some((cartItem) => cartItem.id === product.id)

    const handleBuyNowBtn=()=>{
        if (isInCart) {
            toast.warning(`${name} is already in your cart`)
            return
        }
        setCarts((prevCarts) => [...prevCarts, product])
        toast.success(`${name} added to cart`)
    }
    
    return (
        <div>
            <div className="card bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
            
            {/* Top Section: Icon & Tag */}
            <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden p-3 group-hover:scale-110 transition-transform duration-300">
                    
                    <img src={icon} alt={name} className="w-full h-full object-contain" />
                </div>
                {tag && (
                    <span className={`badge ${(tagType)} font-bold py-3 px-4 rounded-full border-none text-[10px] uppercase tracking-widest`}>
                        {tag}
                    </span>
                )}
            </div>

            {/* Content Section */}
            <div className="grow space-y-3">
                <h2 className="text-2xl font-black text-slate-800 tracking-tight leading-tight">
                    {name}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Pricing Section */}
            <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">${price}</span>
                <span className="text-gray-400 font-bold text-sm uppercase">/{period === 'monthly' ? 'Mo' : 'Yr'}</span>
            </div>

            {/* Features List (Map through JSON features array) */}
            <div className="my-6 space-y-3 border-t border-gray-50 pt-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                        <span className="text-gray-600 text-sm font-semibold">{feature}</span>
                    </div>
                ))}
            </div>

            {/* Action Button */}
            <div className="mt-auto">
                <button onClick={()=>handleBuyNowBtn()} className="btn btn-primary w-full rounded-2xl text-white font-bold text-lg border-none bg-linear-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 shadow-lg transform active:scale-95 transition-all duration-300">
                    {isInCart ? 'Added To Your Cart':'Buy Now'}
                </button>
            </div>
        </div>
        </div>
    );
};

export default Product;
