import React, {useState} from 'react';

const Image = (
    {
        index,
        increase,
        decrease,
        remove,
        src,
        styles
    }
) => {
    return (
        <>
            <div key={index}>
                <a href={'https://kyivcity.gov.ua/'}>
                    <img src={src} style={styles} alt="Dynamic" />
                </a>

                <button onClick={increase}>Збільшити</button>
                <button onClick={decrease}>Зменшити</button>
                <button onClick={remove}>Видалити</button>
            </div>
        </>
    );
}


const Footer = () => {
    const initialImage = {
        url: 'data:image/jpeg;base64,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',
        size: 30
    };
    const [images, setImages] = useState([initialImage]);

    const addImage = () => {
        setImages([...images, initialImage]);
    };

    const removeImage = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
    };

    const resizeImage = (index, sizeChange) => {
        const newImages = images.map((img, i) => {
            if (i === index) {
                return { ...img, size: img.size + sizeChange };
            }
            return img;
        });
        setImages(newImages);
    };

    return (
        <div>
            <button onClick={addImage}>Додати</button>
            <div>
                {images.map((img, index) => (
                    <Image
                        src={img.url}
                        styles={{ width: `${img.size}%` }}
                        increase={() => resizeImage(index, 10)}
                        decrease={() => resizeImage(index, -10)}
                        remove={() => removeImage(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Footer;