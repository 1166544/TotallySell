(function () {
    'use strict';
    angular
      .module('app.services')
      .service("AboutService", AboutService);

    AboutService.$inject = [];
    /**
     * 公司简介服务
      * @returns {{getAboutData: getAboutData}}
     * @constructor
     */
    function AboutService(){
        return {
          getAboutData:getAboutData
        }

        /**
         * 公司简介数据
         * @returns {{}}
         */
        function getAboutData(){
          return {
              src:"../../img/about.jpg",
              desc:"Terry Richardson cardigan whatever gentrify Tumblr, gluten-free jean shorts cray Schlitz selvage DIY sustainable Helvetica sriracha.Banh mi ethical, put a bird on it VHS irony bicycle rights slow-carb literally retro skateboard ugh 90's Helvetica hashtag. Next level beard keffiyeh cornhole pork belly, slow-carb Schlitz. <br/><p>Revolutionary notebook with eco-friendly paper,advanced surface technology and digital sharing integration. </p>",
              title:"Flexible pricing plans.",
              subTitle:"to fulfill your needs and solve your problems"
          }
        }
    }
})();
