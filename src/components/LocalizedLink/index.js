import React from 'react'
import { LocaleContext } from '../Layout'
import locales from '../../../config/i18n'

import * as S from './styled'

// Use the globally available context to choose the right path
const LocalizedLink = ({ to, ...props }) => {
    const { locale } = React.useContext(LocaleContext)

    const isIndex = to === `/`

    const path = locales[locale].default
        ? to
        : `${locales[locale].path}${isIndex ? `` : `${to}`}`

    return <S.StyledLink {...props} to={path} />
}

export default LocalizedLink
