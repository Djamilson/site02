import React from 'react'
import * as S from './styled'

import watsapp from '../../images/watsapp.png'

export const WatsappPhone = props => {
    return (
        <S.WatsappPhone>
            <S.ImageWatsapp src={watsapp} alt="Watsapp" />
            <S.NavWatsappPhone>
                <strong>Orçar seu projeto!</strong>
                <h1>Projeto e orçamento sem compromisso.</h1>
                <h2>(63) 9 9254-6761</h2>
            </S.NavWatsappPhone>
        </S.WatsappPhone>
    )
}

export default WatsappPhone
