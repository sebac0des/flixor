// Components
import { Card, CardButton, CardContent, CardImage, CardOverlay, CardSmallText, CardTitle } from "../card";

interface Props {
    className?:string
}

export function ProductVideoCard(props:Props) {
    return <Card>
    <CardOverlay/>
    <CardImage
    className="object-cover h-full"
    image="/images/placeholder-image-one-compressed.webp"
    alt=""
    />
    <CardContent>
        <CardSmallText>Product tagline here 🚀</CardSmallText>
        <CardTitle>321</CardTitle>
        <CardButton buttonUrl="" className="mt-3">Mas info</CardButton>
    </CardContent>
</Card>
}

