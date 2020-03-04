import React from 'react'
import * as S from './styled'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <S.Wrapper>
        <iframe
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            width="800"
            height="auto"
            preload="auto"
            muted="true"
            autoplay="true"
            playsinline="true"
            controls="true"
            loop="true"
        />
    </S.Wrapper>
)
export default Video
