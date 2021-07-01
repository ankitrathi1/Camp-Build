import React from 'react'
import FormField from 'part:@sanity/components/formfields/default'
import TextInput from 'part:@sanity/components/textinputs/default';


const RadioOptions = React.forwardRef((props, ref) => {
    console.log(props);
    const {
      type,
      value
    } = props
    return (
        <FormField
          description={type.description}
          title={type.title}
        >
          <TextInput 
            value={value}

          />
        </FormField>
    )
});

export default RadioOptions;
