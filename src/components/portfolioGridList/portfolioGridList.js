import React, {useState, useEffect, useCallback} from 'react';
import './portfolio.scss';
import {client} from '../../client';

export default function PortfolioGridList() {
    const [isGridLoading, setIsGridLoading] = useState(false);
    const [Items, setItems] = useState([]);

    const cleanUpItems = useCallback((rawData) => {
        const cleanItems = rawData.map((item) => {
            const {sys, fields} = item;
            const {id} = sys;
            const title = fields.title
            const details = fields.details.content[0].content[0].value
            const link = fields.link
            const resume = fields.resumeObject
            const updatedGrid = {id, title, details, link, resume}
            return updatedGrid
        });
        setItems(cleanItems)

    }, [])
    const getGridListItems = useCallback(async() => {
        setIsGridLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'portfolio'})
            const responseData = response.items
            if (responseData) {
                cleanUpItems(responseData)
            } else {
                setItems([])
            }
            setIsGridLoading(false)
        } catch (error) {
            setIsGridLoading(false)
        }
    }, [cleanUpItems])
    // })
    useEffect(() => {
        getGridListItems()
    }, [getGridListItems])

    if (isGridLoading) {
        return <div className='animatedLoading'><ul className='dots'><li></li><li></li><li></li></ul></div>;
    }

    return (
        <div className="portfolioList">
            {Items.map((item, i) => {
                return (
                    <div className="portfolioItem" key={'portfolioItem'+i}>
                        <div className="title portfolioItem">{item.title}</div>
                        <div className="portfolioItem" key={i}>
                            <a href={item.link} className="gridLink" target="_blank" rel="noreferrer">{item.link}</a>
                        </div>
                        <div className="portfolioItem" key={i}>
                            <p>{item.details}</p>
                        </div>

                        {item.resume.work.map((location, i ) => {
                            return (
                                <div className="portfolioItem" key={i}>
                                    <h3>{location.position} @ <span className="headlineAltColor">{location.name}</span></h3>

                                    <ul className="bulletedList">
                                    {location.highlights.map((highlight, i ) => {
                                        return (
                                            <li>{highlight.item}</li>
                                        )}
                                    )}
                                    </ul>
                                </div>

                            )
                        })}

                    </div>
                )
            })}
        </div>
    )
}