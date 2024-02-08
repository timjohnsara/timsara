import React from 'react';
import GridList from '../components/gridList/gridList'

export default function Music() {
    return (
        <section className="musicView">
            <GridList type={'music'} />
        </section>
    );
}