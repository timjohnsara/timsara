import React, {useState, useEffect, useCallback} from 'react';
import {client} from '../../client';

export default function GridList() {
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
            const response = await client.getEntries({ content_type: 'music'})
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
        return <div className='animatedLoading'><ul className='dots'><li></li><li></li><li></li></ul></div>;
    }

    return (
        <div className="innerApp">
            {GridItems.map((item, i) => {
                let linkDesc = 'Find on Spotify';
                return (
                    <div className="musicItem" key={item.id}>
                        <img src={item.gridImage} alt={item.gridTitle} />
                        <div className="gridTitle">{item.gridTitle}</div>

                        <a href={item.gridLink} className="gridLink" target="_blank" rel="noreferrer">{linkDesc}</a>
                    </div>
                )
            })}
        </div>
    )
}