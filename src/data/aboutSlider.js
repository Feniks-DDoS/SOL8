import avifImage1 from "@/assets/images/reason/avif/1reason.avif"
import jpgImage1 from "@/assets/images/reason/jpg/1reason.jpg"
import avifImage2 from '@/assets/images/hero/avif/hero1.avif'
import jpgImage2 from '@/assets/images/hero/jpg/hero1.jpg'

export const aboutSliderData = [
    {
        id: 1,
        Source: {
            srcSet: avifImage1,
            type: 'image/avif',
        },
        img: {
            src: jpgImage1,
            alt: 'salon-image',    
        },

    },  
    {
        id: 2,
        Source: {
            srcSet: avifImage2,
            type: 'image/avif',
        },
        img: {
            src: jpgImage2,
            alt: 'salon-image',    
        },

    },  
    {
        id: 3,
        Source: {
            srcSet: avifImage1,
            type: 'image/avif',
        },
        img: {
            src: jpgImage1,
            alt: 'salon-image',    
        },

    },  
    {
        id: 4,
        Source: {
            srcSet: avifImage2,
            type: 'image/avif',
        },
        img: {
            src: jpgImage2,
            alt: 'salon-image',    
        },

    },
]