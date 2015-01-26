angular.module('sociogram.services', [])
.factory('PetService', function() {
  var events = {};
  var watchList = [];
        // {
        //     "watchName": "Amazon Product Number 42222",
        //     "watchPhoto": "http://i01.i.aliimg.com/wsphoto/v0/2044502801_1/2014-font-b-Bewell-b-font-Women-Dress-font-b-Watch-b-font-Super-Hot-font.jpg",
        //     "watchPrice": "$10",
        //     "watchLink": "http://www.google.com",
        //     "watchLikes": []
        // },
        // {
        //     "watchName": "Amazon Product Number 52222",
        //     "watchPhoto": "http://i.ebayimg.com/00/s/MTYwMFgxNDY2/z/-NsAAOxygPtSp-vc/$_35.JPG",
        //     "watchPrice": "$11",
        //     "watchLink": "http://www.google.com",
        //     "watchLikes": []
        // }
    // ];

  var single = {};
  var shopCatList = [
        {
            "catName": "Techie",
            "catPhoto": "http://i57.tinypic.com/10ek1p3.jpg"
        },
        {
            "catName": "Minimalist",
            "catPhoto": "http://i62.tinypic.com/5ys3nk.jpg"
        },
        {
            "catName": "Adventurous",
            "catPhoto": "http://i58.tinypic.com/mw6zhw.jpg"
        },
        {
            "catName": "Stylish",
            "catPhoto": "http://i61.tinypic.com/2rcy24z.jpg"
        },
        {
            "catName": "Modern",
            "catPhoto": "http://i62.tinypic.com/2821ism.jpg"
        },
        {
            "catName": "Under $20",
            "catPhoto": "http://i57.tinypic.com/wu3406.jpg"
        },
        {
            "catName": "Boyfriendy",
            "catPhoto": "http://i57.tinypic.com/2iuzw9l.jpg"
        },
        {
            "catName": "Outdoorsy",
            "catPhoto": "http://i59.tinypic.com/1zzt5i0.jpg"
        }
      ];
  var privateList = {};
  var userItem = false;
  // var userItem =   {
  //           "username": "ng225",
  //           "userFullName": "Nathan Grotticelli",
  //           "userEmail": "nathangrotticelli@gmail.com",
  //           "userPass": "Apples123",
  //           "userPic": "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",
  //           "likes": [   {
  //                   "tags": [
  //                       "MIN",
  //                       "BF",
  //                       "U20",
  //                       "STY"
  //                   ],
  //                   "watchLikes": [
  //                       "ng225"
  //                   ],
  //                   "watchLink": "http://www.amazon.com/Casio-MQ24-9B-Classic-Analog-Watch/dp/B0001XVUFA/ref=pd_sbs_watch_6?ie=UTF8&refRID=1WQGYZ2KJ38VJQ159X3Y",
  //                   "watchPrice": "$11",
  //                   "watchPhoto": "http://i57.tinypic.com/2iuzw9l.jpg",
  //                   "watchName": "Casio MQ24-9B Analog Classic Black",
  //                   "showPrice": false
  //               },
  //               {
  //                   "tags": [
  //                       "TCH",
  //                       "MDR",
  //                       "BF",
  //                       "U40"
  //                   ],
  //                   "watchLikes": [
  //                       "add1",
  //                       "add1",
  //                       "ng225"
  //                   ],
  //                   "watchLink": "http://www.amazon.com/Luxury-Bluetooth-iphone-Android-Samsung/dp/B00JL9AY02/ref=sr_1_1?s=apparel&ie=UTF8&qid=1421224569&sr=1-1&keywords=watches",
  //                   "watchPrice": "$31",
  //                   "watchPhoto": "http://i57.tinypic.com/10ek1p3.jpg",
  //                   "watchName": "2014 Red iPhone/Android Bluetooth Smartwatch",
  //                   "showPrice": false
  //               },
  //               {
  //                   "tags": [
  //                       "MDR",
  //                       "ADV",
  //                       "STY",
  //                       "DAD",
  //                       "OUT",
  //                       "100"
  //                   ],
  //                   "watchLikes": [
  //                       "add1",
  //                       "add1",
  //                       "add1",
  //                       "add1",
  //                       "add1",
  //                       "add1",
  //                       "add1",
  //                       "add1",
  //                       "ng225"
  //                   ],
  //                   "watchLink": "http://www.amazon.com/dp/B00FSEF6JI?psc=1",
  //                   "watchPrice": "$298",
  //                   "watchPhoto": "http://i60.tinypic.com/2z68dqf.jpg",
  //                   "watchName": "Calabria Aventura Chronograph with Carbon Fiber Bezel",
  //                   "showPrice": false
  //               },
  //               {
  //                   "tags": [
  //                       "MDR",
  //                       "MIN",
  //                       "STY",
  //                       "BF",
  //                       "U20"
  //                   ],
  //                   "watchLikes": [
  //                       "ng225"
  //                   ],
  //                   "watchLink": "http://www.amazon.com/Casio-MQ24-1E-Black-Resin-Watch/dp/B000GAWSHM/ref=sr_1_7?ie=UTF8&qid=1421219748&sr=8-7&keywords=watches",
  //                   "watchPrice": "$13",
  //                   "watchPhoto": "http://i62.tinypic.com/5ys3nk.jpg",
  //                   "watchName": "Casio MQ24-1E Full Black Resin",
  //                   "showPrice": false
  //               },
  //               {
  //                   "tags": [
  //                       "MDR",
  //                       "ADV",
  //                       "STY",
  //                       "DAD",
  //                       "OUT",
  //                       "100"
  //                   ],
  //                   "watchLikes": [
  //                       "add1",
  //                       "add1",
  //                       "add1",
  //                       "add1",
  //                       "add1",
  //                       "add1",
  //                       "add1",
  //                       "add1",
  //                       "ng225"
  //                   ],
  //                   "watchLink": "http://www.amazon.com/dp/B00FSEF6JI?psc=1",
  //                   "watchPrice": "$298",
  //                   "watchPhoto": "http://i60.tinypic.com/2z68dqf.jpg",
  //                   "watchName": "Calabria Aventura Chronograph with Carbon Fiber Bezel",
  //                   "showPrice": false
  //               },
  //               {
  //                   "tags": [
  //                       "TCH",
  //                       "MDR",
  //                       "BF",
  //                       "U40"
  //                   ],
  //                   "watchLikes": [
  //                       "ng225",
  //                       "ng225"
  //                   ],
  //                   "watchLink": "http://www.amazon.com/Luxury-Bluetooth-iphone-Android-Samsung/dp/B00JL9AY02/ref=sr_1_1?s=apparel&ie=UTF8&qid=1421224569&sr=1-1&keywords=watches",
  //                   "watchPrice": "$31",
  //                   "watchPhoto": "http://i57.tinypic.com/10ek1p3.jpg",
  //                   "watchName": "2014 Red iPhone/Android Bluetooth Smartwatch",
  //                   "showPrice": false
  //               },
  //               {
  //                   "tags": [
  //                       "MDR",
  //                       "BF"
  //                   ],
  //                   "watchLikes": [
  //                       "ng225"
  //                   ],
  //                   "watchLink": "http://www.amazon.com/Invicta-Collection-Stainless-Steel-Watch/dp/B002PAPT1S/ref=swr_wa_1_ses",
  //                   "watchPrice": "$74",
  //                   "watchPhoto": "http://i57.tinypic.com/2vn11mq.jpg",
  //                   "watchName": "Invicta Stainless 6620",
  //                   "showPrice": false
  //               }
  //               ],
  //           "collections": []
  //       };
  var school = "";
  var unFriends = [];
  // var userProfId = "";
  var newUser = "no";
  var newNot = false;
 var tinderView = false;
  var singleView = false;
 var startCard = true;
 var userPic = "";
 var tabs = true;
  var backBtn = false;
 var cards = ["start"];
 var followCount = 0;
 var profilePic = "";


  var foll9 = function(watchList,event){

      // alert(watchedIndex);&&watchList[i].start_time==event.start_time
      for(i=0;i<watchList.length;i++){
        // alert(JSON.stringify(watchList));
      // alert(watchList[i].watched);
         if(watchList[i].name==event.name&&watchList[i].watched){
          // alert('yes');
           return true;
          }
        }
        // return false;
      };
 // var cardIndex = undefined;



  // var unFriends = [];
  // var notifications = {};

  return {
    getCache: function () {
                return profileCache;
            },
             getCatList: function () {
                return shopCatList;
            },
            getWatchList: function () {
                return watchList;
            },
            setWatchList: function(value) {
                watchList = value;
            },
          getEvents: function () {
                return events;
            },
            getSingle: function () {
                return single;
            },
            setSingle: function(event) {
                single = event;
            },
            setEvents: function(value) {
                events = value;
            },
            setFollowCount: function(value) {
                followCount = value;
            },
            getFollowCount: function(){
              return followCount;
            },
            setTabs: function(value) {
                tabs = value;
            },
            getTabs: function(){
              return tabs;
            },
            setProfPic: function(value) {
                profilePic = value;
            },
            getProfPic: function(){
              return profilePic;
            },
            setBack: function(value) {
                backBtn = value;
            },
            getBack: function(){
              return backBtn;
            },
            setSchool: function(schoolName) {
                school = schoolName;
            },
            getSchool: function () {
                return school;
            },
              setPrivateList: function(list) {
                privateList = list;
            },
            getPrivateList: function () {
                return privateList;
            },
             setNewNot: function(value) {
                newNot = value;
            },
            getNewNot: function () {
                return newNot;
            },
             setStart: function(value) {
                startCard = value;
            },
            getStart: function () {
                return startCard;
            },
            setTinderView: function(value) {
                tinderView = value;
            },
            getTinderView: function () {
                return tinderView;
            },
             setSingleView: function(value) {
                singleView = value;
            },
            getSingleView: function () {
                return singleView;
            },
            setCards: function(value) {
                cards = value;
            },
            getCards: function () {
              // event.watched=foll9(userItem.watchList,event);
              // if(cards[0]=="empty" && cards.length>1){
              //   cards.splice(0, 1);
              // }
              // || cards[0]=="empty"
              // if(cards[0] == "empty" && cards.length >1 ){

              // }
            if( cards[0]=="start"){
                // var answerArray = [];||cards[0] == "empty"
                // alert('here');
                // var a3 = events;
                cards = [];

                for(var key in events){
                  // events[key].watched3 = foll9(userItem.watchList, events[key]);

                   if(foll9(userItem.watchList, events[key])!= true){
                      // alert(cards[0]);
                      cards.push(events[key]);
                    }

                  }

                }
                else if(cards[0] == "empty"&&cards.length>1){
                  cards.splice(0, 1);
                }

                if(cards.length==0){
                 cards = ["empty"];
                }
               return cards;

            },
            flipWatched: function(event){
              events[event.name].watched=!events[event.name].watched;
            },
             getWatched: function(event){
              return events[event.name].watched;
            },
             setUNFriends: function(friends) {
                // alert('setting id');
                // alert(userProfId);
                unFriends = friends;

            },
            getUNFriends: function () {
                return unFriends;
            },
             setUser: function(uI) {
                // alert('setting id');
                // alert(userProfId);
                userItem = uI;

            },
            getUser: function () {
                return userItem;
            },
            setNewUser: function(userIs){
              newUser = userIs;

            },
            getUserPic: function () {
                return userPic;
            },
            setUserPic: function(value){
              userPic = value;
            },
            getNew: function () {
                return newUser;
            },
             logOut: function () {
                events = {};
                single = {};
                privateList = {};
                userItem = {};
                school = "";
                unFriends = [];
                // var userProfId = "";
                newUser = "no";
                // newNot = false;
                tinderView = false;
                singleView = false;
                startCard = true;
                cards = ["start"];
                followCount = 0;
            },
             refreshWatches: function(value) {
                var newWatchList = [];
                  for(a=0;a<value.length;a++){
                      if(newWatchList.indexOf(value[a])==-1){
                        newWatchList.push(value[a]);
                      }
                    }
                watchList = newWatchList;
          }
        //       refreshWatches: function(value) {
        //         var newWatchList = [];
        //           for(a=0;a<value.length;a++){
        //               if(newWatchList.indexOf(value[a])<0){
        //                 // alert(watchList.indexOf(value[a]));
        //               alert('new event');
        //                 newWatchList.push(value[a]);
        //               }
        //             }
        //         watchList = newWatchList;
        //   }
        // }
        }
});
