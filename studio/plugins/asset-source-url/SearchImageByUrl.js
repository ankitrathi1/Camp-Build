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
      //console.log('newbaseimage - ', encodedBase);
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
            id: 'urlImage'
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

  const onClick = useCallback(async () => {
    var canvas = document.createElement('canvas'),
    src = 'https://www.gstatic.com/webp/gallery/1.jpg',
    ctx = canvas.getContext('2d'),
    img = document.getElementById("imageByUrl");
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var encoded = canvas.toDataURL();
      console.log('sasasasasa', encoded);
    }
    img.src = src;

    var encodedBase =  dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

    alert(123);
    console.log('result---', encodedBase);
    //const base64Image = await getBase64ImageFromUrl(asset.OriginalURL);
    // if the selected image is in format application/octet-stream it will convert it to tiff
    const uploadBase64 = encodedBase.replace('application/octet-stream', 'image/tiff');
    const selectedItem = {
      kind: 'base64',
      value: uploadBase64,
      assetDocumentProps: {
        //originalFilename: `${asset.title[0]}.tif`,
        source: {
          name: 'tab-api',
          id: 'url123',
        },
      },
    };
    alert('image selected');
    console.log(selectedItem);
    onSelect([selectedItem]);
  });

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
      <div id="imageBox" className={styles['c-results-container']}>
        
      </div>
    </Dialog>
  );
};

export default SearchImageByUrl;

/*<button className={styles['c-image-button']} onClick={onClick}>
          <img id="imageByUrl" />
        </button>*/