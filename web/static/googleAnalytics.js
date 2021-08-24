//Digital Data Event
var arr = [];
var currentScrollDepth = '';
var contextualizationData = {};
var ctConstants = {};
var digitalData = {};
var firstScrollDepth=0,secondScrollDepth=0,thirdScrollDepth=0,fourthScrollDepth=0;
var scrollDepth=[];
var depth;
var cw_campaign_selector = document.getElementsByClassName("cw_campaign_selector");
var  campaign_local = cw_campaign_selector[0].getAttribute("data-locale");
var  GA_ID = cw_campaign_selector[0].getAttribute("data-gaID");
var  adobe_Report_Suit_ID=cw_campaign_selector[0].getAttribute("data-reportSuiteID");
var brand_Url=cw_campaign_selector[0].getAttribute("data-rootURL");
// var GA_ID = document.getElementById("analytics-id").value;
// var brandUrl = document.getElementById("rootUrl-id").value;
// var GA_ID = "";
// var brand_Url ="";
// var adobe_Report_Suit_ID="";
var campaign_country=cw_campaign_selector[0].getAttribute("data-country");
var campaign_brand=cw_campaign_selector[0].getAttribute("data-brand");
//var campaign_local="";
var currentSectionObj;
var currentProductObj;
var compName ,compVar,compPos,serviceProvideName,compExpVar;
var channelVal;
channelVal="Shoppable Campaign";
digitalData.siteInfo={channel:"",sitetype:""},
digitalData.page={pageInfo:{destinationURL:""},
category:{pageType:""}},
digitalData.video=[];
digitalData.campaign=[];
digitalData.product=[];
digitalData.privacy={accessCategories:[{domains:[]}]},
digitalData.component=[];
digitalData.trackingInfo={GID:"",un:"",tool:[{ids:""}]},
digitalData.promotion=[];
// digitalData={siteInfo:{channel:"",sitetype:""},page:{pageInfo:{destinationURL:""},category:{pageType:""}},video:[],campaign:[],product:[],privacy:{accessCategories:[{domains:[]}]},component:[],trackingInfo:{GID:"",un:"",tool:[{ids:""}]},promotion:[]};
var contextualizationData={areaInfo:{weather:"",temperature:"",aqi:"",uv:"",uv_range:"",aqi_range:""},profileData:{crmid:"",age:""}};
 var windowLocation = window.location.pathname.split("/");
 var lastwindowLocation=windowLocation[windowLocation.length-2];

digitalData.areaInfo=contextualizationData.areaInfo,
digitalData.page.category.primaryCategory=channelVal,
digitalData.trackingInfo={},
digitalData.trackingInfo.tool=[{}],
digitalData.privacy={},
digitalData.page.attributes={},
digitalData.page.dmpattributes={},
digitalData.privacy.accessCategories=[{}],
digitalData.privacy.accessCategories[0].domains=[],
digitalData.event=[],
digitalData.sitespeed={},
digitalData.page.entity={},
digitalData.page.attributes.lazyLoad={},
digitalData.platform=[] ;
digitalData.trackingInfo.tool[0]  = {id: GA_ID };
digitalData.trackingInfo.tool[1]  = {};
digitalData.product= [];
digitalData.trackingInfo.GID= "D259f49db56EUK0ba77884a2a1c46cPD" ;
digitalData.siteInfo={ channel:channelVal, internalDomain:document.location.host, sitetype: "Cartwire Shoppable Media" };
digitalData.page= { pageInfo: { destinationURL: brand_Url,pageName:lastwindowLocation }, category: { pageType: "Landing page",primaryCategory:channelVal } },

digitalData.page.attributes=
{
    brandCategory:"",
    contentType:"Cartwire Shoppable landing page",
    country:campaign_country,
    globalBrand:campaign_brand,
    lazyLoad:{},
    localBrand :campaign_brand
};

if (typeof digitalData.event == 'undefined') {
    digitalData.event = [];
}
digitalData.trackEvent = function (e) {
    var eventDetails = (typeof e !== 'undefined' && e.eventInfo !== 'undefined') ? e.eventInfo : '';
    if (eventDetails) {
        var eventType = typeof eventDetails.type !== 'undefined' ? eventDetails.type : '';
        var eventAction = typeof eventDetails.eventAction !== 'undefined' ? eventDetails.eventAction : '';
        var eventName = eventType + (eventAction ? '_' + eventAction : '');
        eventName = eventName.toLowerCase().replace(/ /g, '_');

        eventProducts = (typeof digitalData.product !== 'undefined') ? digitalData.product : [];
        eventComponent = (typeof digitalData.component !== 'undefined') ? digitalData.component : [];
        eventPromotions = (typeof digitalData.promotion !== 'undefined') ? digitalData.promotion : [];
        e.product = eventProducts;
        e.component = eventComponent;
        e.promotions = eventPromotions;
        digitalData.eventList[eventName] = e;
        //alert("Event Name is =" + eventName);
        //console.log('***custome event - '+eventName, e);
        console.log("ctConstants",ctConstants.trackEvent);
        var launchEvent = document.createEvent("CustomEvent");
        launchEvent.initCustomEvent("launch_event", true, true, {
            'eventName': eventName,
            'payload': e,
            'eventProducts': eventProducts,
            'eventPromotions': eventPromotions,
            'eventComponent': eventComponent
        });
        document.body.dispatchEvent(launchEvent);
       
    }
}
while (e = digitalData.event.shift()) {
    digitalData.trackEvent(e);
}
digitalData.event = {
    push: digitalData.trackEvent
};

digitalData.product = [];

(function (d, u) {
    var isProdEnv = "true";
    "true" != isProdEnv
        ? ((u = ("https:" == document.location.protocol ? "https://" : "http://") + "wa-uat.unileversolutions.com"),
            (digitalData.trackingInfo.GID = "D259f49db56EUK0ba77884a2a1c46cPD"),
            (digitalData.trackingInfo.tool[0].id = "UA-40462445-1"))
        : ((u = ("https:" == document.location.protocol ? "https://" : "http://") + "wa-eu.unileversolutions.com"),
            (digitalData.trackingInfo.GID = "D259f49db56EUK0ba77884a2a1c46cPD"),
            (digitalData.trackingInfo.tool[0].id = GA_ID),
            (digitalData.trackingInfo.tool[1].id = adobe_Report_Suit_ID)),
        (digitalData.privacy.accessCategories[0].domains[0] = brand_Url);
})(document);

//End Digital Data Event
$(document).ready(function () {
     
    var launchblock = document.createElement('script');


    launchblock.src = "https://assets.adobedtm.com/launch-ENfabe4aff7fd348db959a23445bf6f6da.js"
    launchblock.async = "async";
    launchblock.id = "launch";
    launchblock.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(launchblock);
  
    $('.campaign-component').each(function(i){
        $(this).attr('data-component-positions', i+1);
    });
    
    const selectorClass='.product_list_section';
    const sectionSelectors=document.querySelectorAll(selectorClass);
    const bannerClass='.banner_list_section';
    const bannerSectionSelectors=document.querySelectorAll(bannerClass);

      //ProductSlider
    sectionSelectors.forEach(function(sectionSelector)
    {
    sectionSelector.addEventListener('click',function(event)
    {
        currentSectionObj=sectionSelector;
        
        if(event.target.className === 'cw_btn_buynow')
       {    
           currentProductObj= event.target;
        
       }
    if(event.target.className === 'react-multiple-carousel__arrow react-multiple-carousel__arrow--left')
    {     

      
        cwDigitalData("", "image_left_scroll_click", arr) 
    }
    if(event.target.className === 'react-multiple-carousel__arrow react-multiple-carousel__arrow--right')
    {   
      
        cwDigitalData("", "image_right_scroll_click", arr) 
    }
    if(event.target.className === 'cw_btn_load')
    {     
    
        cwDigitalData("", "load_more_click", arr) 
    }
    })
    });

   // BannerSlider
    bannerSectionSelectors.forEach(function(bannerSectionSelector)
    {
    bannerSectionSelector.addEventListener('click',function(event)
    { currentSectionObj=bannerSectionSelector;
    
    if(event.target.className === 'control-arrow control-next')
    { 
     cwDigitalData("", "image_right_scroll_click", arr) 
    
    }
   if(event.target.className === 'control-arrow control-prev')
    { 
        cwDigitalData("", "image_left_scroll_click", arr) 
    }
  
    })
    });


}).scroll(function () {

        var e = $(document).height() - $(window).height(),
        a = Math.floor(0.25 * e),
        n = Math.floor(0.5 * e),
        o = Math.floor(0.75 * e),
        c = Math.round($(window).scrollTop());
        
    
        a <= c && c < n && 0 === firstScrollDepth ? ((firstScrollDepth=1), (depth = "25")) : n <= c && c < o && 0 === secondScrollDepth ? ((secondScrollDepth=1), (depth = "50")) : o <= c && c < e && 0 === thirdScrollDepth ? ((thirdScrollDepth=1), (depth = "75")) : c === e && 0 === fourthScrollDepth && ((fourthScrollDepth=1), (depth = "100")),
        depth && !scrollDepth.includes(depth) &&
       (scrollDepth.push(depth) ,
        (arr = { "scrollDepth": depth }),
       ( cwDigitalData("", "page_scroll", arr)));
   
});
trackProductInfo=function(productData)
{
    var $this = $(currentSectionObj);       
 digitalData.product.push(
             {
                 'productInfo': {
                     'productID': productData.productID,
                     'productName':productData.productName,
                     'price': "",
                     'brand': productData.brand,
                     'quantity': productData.quantity,
                     
                 },
                 'attributes': {
                     'productPosition': parseInt(currentProductObj.getAttribute('data-index')),
                     'productAward': "",
                     'productFindingMethod':  $this.data('componentname'),
                     'productBrand':productData.brand,
                 },
                 'category': { 'primaryCategory':campaign_brand },
             });
              
}

trackComponentInfo = function ()
{
    var $this = $(currentSectionObj);
    compName = $this.data('componentname'),
    compVar = $this.data('component-variants'),
    compPos = $this.data('component-positions'),
    serviceProvideName = $this.data('service-provider'),
    compExpVar = $this.data('component-experience-variant');
    digitalData.component = [];
    digitalData.component.push({
        'componentInfo': {
            'componentID': compName,
            'name': compName,
            'experienceVariant': (compExpVar) ? compExpVar : 'default'
        },
        'attributes': {
            'brandOptin' :'',
            'position': compPos,
            'componentVariant': compVar,
            'reviewVendorName': (serviceProvideName) ? serviceProvideName : '',
            'promoCreative': '',
            'promoID':  '',
            'promoName': '',
            'promoPosition': compPos,
            'campaignWorkflow':  '',
            'toolName':  '',
            'surveyQuesAns': ''
        }
    });

}
cwDigitalData = function (t, e, p) {
    digitalData.component = [];
    digitalData.eventList = [];
    digitalData.product = [];

    if (typeof digitalData.event == 'undefined') {
        digitalData.event = [];
    }
    digitalData.trackEvent = function (e) {
        var eventDetails = (typeof e !== 'undefined' && e.eventInfo !== 'undefined') ? e.eventInfo : '';
        if (eventDetails) {
            var eventType = typeof eventDetails.type !== 'undefined' ? eventDetails.type : '';
            var eventAction = typeof eventDetails.eventAction !== 'undefined' ? eventDetails.eventAction : '';
            var eventName = eventType + (eventAction ? '_' + eventAction : '');
            eventName = eventName.toLowerCase().replace(/ /g, '_');

            eventProducts = (typeof digitalData.product !== 'undefined') ? digitalData.product : [];
            eventComponent = (typeof digitalData.component !== 'undefined') ? digitalData.component : [];
            eventPromotions = (typeof digitalData.promotion !== 'undefined') ? digitalData.promotion : [];
            e.product = eventProducts;
            e.component = eventComponent;
            e.promotions = eventPromotions;
            digitalData.eventList[eventName] = e;
            var launchEvent = document.createEvent("CustomEvent");
            launchEvent.initCustomEvent("launch_event", true, true, {
                'eventName': eventName,
                'payload': e,
                'eventProducts': eventProducts,
                'eventPromotions': eventPromotions,
                'eventComponent': eventComponent
            });
            document.body.dispatchEvent(launchEvent);
        }
    }

    switch (e) {
       
        case "product_click":
            trackComponentInfo();
            digitalData.product.push(
                {
                    'productInfo': {
                        'productID': p.productID,
                        'productName': p.productName,
                        'price': "",
                        'brand': p.brand,
                        'quantity': "1"
                    },
                    'attributes': {
                        'productPosition': "",
                        'productAward': "",
                        'productFindingMethod': "",
                        'productBrand':"",
                    },
                    'category': { 'primaryCategory':"" },
                });
            var ev = {};
            ev.eventInfo = {
                'type': ctConstants.trackEvent,
                'eventAction': ctConstants.productclick,
                'eventLabel': "Online-" + p.productName,// eLabel,
                'eventValue': 1,
            };
            ev.category = { 'primaryCategory': ctConstants.conversion }
            ev.subcategory = "Lead";
            digitalData.event.push(ev);
            // while (e = digitalData.event.shift()) {
            digitalData.trackEvent(e);
            //}
            digitalData.event = {
                push: digitalData.trackEvent
            };

            break;

        case "carousel_click":
            trackComponentInfo();
            var ev = {};
            ev.eventInfo = {
                'type': ctConstants.trackEvent,
                'eventAction': ctConstants.carouselClick,
                'eventLabel': "Online-CarouselClick",// eLabel,
                'eventValue': 1,
            };
            ev.category = { 'primaryCategory': ctConstants.engagement }
            ev.subcategory = "Interest";
            digitalData.event.push(ev);
            // while (e = digitalData.event.shift()) {
            digitalData.trackEvent(e);
            //}
            digitalData.event = {
                push: digitalData.trackEvent
            };

            break;


        case "image_right_scroll_click":
            trackComponentInfo();
            var ev = {};
        
            ev.eventInfo = {
                'type': ctConstants.trackEvent,
                'eventAction': ctConstants.imagerightscrollclick,
                'eventLabel': "Online-ImageRightScrollClick",// eLabel,
                'eventValue': 1,
            };
            ev.category = { 'primaryCategory': ctConstants.engagement }
            ev.subcategory = "Interest";
            digitalData.event.push(ev);
            digitalData.trackEvent(e);
            digitalData.event = {
                push: digitalData.trackEvent
            };

            break;
        case "image_left_scroll_click":
           trackComponentInfo();
            var ev = {};
           
            ev.eventInfo = {
                'type': ctConstants.trackEvent,
                'eventAction': ctConstants.imageleftscrollclick,
                'eventLabel': "Online-ImageLeftScrollClick",// eLabel,
                'eventValue': 1,
            };
            ev.category = { 'primaryCategory': ctConstants.engagement }
            ev.subcategory = "Interest";
        
            digitalData.event.push(ev);
            digitalData.trackEvent(e);
            digitalData.event = {
                push: digitalData.trackEvent
            };

            break;
        case "page_scroll":

            var ev = {};
            ev.eventInfo = {
                'type': ctConstants.trackEvent,
                'eventAction': ctConstants.pageScroll,
                'eventLabel': "Scroll Depth - " + p.scrollDepth + '%',// eLabel,
                'eventValue': 1,
            };
            ev.attributes = {
                'nonInteractive': {
                    'nonInteraction': 1
                }
            };
            ev.category = { 'primaryCategory': ctConstants.custom }
            ev.subcategory = "";
            digitalData.event.push(ev);
            digitalData.trackEvent(e);
            digitalData.event = {
                push: digitalData.trackEvent
            };
           console.log(ev);
            break;
        case "anchor_click":
            trackComponentInfo();
            var ev = {};
        
            ev.eventInfo = {
                'type': ctConstants.trackEvent,
                'eventAction': ctConstants.anchorLinkClicked,
                'eventLabel': "Online-AnchorLinkClicked",// eLabel,
                'eventValue': 1,
            };
            ev.category = { 'primaryCategory': ctConstants.engagement }
            ev.subcategory = "Interest";
            digitalData.event.push(ev);
            digitalData.trackEvent(e);
            digitalData.event = {
                push: digitalData.trackEvent
            };

            break;
            case "load_more_click":
                trackComponentInfo();
                var ev = {};
              
                ev.eventInfo = {
                    'type': ctConstants.trackEvent,
                    'eventAction': ctConstants.loadMore,
                    'eventLabel': "Online-LoadMoreClicked",// eLabel,
                    'eventValue': 1,
                };
                ev.category = { 'primaryCategory': ctConstants.engagement }
                ev.subcategory = "Interest";
                digitalData.event.push(ev);
              
                digitalData.trackEvent(e);
                digitalData.event = {
                    push: digitalData.trackEvent
                };
    
                break;
        case "shop_now":
            trackComponentInfo();
            trackProductInfo(p)
            var ev = {};
            ev.eventInfo = {
                'type': ctConstants.trackEvent,
                'eventAction': ctConstants.purchase,
                'eventLabel': "Online-" + p.productName,// eLabel,
                'eventValue': 1,
            };
            ev.category = { 'primaryCategory': ctConstants.conversion }
            ev.subcategory = "Lead";
            digitalData.event.push(ev);

            digitalData.trackEvent(e);

            digitalData.event = {
                push: digitalData.trackEvent
            };

            break;
        case "retailer_click":
            trackComponentInfo();
            digitalData.product.push(
                {
                    'productInfo': {
                        'productID': p.productID,
                        'productName': p.productName,
                        'price': p.price,
                        'brand': p.brand,
                        'quantity': p.quantity,
                        'sku':p.productID
                    },
                    'category': { 'primaryCategory': p.category },
                    'attributes': { 'productVariants':p.sku, 'country': "", 'productRetailer':p.retailerName, 'listPosition': compPos==undefined? '':compPos, 'integration': serviceProvideName==undefined? '':serviceProvideName },
                });
            var ev = {};
            ev.eventInfo = {
                'type': ctConstants.trackEvent,
                'eventAction': ctConstants.retailerClick,
                'eventLabel': "Online - " + p.productName + " | " + p.retailerName,// eLabel,
                'eventValue': 1,
            };
            ev.category = { 'primaryCategory': ctConstants.conversion }
            ev.subcategory = "Lead";
            digitalData.event.push(ev);

            digitalData.trackEvent(e);

            digitalData.event = {
                push: digitalData.trackEvent
            };

            break;
    }
}

