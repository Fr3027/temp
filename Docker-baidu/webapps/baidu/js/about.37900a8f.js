(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("v-card",[a("v-card-title",[t._v("\n      Nutrition\n      "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{items:t.desserts,pagination:t.pagination,"total-items":t.totalDesserts,loading:t.loading,headers:t.headers,"hide-actions":"","rows-per-page-items":"6"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-left title"},[a("a",{attrs:{href:e.item.url}},[t._v(t._s(e.item.title))])]),a("td",{staticClass:"text-xs-left"},[a("v-btn",{staticStyle:{backgroundColor:"red"},on:{click:function(a){return t.disable(e.item.problemId)}}},[t._v("删除")])],1)]}},{key:"no-results",fn:function(){return[a("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[t._v('Your search for "'+t._s(t.search)+'" found no results.')])]},proxy:!0}])}),a("div",{staticClass:"text-xs-center pt-2"},[a("v-pagination",{attrs:{length:t.totalDesserts,"total-visible":7},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1)],1)],1)},n=[],i=(a("ac6a"),a("8615"),a("6762"),a("2fdb"),a("386d"),a("bc3a")),o=a.n(i),r={data:function(){return{search:"",totalDesserts:0,desserts:[],loading:!0,pagination:{},selected:[],headers:[{text:"题目",align:"left",sortable:!1,value:"title"},{text:"操作",align:"left",sortable:!1,value:"operation"}]}},watch:{pagination:{handler:function(){var t=this;this.getDataFromApi().then(function(e){t.desserts=e.items,t.totalDesserts=e.total})},deep:!0},search:{handler:function(){var t=this;this.getDataFromApi().then(function(e){t.desserts=e.items,t.totalDesserts=e.total})}}},mounted:function(){var t=this;this.getDataFromApi().then(function(e){t.desserts=e.items,t.totalDesserts=e.total})},methods:{getDataFromApi:function(){var t=this;return this.loading=!0,new Promise(function(e,a){var s=t.pagination,n=(s.sortBy,s.descending,s.page),i=s.rowsPerPage;o.a.get("http://localhost:8080/question/all").then(function(a){t.loading=!1;var s=t.search.trim().toLowerCase(),o=a.data;s&&(o=o.filter(function(t){return Object.values(t).join(",").toLowerCase().includes(s)}));var r=o.length;i>0&&(o=o.slice((n-1)*i,n*i)),e({items:o,total:r})})})},disable:function(t){var e=this,a="http://localhost:8080/question/disable?problemId="+t;o.a.get(a).then(function(t){e.getDataFromApi().then(function(t){e.desserts=t.items,e.totalDesserts=t.total})})}}},l=r,c=a("2877"),d=a("6544"),u=a.n(d),p=a("0798"),h=a("8336"),f=a("b0af"),g=a("12b2"),v=a("8fea"),m=a("891e"),b=a("9910"),x=a("2677"),w=Object(c["a"])(l,s,n,!1,null,null,null);e["default"]=w.exports;u()(w,{VAlert:p["a"],VBtn:h["a"],VCard:f["a"],VCardTitle:g["a"],VDataTable:v["a"],VPagination:m["a"],VSpacer:b["a"],VTextField:x["a"]})}}]);
//# sourceMappingURL=about.37900a8f.js.map