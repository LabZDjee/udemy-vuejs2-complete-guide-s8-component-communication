export var serverDataArray = [
  {
    id: 1,
    name: "Hokaido",
    details: `Officia dolore consectetur deserunt esse mollit ipsum cupidatat mollit.
    Veniam sit mollit elit eiusmod aute.
    Labore officia anim ex sint dolor do ea tempor cupidatat est.
    Nulla cillum tempor excepteur amet consequat aute aliqua proident.`,
    status: 'on',
    load: "27%"
  },
  {
    id: 2,
    name: "Honshu",
    details: `Proident ad enim mollit culpa quis in cupidatat occaecat nostrud.
    Anim commodo consequat deserunt cupidatat nulla aliquip elit labore et irure non sit cupidatat amet.
    Eu ea et dolor commodo tempor aute est consequat.
    Do cupidatat ad reprehenderit mollit cillum ullamco.`,
    status: 'on',
    load: '56%'
  },
  {
    id: 3,
    name: "Shikoku",
    details: `Laborum qui exercitation laborum pariatur anim Lorem.
    Adipisicing laboris proident irure id aliquip minim veniam nostrud.
    Do labore incididunt sit Lorem quis ullamco nulla exercitation enim quis do reprehenderit do commodo.
    Veniam do deserunt deserunt pariatur qui occaecat tempor officia consectetur esse magna excepteur. Elit eu aliqua dolor et.`,
    status: 'on',
    load: '12%'
  },
  {
    id: 4,
    name: "Kyushu",
    details: `Voluptate cillum ea sunt sit ipsum mollit esse ullamco irure.
    Nostrud ipsum velit commodo ad eiusmod sunt ut.
    Nostrud Lorem do in officia incididunt.
    Ullamco anim aliqua minim qui.
    Eiusmod ullamco et reprehenderit dolore do laborum ut anim non aliqua.
    Deserunt commodo consectetur adipisicing mollit occaecat laboris aute veniam dolor eiusmod.
    Amet eu fugiat eiusmod proident.`,
    status: 'off',
    load: 'N/A'
  },
  {
    id: 5,
    name: "Ryukyu",
    details: `Anim esse sunt velit proident.
    Excepteur pariatur aute amet mollit ipsum culpa cupidatat sit veniam nostrud sunt commodo velit.
    Enim esse do dolore mollit anim irure tempor quis id enim.
    Deserunt consequat mollit tempor et esse anim ullamco occaecat occaecat Lorem.
    Anim anim ipsum incididunt culpa ipsum non ullamco reprehenderit.
    Id eiusmod ea ipsum adipisicing.`,
    status: 'on',
    load: '87%'
  }
];

setInterval(() => {
  for(let server of serverDataArray) {
   const load=Math.floor(Math.random()*100);
   if(load%4) {
    server.load = `${load}%`
    ;
    server.status = "on";
   } else {
    server.load = "N/A";
    server.status = "off";
   }
 }
}, 3000);

import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
      clickedOnServer(id) {
          this.$emit('clickedOnServer', id);
      },
      selectServer(id) {
          this.$emit('selectServer', id);
      }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
