import React from 'react'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper/Link'

export default function about() {
    return (
        <>
            <LinkWrapper href="/">
                <CloseOutline size={32} aria-label="About" />
            </LinkWrapper>
            <h1>
                about
            </h1>
        </>
    )
}
