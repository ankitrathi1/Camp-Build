
import {useState, useEffect} from 'react';
import {useDocumentOperation} from '@sanity/react-hooks'
import sanityClient from "@sanity/client"
import {addProductAction} from "./addProductAction.js"
const _ = require("lodash");
const sanityClientConfig = {
  projectId: '8gjfptsf',
  dataset:  'production',
  token: 'skOkVpe8kbGoTnmXhx9ixYSLpb8AVnw28vyfEo9xY7kwKznsVvQu5tpBDI5dcCriShFDT9ude0fXBhFiQS1MTVs4pqlz1alRNEzJmpChUY9bXWQCu1IG0r7OeNm80qfhgWWU443JWnbPZYgGNzex1xPGkJaIOvVkMxzh4NhglWwWp5cllo4G',
  useCdn: true,
}
var productid=[];
var smartProductID=[];
var EanCode="";
export  function setPublishedAction(props) {
  console.log(props);
  const {patch, publish} = useDocumentOperation(props.id, props.type)
  const [isPublishing, setIsPublishing] = useState(false)
   useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false)
    }
  }, [props.draft])

  
  return {
     disabled: publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish',
   
onHandle: async () => {
      // This will update the button text 
      setIsPublishing(true)

     // const client = sanityClient(sanityClientConfig)
      /// Set the slug based on the document type
      switch (props.type) {
        case 'campaign':
        console.log(props);

    props.published.content.bodyComponent.forEach(x=>
      {
          if(x._type=="productList" || x._type =="productCarousel")
          {
              x.product.forEach(Y=>
                {
                  productid.push(Y.productCode);
                  smartProductID.indexOf(Y.smartProductId) === -1 ? smartProductID.push(Y.smartProductId) :console.log("This item already exists");
                //  smartProductID.push(Y.smartProductId);
                })
          }
      }
      
      );
      smartProductID.forEach((d,index)=>
        {
          if(smartProductID.length==index+1)
          {
            EanCode += d;
          }
          else
          {
            EanCode += d + ',';
          }
        }

      );
    const client = sanityClient(sanityClientConfig);
    const data= {  
                   campaign_id:props.id,
                   campaign_name: props.published.content.title,
                   country_id:	parseInt(props.published.content.country._ref),
                   brand_id:	parseInt(props.published.content.brand._ref.split("_")[1]),
                   smartkey_data: EanCode
                }    
   const jsonString = JSON.stringify(data)
  

    const requestOptions = 
    {
        method: 'POST',
        body:jsonString
        
    };
   
   fetch('https://app.cartwire.co/CW_API/post_BIN_products_details', requestOptions)
   .then(response => response.json())
   .then(data => {
     console.log('Success:', data.items);
   
     var responseData= addProductAction( data.items,props.id,smartProductID) ;
     console.log(responseData);
        let transaction = client.transaction();
       responseData.forEach(document => {
        document.forEach(mainDoc=>
          {
            transaction.createOrReplace(mainDoc)
          });
        
        
       });
   
       transaction.commit()
   })
        .catch(error => {
            console.error('There was an error!', error);
        });
     
     // let initalProduct=["b25353904cb483c1f7f8c42856786136","9c92e921eabf27aa0c8b0c5a9c1657bb"];
    
    
       console.log("CustomPublish")
        
          break;

        default:
          /// Doing nothing? Consider deleting this switch statement to simplify your code.
          break;
      }
       // Perform the publish
 publish.execute()
      
 // Signal that the action is completed
 props.onComplete() 
     
    }
  }
}