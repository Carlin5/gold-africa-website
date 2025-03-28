import React from 'react';
import { Box, Typography, ImageList, ImageListItem } from '@mui/material';

const Gallery = () => {
    const images = [{
            img: '/images/gold-mining-congo.jpg',
            title: 'Gold Mining in Congo',
            description: 'Artisanal gold mining in the Democratic Republic of Congo'
        },
        {
            img: '/images/gold-processing-uganda.jpg',
            title: 'Gold Processing in Uganda',
            description: 'Traditional gold processing methods in Uganda'
        },
        {
            img: '/images/mining-community.jpg',
            title: 'Mining Community',
            description: 'Local community working in gold mines'
        },
        {
            img: '/images/gold-extraction.jpg',
            title: 'Gold Extraction',
            description: 'Gold extraction process in African mines'
        },
        {
            img: '/images/mining-equipment.jpg',
            title: 'Mining Equipment',
            description: 'Traditional mining equipment used in Africa'
        },
        {
            img: '/images/gold-trade.jpg',
            title: 'Gold Trade',
            description: 'Local gold trading market in Africa'
        }
    ];

    return ( <
        Box sx = {
            { py: 8, backgroundColor: '#1a1a1a' }
        } >
        <
        Typography variant = "h3"
        component = "h2"
        sx = {
            { textAlign: 'center', mb: 6, color: '#FFD700' }
        } >
        Gold Mining in Africa <
        /Typography> <
        Typography variant = "subtitle1"
        sx = {
            { textAlign: 'center', mb: 4, color: '#ffffff', maxWidth: '800px', mx: 'auto' }
        } >
        Explore the rich gold mining heritage across African countries including Congo, Uganda, and more. <
        /Typography> <
        ImageList sx = {
            { width: '100%', height: 'auto' }
        }
        cols = { 3 }
        rowHeight = { 300 } > {
            images.map((item) => ( <
                ImageListItem key = { item.img } >
                <
                img src = { item.img }
                alt = { item.title }
                loading = "lazy"
                style = {
                    { objectFit: 'cover', width: '100%', height: '100%' }
                }
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
                Typography variant = "caption" > { item.description } < /Typography> < /
                Box > <
                /ImageListItem>
            ))
        } <
        /ImageList> < /
        Box >
    );
};

export default Gallery;