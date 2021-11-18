(this["webpackJsonpassignment-2"]=this["webpackJsonpassignment-2"]||[]).push([[0],{40:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var i,r,a,s,c,o,d,l,u=t(1),b=t.n(u),j=t(26),p=t.n(j),m=(t(40),t(3)),h=t(20),f=t(5),x=t(4),O=t(7),g=t(27),v=t(28),y=t(34),S=t(33),k=t(0),T=x.a.div(i||(i=Object(m.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),C=x.a.div(r||(r=Object(m.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),w=x.a.div(a||(a=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n  font-family: BubblegumSans;\n"]))),R=x.a.div(s||(s=Object(m.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),D=x.a.table(c||(c=Object(m.a)([""]))),V=function(e){Object(y.a)(t,e);var n=Object(S.a)(t);function t(){return Object(g.a)(this,t),n.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){return Object(k.jsxs)(T,{children:[Object(k.jsx)(w,{children:this.props.title}),Object(k.jsxs)(C,{children:[Object(k.jsx)(R,{children:this.props.component}),Object(k.jsx)(D,{children:Object(k.jsxs)("tbody",{children:[Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Prop"}),Object(k.jsx)("th",{children:"Description"}),Object(k.jsx)("th",{children:"Type"}),Object(k.jsx)("th",{children:"Default value"})]}),this.props.propDocs.map((function(e){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:e.prop}),Object(k.jsx)("td",{children:e.description}),Object(k.jsx)("td",{children:e.type}),Object(k.jsx)("td",{children:Object(k.jsx)("code",{children:e.defaultValue})})]},e.prop)}))]})})]})]})}}]),t}(b.a.Component),I=V,z={small:10,medium:14,large:20},P=x.a.div(o||(o=Object(m.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),E=x.a.span(d||(d=Object(m.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.color})),B=x.a.div(l||(l=Object(m.a)(["\n  display: flex;\n"]))),F=function(e){var n=e.color,t=e.size,i=z[t];return Object(k.jsxs)(P,{children:[Object(k.jsxs)(B,{children:[Object(k.jsx)(E,{size:i,color:n}),Object(k.jsx)(E,{size:i,color:n})]}),Object(k.jsxs)(B,{children:[Object(k.jsx)(E,{size:i,color:n}),Object(k.jsx)(E,{size:i,color:n})]})]})};F.defaultProps={size:"medium",color:"#ffa2bf"};var H,A,M,L,G,N,W=F,Y=t(14),U=t(35),X=t(2),J=t.n(X),K=(J.a.oneOf(["primary","secondary","danger"]),J.a.oneOf(["button","submit","reset"]),J.a.bool,J.a.oneOf(["text","number","submit"]),J.a.oneOfType([J.a.string,J.a.number]),J.a.string,J.a.string,J.a.string,J.a.string,J.a.oneOfType([J.a.arrayOf(J.a.node),J.a.node]),J.a.func,J.a.func,J.a.oneOfType([J.a.number,J.a.oneOf([""])]),J.a.oneOfType([J.a.number,J.a.oneOf([""])]),J.a.oneOfType([J.a.number,J.a.oneOf([""])]),J.a.number,J.a.number,J.a.bool,"#459Fd3"),q="#FFFFFF",Q="#2b3254",Z={btnPrimary:"#45D3AD",btnPrimaryHover:"#419786",btnSecondary:"#E16BBD",btnSecondaryHover:"#B64995",btnDanger:"#D34545",btnDangerHover:"#A42323",btnDisabled:"#DDDDDD",inputBackground:q,inputPlaceholder:K,textLight:q,textMedium:K,textDark:Q,timerSwitchTitle:Q,timerSwitchTitleActive:"#61cbf5",timerSelectorGradient1:"#617cb7",timerSelectorGradient2:Q,timerBgGradient1:"rgba(143,229,255,0.9)",timerBgGradient2:"rgba(0,20,168,0.8)"},$=x.a.div(H||(H=Object(m.a)(["\n    font-family: Lobster;\n    font-size: 2rem;\n"]))),_=["children","variant"],ee=x.a.div(A||(A=Object(m.a)(["\n    width: 300px;\n    justify-content: space-evenly;\n    display: flex;\n"]))),ne=x.a.button(M||(M=Object(m.a)(["\n    color: ",";\n    border: none;\n    padding: 10px 20px;\n    font-size: 30px;\n    font-weight: 700;\n    font-family: SourceCodePro;\n    :disabled {\n        background-color: ",";\n        cursor: not-allowed;\n        :hover {\n            background-color: ",";\n        }\n    }\n"])),Z.textLight,Z.btnDisabled,Z.btnDisabled),te=Object(x.a)(ne)(L||(L=Object(m.a)(["\n    background-color: ",";\n    :hover {\n        background-color: ",";\n    }\n"])),Z.btnPrimary,Z.btnPrimaryHover),ie=Object(x.a)(ne)(G||(G=Object(m.a)(["\n    background-color: ",";\n    :hover {\n        background-color: ",";\n    }\n"])),Z.btnSecondary,Z.btnSecondaryHover),re=Object(x.a)(ne)(N||(N=Object(m.a)(["\n    background-color: ",";\n    :hover {\n        background-color: ",";\n    }\n"])),Z.btnDanger,Z.btnDangerHover),ae=function(e){var n=e.children,t=e.variant,i=Object(U.a)(e,_);switch(t){case"secondary":return Object(k.jsx)(ie,Object(Y.a)(Object(Y.a)({},i),{},{children:n}));case"danger":return Object(k.jsx)(re,Object(Y.a)(Object(Y.a)({},i),{},{children:n}));default:return Object(k.jsx)(te,Object(Y.a)(Object(Y.a)({},i),{},{children:n}))}};ae.defaultProps={type:"button",disabled:!1,variant:"primary",children:"Click me"};var se,ce,oe=ae,de=function(e,n){if(e<0||"minutes"===n&&e>60||"seconds"===n&&e>60)throw new Error("invalid value for time segment");var t=e.toString();return t.length<2&&(t="0"+t),t},le=function(e){for(var n=[],t=0;t<e.length;t++)switch(t){case 0:n.push(de(e[t],"hours"));break;case 1:n.push(de(e[t],"minutes"));break;case 2:n.push(de(e[t],"seconds"));break;default:throw new Error("Cannot prepare date for convert; time may have greater length than expected.")}return n},ue=x.a.label(se||(se=Object(m.a)(["display:none;"]))),be=x.a.input(ce||(ce=Object(m.a)(["\n    background-color: ",";\n    border: none;\n    width: 50px;\n    padding: 5px;\n    border-radius: 3px;\n    font-family: SourceCodePro;\n\n    ::placeholder {\n        color: ",";\n        font-size: 20px;\n    }\n"])),Z.inputBackground,Z.inputPlaceholder),je=function(e){var n=e.type,t=e.name,i=e.onChange,r=e.disabled,a=e.placeholder,s=e.value,c=e.min,o=e.max;return Object(k.jsxs)(b.a.Fragment,{children:[Object(k.jsx)(ue,{name:t}),Object(k.jsx)(be,{onChange:function(e){var t=(e||{}).target,r=(t=void 0===t?{}:t).value,a=t.min,s=t.max;if("number"===n){var c=Math.max(Number(a),Math.min(Number(s),Number(r))).toFixed(0);e.target.value=de(c),i(e)}else i(r)},name:t,type:n,disabled:r,placeholder:a,value:s,min:c,max:o})]})};je.defaultProps={type:"text",disabled:!1,value:"",placeholder:"Enter text here..."};var pe,me=je,he=x.a.div(pe||(pe=Object(m.a)(["\n    font-size: 4em;\n    font-family: 'SourceCodePro';\n"]))),fe=function(e){var n=e.hours,t=e.minutes,i=e.seconds;return Object(k.jsxs)(he,{children:[de(n||0,"h"),":",de(t||0,"m"),":",de(i||0,"s")]})};fe.defaultProps={hours:0,minutes:0,seconds:0};var xe,Oe,ge=fe,ve=x.a.div(xe||(xe=Object(m.a)(["\n  font-family: BubblegumSans;\n  padding-bottom: 15px;\n  padding-top: 10px;\n"]))),ye=x.a.div(Oe||(Oe=Object(m.a)(["\n  font-family: BubblegumSans;\n"]))),Se=function(e){var n=e.currRound,t=e.totalRounds,i=e.isRest;return Object(k.jsxs)(ye,{children:["(Round: ",n,t>0&&Object(k.jsxs)("span",{children:[" of ",t]}),i&&Object(k.jsx)("span",{children:" - Rest"}),")"]})};Se.defaultProps={totalRounds:0,currRound:0,isRest:!1};var ke,Te,Ce,we,Re=Se,De=x.a.div(ke||(ke=Object(m.a)(["\n    background: linear-gradient(120deg, ",", ","), url('/assignment-2-Bianca-Morris/maarten-van-den-heuvel-unsplash-sm.jpg');\n    height: 390px;\n    width: 550px;\n    border-radius: 0 20px 20px 0;\n    padding: 15px 20px 5px 20px;\n    background-position: center;\n    background-size: cover;\n"])),Z.timerBgGradient1,Z.timerBgGradient2),Ve=x.a.div(Te||(Te=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    flex-shrink: 0;\n    border-radius: 20px;\n    border: 4px dotted #FFFFFF;\n    height: 380px;\n    width: 100%;\n    color: ",";\n"])),Z.textLight),Ie=function(e){var n=e.children;return Object(k.jsx)(De,{children:Object(k.jsx)(Ve,{children:n})})},ze=x.a.div(Ce||(Ce=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  font-family: BubblegumSans;\n  width: 100%;\n  justify-content: center;\n"]))),Pe=x.a.div(we||(we=Object(m.a)(["\n    display: flex;\n    width: 200px;\n    justify-content: space-between;\n    margin: 10px 5px;\n"]))),Ee=function(e){var n=e.disabled,t=e.hoursVal,i=e.minutesVal,r=e.secondsVal,a=e.onChange;return Object(k.jsxs)(Pe,{children:[Object(k.jsx)(me,{placeholder:"HH",value:t,type:"number",name:"hourInput",min:"0",max:"24",disabled:n,onChange:a}),Object(k.jsx)(me,{placeholder:"MM",value:i,type:"number",name:"minuteInput",min:"0",max:"59",disabled:n,onChange:a}),Object(k.jsx)(me,{placeholder:"SS",value:r,type:"number",name:"secondInput",min:"0",max:"59",disabled:n,onChange:a})]})};Ee.defaultProps={disabled:!1,hoursVal:0,minutesVal:0,secondsVal:0};var Be,Fe=Ee,He=t(12),Ae=t(13),Me=t(19),Le=t.p+"static/media/alarm.0ac31e5c.wav",Ge=t.p+"static/media/restStart.54f09e8a.wav",Ne=t.p+"static/media/roundEnd.a673b70c.wav",We=b.a.createContext({}),Ye=["","",""],Ue=function(e){var n=e.children,t=Object(u.useState)(Ye),i=Object(O.a)(t,2),r=i[0],a=i[1],s=Object(u.useState)(0),c=Object(O.a)(s,2),o=c[0],d=c[1],l=Object(u.useState)(!1),b=Object(O.a)(l,2),j=b[0],p=b[1],m=Object(u.useState)(!0),h=Object(O.a)(m,2),f=h[0],x=h[1],g=Object(u.useState)(Ye),v=Object(O.a)(g,2),y=v[0],S=v[1],T=Object(u.useState)(Ye),C=Object(O.a)(T,2),w=C[0],R=C[1],D=Object(u.useState)(Ye),V=Object(O.a)(D,2),I=V[0],z=V[1],P=Object(u.useState)(Ye),E=Object(O.a)(P,2),B=E[0],F=E[1],H=Object(u.useState)(1),A=Object(O.a)(H,2),M=A[0],L=A[1],G=Object(u.useState)(1),N=Object(O.a)(G,2),W=N[0],Y=N[1],U=Object(u.useState)(!0),X=Object(O.a)(U,2),J=X[0],K=X[1],q=Object(Me.a)(Le),Q=Object(O.a)(q,1)[0],Z=Object(Me.a)(Ne),$=Object(O.a)(Z,1)[0],_=Object(Me.a)(Ge),ee=Object(O.a)(_,1)[0],ne=r||[],te=ne[0],ie=ne[1],re=ne[2],ae=!!te||!!ie||!!re,se=!te&&ie&&re,ce=function(){de(),Q()},oe=function(e,n,t){var i=(e||{}).target,r=(i=void 0===i?{}:i).value,a=i.name,s=t||[],c=s[0],o=s[1],d=s[2],l=parseInt(r||0);switch(a){case"hourInput":n([l,o,d]);break;case"minuteInput":n([c,l,d]);break;case"secondInput":n([c,o,l]);break;default:throw new Error("Attempting to handle time change for unrecognized input.")}},de=function(e){p(!1)},le=function(e){f||a(3!==o?y:J?I:B),p(!0)};return Object(k.jsx)(We.Provider,{value:{hours:te,minutes:ie,seconds:re,startTime:y,endTime:w,numRounds:M,currRound:W,isTimerRunning:j,setStartTime:S,setEndTime:R,setTimer:a,setNumRounds:L,setCurrRound:Y,setTimerRunning:p,handleSetWorkTime:function(e){oe(e,z,I)},handleSetRestTime:function(e){oe(e,F,B)},handleSetStartTime:function(e){oe(e,S,y)},handleSetEndTime:function(e){oe(e,R,w)},handleStop:de,handleStart:le,handleReset:function(e){de(),a(Ye),Y(1),K(!0)},handleResume:function(e){f?le():p(!0)},tickUp:function(){var e=w||[],n=e[0],t=e[1],i=e[2];if((re||0)===(i||0)&&(ie||0)===(t||0)&&(te||0)===(n||0))ce();else{var r=59===re;a(r&&59===ie?[(te||0)+1,0,0]:r?[te,(ie||0)+1,0]:[te,ie,(re||0)+1])}},tickDown:function(e){te||ie||re?a(ie||re?re?[te,ie,re-1]:[te,ie-1,59]:[te-1,59,59]):e()},isIncrementing:f,setIsIncrementing:x,timerIdx:o,setTimerIdx:d,handleChangeNumRounds:function(e){var n=parseInt(e||0);L(n)},timerComplete:ce,roundComplete:function(){W!==M?($(),a(y),Y(W+1)):ce()},tabataRoundComplete:function(){J||W!==M?J?(ee(),a(B),K(!1)):($(),a(I),K(!0),Y(W+1)):ce()},isWorkTime:J,workTime:I,restTime:B,timerHasBeenStarted:ae,timerHasNotBeenStarted:se},children:n})},Xe=x.a.div(Be||(Be=Object(m.a)(["\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    >span {\n        font-size: 18px;\n    }\n    >svg {\n        margin-right: 5px;\n    }\n"]))),Je=function(e){var n=Object(u.useContext)(We),t=n.timerComplete,i=n.isTimerRunning,r=n.handleStop,a=n.handleStart,s=n.handleReset,c=n.handleResume,o=n.timerHasBeenStarted,d=e.stopDisabled,l=e.startDisabled,b=e.resetDisabled;return i?Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(ee,{children:[i&&Object(k.jsx)(oe,{onClick:r,variant:"danger",disabled:d,children:Object(k.jsxs)(Xe,{children:[Object(k.jsx)(He.a,{icon:Ae.c,size:"xs"}),Object(k.jsx)("span",{children:"STOP"})]})}),Object(k.jsx)(oe,{onClick:s,variant:"secondary",disabled:b,children:Object(k.jsxs)(Xe,{children:[Object(k.jsx)(He.a,{icon:Ae.d,size:"xs"}),Object(k.jsx)("span",{children:"RESET"})]})}),i&&Object(k.jsx)(oe,{onClick:function(){t(),s()},children:Object(k.jsxs)(Xe,{children:[Object(k.jsx)(He.a,{icon:Ae.a,size:"xs"}),Object(k.jsx)("span",{children:"SKIP"})]})})]})}):Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(ee,{children:[o&&Object(k.jsx)(oe,{onClick:c,disabled:l,children:Object(k.jsxs)(Xe,{children:[Object(k.jsx)(He.a,{icon:Ae.b,size:"xs"}),Object(k.jsx)("span",{children:"RESUME"})]})}),!o&&Object(k.jsx)(oe,{onClick:a,disabled:l,children:Object(k.jsxs)(Xe,{children:[Object(k.jsx)(He.a,{icon:Ae.b,size:"xs"}),Object(k.jsx)("span",{children:"START"})]})}),Object(k.jsx)(oe,{onClick:s,variant:"secondary",disabled:b,children:Object(k.jsxs)(Xe,{children:[Object(k.jsx)(He.a,{icon:Ae.d,size:"xs"}),Object(k.jsx)("span",{children:"RESET"})]})})]})})};Je.defaultProps={startDisabled:!1,stopDisabled:!1,resetDisabled:!1};var Ke,qe,Qe=Je,Ze=x.a.div(Ke||(Ke=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),$e=x.a.div(qe||(qe=Object(m.a)(["\n  font-size: 2rem;\n  margin-top: 25px;\n  font-family: Lobster;\n"]))),_e=function(){var e=Object(u.useState)("Test"),n=Object(O.a)(e,2),t=n[0],i=n[1];return Object(k.jsx)(Ze,{children:Object(k.jsxs)("div",{children:[Object(k.jsx)($e,{children:"Documentation"}),Object(k.jsx)(I,{title:"Loading spinner ",component:Object(k.jsx)(W,{}),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"'medium'"}]}),Object(k.jsx)(I,{title:"Button ",component:Object(k.jsx)(oe,{onClick:function(){return alert("You clicked the button!")}}),propDocs:[{prop:"type",description:"HTML attribute type of the button ('button' | 'submit' | 'reset')",type:"string",defaultValue:"'button'"},{prop:"disabled",description:"Is the button clickable?",type:"boolean",defaultValue:"false"},{prop:"onClick",description:"Function defining what to do when button is clicked",type:"function",defaultValue:"undefined"},{prop:"variant",description:"One of: ('primary' | 'secondary' | 'danger')",type:"string",defaultValue:"'primary'"},{prop:"children",description:"What to render inside of the button",type:"node OR array of nodes",defaultValue:"'Click Me'"}]}),Object(k.jsx)(I,{title:"Input ",component:Object(k.jsx)(me,{name:"docInput",onChange:i,value:t}),propDocs:[{prop:"type",description:"HTML attribute type of the input ('text' | 'number' | 'submit')",type:"string",defaultValue:"'text'"},{prop:"placeholder",description:"Placeholder text for the input",type:"string",defaultValue:"'Enter text here...'"},{prop:"disabled",description:"Is is possible to enter text?",type:"boolean",defaultValue:"false"},{prop:"onChange",description:"Function defining what to do when text is updated",type:"function",defaultValue:"undefined"},{prop:"name",description:"An identifier for this input",type:"string",defaultValue:"undefined"},{prop:"value",description:"Current value of the input (should match 'type' prop)",type:"string or number",defaultValue:"''"},{prop:"min",description:"If type is number, this will be used as the minimum the field accepts",type:"string",defaultValue:"undefined"},{prop:"max",description:"If type is number, this will be used as the maximum the field accepts",type:"string",defaultValue:"undefined"}]}),Object(k.jsx)(I,{title:"Display Time ",component:Object(k.jsx)(ge,{hours:0,minutes:0,seconds:0}),propDocs:[{prop:"hours",description:"A numeric representation of hours; max 2 digits",type:"number",defaultValue:"0"},{prop:"minutes",description:"A numeric representation of minutes; max 2 digits",type:"number",defaultValue:"0"},{prop:"seconds",description:"A numeric representation of seconds; max 2 digits",type:"number",defaultValue:"0"}]}),Object(k.jsx)(I,{title:"Display Rounds ",component:Object(k.jsx)(Re,{}),propDocs:[{prop:"currRound",description:"The current round",type:"number",defaultValue:"0"},{prop:"totalRounds",description:"The total number of rounds selected",type:"number",defaultValue:"0"},{prop:"isRest",description:"Is this a rest interval?",type:"boolean",defaultValue:"false"}]}),Object(k.jsx)(I,{title:"Panel ",component:Object(k.jsx)(Ie,{children:Object(k.jsx)("div",{})}),propDocs:[{prop:"children",description:"React children to render inside of the panel",type:"node or array of nodes",defaultValue:"undefined"}]}),Object(k.jsx)(I,{title:"TimeInput ",component:Object(k.jsx)(Fe,{onChange:function(){return console.log("timeinput")}}),propDocs:[{prop:"hoursVal",description:"A numeric representation of hours; max 2 digits",type:"number",defaultValue:"0"},{prop:"minutesVal",description:"A numeric representation of minutes; max 2 digits",type:"number",defaultValue:"0"},{prop:"secondsVal",description:"A numeric representation of seconds; max 2 digits",type:"number",defaultValue:"0"},{prop:"disabled",description:"Should the inputs be disabled or enabled?",type:"boolean",defaultValue:"false"},{prop:"onChange",description:"A single function to handle updates for hours, minutes and seconds",type:"function",defaultValue:"undefined"}]}),Object(k.jsx)(I,{title:"TimerControls ",component:Object(k.jsx)(Qe,{startDisabled:!0,stopDisabled:!0,resetDisabled:!0}),propDocs:[{prop:"startDisabled",description:"Should start button be disabled?",type:"boolean",defaultValue:"false"},{prop:"stopDisabled",description:"Should stop button be disabled?",type:"boolean",defaultValue:"false"},{prop:"resetDisabled",description:"Should reset button be disabled?",type:"boolean",defaultValue:"false"},{prop:"context",description:"This component needs to use global AppContext for event handlers and conditional display.",type:"object",defaultValue:"undefined"}]})]})})};function en(e,n){var t=Object(u.useRef)();Object(u.useEffect)((function(){t.current=e}),[e]),Object(u.useEffect)((function(){if(null!==n){var e=setInterval((function(){t.current()}),n);return function(){return clearInterval(e)}}}),[n])}var nn,tn,rn,an,sn,cn=function(e){var n=Object(u.useContext)(We),t=n.hours,i=n.minutes,r=n.seconds,a=n.isTimerRunning,s=n.tickUp,c=n.setIsIncrementing,o=n.endTime,d=n.handleSetEndTime,l=n.timerHasBeenStarted,j=o||[],p=j[0],m=j[1],h=j[2];en((function(){s()}),a?1e3:null),Object(u.useEffect)((function(){c(!0)}),[c]);var f=!p&&!m&&!h,x=function(e,n,t){var i=new Date("01/01/2021 "+le(e).join(":")+" PM"),r=new Date("01/01/2021 "+le(n).join(":")+" PM");return t?i<=r:i<r}(o,[t,i,r],!0),O=f||x,g=a||l;return Object(k.jsxs)(b.a.Fragment,{children:[Object(k.jsx)($,{children:"Stopwatch"}),Object(k.jsx)(ge,{hours:t,minutes:i,seconds:r}),Object(k.jsxs)(ze,{children:["End Time:",Object(k.jsx)(Fe,{disabled:g,hoursVal:p,minutesVal:m,secondsVal:h,onChange:d})]}),Object(k.jsx)(Qe,{startDisabled:O})]})},on=function(e){var n=Object(u.useContext)(We),t=n.hours,i=n.minutes,r=n.seconds,a=n.isTimerRunning,s=n.startTime,c=n.handleSetStartTime,o=n.tickDown,d=n.setIsIncrementing,l=n.timerComplete,j=n.timerHasBeenStarted,p=s||[],m=p[0],h=p[1],f=p[2];en((function(){o(l)}),a?1e3:null),Object(u.useEffect)((function(){d(!1)}),[d]);var x=!m&&!h&&!f;return Object(k.jsxs)(b.a.Fragment,{children:[Object(k.jsx)($,{children:"Countdown"}),Object(k.jsx)(ge,{hours:t,minutes:i,seconds:r}),Object(k.jsxs)(ze,{children:["Start Time:",Object(k.jsx)(Fe,{disabled:a||j,hoursVal:m,minutesVal:h,secondsVal:f,onChange:c})]}),Object(k.jsx)(Qe,{startDisabled:x})]})},dn=function(e){var n=Object(u.useContext)(We),t=n.hours,i=n.minutes,r=n.seconds,a=n.isTimerRunning,s=n.startTime,c=n.handleSetStartTime,o=n.tickDown,d=n.setIsIncrementing,l=n.numRounds,j=n.handleChangeNumRounds,p=n.currRound,m=n.roundComplete,h=n.timerHasBeenStarted,f=s||[],x=f[0],O=f[1],g=f[2];en((function(){o(m)}),a?1e3:null),Object(u.useEffect)((function(){d(!1)}),[d]);var v=!x&&!O&&!g||p>l,y=h||a;return Object(k.jsxs)(b.a.Fragment,{children:[Object(k.jsx)($,{children:"XY"}),Object(k.jsx)(Re,{currRound:p,totalRounds:l}),Object(k.jsx)(ge,{hours:t,minutes:i,seconds:r}),Object(k.jsxs)(ze,{children:["Start Time:",Object(k.jsx)(Fe,{disabled:y,hoursVal:x,minutesVal:O,secondsVal:g,onChange:c})]}),Object(k.jsxs)(ve,{children:["# of Rounds:",Object(k.jsx)(me,{name:"numRoundsXY",disabled:y,placeholder:"1",onChange:j})]}),Object(k.jsx)(Qe,{startDisabled:v})]})},ln=Object(x.a)($)(nn||(nn=Object(m.a)(["\n  margin: 5px;\n"]))),un=function(e){var n=Object(u.useContext)(We),t=n.hours,i=n.minutes,r=n.seconds,a=n.isTimerRunning,s=n.isWorkTime,c=n.workTime,o=n.handleSetWorkTime,d=n.restTime,l=n.handleSetRestTime,j=n.tickDown,p=n.setIsIncrementing,m=n.numRounds,h=n.handleChangeNumRounds,f=n.currRound,x=n.tabataRoundComplete,O=n.timerHasBeenStarted,g=c||[],v=g[0],y=g[1],S=g[2],T=d||[],C=T[0],w=T[1],R=T[2];en((function(){j(x)}),a?1e3:null),Object(u.useEffect)((function(){p(!1)}),[p]);var D=!v&&!y&&!S&&(!C&&!w&&!R)||f>m,V=O||a;return Object(k.jsxs)(b.a.Fragment,{children:[Object(k.jsx)(ln,{children:"Tabata"}),Object(k.jsx)(Re,{currRound:f,totalRounds:m,isRest:!s}),Object(k.jsx)(ge,{hours:t,minutes:i,seconds:r}),Object(k.jsxs)(ze,{children:["Work Time:",Object(k.jsx)(Fe,{disabled:V,onChange:o,hoursVal:v,minutesVal:y,secondsVal:S})]}),Object(k.jsxs)(ze,{children:["Rest Time:",Object(k.jsx)(Fe,{disabled:V,onChange:l,hoursVal:C,minutesVal:w,secondsVal:R})]}),Object(k.jsxs)(ve,{children:["# of Rounds:",Object(k.jsx)(me,{disabled:V,name:"numRoundsTabata",value:m,placeholder:"1",onChange:h})]}),Object(k.jsx)(Qe,{startDisabled:D})]})},bn=x.a.div(tn||(tn=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n"]))),jn=x.a.div(rn||(rn=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 250px;\n  height: 350px;\n  justify-content: center;\n  background: linear-gradient(143deg, "," 0%, "," 100%);\n  overflow: visible;\n  border-radius: 20px 0 0 20px;\n  padding: 30px;\n"])),Z.timerSelectorGradient1,Z.timerSelectorGradient2),pn=x.a.div(an||(an=Object(m.a)(["\n  background-color: ",";\n  color: ",";\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 20px 0;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: SourceCodePro;\n"])),Z.timerSwitchTitle,Z.textMedium),mn=Object(x.a)(pn)(sn||(sn=Object(m.a)(["\n  background-color: ",";\n  color: ",";\n"])),Z.timerSwitchTitleActive,Z.textLight);var hn,fn,xn,On,gn=function(){var e=Object(u.useContext)(We),n=e.timerIdx,t=e.setTimerIdx,i=e.handleReset,r=[{title:"Stopwatch",C:Object(k.jsx)(cn,{})},{title:"Countdown",C:Object(k.jsx)(on,{})},{title:"XY",C:Object(k.jsx)(dn,{})},{title:"Tabata",C:Object(k.jsx)(un,{})}],a=function(e,n){i(),t(n)};return Object(k.jsxs)(bn,{children:[Object(k.jsx)(jn,{children:r.map((function(e,t){return n===t?Object(k.jsx)(mn,{onClick:function(e){return a(0,t)},children:e.title},e.title):Object(k.jsx)(pn,{onClick:function(e){return a(0,t)},children:e.title},e.title)}))}),Object(k.jsx)(Ie,{children:r[n].C})]})},vn=x.a.div(hn||(hn=Object(m.a)(["\n  background: #f0f6fb;\n  height: 100vh;\n  overflow: auto;\n"]))),yn=x.a.ul(fn||(fn=Object(m.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  background-color: #333333;\n\n"]))),Sn=x.a.li(xn||(xn=Object(m.a)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  \n  >a {\n    color: #ffffff;\n    :hover {\n      color: #dedede;\n    }\n  }\n"]))),kn=x.a.div(On||(On=Object(m.a)(["\n  display: flex;\n  height: calc(100% - 40px);\n  justify-content: center;\n"])));var Tn=function(){return Object(k.jsx)(vn,{children:Object(k.jsxs)(h.a,{children:[Object(k.jsx)("nav",{children:Object(k.jsxs)(yn,{children:[Object(k.jsx)(Sn,{children:Object(k.jsx)(h.b,{to:"/",children:"Timers"})}),Object(k.jsx)(Sn,{children:Object(k.jsx)(h.b,{to:"/docs",children:"Documentation"})})]})}),Object(k.jsx)(kn,{children:Object(k.jsxs)(f.c,{children:[Object(k.jsx)(f.a,{path:"/docs",children:Object(k.jsx)(_e,{})}),Object(k.jsx)(f.a,{path:"/",children:Object(k.jsx)(Ue,{children:Object(k.jsx)(gn,{})})})]})})]})})};p.a.render(Object(k.jsx)(b.a.StrictMode,{children:Object(k.jsx)(Tn,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.b7a3994f.chunk.js.map