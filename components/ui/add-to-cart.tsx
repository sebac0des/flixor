'use client'

// Shopping cart state management
import {useCart} from 'react-use-cart'

// Components
import { Button } from "./button";

// Icons
import { ShoppingBasket, ShoppingCart } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";
import { Product } from '@/types';


interface HeaderCartProps {
  className?:string
  product:Product
}

export const AddToCart = (props:HeaderCartProps)=>{

  const {addItem} = useCart()

  return <Button 
  onClick={()=>addItem(props.product)}
  className={cn("relative w-fit",props.className)} 
   variant='secondary' >
  <span className='hidden md:mr-2 md:inline-block'>Add to cart</span>
  <ShoppingCart className='w-4 h-4'/>
</Button>
}

