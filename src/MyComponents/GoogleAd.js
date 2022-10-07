import React from 'react';

export default class GoogleAd extends React.Component {
    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render () {
        return (
            <ins className='adsbygoogle'
                 style={{ display: 'block' }}
                 data-ad-client='ca-pub-2746840805821290'
                 data-ad-slot='12121212'
                 data-ad-format='auto' />
        );
    }
}