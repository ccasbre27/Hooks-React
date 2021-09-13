import React, { useState, useEffect } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const { x, y } = coords;

    useEffect(() => {

        const mouseMouve = (e) => {
            const currentCoords = { x: e.x, y: e.y };
            setCoords(currentCoords);
        } 

        window.addEventListener('mousemove', mouseMouve);

        console.log('Component mounted');
        return () => {
            console.log('Component did mount');
            // if we don't remove the lister it is going to create a new one
            // each time we mount the component
            window.removeEventListener('mousemove', mouseMouve);
        }
    }, []);

    return (
        <div>
            <h3>Lorem ipsum</h3>
            <p>X: { x } Y: { y }</p>
        </div>
    )
}
