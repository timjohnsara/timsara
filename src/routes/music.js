import React from 'react';
import GridList from '../components/gridList/gridList'

export default function Music() {
    return (
        <section className="musicView standardTemplate">
            <h1>Music</h1>
            <p>Over the past couple years, I have been getting into creating and recording more as a hobby.
                Luckily when working from home, I have the freedom of being able to unwind and recording whatever comes to mind.
                These links will direct you to recordings which are examples of those days.</p>
            <GridList />
        </section>
    );
}