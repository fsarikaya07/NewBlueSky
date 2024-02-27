import React from 'react';
import BoxView from './BoxView';
import PlatformBox from './PlatformBox';

const PlatformView = () => {
    const itembox = [
        {
            id: 1,
            title: 'Wealth Management',
            classicon: 'icon-benefit',
            boxcontent: 'Enim ad minim veniam, quis nostrud exercitation ullamco laboris. Quis nostrud exercitation'
        },
    ];

    return (
        <section className="flat-row pd-about-post">
            <div className="container">
                <div className="row flat-tabs" data-effect="fadeIn">
                    <PlatformBox />
                    {/* <MainOverView /> */}
                </div>
            </div>
        </section>
    );
};

export default PlatformView;
