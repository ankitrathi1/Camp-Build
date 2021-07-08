import React, { useState} from 'react'
import { FormBuilderInput } from '@sanity/form-builder/lib/FormBuilderInput'
import Fieldset from 'part:@sanity/components/fieldsets/default'
// Utilities for patching
import { setIfMissing, set } from '@sanity/form-builder/PatchEvent'
import {withDocument} from 'part:@sanity/form-builder';
import { MdCheck } from "react-icons/md"
import {MdClear,MdSearch} from "react-icons/md"


 const MyCustomObject = React.forwardRef((props, ref) => {
   console.log(props);
    const [ data , setData ] = useState({});
    const [ isDataAvailable , setIsDataAvailable ] = useState(null);
  const [ valueSet , setValueSet] = useState({ "smartProductId":null, "productCode": null, "title":null });
   // const [ valueSet , setValueSet] = useState({})
    // destructure props for easier use
    const {
      compareValue,
      focusPath,
      markers,
      onBlur,
      onChange,
      onFocus,
      presence,
      type,
      value,
      level
    } = props
   // var currentSmartId=value[type.fields[1].name]==undefined?null :value[type.fields[1].name];
  //   var currentProductCode=value[type.fields[0].name]==undefined?null :value[type.fields[0].name];
 //    var currentTitle=value[type.fields[2].name]==undefined?null :value[type.fields[2].name];
  //  const [ valueSet , setValueSet] = useState({ "smartProductId":currentSmartId, "productCode":currentProductCode, "title": currentTitle });
    const handleFieldChange = React.useCallback(
      (field, fieldPatchEvent) => {
            var current={ "smartProductId":null, "title":null,"productCode":fieldPatchEvent.patches[0].value}
            setValueSet({
              ...valueSet,
              ...current
            });
     
        onChange(fieldPatchEvent.prefixAll(field.name).prepend(setIfMissing({ _type: type.name })))

        console.log("onchange", field.name, fieldPatchEvent.patches[0].value );
        if(field.name == 'productCode'){
          let inputValue = fieldPatchEvent.patches[0].value;
          if ( inputValue && inputValue.length < 11 ) { setData({});setIsDataAvailable(false);  return false; }
              const API_URL=`http://app.cartwire.co/Product_rest/details?ean_no=${inputValue}&country_id=${30}`
            //const API_URL = `https://app.cartwire.co/Product_rest/details?ean_no=${inputValue}`;
            try{
                fetch(API_URL)
                .then(res => res.json())
                .then(response => {
                            if ( !response ) return "no response";
                            console.log("resData=======",response)
                            setData(response.data)
                            response.data && response.data.length ? setIsDataAvailable(true) : setIsDataAvailable(false);
                           // setValueSet({ "smartProductId":"ssss", "title": "dddd","productCode":"hgj"})
                           var abc={ "smartProductId":response.data[0].smart_prduct_id, "title":response.data[0].productTitle,"productCode":inputValue}
                        //    setValueSet(prevState => ({
                        //     ...prevState,
                        //     abc
                        // }));
                       

setValueSet({
  ...valueSet,
  ...abc
})
                           
                          //  onChange(fieldPatchEvent.prefixAll('smartProductId').prepend( set({ value: "type.name jaya" })) )
                          })
            }catch(e){
                console.error(e);
                setData({});
                setIsDataAvailable(false);
            }
        }
      },
      [onChange]
    )

    // Get an array of field names for use in a few instances in the code
    const fieldNames = type.fields.map((f) => f.name)

    // If Presence exist, get the presence as an array for the children of this field
    const childPresence =
      presence.length === 0
        ? presence
        : presence.filter((item) => fieldNames.includes(item.path[0]))

    // If Markers exist, get the markers as an array for the children of this field
    const childMarkers =
      markers.length === 0 
        ? markers 
        : markers.filter((item) => fieldNames.includes(item.path[0]))

    return (
      <Fieldset
        legend={type.title} // schema title
        description={type.description} // schema description
        markers={childMarkers} // markers built above
        presence={childPresence} // presence built above
      >
        {type.fields.map((field, i) => {
          return (
            // Delegate to the generic FormBuilderInput. It will resolve and insert the actual input component
            // for the given field type
            <FormBuilderInput
              level={level + 1}
              // ref={i === 0 ? firstFieldInput : null}
              key={field.name}
              type={field.type}
              value={ valueSet && valueSet[field.name]}
              //value={valueSet  && valueSetfield.name]}
              onChange={(patchEvent) => handleFieldChange(field, patchEvent)}
              path={[field.name]}
              // markers={fieldMarkers}
              
              readOnly={field.readOnly}
              presence={presence}
              onFocus={onFocus}
              onBlur={onBlur}
              compareValue={compareValue}
            />
          )
        })}
         {isDataAvailable==true && <MdCheck style={{position:'absolute',top:31,right:10,color:'green',fontSize:22}}/>}
        {isDataAvailable===false && <MdClear style={{position:'absolute',top:31,right:10,color:'red',fontSize:22,cursor:'pointer'}} />}
        {/* {isDataAvailable===false && <span style={{color:'red'}}>{'No data found'}</span>} */}
      </Fieldset>
    )
  }
)

export default MyCustomObject