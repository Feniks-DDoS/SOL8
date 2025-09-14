import avifImage1 from '@/assets/images/hero/avif/1.avif'
import avifImage2 from '@/assets/images/hero/avif/2.avif'
import avifImage3 from '@/assets/images/hero/avif/3.avif'
import jpgImage1 from '@/assets/images/hero/jpg/1.jpg'
import jpgImage2 from '@/assets/images/hero/jpg/2.jpg'
import jpgImage3 from '@/assets/images/hero/jpg/3.jpg'


export const sliderData = [
    {
        id: 1,
        title: 'Title',
        subtitle: '',
        body: 'body',
        Source: {
            srcSet: avifImage1,
            type: 'image/avif'
        },
        img: {
            src: jpgImage1,
            alt: 'Massage proccess',
        },

    },
    {
        id: 2,
        title: 'Title',
        subtitle: '',
        body: 'body',
        Source: {
            srcSet: avifImage2,
            type: 'image/avif'
        },
        img: {
            src: jpgImage2,
            alt: 'Massage proccess',
        },

    },
    {
        id: 3,
        title: 'Title',
        subtitle: '',
        body: 'body',
        Source: {
            srcSet: avifImage3,
            type: 'image/avif'
        },
        img: {
            src: jpgImage3,
            alt: 'Massage proccess',
        },

    },
]