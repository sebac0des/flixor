// Components
import Wrapper from "../wrapper";

import { Product } from "@/types";
import {Card,CardTitle, CardSmallText, CardContent, CardImage, CardOverlay, CardButton } from '@/components/ui/card copy'

interface Props {
    data:Product[]
}

export function FeaturedProducts({data}:Props) {
    return <Wrapper className="grid md:grid-cols-2 gap-5" container="stretch" >
        {data.map(item=>{
            return        <Card>
            <CardOverlay/>
            <CardImage
            image={item.cover_image}
            alt={item.name}
            />
            <CardContent>
                <CardSmallText>Product tagline here 🚀</CardSmallText>
                <CardTitle>{item.name}</CardTitle>
                <CardButton buttonUrl="" className="mt-3">Mas info</CardButton>
            </CardContent>
        </Card>
        })}
 
    </Wrapper>
}

