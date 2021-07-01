import React from 'react'
import styles from './BasicStyle.css'
import {FormField} from '@sanity/base/components'
import {Card, TextInput} from '@sanity/ui'

const StyleInput = React.forwardRef((props, ref) => {
    console.log(props);
    const {
        type,
        placeholder,
        description,
        initialValue,
        value
    } = props
    return (
        <span className={styles.downloadLink}>{type.description} <a href="{type.options.downloadLink}">{type.title}</a></span>
    )
})

export default StyleInput