import React from 'react';
import { Box, Typography, ImageList, ImageListItem } from '@mui/material';

const Gallery = () => {
    const images = [{
            img: 'https://images.pexels.com/photos/4484073/pexels-photo-4484073.jpeg',
            title: 'Gold Mining in Congo',
            description: 'Artisanal gold mining in the Democratic Republic of Congo'
        },
        {
            img: 'https://images.pexels.com/photos/4484074/pexels-photo-4484074.jpeg',
            title: 'Gold Processing in Uganda',
            description: 'Traditional gold processing methods in Uganda'
        },
        {
            img: 'https://images.pexels.com/photos/4484075/pexels-photo-4484075.jpeg',
            title: 'Mining Community',
            description: 'Local community working in gold mines'
        },
        {
            img: 'https://images.pexels.com/photos/4484076/pexels-photo-4484076.jpeg',
            title: 'Gold Extraction',
            description: 'Gold extraction process in African mines'
        },
        {
            img: 'https://images.pexels.com/photos/4484077/pexels-photo-4484077.jpeg',
            title: 'Mining Equipment',
            description: 'Traditional mining equipment used in Africa'
        },
        {
            img: 'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg',
            title: 'Gold Trade',
            description: 'Local gold trading market in Africa'
        }
    ];

    return ( <
        Box sx = {
            { py: 8, backgroundColor: '#1a1a1a' } } >
        <
        Typography variant = "h3"
        component = "h2"
        sx = {
            { textAlign: 'center', mb: 6, color: '#FFD700' } } >
        Gold Mining in Africa <
        /Typography> <
        Typography variant = "subtitle1"
        sx = {
            { textAlign: 'center', mb: 4, color: '#ffffff', maxWidth: '800px', mx: 'auto' } } >
        Explore the rich gold mining heritage across African countries including Congo, Uganda, and more. <
        /Typography> <
        ImageList sx = {
            { width: '100%', height: 'auto' } }
        cols = { 3 }
        rowHeight = { 300 } > {
            images.map((item) => ( <
                ImageListItem key = { item.img } >
                <
                img src = { `${item.img}?w=400&h=300&fit=crop&auto=format` }
                srcSet = { `${item.img}?w=400&h=300&fit=crop&auto=format&dpr=2 2x` }
                alt = { item.title }
                loading = "lazy"
                style = {
                    { objectFit: 'cover' } }
                /> <
                Box sx = {
                    {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        padding: 1,
                        textAlign: 'center'
                    }
                } >
                <
                Typography variant = "subtitle2" > { item.title } < /Typography> <
                Typography variant = "caption" > { item.description } < /Typography> <
                /Box> <
                /ImageListItem>
            ))
        } <
        /ImageList> <
        /Box>
    );
};

export default Gallery;