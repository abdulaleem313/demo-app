(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,a,n){},268:function(e,a,n){"use strict";n.r(a);var t=n(1),o=n.n(t),i=n(15),l=n.n(i),r=(n(103),n(38)),s=n(39),c=n(41),u=n(40),m=n(42),d=n(93),h=(n(7),n(56)),p=n(57),g=n.n(p),f=n(94),v=n.n(f),b=n(58),w=n.n(b),C=n(96),k=n.n(C),y=n(97),E=n.n(y),O=function(e){function a(){var e,n;Object(r.a)(this,a);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={openSnackBar:!1,snackBarMessage:""},n.handleChange=function(e){var a=e.target,t=a.name;a.value;n.setState(Object(d.a)({},t,e.target.value))},n.loginFunction=function(e){n.setState({openSnackBar:!0,snackBarMessage:"User does not exists"}),v.a.post("api/login",n.state).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},n.handleClose=function(e){n.setState({openSnackBar:!1})},n}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("form",{className:e.container,noValidate:!0,autoComplete:"off"},o.a.createElement(g.a,{id:"outlined-email-input",label:"Email",className:e.textField,type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined",value:this.state.value,onChange:this.handleChange}),o.a.createElement(g.a,{id:"outlined-password-input",label:"Password",className:e.textField,type:"password",name:"password",autoComplete:"current-password",margin:"normal",variant:"outlined",value:this.state.value,onChange:this.handleChange}),o.a.createElement(w.a,{variant:"contained",color:"primary",className:e.button,onClick:this.loginFunction},"Login"),o.a.createElement(k.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.openSnackBar,autoHideDuration:6e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:o.a.createElement("span",{id:"message-id"},this.state.snackBarMessage),action:[o.a.createElement(w.a,{key:"undo",color:"secondary",size:"small",onClick:this.handleClose},"CLOSE"),o.a.createElement(E.a,{key:"close","aria-label":"Close",color:"inherit",className:e.close,onClick:this.handleClose})]}))}}]),a}(o.a.Component),j=Object(h.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap",flexDirection:"column",alignItems:"center",margin:"100px"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200}}})(O),x=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement(j,null)))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,a,n){e.exports=n(268)}},[[98,1,2]]]);
//# sourceMappingURL=main.b287f6b6.chunk.js.map