function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const changeElementStyle = (e) => {
    if (e.currentTarget === e.target) {
        const color = getRandomColor();
        e.target.style.backgroundColor = color;
        e.target.querySelectorAll('*').forEach(child => {
            child.style.backgroundColor = color;
        });
    }

}

export {
    getRandomColor,
    changeElementStyle
}