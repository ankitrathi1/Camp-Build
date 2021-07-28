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
        <span className={styles.downloadLink}>{type.description} <a href="https://cdn.sanity.io/files/8gjfptsf/production/3172f272c6890b7710b0d90f5e46969e6e7b9043.css?dl">{type.title}</a></span>
    )
})

export default StyleInput