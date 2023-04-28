import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { XMarkIcon }  from '@heroicons/react/24/outline';


type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen } : ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
    return (
            <Drawer open={isOpen} onClose={closeCart} direction='right'>
                <span className='flex items-center p-1 justify-between '>
                <div>Hello World</div>
                <XMarkIcon color="black" className="h-5 w-5 cursor-pointer" />
                </span>
                <body>
                    <div className='flex flex-col gap-3'>
                        {cartItems.map(item => 
                        <CartItem key={cartItems.id} {...item} />)}
                    </div>
                </body>
            </Drawer>
    )
}