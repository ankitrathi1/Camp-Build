/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import qs from 'qs';
import Dialog from 'part:@sanity/components/dialogs/fullscreen';
import TextInput from 'part:@sanity/components/textinputs/default';
import Button from 'part:@sanity/components/buttons/default';
import Spinner from 'part:@sanity/components/loading/spinner';
import { getBase64ImageFromUrl } from './get-base-64-from-url';
import { TabImage } from './TabImage';
import styles from './TabAssetSource.css';


const SearchInput = ({ label, onChange, onEnter, value }) => {
  const onKeyPress = useCallback(
    (event) => {
      if (event.key === 'Enter') onEnter(event);
    },
    [onEnter]
  );

  return (
    <div className={styles['c-search']}>
      <label className={styles['c-search__label']}>
        <span className={styles['c-search__text']}>{label}</span>
        <TextInput onChange={onChange} onKeyPress={onKeyPress} value={value} />
      </label>
    </div>
  );
};

const SearchImageByUrl = ({ onClose, onSelect }) => {
  const [searchTerms, setSearchTerms] = useState({
    assetId: '',
    search: '',
  });
  const [hasError, setHasError] = useState(false);
  const [foundAssets, setFoundAssets] = useState();
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const onSearchTermChange = useCallback(
    (key) => (val) => {
      setSearchTerms({
        ...searchTerms,
        [key]: val.target.value,
      });
    },
    [searchTerms, setSearchTerms]
  );

  const onSearch = useCallback(
    async (pageToFetch) => {
      //console.log(searchTerms);
      const base64Image = await getBase64ImageFromUrl(searchTerms.assetId);
      // if the selected image is in format application/octet-stream it will convert it to tiff
      const uploadBase64 = base64Image.replace('application/octet-stream', 'image/tiff');
      //console.log(uploadBase64);
      const selectedItem = {
        kind: 'base64',
        value: uploadBase64,
        assetDocumentProps: {
          source: {
            name: 'image-url',
          },
        },
      };
      onSelect([selectedItem]);




      const searchButtonEvent = typeof pageToFetch !== 'number';
      const page = searchButtonEvent ? 1 : pageToFetch;
      try {
        setLoading(true);
        

        if (foundAssets && !searchButtonEvent) {
          setFoundAssets({ ...resp.data, assets: [...foundAssets.assets, ...resp.data.assets] });
        } else {
          setFoundAssets(resp.data);
        }
      } catch (err) {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    },
    [searchTerms, pageNumber, foundAssets, setFoundAssets, setHasError, setLoading]
  );

  const onIntersection = useCallback(() => {
    if (pageNumber === foundAssets.numberOfPages) return;

    onSearch(pageNumber + 1);
    setPageNumber(pageNumber + 1);
  }, [onSearch, setPageNumber]);

  return (
    <Dialog title="Select image from TAB" onClose={onClose} isOpen>
      <div className={styles.container}>
        <SearchInput
          onChange={onSearchTermChange('assetId')}
          onEnter={onSearch}
          value={searchTerms.assetId}
          label="Image URl"
        />
        <div className={styles['c-button']}>
          <Button onClick={onSearch}>Get Image</Button>
        </div>
      </div>
      <div className={styles['c-results-container']}>
        {hasError && `Sorry an error has occured`}
        {foundAssets &&
          foundAssets.assets.map((asset, index) => {
            if (asset.OriginalURL !== 'null')
              return (
                <TabImage
                  key={asset.assetID}
                  asset={asset}
                  onSelect={onSelect}
                  // Only add intersection to 2nd to last result
                  onIntersection={
                    foundAssets.assets.length - 2 === index ? onIntersection : undefined
                  }
                />
              );
          })}
        {loading && <Spinner />}
      </div>
    </Dialog>
  );
};

export default SearchImageByUrl;
