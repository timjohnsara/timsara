import React, {useState, useEffect, useCallback} from 'react';
import {client} from '../../client';

export default function GridList({type}) {
    const [isGridLoading, setIsGridLoading] = useState(false);
    const [GridItems, setGridItems] = useState([]);

    const cleanUpGridItems = useCallback((rawData) => {
        const cleanItems = rawData.map((item) => {
            const {sys, fields} = item;
            const {id} = sys;
            const gridTitle = fields.title
            const gridDescription = fields.description
            const gridLink = fields.link
            const gridImage = fields.albumCover.fields.file.url
            const updatedGrid = {id, gridTitle, gridDescription, gridImage, gridLink}
            return updatedGrid
        });
        setGridItems(cleanItems)
    }, [])
    const getGridListItems = useCallback(async() => {
        setIsGridLoading(true)
        try {
            const response = await client.getEntries({ content_type: type})
            const responseData = response.items
            if (responseData) {
                cleanUpGridItems(responseData)
            } else {
                setGridItems([])
            }
            setIsGridLoading(false)
        } catch (error) {
            setIsGridLoading(false)
        }
    }, [cleanUpGridItems])
    // })
    useEffect(() => {
        getGridListItems()
    }, [getGridListItems])

    if (isGridLoading) {
        return <div className='animatedLoading'><ul class='dots'><li></li><li></li><li></li></ul></div>;
    }

    return (
        <div className="innerApp">
            {GridItems.map((item, i) => {
                return (
                    <div className="musicItem" key={item.id}>
                        <h1>{item.gridTitle}</h1>
                        <img src={item.gridImage} alt={item.gridTitle} />
                        <a href={item.gridLink} target="_blank" rel="noreferrer">Find on Spotify</a>
                    </div>
                )
            })}
        </div>
    )
}