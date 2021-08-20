import React, { useState,useEffect} from 'react'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'
import client from 'part:@sanity/base/client';
import {withDocument} from 'part:@sanity/form-builder';
import { useDocumentOperation } from "@sanity/react-hooks";
import SearchableSelect from 'part:@sanity/components/selects/searchable'

const searchCountryInput = React.forwardRef((props, ref) => {
        const [inputValue, setInputValue] = useState(null);
        const [isFetching, setIsFetching] = useState(false);
        const [hits, setHits] = useState([]);
        const [files, setFiles] = useState([]);
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
        useEffect(() => {
          const API_URL=`https://app.cartwire.co/CW_API/list_cw_enabled_markets`
          setIsFetching(true);
          try{
            fetch(API_URL)
            .then(res => res.json())
            .then(response => {
                if ( !response ) return "no response";

                console.log("resData=======",response)
                setFiles(response)
                console.log("setFiles called=======",response)
                setIsFetching(false);
            })
        }catch(e){
            console.error(e);
            setIsFetching(false);
        }
            
        }, []);

        function getBrand(countryName){
       
          const BRAND_URL=`https://app.cartwire.co/CW_API/market_to_brand_mapping/${countryName}`
          setIsFetching(true);
          try{
            fetch(BRAND_URL)
            .then(res => res.json())
            .then(response => {
                if ( !response ) return "no response";
               
                setIsFetching(false);
            })
        }catch(e){
            console.error(e);
       
        }
            
        }

        function handleChange({ props }) {
            console.log("on change props ",props.children.props.children)
            const  country = props.children.props.children;
            onChange(PatchEvent.from(set({ countryName:country,_type:type.name,countryId: props.children.props.id})));
            setInputValue(null);
            getBrand(country)
        }

        function handleFocus() {
            console.log("onFocus")
            onFocus();
        }

        function handleSearch(query) {
            console.log("query======",query)
      
         
            search(query);
        }

        function handleOpen() {
           search("");
        }

        function handleBlur() {
          console.log("onBlur")
            onBlur();
        }
        
        function search(query) {
            //  setInputValue(query);

            setHits(
              files
                .filter(
                  ({ country }) =>
                  country.toLowerCase().indexOf(query.toLowerCase()) > -1 
                )
                .map(({ country, id }) => (
                  <div
                    style={{ display: "flex" }} 
                  >
                    <div id={id}>{country}</div>
                  </div>
                ))
            );
             //alert(hits.length);
             if( hits.length <=0 ) 
             onChange(PatchEvent.from(set({ countryName:null,_type:type.name,countryId: null}))); 
             
          }

          function renderItem(country) {
            return country;
          }

          function handleClear() {
            onChange(PatchEvent.from(unset()));
          }

        return (
            <FormField
              markers={markers}
              label={type.title}
              level={level}
              description={type.description}
            >
              <SearchableSelect
                placeholder="Type to search…"
                title={inputValue}
                value={value}
                onOpen={handleOpen}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onSearch={handleSearch}
                onClear={handleClear}
                renderItem={renderItem}
                inputValue={inputValue === null ? value?.countryName : inputValue}
                isLoading={isFetching}
                items={hits}
                ref={ref}
              />
            </FormField>
          );
    }

)

export default withDocument(searchCountryInput)