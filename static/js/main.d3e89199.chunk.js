(this["webpackJsonpui-auth-template-using-react"]=this["webpackJsonpui-auth-template-using-react"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},67:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"db",(function(){return y})),n.d(a,"auth",(function(){return S})),n.d(a,"firestoredb",(function(){return N}));var r={};n.r(r),n.d(r,"doCreateUserWithEmailAndPassword",(function(){return C})),n.d(r,"doSignInWithEmailAndPassword",(function(){return k})),n.d(r,"doSignOut",(function(){return P})),n.d(r,"doPasswordReset",(function(){return G})),n.d(r,"doPasswordChange",(function(){return T}));var s={};n.r(s),n.d(s,"doCreateUser",(function(){return I})),n.d(s,"doAddGift",(function(){return A})),n.d(s,"onceGetUsers",(function(){return U})),n.d(s,"doGetAnUnser",(function(){return E}));var c=n(3),i=n.n(c),o=n(48),u=n.n(o),l=(n(54),n(55),n(56),n(21)),d=n(11),j="/signup",b="/signin",h="/",O="/pw-forget",f=n(12),m=n(15),p=n(16),x=n(18),v=n(17),g=n(24),w=n(31);n(57),n(59),n(75);w.a.apps.length||w.a.initializeApp({apiKey:"AIzaSyAliVwD2otk-Zcm3ZUTqkOP76VU5RdmNxI",authDomain:"gift-list-40cc7.firebaseapp.com",databaseURL:"https://gift-list-40cc7-default-rtdb.firebaseio.com",projectId:"gift-list-40cc7",storageBucket:"gift-list-40cc7.appspot.com",messagingSenderId:"332949149966",appId:"1:332949149966:web:c80a0da4615b68eaca5f5f",measurementId:"G-ZZPV3B5BFE"});var y=w.a.database(),S=w.a.auth(),N=w.a.firestore(),C=function(e,t){return S.createUserWithEmailAndPassword(e,t)},k=function(e,t){return S.signInWithEmailAndPassword(e,t)},P=function(){return S.signOut()},G=function(e){return S.sendPasswordResetEmail(e)},T=function(e){return S.currentUser.updatePassword(e)},I=function(e,t,n){return y.ref("users/".concat(e)).set({name:t,email:n})},A=function(e,t){y.ref("wishlists/".concat(e)).set(t)},U=function(){return y.ref("users").once("value")},E=function(e){return y.ref("users/".concat(e)).once("value")},W=n(76),F=n(78),J=n(77),B=n(79),D=n(14),L=n(2),q=function(){return Object(L.jsx)(l.b,{color:"info",to:h,onClick:r.doSignOut,children:Object(L.jsx)(B.a,{children:"Sign Out"})})};n(67);function R(e){var t=Object(c.useState)(""),n=Object(D.a)(t,2),r=(n[0],n[1]),s=Object(c.useState)(!1),i=Object(D.a)(s,2),o=i[0],u=i[1],d=Object(c.useState)([]),j=Object(D.a)(d,2),h=j[0],O=j[1],f=Object(c.useState)(),m=Object(D.a)(f,2),p=(m[0],m[1]);Object(c.useEffect)((function(){x();a.db.ref("users/"+x()).on("value",(function(e){r(e.val())})),a.db.ref("users").on("value",(function(e){O(e.val())}));try{a.db.ref("wishlists").on("value",(function(e){p(e.val())}))}catch(e){}}),[]);var x=function(){try{return a.auth.currentUser.uid}catch(e){return""}};return Object(L.jsx)("div",{className:"navbar",children:null===S.currentUser?Object(L.jsx)(l.b,{to:b,children:Object(L.jsx)("button",{className:"blueButton",children:"SignIn/SignUp"})}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("button",{className:"blueButton",onClick:function(){return u(!o)},children:"View other wishlists"}),Object(L.jsx)("h2",{children:Object(L.jsxs)(l.b,{className:"homeLink",to:"/",children:[function(){try{return h[x()].name}catch(e){return"Home"}}()," (your wishlist)"]})}),Object(L.jsx)(q,{}),o&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{className:"popupBackground",onClick:function(){return u(!1)}}),Object(L.jsxs)("div",{className:"popup",children:[Object(L.jsx)("h2",{className:"ppTitle",children:"Check out someone else's wishlist"}),function(){var e=[];for(var t in h)t!==x()&&e.push(Object(L.jsx)("div",{className:"popupItem",children:Object(L.jsx)(l.b,{to:"/wishlist/"+t,onClick:function(){return u(!1)},children:h[t].name})},t));return e}()]})]})]})})}var V={name:"",email:"",passwordOne:"",passwordTwo:""},M=function(e,t){return function(){return Object(g.a)({},e,t)}},Y=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state=Object(f.a)({},V),e.onSubmit=function(t){var n=e.state,a=n.name,c=n.email,i=n.passwordOne,o=e.props.history;r.doCreateUserWithEmailAndPassword(c,i).then((function(t){s.doCreateUser(t.user.uid,a,c).then((function(){alert("Welcome "+a+"!\nwe have successfully created your account.")})).then((function(){r.doSignInWithEmailAndPassword(c,i),e.setState(Object(f.a)({},V)),o.push(h)}))})).catch((function(e){alert(e.message)})),t.preventDefault()},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.email,r=t.passwordOne,s=t.passwordTwo,c=r!==s||""===r||""===a||""===n,i="Password must contain at least 6 characters",o={color:"black"};return r.length<6?(i="Password must contain at least 6 characters",o={color:"red"}):r.length<=9&&r.length>=6?(i="Weak",o={color:"red"}):r.length<12?(i="Good",o={color:"blue"}):r.length>=12?(i="Strong",o={color:"green"}):(i="Password must contain at least 6 characters",o={color:"black"}),Object(L.jsx)("div",{className:"inputclass",children:Object(L.jsxs)(W.a,{children:[Object(L.jsx)("h2",{id:"mytexth2",children:"Sign Up"}),Object(L.jsx)("h5",{id:"mytexth5",children:"All fields are required to be filled"}),Object(L.jsxs)(F.a,{onSubmit:this.onSubmit,children:[Object(L.jsxs)(J.a,{children:[Object(L.jsx)(J.a.Prepend,{className:"inputlabel",children:"Full Name"}),Object(L.jsx)(F.a.Control,{type:"text",name:"name",id:"inputtext",placeholder:" John Jose",value:n,autoFocus:!0,required:!0,onChange:function(t){return e.setState(M("name",t.target.value))}})]}),Object(L.jsx)("br",{}),Object(L.jsxs)(J.a,{children:[Object(L.jsx)(J.a.Prepend,{className:"inputlabel",children:"Email"}),Object(L.jsx)(F.a.Control,{id:"inputtext",type:"email",name:"email",placeholder:" user@gmail.com",value:a,required:!0,onChange:function(t){return e.setState(M("email",t.target.value))}})]}),Object(L.jsxs)(J.a,{children:[Object(L.jsx)(J.a.Prepend,{className:"inputlabel",children:"Password"}),Object(L.jsx)(F.a.Control,{id:"inputtext",type:"password",name:"password",placeholder:"Password",value:r,required:!0,onChange:function(t){return e.setState(M("passwordOne",t.target.value))}})]}),Object(L.jsx)("p",{style:o,children:i}),Object(L.jsx)("br",{}),Object(L.jsxs)(J.a,{children:[Object(L.jsx)(J.a.Prepend,{className:"inputlabel",children:"Confirm Password"}),Object(L.jsx)(F.a.Control,{id:"inputtext",type:"password",name:"password",placeholder:"Confirm Password",value:s,required:!0,onChange:function(t){return e.setState(M("passwordTwo",t.target.value))}})]}),Object(L.jsx)("br",{}),Object(L.jsx)("div",{className:"text-center",children:Object(L.jsx)(B.a,{disabled:c,type:"submit",id:"mybutton",children:"Sign Up"})})]})]})})}}]),n}(c.Component),Z=function(){return Object(L.jsxs)("p",{id:"mylink",children:["Don't have an account? ",Object(L.jsx)(l.b,{to:j,id:"mylink",children:"Sign Up"})]})},_=Object(d.e)((function(e){var t=e.history;return Object(L.jsx)("div",{children:Object(L.jsxs)("div",{className:"div-flex",style:{marginTop:"110px"},children:[Object(L.jsx)("center",{children:Object(L.jsx)(Y,{history:t})}),Object(L.jsx)("br",{})]})})})),z={email:""},H=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state=Object(f.a)({},z),e.onSubmit=function(t){var n=e.state.email;r.doPasswordReset(n).then((function(){alert("We have sent you reset password link to your registered email address."),e.setState(Object(f.a)({},z))})).catch((function(e){alert(e.message)})),t.preventDefault()},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.state.email,n=""===t;return Object(L.jsx)("div",{className:"inputclass",children:Object(L.jsxs)(W.a,{style:{marginBottom:"150px"},children:[Object(L.jsx)("h2",{id:"mytexth2",children:"Reset Password"}),Object(L.jsxs)(F.a,{onSubmit:this.onSubmit,children:[Object(L.jsxs)(J.a,{children:[Object(L.jsx)(J.a.Prepend,{className:"inputlabel",children:"Email"}),Object(L.jsx)(F.a.Control,{type:"email",name:"email",id:"inputtext",placeholder:"Enter your registered email",value:t,required:!0,onChange:function(t){return e.setState((n="email",a=t.target.value,function(){return Object(g.a)({},n,a)}));var n,a}})]}),Object(L.jsx)("br",{}),Object(L.jsx)("div",{className:"text-center",children:Object(L.jsx)(B.a,{disabled:n,type:"submit",id:"mybutton",children:"Reset Password"})})]})]})})}}]),n}(c.Component),K=function(){return Object(L.jsx)("p",{children:Object(L.jsx)(l.b,{to:O,id:"mylink",children:"Forgot Password?"})})},Q=function(){return Object(L.jsx)("div",{className:"div-flex",children:Object(L.jsxs)("center",{style:{marginTop:"110px"},children:[Object(L.jsx)(H,{}),Object(L.jsx)("br",{})]})})},X=function(e,t){return function(){return Object(g.a)({},e,t)}},$={email:"",password:""},ee=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state=Object(f.a)({},$),e.onSubmit=function(t){var n=e.state,a=n.email,s=n.password,c=e.props.history;r.doSignInWithEmailAndPassword(a,s).then((function(){e.setState(Object(f.a)({},$)),c.push(h)})).catch((function(e){alert(e.message)})),t.preventDefault()},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.email,a=t.password,r=""===a||""===n;return Object(L.jsx)("div",{className:"inputclass",children:Object(L.jsxs)(W.a,{children:[Object(L.jsx)("h2",{id:"mytexth2",children:"Sign In"}),Object(L.jsxs)(F.a,{onSubmit:this.onSubmit,children:[Object(L.jsxs)(J.a,{children:[Object(L.jsx)(J.a.Prepend,{className:"inputlabel",children:"Email"}),Object(L.jsx)(F.a.Control,{id:"inputtext",type:"email",placeholder:"user@gmail.com",value:n,required:!0,autoFocus:!0,onChange:function(t){return e.setState(X("email",t.target.value))}})]}),Object(L.jsx)("br",{}),Object(L.jsxs)(J.a,{children:[Object(L.jsx)(J.a.Prepend,{className:"inputlabel",children:"Password"}),Object(L.jsx)(F.a.Control,{id:"inputtext",type:"password",placeholder:"Password",value:a,required:!0,onChange:function(t){return e.setState(X("password",t.target.value))}})]}),Object(L.jsx)("br",{}),Object(L.jsx)("div",{className:"text-center",children:Object(L.jsx)(B.a,{disabled:r,type:"submit",id:"mybutton",children:"Sign In"})})]}),Object(L.jsx)("hr",{})]})})}}]),n}(c.Component),te=Object(d.e)((function(e){var t=e.history;return Object(L.jsx)("div",{children:Object(L.jsxs)("center",{children:[Object(L.jsx)(ee,{history:t}),Object(L.jsx)(Z,{}),Object(L.jsx)(K,{}),Object(L.jsx)("br",{}),Object(L.jsx)("hr",{})]})})})),ne=i.a.createContext(null),ae=function(e){return function(t){var n=function(n){Object(x.a)(s,n);var r=Object(v.a)(s);function s(){return Object(m.a)(this,s),r.apply(this,arguments)}return Object(p.a)(s,[{key:"componentDidMount",value:function(){var t=this;a.auth.onAuthStateChanged((function(n){e(n)||t.props.history.push(b)}))}},{key:"render",value:function(){var e=this;return Object(L.jsx)(ne.Consumer,{children:function(n){return n?Object(L.jsx)(t,Object(f.a)(Object(f.a)({},e.props),{},{loggedUser:n})):null}})}}]),s}(i.a.Component);return Object(d.e)(n)}},re=function(e,t){return function(){return Object(g.a)({},e,t)}},se={passwordOne:"",passwordTwo:""},ce=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state=Object(f.a)({},se),e.onSubmit=function(t){var n=e.state.passwordOne;r.doPasswordUpdate(n).then((function(){e.setState(Object(f.a)({},se))})).catch((function(t){e.setState(re("error",t)),alert(t.message)})),t.preventDefault()},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.passwordOne,a=t.passwordTwo,r=n!==a||""===n,s="Password must contain at least 6 characters",c={color:"black"};return n.length<6?(s="Password must contain at least 6 characters",c={color:"red"}):n.length<=9&&n.length>=6?(s="Weak",c={color:"red"}):n.length<12?(s="Good",c={color:"blue"}):n.length>=12?(s="Strong",c={color:"green"}):(s="Password must contain at least 6 characters",c={color:"black"}),Object(L.jsxs)("div",{className:"inputclass",children:[Object(L.jsx)("br",{}),Object(L.jsx)("h5",{id:"mytextjambo",children:"Change Password"}),Object(L.jsx)(W.a,{children:Object(L.jsxs)(F.a,{onSubmit:this.onSubmit,children:[Object(L.jsxs)(J.a,{children:[Object(L.jsx)(F.a.Label,{className:"inputlabel",children:"New Password"}),Object(L.jsx)(F.a.Control,{type:"password",name:"password1",id:"inputtext",placeholder:"New Password",value:n,onChange:function(t){return e.setState(re("passwordOne",t.target.value))}})]}),Object(L.jsx)("p",{style:c,children:s}),Object(L.jsxs)(J.a,{children:[Object(L.jsx)(F.a.Label,{className:"inputlabel",children:"Confirm Password"}),Object(L.jsx)(F.a.Control,{type:"password",name:"password2",id:"inputtext",placeholder:"Confirm Password",value:a,onChange:function(t){return e.setState(re("passwordTwo",t.target.value))}})]}),Object(L.jsxs)("div",{className:"text-center",children:[Object(L.jsx)("br",{}),Object(L.jsx)(B.a,{disabled:r,type:"submit",id:"mybutton",children:"Change Password"})]})]})})]})}}]),n}(c.Component),ie=(c.Component,{name:"",email:"",error:null}),oe=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state=Object(f.a)({},ie),e}return Object(p.a)(n,[{key:"componentWillMount",value:function(){var e=this;y.ref("users/"+S.currentUser.uid).once("value").then((function(t){t&&e.setState(t.val())})).catch((function(e){alert(e.message)}))}},{key:"render",value:function(){var e=this;return Object(L.jsxs)("div",{children:[Object(L.jsx)(ne.Consumer,{children:function(t){return Object(L.jsx)(W.a,{style:{marginTop:"110px"},children:Object(L.jsxs)("center",{children:[Object(L.jsx)("div",{className:"div-flex",children:Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:e.state.name}),Object(L.jsx)("div",{children:e.state.email})]})}),Object(L.jsx)("br",{}),Object(L.jsx)(ce,{})]})})}}),Object(L.jsx)("hr",{}),Object(L.jsx)("br",{})]})}}]),n}(c.Component),ue=ae((function(e){return!!e&&"facebook.com"!==e.providerData[0].providerId}))(oe),le=n(27),de=n.n(le),je=n(33);n(70);function be(e){var t=e.setGiftItem,n=e.gift,a=e.handleSubmit,r=Object(c.useState)(!1),s=Object(D.a)(r,2),i=s[0],o=s[1],u=function(e,a,r){return Object(L.jsxs)("div",{className:"formItem",children:[Object(L.jsx)("label",{htmlFor:e,children:"".concat(a,":")}),Object(L.jsx)("input",{className:"input",id:e,type:r||"text",value:n[e]||"",onChange:function(n){t(e,n.target.value)}})]},e)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{className:"addNameButtonContainer",children:Object(L.jsx)("button",{className:"addWishlistButton",onClick:function(){return o(!i)},children:"Add Something to your Wishlist"})}),i&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{className:"popupBackground",onClick:function(){return o(!1)}}),Object(L.jsxs)("div",{className:"addForm",children:[Object(L.jsx)("h2",{className:"wishlistTitle",children:"Add an item to your wishlist"}),Object(L.jsxs)("form",{children:[u("name","Name"),u("image_url","Image url"),u("link","Link"),u("price","Approximate Price","number"),u("notes","Notes"),Object(L.jsx)("button",{type:"submit",className:"blueButton",onClick:function(){o(!1),a()},children:"Add To Wishlist"})]})]})]})]})}var he=n(44),Oe=n(43),fe=(n(71),n(36)),me=n(35);function pe(e){var t=e.item,n=e.isListOwner,r=e.getItem,s=e.index,i=e.handleDelete,o=e.askToGoIn,u=e.updateWishlistItem,l=Object(c.useState)([]),d=Object(D.a)(l,2),j=d[0],b=d[1];Object(c.useEffect)((function(){a.db.ref("users").on("value",(function(e){b(e.val())})),f(),m()}),[]);var h,O,f=function(){var e=Object(je.a)(de.a.mark((function e(){var n,a,r,c,i;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.gotten){e.next=2;break}return e.abrupt("return");case 2:n=t.gotten,a=Object(Oe.a)(n),e.prev=4,a.s();case 6:if((r=a.n()).done){e.next=15;break}if(c=r.value,j[c]){e.next=13;break}return(i=t).gotten.splice(t.gotten.indexOf(c),1),e.next=13,u(i,s);case 13:e.next=6;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),a.e(e.t0);case 20:return e.prev=20,a.f(),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[4,17,20,23]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(je.a)(de.a.mark((function e(){var n,a,r,c,i;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.wantToGet){e.next=2;break}return e.abrupt("return");case 2:n=t.wantToGet,a=Object(Oe.a)(n),e.prev=4,a.s();case 6:if((r=a.n()).done){e.next=15;break}if(c=r.value,j[c]){e.next=13;break}return(i=t).wantToGet.splice(t.wantToGet.indexOf(c),1),e.next=13,u(i,s);case 13:e.next=6;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),a.e(e.t0);case 20:return e.prev=20,a.f(),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[4,17,20,23]])})));return function(){return e.apply(this,arguments)}}(),p=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),x=function(){try{return a.auth.currentUser.uid}catch(e){return""}};return Object(L.jsxs)("div",{className:(O=t,O.gotten&&O.gotten.indexOf(x())>-1?"listItemGottenYou":O.gotten&&t.gotten.length>0&&-1===O.gotten.indexOf(x())?"listItemGotten":O.wantToGet&&t.wantToGet.length>0&&O.wantToGet.indexOf(x())>-1?"listItemWantToGet":"listItem"),children:[t.image_url&&Object(L.jsx)("img",{className:"image",src:t.image_url,alt:t.name}),Object(L.jsx)("div",{className:"name",children:t.name}),t.link&&Object(L.jsx)("a",{className:"link",href:t.link,children:"Visit link"}),t.price&&Object(L.jsxs)("div",{className:"price",children:["Approximate price: ",(h=t.price,p.format(h))]}),t.notes&&Object(L.jsxs)("div",{className:"notes",children:["Notes: ",t.notes]}),Object(L.jsxs)("div",{className:"actionButtons",children:[(n||!n&&t.isCustom&&t.gotten.includes(x()))&&Object(L.jsx)("button",{onClick:function(){return i(s,t)},title:"delete",children:Object(L.jsx)(fe.a,{icon:me.b})}),!n&&Object(L.jsx)("button",{onClick:function(){return r(s,t)},title:"Click if you are getting this",children:Object(L.jsx)(fe.a,{icon:me.a})}),!n&&Object(L.jsx)("button",{onClick:function(){return o(s,t)},title:"I want to get this with other people",children:Object(L.jsx)(fe.a,{icon:me.c})})]}),t.wantToGet&&t.wantToGet.length>0&&!n&&!(t.gotten&&t.gotten.length>0)&&Object(L.jsxs)("div",{className:"wantsToGetList",children:[function(e){return e.wantToGet.map((function(e,t){if(e&&j&&j[e])return Object(L.jsxs)("span",{className:"wantsToGetListName",children:[" ",t>0?"and ":"",j[e].name]},e)}))}(t),function(e){return 1===e.wantToGet.length?" wants someone to go in with them on this":" want someone to go in with them on this"}(t)]}),t.gotten&&t.gotten.length>0&&!n&&t.gotten.includes(x())&&Object(L.jsx)("div",{className:"youGotThis",children:"You're getting this"}),t.gotten&&t.gotten.length>0&&!n&&!t.gotten.includes(x())&&Object(L.jsxs)("div",{className:"gottenCover",children:["Gotten by:",function(e){return e.gotten.map((function(e){if(e&&j&&j[e])return Object(L.jsxs)("span",{children:[" ",j[e].name]},e)}))}(t)]})]})}n(72);function xe(e){var t=e.id,n=Object(c.useState)([]),r=Object(D.a)(n,2),i=r[0],o=r[1],u=Object(c.useState)(!0),l=Object(D.a)(u,2),d=l[0],j=l[1],b=Object(c.useState)(""),h=Object(D.a)(b,2),O=h[0],f=h[1],m=function(e,n){n.wantToGet?n.wantToGet.indexOf(x())>-1?n.wantToGet.splice(n.wantToGet.indexOf(x()),1):(n.wantToGet.push(x()),n.wantToGet=Object(he.a)(new Set(n.wantToGet))):n.wantToGet=[x()];var a,r=t;(a=i&&i[r]?JSON.parse(i[t]):[])[e]=n,s.doAddGift(r,JSON.stringify(a))},p=function(e,n){var a,r=t;(a=i&&i[r]?JSON.parse(i[t]):[]).splice(e,1),s.doAddGift(r,JSON.stringify(a))};Object(c.useEffect)((function(){j(x()===t);try{a.db.ref("wishlists").on("value",(function(e){o(e.val())}))}catch(e){}}),[]);var x=function(){try{return a.auth.currentUser.uid}catch(e){return""}},v=function(e,n){n.gotten?n.gotten.indexOf(x())>-1?n.gotten.splice(n.gotten.indexOf(x()),1):(n.gotten.push(x()),n.gotten=Object(he.a)(new Set(n.gotten))):n.gotten=[x()];var a,r=t;(a=i&&i[r]?JSON.parse(i[t]):[])[e]=n,s.doAddGift(r,JSON.stringify(a))},g=function(e,n){var a,r=t;(a=i&&i[r]?JSON.parse(i[t]):[])[n]=e,s.doAddGift(r,JSON.stringify(a))};return Object(L.jsxs)("div",{className:"listContainer",children:[function(){if(i&&!(i.length<1)&&i[t])return JSON.parse(i[t]).map((function(e,t){if(function(e){return!(!d||e.isCustom)||!d||!e.isCustom}(e))return Object(L.jsx)(pe,{item:e,isListOwner:d,getItem:v,index:t,handleDelete:p,askToGoIn:m,updateWishlistItem:g},t)}))}(),!d&&Object(L.jsxs)("div",{className:"customItem",children:[Object(L.jsx)("h3",{children:"Get something that's not on the list"}),Object(L.jsx)("input",{value:O,onChange:function(e){return f(e.target.value)},className:"customItemName",type:"text",placeholder:"What are you getting?"}),Object(L.jsx)("button",{className:"addCustomButton",onClick:function(e){e.preventDefault();var n,a=x(),r=t;(n=i&&i[r]?JSON.parse(i[t]):[]).push({name:O,gotten:[a],isCustom:!0}),s.doAddGift(r,JSON.stringify(n))},children:"Add"})]})]})}n(73);function ve(){var e=Object(c.useState)({}),t=Object(D.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),o=Object(D.a)(i,2),u=o[0],l=o[1],d=Object(c.useState)([]),j=Object(D.a)(d,2),b=(j[0],j[1]);Object(c.useEffect)((function(){a.db.ref("users").on("value",(function(e){b(e.val())}));try{a.db.ref("wishlists").on("value",(function(e){l(e.val())}))}catch(e){}}),[]);var h=function(){try{return a.auth.currentUser.uid}catch(e){return""}},O=function(){var e=Object(je.a)(de.a.mark((function e(t){var a,c,i;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=h(),(i=(c=u||{})&&c[a]?JSON.parse(c[a]):[]).push(n),r({}),s.doAddGift(a,JSON.stringify(i));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsx)("div",{children:h()?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(be,{setGiftItem:function(e,t){var a=n;a[e]=t,r(Object(f.a)({},a))},gift:n,handleSubmit:O}),Object(L.jsx)(xe,{id:h()})]}):Object(L.jsx)("h1",{className:"notLoggedIn",children:"Please log in to continue"})})}function ge(e){var t=Object(c.useState)([]),n=Object(D.a)(t,2),r=n[0],s=n[1];Object(c.useEffect)((function(){a.db.ref("users").on("value",(function(e){s(e.val())}))}),[]);var i=function(){return window.location.pathname.split("/wishlist/")[1]},o=function(){try{return a.auth.currentUser.uid}catch(e){return""}};return Object(L.jsxs)("div",{children:[Object(L.jsxs)("h1",{className:"pageTitle",children:[function(){var e=i();try{return"".concat(r[e].name,"'s")}catch(t){return""}}()," wishlist"]}),o()?i()!==o()?Object(L.jsx)(xe,{id:i()}):Object(L.jsx)("h1",{children:"This is your wishlist, You can't see it"}):Object(L.jsx)("h1",{children:"You must be logged in to see this wishlist"})]})}var we=function(e){return function(t){Object(x.a)(r,t);var n=Object(v.a)(r);function r(){var e;Object(m.a)(this,r);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return(e=n.call.apply(n,[this].concat(a))).state={authUser:null},e}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var e=this;a.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"render",value:function(){var t=this.state.authUser;return Object(L.jsx)(ne.Provider,{value:t,children:Object(L.jsx)(e,Object(f.a)({},this.props))})}}]),r}(i.a.Component)}((function(){return Object(L.jsxs)(l.a,{children:[Object(L.jsx)(R,{}),Object(L.jsx)(d.a,{exact:!0,path:h,component:ve}),Object(L.jsx)(d.a,{exact:!0,path:j,component:_}),Object(L.jsx)(d.a,{exact:!0,path:b,component:te}),Object(L.jsx)(d.a,{exact:!0,path:O,component:Q}),Object(L.jsx)(d.a,{exact:!0,path:"/account",component:ue}),Object(L.jsx)(d.a,{path:"/wishlist/:id",component:ge})]})})),ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};u.a.render(Object(L.jsx)(i.a.StrictMode,{children:Object(L.jsx)(we,{})}),document.getElementById("root")),ye()}},[[74,1,2]]]);
//# sourceMappingURL=main.d3e89199.chunk.js.map