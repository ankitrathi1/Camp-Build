//Digital Data Event
var arr = [];
var currentScrollDepth = '';
var contextualizationData = {};
var ctConstants = {};
var firstScrollDepth=0,secondScrollDepth=0,thirdScrollDepth=0,fourthScrollDepth=0;
var scrollDepth=[];
// var GA_ID = document.getElementById("analytics-id").value;
// var brandUrl = document.getElementById("rootUrl-id").value;
var GA_ID = "hdgfds";
var brandUrl ="dsfhsdfg";
var digitalData = {};
digitalData = {
    product: [],
    trackingInfo: { GID: "D259f49db56EUK0ba77884a2a1c46cPD", tool: [{ id: GA_ID }] },
    siteInfo: { channel: "", sitetype: "Digital 2.0" },
    page: { pageInfo: { destinationURL: brandUrl }, category: { pageType: "Home page" } },
};
var depth;
digitalData.event = [];
var contextualizationData = {};

(digitalData.trackingInfo = {}), (digitalData.trackingInfo.tool = [{}]), (digitalData.privacy = {}), (digitalData.page.attributes = {}), (digitalData.page.dmpattributes = {}), (digitalData.privacy.accessCategories = [{}]), (digitalData.privacy.accessCategories[0].domains = []), (digitalData.platform = []); digitalData.trackingInfo.tool[0] = {};
digitalData.trackingInfo.tool[1] = {}; digitalData.page.attributes.contentType = "home";

digitalData.component = [];
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
            (digitalData.trackingInfo.tool[1].id = "unilever-magnum-uk,unilever-global-allbrands")),
        (digitalData.privacy.accessCategories[0].domains[0] = brandUrl);
})(document);

//End Digital Data Event
$(document).ready(function () {
    var launchblock = document.createElement('script');


    launchblock.src = "https://assets.adobedtm.com/launch-ENfabe4aff7fd348db959a23445bf6f6da.js"
    launchblock.async = "async";
    launchblock.id = "launch";
    launchblock.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(launchblock);;          
   
    const selectorClass='.product_list_section';
    const sectionSelectors=document.querySelectorAll(selectorClass);
    const bannerClass='.carousel-slider';
    const bannerSectionSelectors=document.querySelectorAll(bannerClass);

      //ProductSlider
    sectionSelectors.forEach(function(sectionSelector)
    {
    sectionSelector.addEventListener('click',function(event)
    {
      
    if(event.target.className === 'react-multiple-carousel__arrow react-multiple-carousel__arrow--left')
    {     arr = { "ComponentName": sectionSelector.firstElementChild.innerText };
      
        cwDigitalData("", "image_left_scroll_click", arr) 
    }
    if(event.target.className === 'react-multiple-carousel__arrow react-multiple-carousel__arrow--right')
    {     arr = { "ComponentName": sectionSelector.firstElementChild.innerText };
      
        cwDigitalData("", "image_right_scroll_click", arr) 
    }
    if(event.target.className === 'cw_btn_load')
    {     
        arr = { "ComponentName": sectionSelector.firstElementChild.innerText };
       
        cwDigitalData("", "load_more_click", arr) 
    }
    })
    });

    //BannerSlider
//     bannerSectionSelectors.forEach(function(bannerSectionSelector)
//     {
//     sectionSelector.addEventListener('click',function(event)
//     {
      
//     if(event.target.className === 'control-arrow control-next')
//     { 
       
// 	cwDigitalData("", "image_right_scroll_click", arr) 
    
//     }
// if(event.target.className === 'control-arrow control-prev')
//     { 

//     cwDigitalData("", "image_left_scroll_click", arr) 
//     }
  
//     })
//     });
    // $(".react-multiple-carousel__arrow--right").click(function() {
    //     var id = $(this).closest("section")[0].firstElementChild.firstElementChild.innerText;
      
    //     arr = { "ComponentName": id };
    //     cwDigitalData("", "image_right_scroll_click", arr) 
    // });

    // $(".cw_btn_load").click(function() {
    //     var id = $(this).closest("section")[0].firstElementChild.firstElementChild.innerText;
      
    //     arr = { "ComponentName": id };
    //     cwDigitalData("", "load_more_click", arr) 
    // });
    

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
        case "country_list":
            var ev = {};
            ev.eventInfo = {
                'type': ctConstants.trackEvent,
                'eventAction': ctConstants.linkClick,
                'eventLabel': "Online-CountryClick",// eLabel,
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
        case "product_click":
            digitalData.product.push(
                {
                    'productInfo': {
                        'productID': p.productID,
                        'productName': p.productName,
                        'price': "",
                        'brand': p.brand,
                        'quantity': "1"
                    }
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
            digitalData.component.push({'componentInfo' :
            {
                'componentID':p.ComponentName,
                'componentName' : p.ComponentName
               }});
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
            digitalData.component.push({'componentInfo' :
            {
                'componentID':p.ComponentName,
                'componentName' : p.ComponentName
               }});
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
            digitalData.component.push({'componentInfo' :
            {
                'componentID':p.ComponentName,
                'componentName' : p.ComponentName
               }});
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
                digitalData.component.push({'componentInfo' :
                {
                    'componentID':p.ComponentName,
                    'componentName' : p.ComponentName
                   }});
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
            digitalData.product.push(
                {
                    'productInfo': {
                        'productID': p.productID,
                        'productName': p.productName,
                        'price': "",
                        'brand': p.brand,
                        'quantity': "1"
                    }
                });
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
            digitalData.product.push(
                {
                    'productInfo': {
                        'productID': p.productID,
                        'productName': p.productName,
                        'price': "",
                        'brand': p.brand,
                        'quantity': "1"
                    }
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

