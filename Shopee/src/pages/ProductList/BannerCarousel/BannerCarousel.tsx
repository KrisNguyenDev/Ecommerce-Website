import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export default function BannerCarousel() {
  const images = [
    'https://media.istockphoto.com/id/2124102567/photo/orange-fruit-with-leaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=YUa-SHN1YnyS7wYTx33M59e-FJUUmiFNcWMNO2o4ats=',
    'https://media.istockphoto.com/id/2156139816/photo/pile-of-oranges-in-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=1DRJ7leF7Bl7-1cL9t540nCLLw0SWIWOQDPUNVfFCTc=',
    'https://media.istockphoto.com/id/2163271592/photo/woman-picking-oranges-from-he-tree-on-the-background-of-karst-mountains-in-guilin-china.webp?a=1&b=1&s=612x612&w=0&k=20&c=HPGXJtKnmZrBGJ8LnUBjOIbSgkevtbDo18JxvktNxkc=',
    'https://media.istockphoto.com/id/976859596/photo/farmer-taking-fresh-orange-from-wooden-box-in-orange-orchard.webp?a=1&b=1&s=612x612&w=0&k=20&c=JyvrpbUVG4pYk78iCsd6TOO1OzzIJz7zsKjMhSL1O3Q=',
    'https://media.istockphoto.com/id/976851866/photo/wooden-basket-full-of-ripe-oranges-in-orange-grove.webp?a=1&b=1&s=612x612&w=0&k=20&c=McgBQifbTD0r8RgMLpTUon714wKSxcWqFOKDk-fbDCg=',
  ]

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <Card>
              <CardContent className="p-0 h-64">
                <img src={item} alt="picture" className="object-cover w-full h-full" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
