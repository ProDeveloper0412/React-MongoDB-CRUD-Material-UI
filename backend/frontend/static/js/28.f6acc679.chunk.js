(this["webpackJsonponline-tutors"]=this["webpackJsonponline-tutors"]||[]).push([[28],{545:function(e,a,t){"use strict";var n=t(12),r=t(13),s=t(15),l=t(14),i=t(0),c=t.n(i),o=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},c.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),c.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},c.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),c.a.createElement("span",null,this.props.label))}}]),t}(c.a.Component);a.a=o},546:function(e,a,t){"use strict";var n=t(12),r=t(13),s=t(15),l=t(14),i=t(0),c=t.n(i),o=t(658),p=t(659),d=t(200),u=t(38),m=t(20),h=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content-header row"},c.a.createElement("div",{className:"content-header-left col-md-9 col-12 mb-2"},c.a.createElement("div",{className:"row breadcrumbs-top"},c.a.createElement("div",{className:"col-12"},this.props.breadCrumbTitle?c.a.createElement("h2",{className:"content-header-title float-left mb-0"},this.props.breadCrumbTitle):"",c.a.createElement("div",{className:"breadcrumb-wrapper vx-breadcrumbs d-sm-block d-none col-12"},c.a.createElement(o.a,{tag:"ol"},c.a.createElement(p.a,{tag:"li"},c.a.createElement(u.b,{to:m.subRooter},c.a.createElement(d.a,{className:"align-top",size:15}))),c.a.createElement(p.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent),this.props.breadCrumbParent2?c.a.createElement(p.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent2):"",this.props.breadCrumbParent3?c.a.createElement(p.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent3):"",c.a.createElement(p.a,{tag:"li",active:!0},this.props.breadCrumbActive)))))))}}]),t}(c.a.Component);a.a=h},550:function(e,a,t){"use strict";t.d(a,"e",(function(){return o})),t.d(a,"a",(function(){return p})),t.d(a,"f",(function(){return d})),t.d(a,"d",(function(){return u})),t.d(a,"b",(function(){return m})),t.d(a,"c",(function(){return h})),t.d(a,"g",(function(){return g}));var n=t(541),r=t.n(n),s=t(542),l=t(6),i=t(107),c=t(108),o=function(e){return function(){var a=Object(s.a)(r.a.mark((function a(t){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n="",e&&e.page?(isNaN(e.page)&&(e.page=1),isNaN(e.perPage)&&(e.perPage=4),n="/levels?page=".concat(e.page,"&perPage=").concat(e.perPage)):n="/levels?page=1&perPage=4",a.next=4,i.a.get(n).then((function(a){t({type:l.F,data:a.data.levels,totalPages:a.data.totalPages,params:e})})).catch(c.c);case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(e){return function(a,t){var n=t().level.params,r=new FormData;r.append("image",e.file),r.append("name",e.name),r.append("description",e.description),i.a.post("/level/create",r).then((function(e){a({type:l.e,obj:e.data.doc}),a(o(n)),Object(c.d)("Successfully Submitted")})).catch(c.c)}},d=function(){return function(){var e=Object(s.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/levels").then((function(e){a({type:l.w,data:e.data.levels})}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},u=function(e){return function(a){return a({type:l.P,value:e})}},m=function(e){return function(a){i.a.delete("/level/"+e._id).then((function(t){a({type:l.m,obj:e}),Object(c.d)("Successfully  deleted!")})).catch(c.c)}},h=function(e){return function(a){i.a.put("/levels-delete",{ids:e}).then((function(e){e.data.relatedData&&e.data.relatedData.length>0&&Object(c.b)("".concat(e.data.relatedData.length," data has relevant data.")),e.data.deletedIds.length>0&&Object(c.d)("Successfully deleted"),a({type:l.n,ids:e.data.deletedIds})})).catch(c.c)}},g=function(e){return function(a,t){var n=new FormData;n.append("image",e.file),n.append("name",e.name),n.append("description",e.description);var r=t().level.params;i.a.put("/level/"+e._id,n).then((function(t){a({type:l.ab,obj:e}),a(o(r))})).catch(c.c)}}},567:function(e,a,t){},568:function(e,a,t){},878:function(e,a,t){"use strict";t.r(a);var n=t(12),r=t(13),s=t(15),l=t(14),i=t(0),c=t.n(i),o=t(632),p=t(633),d=t(546),u=t(301),m=t(534),h=t(540),g=t(535),f=t(533),b=t(631),v=t(606),E=t.n(v),w=t(3),P=t.n(w),N=t(607),D=t.n(N),x=t(50),C=t(159),y=t(216),k=t(210),S=t(189),j=t(190),O=t(163),F=t(188),R=t(27),L=t(550),A=t(541),I=t.n(A),z=t(542),U=t(578),T=t(603),_=t(151),H=t(42),V=t.n(H),W=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={_id:"",name:"Level",description:"description",img:"",file:null},e.addNew=!1,e.handleSubmit=function(){var a=Object(z.a)(I.a.mark((function a(t){var n;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:null!==e.props.data?e.props.updateData(t):(e.addNew=!0,e.props.addData(t)),n=Object.keys(e.props.dataParams).length?e.props.dataParams:{page:1,perPage:4},e.props.handleSidebar(!1,!0),e.props.getData(n);case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,a){null!==this.props.data&&null===e.data&&(this.props.data._id!==a._id&&this.setState({_id:this.props.data._id}),this.props.data.name!==a.name&&this.setState({name:this.props.data.name}),this.props.data.description!==a.description&&this.setState({description:this.props.data.description}),this.props.data.imgUrl!==a.imgUrl&&this.setState({img:this.props.data.imgUrl})),null===this.props.data&&null!==e.data&&this.setState({id:"",name:"new Level",description:"description",file:null,img:""}),this.addNew&&this.setState({id:"",name:"new Level",description:"description",img:"",file:null}),this.addNew=!1}},{key:"render",value:function(){var e=this,a=this.props,t=a.show,n=a.handleSidebar,r=a.data,s=this.state,l=s.name,i=s.description,o=s.img;return c.a.createElement("div",{className:P()("data-list-sidebar",{show:t})},c.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},c.a.createElement("h4",null,null!==r?"UPDATE DATA":"ADD NEW DATA"),c.a.createElement(_.a,{size:20,onClick:function(){return n(!1,!0)}})),c.a.createElement(V.a,{className:"data-list-fields px-2 mt-3",options:{wheelPropagation:!1}},c.a.createElement(U.a,{className:"text-center"},c.a.createElement("p",{className:"text-center text-info"},"size 200 * 200"),c.a.createElement("img",{className:"img-fluid",src:o,alt:l}),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mt-2"},c.a.createElement("label",{className:"btn btn-flat-primary",htmlFor:"update-image",color:"primary"},"Upload Image",c.a.createElement("input",{type:"file",id:"update-image",hidden:!0,onChange:function(a){console.log(a.target.files),a.target.files[0]&&e.setState({img:URL.createObjectURL(a.target.files[0]),file:a.target.files[0]})}})),c.a.createElement(u.a,{color:"flat-danger",onClick:function(){return e.setState({img:"",file:null})}},"Remove Image"))),c.a.createElement(U.a,null,c.a.createElement(T.a,{for:"data-name"},"Name"),c.a.createElement(b.a,{type:"text",value:l,placeholder:"Primary 1",onChange:function(a){return e.setState({name:a.target.value})},id:"data-name"})),c.a.createElement(U.a,null,c.a.createElement(T.a,{for:"data-category"},"Description"),c.a.createElement(b.a,{type:"textarea",id:"data-category",value:i,onChange:function(a){return e.setState({description:a.target.value})}}))),c.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},c.a.createElement(u.a,{color:"primary",onClick:function(){return e.handleSubmit(e.state)}},null!==r?"Update":"Submit"),c.a.createElement(u.a,{className:"ml-1",color:"danger",outline:!0,onClick:function(){return n(!1,!0)}},"Cancel")))}}]),t}(i.Component),J=t(545),M=t(20),Y=(t(567),t(568),{rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}}),q=function(e){return c.a.createElement("div",{className:"data-list-action"},c.a.createElement(C.a,{className:"cursor-pointer mr-1",size:20,onClick:function(){return e.currentData(e.row)}}),c.a.createElement(y.a,{className:"cursor-pointer",size:20,onClick:function(){e.deleteRow(e.row)}}))},B=function(e){return c.a.createElement("div",{className:"data-list-header d-flex justify-content-between flex-wrap",style:{paddingTop:4}},c.a.createElement("div",{className:"actions-left d-flex flex-wrap"},c.a.createElement(u.a,{className:"add-new-btn mr-1",color:"primary",onClick:function(){return e.handleSidebar(!0,!0)},outline:!0},c.a.createElement(k.a,{size:15}),c.a.createElement("span",{className:"align-middle"},"Add New")),c.a.createElement(u.a,{className:"mr-1",color:"danger",onClick:function(){return e.handleAction("DELETE")}},c.a.createElement(y.a,{size:15}),c.a.createElement("span",{className:"align-middle"},"Delete"))),c.a.createElement("div",{className:"actions-right d-flex flex-wrap mt-sm-0 mt-2"},c.a.createElement(m.a,{className:"data-list-rows-dropdown mr-1 d-md-block d-none"},c.a.createElement(h.a,{color:"",className:"sort-dropdown"},c.a.createElement("span",{className:"align-middle mx-50"},"".concat(e.index[0]," - ").concat(e.index[1]," of ").concat(e.total)),c.a.createElement(S.a,{size:15})),c.a.createElement(g.a,{tag:"div",right:!0},c.a.createElement(f.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(4)}},"4"),c.a.createElement(f.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(10)}},"10"),c.a.createElement(f.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(15)}},"15"),c.a.createElement(f.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(20)}},"20"))),c.a.createElement("div",{className:"filter-section"},c.a.createElement(b.a,{type:"text",onChange:function(a){return e.handleFilter(a)}}))))},G=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={data:[],totalPages:0,currentPage:0,columns:[{name:"Level Name",selector:"name",sortable:!0,minWidth:"300px",cell:function(e){return c.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Descritipn",selector:"description",sortable:!0},{name:"Image",selector:"imgUrl",minWidth:"220px",cell:function(e){return c.a.createElement("img",{className:"p-2",src:"".concat(e.imgUrl),height:"100",alt:e.name})}},{name:"Actions",sortable:!0,cell:function(a){return c.a.createElement(q,{row:a,getData:e.props.getData,parsedFilter:e.props.parsedFilter,currentData:e.handleCurrentData,deleteRow:e.handleDelete})}}],allData:[],value:"",rowsPerPage:4,sidebar:!1,currentData:null,selected:[],totalRecords:0,sortIndex:[],addNew:""},e.thumbView=e.props.thumbView,e.handleFilter=function(a){e.setState({value:a.target.value}),e.props.filterData(a.target.value)},e.handleRowsPerPage=function(a){var t=e.props,n=t.parsedFilter,r=t.getData,s=void 0!==n.page?n.page:1;x.a.push("".concat(M.subRooter,"/levels?page=").concat(s,"&perPage=").concat(a)),e.setState({rowsPerPage:a}),r({page:n.page,perPage:a})},e.handleSidebar=function(a){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.setState({sidebar:a}),!0===t&&e.setState({currentData:null,addNew:!0})},e.handleDelete=function(a){if(e.props.deleteData(a),e.props.getData(e.props.parsedFilter),e.state.data.length-1===0){var t="".concat(M.subRooter,"/levels");x.a.push("".concat(t,"?page=").concat(parseInt(e.props.parsedFilter.page-1),"&perPage=").concat(e.props.parsedFilter.perPage)),e.props.getData({page:e.props.parsedFilter.page-1,perPage:e.props.parsedFilter.perPage})}},e.handleCurrentData=function(a){e.setState({currentData:a}),e.handleSidebar(!0)},e.handlePagination=function(a){var t=e.props,n=t.parsedFilter,r=t.getData,s=void 0!==n.perPage?n.perPage:4,l="".concat(M.subRooter,"/levels");x.a.push("".concat(l,"?page=").concat(a.selected+1,"&perPage=").concat(s)),r({page:a.selected+1,perPage:s}),e.setState({currentPage:a.selected})},e.handleAction=function(a){if("DELETE"===a&&e.state.selected.length>0){var t=e.state.selected.map((function(e){return e._id}));e.props.deleteDatas(t)}},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.parsedFilter;(isNaN(e.page)||isNaN(e.perPage))&&(e.page=1,e.perPage=4),this.props.getData(e),this.props.getInitialData()}},{key:"render",value:function(){var e=this,a=this.state,t=a.columns,n=a.data,r=a.allData,s=a.totalPages,l=a.value,i=a.rowsPerPage,o=a.currentData,p=a.sidebar,d=a.totalRecords,u=a.sortIndex;return c.a.createElement("div",{className:"data-list ".concat(this.props.thumbView?"thumb-view":"list-view")},c.a.createElement(E.a,{columns:t,data:l.length?r:n,pagination:!0,paginationServer:!0,paginationComponent:function(){return c.a.createElement(D.a,{previousLabel:c.a.createElement(j.a,{size:15}),nextLabel:c.a.createElement(O.a,{size:15}),breakLabel:"...",breakClassName:"break-me",pageCount:s,containerClassName:"vx-pagination separated-pagination pagination-end pagination-sm mb-0 mt-2",activeClassName:"active",forcePage:e.props.parsedFilter.page?parseInt(e.props.parsedFilter.page-1):0,onPageChange:function(a){return e.handlePagination(a)}})},noHeader:!0,subHeader:!0,selectableRows:!0,responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,onSelectedRowsChange:function(a){return e.setState({selected:a.selectedRows})},customStyles:Y,subHeaderComponent:c.a.createElement(B,{handleSidebar:this.handleSidebar,handleFilter:this.handleFilter,handleRowsPerPage:this.handleRowsPerPage,rowsPerPage:i,total:d,index:u,handleAction:this.handleAction}),sortIcon:c.a.createElement(S.a,null),selectableRowsComponent:J.a,selectableRowsComponentProps:{color:"primary",icon:c.a.createElement(F.a,{className:"vx-icon",size:12}),label:"",size:"sm"}}),c.a.createElement(W,{show:p,data:o,updateData:this.props.updateData,addData:this.props.addData,handleSidebar:this.handleSidebar,thumbView:this.props.thumbView,getData:this.props.getData,dataParams:this.props.parsedFilter,addNew:this.state.addNew}),c.a.createElement("div",{className:P()("data-list-overlay",{show:p}),onClick:function(){return e.handleSidebar(!1,!0)}}))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.dataList.data.length!==a.data.length||a.currentPage!==e.parsedFilter.page?{data:e.dataList.data,allData:e.dataList.filteredData,totalPages:e.dataList.totalPages,currentPage:parseInt(e.parsedFilter.page)-1,rowsPerPage:parseInt(e.parsedFilter.perPage),totalRecords:e.dataList.totalRecords,sortIndex:e.dataList.sortIndex}:null}}]),t}(i.Component),K=Object(R.b)((function(e){return{dataList:e.level}}),{getData:L.e,updateData:L.g,addData:L.a,getInitialData:L.f,filterData:L.d,deleteData:L.b,deleteDatas:L.c})(G),Q=t(562),X=t.n(Q),Z=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{breadCrumbTitle:"Levels",breadCrumbParent:"Data list",breadCrumbActive:"Levels"}),c.a.createElement(o.a,null,c.a.createElement(p.a,{sm:"12"},c.a.createElement(K,{thumbview:!0,parsedFilter:X.a.parse(this.props.location.search)}))))}}]),t}(c.a.Component);a.default=Z}}]);
//# sourceMappingURL=28.f6acc679.chunk.js.map