
import {useState, useEffect} from 'react';
import {useDocumentOperation} from '@sanity/react-hooks'
import sanityClient from "@sanity/client"


export  function setPublishedAction(props) {
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


  
    var productid=[];
    /*props.published.content.bodyComponent.forEach(x=>
      {
          if(x._type=="productList")
          {
              x.product.forEach(Y=>
                {
                     
                  productid.push(Y.productCode);

                })
          }
      }
      
      );


    const data= {       Campaign_Id :props.id,
                        Campaign_Name	: props.published.content.title,
                        Country_Id:	parseInt(props.published.content.country._ref),
                        Brand_Id	:	parseInt(props.published.content.brand._ref.split("_")[1]),
                        smartkey_data	 : productid
                }
                        console.log(data)
                        
   const jsonString = JSON.stringify(data)*/

   
  //   const requestOptions = 
  //   {
  //       method: 'POST',

  //       body: jsonString
  //   };
   
   // fetch('https://cwqa.srmtechsol.com/SNWLive/Widget_campaign_price_theme/campaign_products_json_data_test', requestOptions)
    //     .then(async response => {
    //       console.log(response)
    //     })
    //     .catch(error => {
    //         console.error('There was an error!', error);
    //     });
     
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