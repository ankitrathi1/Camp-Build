import defaultResolve, {PublishAction} from 'part:@sanity/base/document-actions';
import {setPublishedAction} from "./setPublishedAction.js"
  /// Publish Actions
  export default function useDocumentActions(props) {
     if (props.type !== "campaign") {
   
    return defaultResolve(props)
  }
  
  // return [...defaultResolve(props), setPublishedAction]
  if (["campaign"].indexOf(props.type) !== -1) 
  {
return defaultResolve(props).map((Action) =>
        Action === PublishAction ? setPublishedAction : Action
      );
  }
  }