import axios from 'axios'
import { useEffect, useState } from 'react';

function ImageList(){

    const[imageUrl,  setImageUrl] = useState('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');

    async function downloadImages(){
        const respons = await axios.get(imageUrl);
        const imageResult = respons.data.results;
        console.log(respons.data);
        const res = imageResult.map((image) => {
            const images = image.photos
            return {
                id: images.id,
                image : images.url,
                
            }
        });
    }

    useEffect(() => {
        downloadImages();
    }, []);
    return(
        <>
        Image list
        </>
    );
}
export default ImageList