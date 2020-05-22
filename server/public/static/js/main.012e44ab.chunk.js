(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),l=a.n(o),s=a(7),c=a(8),i=a(10),u=a(9),m=a(34),p=(a(89),a(90),a(41)),h=a(37),d=a(32),g=a.n(d),f=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e){var a=e.username,n=e.email,r=e.password,o=e.profileImg;return t.service.post("/signup",{username:a,email:n,password:r,profileImg:o})},this.login=function(e){var a=e.username,n=e.password;return t.service.post("/login",{username:a,password:n})},this.logout=function(){return t.service.post("/logout")},this.isLoggedIn=function(){return t.service.get("/loggedin")},this.service=g.a.create({baseURL:"".concat("https://revitalize.herokuapp.com","/api"),withCredentials:!0})},E=a(11),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).logout=function(){n.props.setTheUser(!1),n.authService.logout()},n.authService=new f,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{expand:"xs"},r.a.createElement(p.a.Brand,{as:"div"},r.a.createElement(E.b,{to:"/"},r.a.createElement("img",{src:"/images/logo_name_green.svg"}))),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,null,r.a.createElement(h.a.Link,{as:"div"},r.a.createElement(E.b,{to:"/"}," ",r.a.createElement("img",{src:"/images/icon_home.svg"})," Home")),r.a.createElement(h.a.Link,{as:"div"},r.a.createElement(E.b,{to:"/projects"}," ",r.a.createElement("img",{src:"/images/filter.svg"})," Discover projects")),this.props.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a.Link,{as:"div"},r.a.createElement(E.b,{to:"/profile"},r.a.createElement("img",{style:{width:"30px",borderRadius:"15px",marginRight:"10px",marginLeft:"6px"},src:this.props.loggedInUser.profileImg})," My profile")),r.a.createElement(p.a.Text,{style:{color:"white"}},this.props.loggedInUser?"Wallet: "+this.props.loggedInUser.wallet+"\u20ac":null),r.a.createElement(h.a.Link,{style:{color:"white"},as:"div",onClick:this.logout},"Close session")):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a.Link,{as:"div"},r.a.createElement(E.b,{to:"/login"},"Login")),r.a.createElement(h.a.Link,{as:"div"},r.a.createElement(E.b,{to:"/signup"},"Sign up"))))))}}]),a}(n.Component),j=a(14),b=function e(){var t=this;Object(s.a)(this,e),this.getAllProjects=function(){return t.service.get("/getAllProjects")},this.getProject=function(e){return t.service.get("/getOneProject/".concat(e))},this.createProject=function(e){return t.service.post("/postProject",e)},this.updateProject=function(e){return t.service.post("/updateProject/",e)},this.addHelper=function(e){return t.service.post("/addHelper",e)},this.service=g.a.create({baseURL:"".concat("https://revitalize.herokuapp.com","/api"),withCredentials:!0})},y=(a(113),a(12)),I=a(22),O=function(e){return r.a.createElement(y.a,{lg:3,md:6},r.a.createElement(I.a,{as:"article",className:"project-list-card"},r.a.createElement(I.a.Img,{variant:"top",src:e.photos}),r.a.createElement(I.a.Body,null,r.a.createElement(I.a.Title,null,e.description),r.a.createElement("hr",null),r.a.createElement("small",null,"#",e.projectType),r.a.createElement("p",null,e.loc.city),r.a.createElement(E.b,{to:"/projects/".concat(e._id),className:"btn-primary  btn-block"},"see more details"))))},U=a(27),w=function e(){var t=this;Object(s.a)(this,e),this.handleUpload=function(e){return t.service.post("/upload",e)},this.handleUploadProfilePic=function(e){return t.service.post("/uploadProfileImg",e)},this.handleUploadPhotos=function(e){return t.service.post("/uploadPhotos",e)},this.service=g.a.create({baseURL:"".concat("https://revitalize.herokuapp.com","/api"),withCredentials:!0})},C=a(56),S=a.n(C),P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({city:e})},n.handleSelect=function(e){Object(C.geocodeByAddress)(e).then((function(e){return Object(C.getLatLng)(e[0])})).then((function(t){return n.setState(Object(j.a)(Object(j.a)({},n.state),{},{coordinates:t,city:e}))})).then((function(e){n.props.getData(n.state)})).catch((function(e){return console.error("Error",e)}))},n.state={city:"",coordinates:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,{value:this.state.city,onChange:this.handleChange,onSelect:this.handleSelect,searchOptions:this.searchOptions},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,o=e.loading;return r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("input",t({placeholder:"Write your address",className:"location-search-input"})),r.a.createElement("div",{className:"autocomplete-dropdown-container"},o&&r.a.createElement("div",null,"Loading..."),a.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item";return r.a.createElement("div",n(e,{className:t}),r.a.createElement("span",null,e.description))}))))})))}}]),a}(r.a.Component),N=a(17),k=a(5),x=a(18),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleFileUpload=function(e){var t=new FormData;t.append("photos",e.target.files[0]),n.fileService.handleUploadPhotos(t).then((function(e){console.log("El archivo ya se ha subido. La URL de cloudinary es: ",e.data.secure_url),n.setState({photos:e.data.secure_url})})).catch((function(e){return console.log(e)}))},n.getData=function(e){n.setState(Object(j.a)(Object(j.a)({},n.state),{},{loc:{city:e.city,coordinates:[e.coordinates.lat,e.coordinates.lng]}}))},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(U.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault(),console.log(n.state),n.projectService.createProject(n.state).then((function(){return n.props.finishProjectPost()})).catch((function(e){return console.log(e)}))},n.state={goal:0,helpersNeeded:0,projectType:"",description:"",photos:"",author:n.props.creator,loc:{city:"",coordinates:[]}},n.projectService=new b,n.fileService=new w,n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(N.a,null,r.a.createElement("h3",null,"Create new project"),r.a.createElement("hr",null),r.a.createElement(k.a,{onSubmit:this.handleSubmit},r.a.createElement(k.a.Group,{controlId:"photos"},r.a.createElement(k.a.Label,null,"Photo"),r.a.createElement(k.a.Control,{name:"photos",type:"file",onChange:this.handleFileUpload})),r.a.createElement(k.a.Group,{controlId:"goal"},r.a.createElement(k.a.Label,null,"Goal"),r.a.createElement(k.a.Control,{name:"goal",type:"number",value:this.state.goal,onChange:this.handleInputChange})),r.a.createElement(k.a.Group,{controlId:"helpersNeeded"},r.a.createElement(k.a.Label,null,"How many helpers do you need?"),r.a.createElement(k.a.Control,{name:"helpersNeeded",type:"number",value:this.state.helpersNeeded,onChange:this.handleInputChange})),r.a.createElement(k.a.Group,{controlId:"loc"},r.a.createElement(k.a.Label,null,"Address"),r.a.createElement(P,{getData:function(t){return e.getData(t)}})),r.a.createElement(k.a.Group,{controlId:"projectType"},r.a.createElement(k.a.Label,null,"Project type"),r.a.createElement(k.a.Control,{as:"select",name:"projectType",value:this.state.projectType,onChange:this.handleInputChange},r.a.createElement("option",{value:"restructuring"},"Restructuring"),r.a.createElement("option",{value:"nature cleaning"},"Nature Cleaning"),r.a.createElement("option",{value:"beach cleaning"},"Beach cleaning"),r.a.createElement("option",{value:"city cleaning"},"City cleaning"))),r.a.createElement(k.a.Group,{controlId:"description"},r.a.createElement(k.a.Label,null,"Description"),r.a.createElement(k.a.Control,{name:"description",as:"textarea",rows:"2",type:"text",value:this.state.description,onChange:this.handleInputChange})),r.a.createElement(x.a,{type:"submit"},"Create"),r.a.createElement(x.a,{onClick:function(){return e.props.closeModal()},style:{marginRight:"10px"}},"Close")))}}]),a}(n.Component),T=a(15),M=a(36),D=a(40),_=a(38),A=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleModal=function(e){return n.setState({modalShow:e})},n.handletoast=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(j.a)({},n.state.toast);a.show=e,a.text=t,n.setState({toast:a})},n.getAllProjects=function(){n.projectService.getAllProjects().then((function(e){return n.setState({projects:e.data})})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){n.getAllProjects()},n.finishProjectPost=function(){n.props.fetchUser(),n.getAllProjects(),n.handleModal(!1),n.handletoast(!0,"Saved in the Data Base")},n.state={modalShow:!1,toast:{show:!1,text:""},projects:null},n.projectService=new b,n}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this;return r.a.createElement("div",{className:"projects"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"Discover"),this.props.loggedInUser&&r.a.createElement(x.a,{onClick:function(){return t.handleModal(!0)},className:"btn-primary",style:{marginBottom:"20px"}},"Create new project"),this.state.projects?r.a.createElement(T.a,{className:"projects-list"},this.state.projects.map((function(e){return r.a.createElement(O,Object.assign({key:e._id},e))}))):r.a.createElement(_.a,{className:"spinner",animation:"border",variant:"success"}),r.a.createElement(D.a,{className:"create-modal",show:this.state.modalShow,onHide:function(){return t.handleModal(!1)}},r.a.createElement(D.a.Body,null,r.a.createElement(L,{creator:null===(e=this.props.loggedInUser)||void 0===e?void 0:e._id,finishProjectPost:this.finishProjectPost,closeModal:function(){return t.handleModal(!1)}}))),r.a.createElement(M.a,{onClose:function(){return t.handletoast(!1)},show:this.state.toast.show,delay:3e3,autohide:!0},r.a.createElement(M.a.Header,null,r.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),r.a.createElement("strong",{className:"mr-auto"},"Message")),r.a.createElement(M.a.Body,null,this.state.toast.text)))}}]),a}(n.Component),G=a(82),B=a.n(G);var H=function(){return r.a.createElement("div",{className:"marker"}," ",r.a.createElement("img",{src:"/images/map-pin.svg",alt:"Marker icon"})," ")},R=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={lat:40.4167754,lng:-3.7037901999999576},n}return Object(c.a)(a,[{key:"handleDrag",value:function(e){console.log(e)}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"30vh",width:"100%",zIndex:0}},r.a.createElement(B.a,{bootstrapURLKeys:{key:"AIzaSyDIWdJ4o3I1-dUrUoErrs2TCeBfd2_oEBA"},defaultCenter:this.props.pos&&this.props.pos,defaultZoom:this.props.zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){e.map,e.maps}},this.props.marker&&r.a.createElement(H,{lat:this.props.pos.coordinates,lng:this.props.pos.coordinates,draggable:!1,text:"Dirty place"})))}}]),a}(n.Component);R.defaultProps={center:{lat:40.4167754,lng:-3.7037901999999576},zoom:16};var F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(U.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state.amount,a={modifiedAmount:n.props.project.currentAmount+=Number(t),modifiedWallet:n.props.creator.wallet-=Number(t),modifiedMoneySpent:n.props.creator.moneySpent+=Number(t),project:n.props.project._id,creator:n.props.creator._id};console.log("En el submit ---\x3e"),console.log(a),n.projectService.updateProject(a).then((function(e){return n.props.setTheUser(e.data[1])})).then((function(){return n.props.finishProjectPost()})).catch((function(e){return console.log(e)}))},n.state={amount:0},n.projectService=new b,n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(N.a,null,r.a.createElement(k.a,{onSubmit:this.handleSubmit},r.a.createElement(k.a.Group,{controlId:"contribution"},r.a.createElement(k.a.Label,null,"Your contribution"),r.a.createElement(k.a.Control,{name:"amount",type:"text",value:this.state.amount,onChange:this.handleInputChange})),r.a.createElement(x.a,{type:"submit"},"Complete"),r.a.createElement(x.a,{onClick:function(){return e.props.closeModal()},style:{marginRight:"10px"}},"Close")))}}]),a}(n.Component),z=(a(137),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleModal=function(e){return n.setState({modalShow:e})},n.handletoast=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(j.a)({},n.state.toast);a.show=e,a.text=t,n.setState({toast:a})},n.addHelper=function(){console.log(n.state.project._id,n.props.user._id),n.projectService.addHelper({project:n.state.project._id,helper:n.props.user._id}).then((function(e){return n.finishProjectPost()})).catch((function(e){return console.log(e)}))},n.finishProjectPost=function(){n.getProjectInfo(),n.handleModal(!1),n.handletoast(!0,"Your contribution changes the world in better"),n.props.fetchUser()},n.componentDidMount=function(){n.getProjectInfo()},n.state={project:null,modalShow:!1,toast:{show:!1,text:""}},n.projectService=new b,n}return Object(c.a)(a,[{key:"getProjectInfo",value:function(){var e=this,t=this.props.match.params.projectId;this.projectService.getProject(t).then((function(t){return e.setState({project:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.state.project?r.a.createElement(N.a,{as:"section",className:"project-details"},r.a.createElement(T.a,null,r.a.createElement(y.a,{md:{span:4,offset:1}},r.a.createElement(y.a,{md:6},r.a.createElement("img",{src:this.state.project.photos,alt:"Project photos"})),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Description: ",this.state.project.description)," ",r.a.createElement("br",null),r.a.createElement("li",null,r.a.createElement("strong",null,"Author: ",this.state.project.author.username)),r.a.createElement("hr",null),r.a.createElement("li",null,"Goal: ",this.state.project.currentAmount,"\u20ac / ",this.state.project.goal,"\u20ac - ",this.props.user&&r.a.createElement(x.a,{onClick:function(){return e.handleModal(!0)}},r.a.createElement("small",null,"Contribute"))," "),r.a.createElement("li",null,"Cleaners: ",this.state.project.helpers.length," / ",this.state.project.helpersNeeded," - ",this.props.user&&r.a.createElement(x.a,{onClick:function(){return e.addHelper()}},r.a.createElement("small",null,"Help"))))),r.a.createElement(D.a,{show:this.state.modalShow,className:"contribution-modal",onHide:function(){return e.handleModal(!1)}},r.a.createElement(D.a.Body,null,r.a.createElement(F,{setTheUser:this.props.setTheUser,project:this.state.project,creator:this.props.user,finishProjectPost:this.finishProjectPost,closeModal:function(){return e.handleModal(!1)}}))),r.a.createElement(M.a,{className:"contribution-toast",onClose:function(){return e.handletoast(!1)},show:this.state.toast.show,delay:3e3,autohide:!0},r.a.createElement(M.a.Header,null,r.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),r.a.createElement("strong",{className:"mr-auto"},"Cool!")),r.a.createElement(M.a.Body,null,this.state.toast.text))),r.a.createElement(R,{pos:this.state.project.loc.coordinates,marker:!0})):r.a.createElement(_.a,{className:"spinner",animation:"border",variant:"success"}))}}]),a}(n.Component)),W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleFileUpload=function(e){var t=new FormData;t.append("profileImg",e.target.files[0]),n.fileService.handleUploadProfilePic(t).then((function(e){console.log("El archivo ya se ha subido. La URL de cloudinary es: ",e.data.secure_url);var t=Object(j.a)({},n.state.loginInfo);t=Object(j.a)(Object(j.a)({},t),{},{profileImg:e.data.secure_url}),console.log(t),n.setState({loginInfo:t})})).catch((function(e){return console.log(e)}))},n.handleInputChange=function(e){var t=Object(j.a)({},n.state.loginInfo),a=e.target,r=a.name,o=a.value;t=Object(j.a)(Object(j.a)({},t),{},Object(U.a)({},r,o)),n.setState({loginInfo:t})},n.handleSubmit=function(e){e.preventDefault(),n.authService.signup(n.state.loginInfo).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/")})).catch((function(e){400===e.response.status&&n.setState({errorMessage:e.response.data.message})}))},n.state={loginInfo:{username:"",password:"",email:"",profileImg:""},errorMessage:""},n.authService=new f,n.fileService=new w,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(N.a,null,r.a.createElement(T.a,null,r.a.createElement(y.a,{md:{span:4,offset:4}},r.a.createElement("h3",null,"Sign up"),r.a.createElement("hr",null),r.a.createElement(k.a,{onSubmit:this.handleSubmit},r.a.createElement(k.a.Group,{controlId:"name"},r.a.createElement(k.a.Label,null,"Username"),r.a.createElement(k.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange})),r.a.createElement(k.a.Group,{controlId:"email"},r.a.createElement(k.a.Label,null,"Email"),r.a.createElement(k.a.Control,{name:"email",type:"email",value:this.state.email,onChange:this.handleInputChange})),r.a.createElement(k.a.Group,{controlId:"pwd"},r.a.createElement(k.a.Label,null,"Password"),r.a.createElement(k.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement(k.a.Group,{controlId:"profileImg"},r.a.createElement(k.a.Label,null,"Choose your profile pic"),r.a.createElement(k.a.Control,{name:"profileImg",type:"file",onChange:this.handleFileUpload})),r.a.createElement("p",{className:"error-message",style:{display:this.state.errorMessage?"block":"none"}},this.state.errorMessage),r.a.createElement(x.a,{variant:"primary",type:"submit"},"Sign up")),r.a.createElement("p",null,r.a.createElement("small",null,"Do you have already an account? ",r.a.createElement(E.b,{style:{color:"blue"},to:"/login"},"Login"))))))}}]),a}(n.Component),J=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=Object(j.a)({},n.state.loginInfo),a=e.target,r=a.name,o=a.value;t=Object(j.a)(Object(j.a)({},t),{},Object(U.a)({},r,o)),n.setState({loginInfo:t})},n.handleSubmit=function(e){e.preventDefault(),n.authService.login(n.state.loginInfo).then((function(e){console.log("response: ",e),n.props.setTheUser(e.data),n.props.history.push("/")})).catch((function(e){400===e.response.status&&n.setState({errorMessage:e.response.data.message})}))},n.state={loginInfo:{username:"",password:""},errorMessage:""},n.authService=new f,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(N.a,null,r.a.createElement(T.a,null,r.a.createElement(y.a,{md:{span:4,offset:4}},r.a.createElement("h3",null,"Login"),r.a.createElement("hr",null),r.a.createElement(k.a,{onSubmit:this.handleSubmit},r.a.createElement(k.a.Group,{controlId:"name"},r.a.createElement(k.a.Label,null,"Username"),r.a.createElement(k.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange})),r.a.createElement(k.a.Group,{controlId:"pwd"},r.a.createElement(k.a.Label,null,"Password"),r.a.createElement(k.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement("p",{className:"error-message",style:{display:this.state.errorMessage?"block":"none"}},this.state.errorMessage),r.a.createElement(x.a,{variant:"primary",type:"submit"},"Log in")),r.a.createElement("p",null,r.a.createElement("small",null,"Don\xb4t you have an account yet? ",r.a.createElement(E.b,{style:{color:"blue"},to:"/signup"},"Sign Up"))))))}}]),a}(n.Component),Y=function(e){return r.a.createElement(y.a,{xs:5},r.a.createElement(E.b,{to:"/projects/".concat(e._id)},r.a.createElement(I.a,{as:"article",className:"profile-card"},r.a.createElement(I.a.Img,{variant:"top",src:e.photos}),r.a.createElement(I.a.Body,null,r.a.createElement("p",null,e.loc.city)))))},q=(a(138),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getNewSets=function(){var e=[];return n.props.loggedInUser.contributing.forEach((function(t){return!e.includes(t)&&e.push(t)})),console.log(e),n.setState({contributingProj:e})},n.componentDidMount=function(){},n.state={contributingProj:[]},n.projectService=new b,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-container"},r.a.createElement(N.a,{as:"section",className:"profile-header"},r.a.createElement(T.a,{as:"header"},r.a.createElement(y.a,{xs:{span:6,offset:4}}," ",r.a.createElement("img",{alt:this.props.loggedInUser.username,src:this.props.loggedInUser.profileImg})," ")),r.a.createElement(T.a,{as:"article"},r.a.createElement(y.a,{xs:{span:6,offset:3}}," ",r.a.createElement("h6",null,this.props.loggedInUser.username)," ")),r.a.createElement(T.a,{as:"article"},r.a.createElement(y.a,{xs:{span:6,offset:3}}," Wallet: ",this.props.loggedInUser.wallet," \u20ac"))),r.a.createElement(N.a,{as:"section",className:"profile-projects "},r.a.createElement("h5",null,"Own projects"),r.a.createElement(T.a,{as:"article",className:"projects-profile flex-row flex-nowrap"},this.props.loggedInUser.ownProjects.map((function(e,t){return r.a.createElement(Y,Object.assign({key:t},e))}))),r.a.createElement("h5",null,"Contributing"),r.a.createElement(T.a,{as:"article",className:"projects-profile flex-row flex-nowrap"},this.props.loggedInUser.contributing.map((function(e,t){return r.a.createElement(Y,Object.assign({key:t},e))}))),r.a.createElement("h5",null,"Helping"),r.a.createElement(T.a,{as:"article",className:"projects-profile flex-row flex-nowrap"},this.props.loggedInUser.helping.map((function(e,t){return r.a.createElement(Y,Object.assign({key:t},e))}))),r.a.createElement(T.a,{className:"profile-button"},r.a.createElement(y.a,{xs:{span:12,offset:2}},r.a.createElement(E.b,{to:"/projects",className:"btn-primary"}," Discover new projects "))))))}}]),a}(n.Component)),K=function e(){var t=this;Object(s.a)(this,e),this.getUsers=function(){return t.service.get("/getAllUsers")},this.getOneUser=function(e){return t.service.get("/getOneUser/".concat(e))},this.updateUser=function(e){return t.service.post("/updateUser/".concat(e))},this.service=g.a.create({baseURL:"".concat("https://revitalize.herokuapp.com","/api"),withCredentials:!0})},Z=a(83),Q=a.n(Z),V=function(e){return r.a.createElement(y.a,{xs:3},r.a.createElement(I.a,{as:"article",className:"user-home-card"},r.a.createElement(I.a.Img,{variant:"top",src:e.profileImg}),r.a.createElement(I.a.Body,null,r.a.createElement("p",null,e.username),r.a.createElement("small",null,e.city))))},X=(a(140),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getLists=function(){e.userService.getUsers().then((function(t){return e.setState({allUsers:t.data})})).catch((function(e){return new Error(e)})).then(e.projectService.getAllProjects().then((function(t){return e.setState({projects:t.data})})).catch((function(e){return new Error(e)})))},e.componentDidMount=function(){e.getLists()},e.state={allUsers:null,projects:null,sortedUsers:null},e.projectService=new b,e.userService=new K,e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-container"},r.a.createElement("section",{className:"counter-section"},r.a.createElement(T.a,{className:"planet-img"},r.a.createElement("img",{src:"/images/globe.svg"})),r.a.createElement(T.a,{className:"counter"},r.a.createElement(Q.a,{start:0,end:22345,duration:4,separator:" ",decimals:0,decimal:",",suffix:" \u20ac donated! \ud83e\udd73"}))),r.a.createElement("section",{className:"most-recent"},r.a.createElement("header",null,r.a.createElement("h3",null,"The most recent")),this.state.projects&&this.state.allUsers?r.a.createElement(T.a,{className:"projects-list flex-row flex-nowrap "},this.state.projects.map((function(e){return r.a.createElement(Y,Object.assign({key:e._id},e))}))):r.a.createElement(_.a,{className:"spinner",animation:"border",variant:"success"})),r.a.createElement("section",{className:"info"},r.a.createElement("article",{className:"info-body"},r.a.createElement("h3",null,"Together we can change this world!"),r.a.createElement("br",null),r.a.createElement("p",null,"This planet is your home. Why not treat it as such? The only objective of Revitalize is to help you achieve it."))),r.a.createElement("section",{className:"top-ranks"},r.a.createElement("header",null," ",r.a.createElement("h3",null,"Our kings and queens")),r.a.createElement("article",null,this.state.projects&&this.state.allUsers?r.a.createElement(T.a,{className:"projects-list flex-row flex-nowrap "},this.state.allUsers.map((function(e){return r.a.createElement(V,Object.assign({key:e._id},e))}))):r.a.createElement(_.a,{className:"spinner",animation:"border",variant:"success"})))))}}]),a}(n.Component)),$=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).setTheUser=function(t){return e.setState({loggedInUser:t},(function(){return console.log("El estado de App ha cambiado:",e.state)}))},e.fetchUser=function(){e.authService.isLoggedIn().then((function(t){return e.setTheUser(t.data)})).catch((function(){return e.setTheUser(!1)}))},e.state={loggedInUser:null},e.authService=new f,e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){!this.state.loggedInUser&&this.fetchUser()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{setTheUser:this.setTheUser,loggedInUser:this.state.loggedInUser}),r.a.createElement("main",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,render:function(){return r.a.createElement(X,{loggedInUser:e.state.loggedInUser})}}),r.a.createElement(m.a,{path:"/projects",exact:!0,render:function(t){return r.a.createElement(A,{loggedInUser:e.state.loggedInUser,fetchUser:e.fetchUser})}}),r.a.createElement(m.a,{path:"/projects/:projectId",render:function(t){return r.a.createElement(z,Object.assign({setTheUser:e.setTheUser,fetchUser:e.fetchUser},t,{user:e.state.loggedInUser}))}}),r.a.createElement(m.a,{path:"/signup",render:function(t){return r.a.createElement(W,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(m.a,{path:"/login",render:function(t){return r.a.createElement(J,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(m.a,{path:"/profile",render:function(t){return e.state.loggedInUser?r.a.createElement(q,{loggedInUser:e.state.loggedInUser}):r.a.createElement(J,Object.assign({},t,{setTheUser:e.setTheUser}))}}))))}}]),a}(n.Component);l.a.render(r.a.createElement(E.a,null,r.a.createElement($,null)),document.getElementById("root"))},84:function(e,t,a){e.exports=a(141)},90:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.012e44ab.chunk.js.map