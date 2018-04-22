parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({4:[function(require,module,exports) {

},{}],10:[function(require,module,exports) {
"use strict";function t(t){return t[Math.floor(Math.random()*t.length)]}function o(t){return t.charAt(0).toUpperCase()+t.substr(1)}function e(t,e,r){var n=o(e);t.style["webkit"+n]=r,t.style["moz"+n]=r,t.style["ms"+n]=r,t.style["o"+n]=r}function r(t,o){return{col:Math.floor(o%t),row:Math.floor(o/t)}}function n(t,o,e){return o*t+e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.randomChoice=t,exports.capitalize=o,exports.setVendorStyle=e,exports.indexToRowCol=r,exports.rowColToIndex=n;
},{}],12:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n={"str-answer-label":"Vastauksesi:","str-check-answer":"Tarkista","str-send-answer":"Lähetä","str-answer-sent":"Vastaus lähetetty!","str-select":"Valitse","str-erase":"Poista"},r=exports.BasePuzzle=function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,r),this.options=Object.assign(n,e),this.state={answer:"",answerSent:!1},this.elementSelectors=Object.assign({parent:"#puzzle"},this.options.elementSelectors)}return e(r,[{key:"onSubmit",value:function(){}},{key:"sendAnswer",value:function(e){window.alert(this.options["str-answer-sent"]);var t=JSON.stringify({setting:this.setting,options:this.options,answer:this.state.answer});console.log("Complete answer:",t),this.setState({answerSent:!0},e)}},{key:"setup",value:function(){this.parentEl=document.querySelector(this.elementSelectors.parent),this.renderHTML()}},{key:"renderInner",value:function(e,t){var n=this;t instanceof HTMLElement||t instanceof Text?e.appendChild(t):t instanceof Array?t.forEach(function(t){n.renderInner(e,t)}):e.innerText=t||""}},{key:"renderElement",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.parentEl,s=document.createElement(e);s.id=t,this.renderInner(s,n);var a=document.querySelector("#"+t);return a&&a.parentNode.removeChild(a),r&&r.appendChild(s),s}},{key:"renderHTML",value:function(){this.parentEl.innerHTML="",this.renderElement("h1","puzzleName",this.options["str-name"])}},{key:"setState",value:function(e,t){var n=this.state;this.state=Object.assign({},n,e),"function"==typeof t?t():this.updateView()}},{key:"updateView",value:function(){}}]),r}();
},{}],13:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Cipherer=exports.Puzzle1=void 0;var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),t=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0},n=require("./BasePuzzle"),r=require("../lib/util");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}require("./Puzzle1.css");var o={"str-name":"Salakirjoitus","str-description":"Majavat lähettävät tietoa erityistä salakirjoitusavainta käyttäen.","str-key-descriptions":{"+1":"Jokainen kirjain vaihdetaan aakkosissa yksi askel eteenpäin olevaan kirjaimeen.","+2":"Jokainen kirjain vaihdetaan aakkosissa kaksi askelta eteenpäin olevaan kirjaimeen.","-1":"Jokainen kirjain vaihdetaan aakkosissa yksi askel taaksepäin olevaan kirjaimeen.","-2":"Jokainen kirjain vaihdetaan aakkosissa kaksi askelta taaksepäin olevaan kirjaimeen."},"str-example-label":"Siis esim..","str-ciphertext-label":"Vastaanotettu viesti:","str-question":"Mikä oli viesti?"},c=exports.Puzzle1=function(c){function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,h);var n=s(this,(h.__proto__||Object.getPrototypeOf(h)).call(this,Object.assign(o,t)));return n.setting=e,n.cipherer=new u(n.setting.characterSet,n.setting.key),n.state=Object.assign(n.state,{answerCheck:[],currentCharIdx:0,ringRotation:0,selectedCharIdx:0,submitted:!1}),n.setup(),n}return a(h,n.BasePuzzle),e(h,[{key:"setup",value:function(){t(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"setup",this).call(this),document.onkeydown=this.onKeyPress.bind(this)}},{key:"cleanUp",value:function(){document.onkeydown=null}},{key:"onSubmit",value:function(){if(this.canSubmit()){var e=this.state.answer,t=this.setting.cipherText,n=this.cipherer.checkMessage(t,e);this.setState({answerCheck:n,submitted:!0})}}},{key:"onSendAnswer",value:function(){this.canSend()&&this.sendAnswer()}},{key:"onPrev",value:function(){var e=this.state,t=e.ringRotation,n=e.selectedCharIdx,r=this.setting.characterSet;t-=1,n<=0?n=r.length-1:n-=1,this.setState({ringRotation:t,selectedCharIdx:n})}},{key:"onNext",value:function(){var e=this.state,t=e.ringRotation,n=e.selectedCharIdx;t+=1,n>=this.setting.characterSet.length-1?n=0:n+=1,this.setState({ringRotation:t,selectedCharIdx:n})}},{key:"onErase",value:function(){if(this.canErase()){var e=this.state,t=e.answer,n=e.currentCharIdx,r=this.setting.cipherText;for(t=t.slice(0,-1),n-=1;" "===r[n];)n-=1,t=t.slice(0,-1);this.setState({answer:t,currentCharIdx:n})}}},{key:"onSelect",value:function(){if(this.canSelect()){var e=this.state.selectedCharIdx,t=this.state,n=t.currentCharIdx,r=t.answer,i=this.setting,s=i.characterSet,a=i.cipherText;for(r+=s[e],n+=1;" "===a[n];)n+=1,r+=" ";this.setState({answer:r,currentCharIdx:n})}}},{key:"onKeyPress",value:function(e){switch(e.key){case"ArrowLeft":this.onPrev();break;case"ArrowRight":this.onNext();break;case"Enter":this.onSelect();break;case"Backspace":this.onErase();break;default:return}e.preventDefault()}},{key:"canSelect",value:function(){var e=this.state,t=e.answer,n=e.submitted,r=this.setting.cipherText;return!n&&t.length<r.length}},{key:"canErase",value:function(){var e=this.state,t=e.answer,n=e.currentCharIdx;return!e.submitted&&t.length>0&&n>0}},{key:"canSubmit",value:function(){var e=this.state,t=e.answer;return!e.submitted&&t.length>0}},{key:"canSend",value:function(){var e=this.state,t=e.answerSent;return e.submitted&&!t}},{key:"updateView",value:function(){t(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"updateView",this).call(this),this.updateAnswer(),this.updateButtons(),this.updateQuestion(),this.updateRing()}},{key:"updateRing",value:function(){var e=this.state,t=e.ringRotation,n=e.selectedCharIdx,i=this.getRingRotation(t),s=document.querySelector("#puzzleRing #characters");(0,r.setVendorStyle)(s,"transform","rotateY("+-i+"deg)"),setTimeout(function(){document.querySelectorAll("#puzzleRing #characters .characterSet").forEach(function(e,t){t===n?e.classList.add("current-char"):e.classList.remove("current-char")})},60)}},{key:"updateQuestion",value:function(){var e=document.querySelector("#puzzleQuestion");e.innerHTML="",this.renderInner(e,this.renderQuestion())}},{key:"updateAnswer",value:function(){var e=document.querySelector("#puzzleAnswer");e.innerHTML="",this.renderInner(e,this.renderAnswer())}},{key:"updateButtons",value:function(){this.eraseButton.disabled=!this.canErase(),this.selectButton.disabled=!this.canSelect(),this.submitButton.disabled=!this.canSubmit(),this.sendAnswerButton.disabled=!this.canSend()}},{key:"renderHTML",value:function(){t(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"renderHTML",this).call(this),this.renderElement("p","puzzleDescription",this.renderDescription()),this.renderElement("p","puzzleQuestion",this.renderQuestion()),this.renderElement("div","puzzleRing",this.renderCipherRing()),this.renderElement("p","puzzleAnswer",this.renderAnswer()),this.submitButton=this.renderElement("button","puzzleSubmit",this.options["str-check-answer"]),this.submitButton.onclick=this.onSubmit.bind(this),this.submitButton.disabled=!0,this.sendAnswerButton=this.renderElement("button","puzzleSend",this.options["str-send-answer"]),this.sendAnswerButton.onclick=this.onSendAnswer.bind(this),this.sendAnswerButton.disabled=!0,this.updateView()}},{key:"renderDescription",value:function(){var e=this.setting,t=e.key,n=e.keyExample;return[document.createTextNode(this.options["str-description"]),document.createElement("br"),document.createTextNode(this.options["str-key-descriptions"][t]),document.createElement("br"),document.createTextNode(this.options["str-example-label"]),document.createTextNode(" "),document.createTextNode(n)]}},{key:"renderQuestion",value:function(){var e=this.state.currentCharIdx,t=this.setting.cipherText,n=[document.createTextNode(this.options["str-ciphertext-label"]),document.createTextNode(" ")],r=t.split("").map(function(t,n){var r=document.createElement("span");return r.classList.add("cipher-char"),n===e&&r.classList.add("current-char"),r.innerText=t,r}),i=document.createElement("strong");return i.innerText=this.options["str-question"],[n,r,document.createElement("br"),i]}},{key:"renderAnswer",value:function(){var e=this.state,t=e.answer,n=e.answerCheck,r=e.submitted,i=[document.createTextNode(this.options["str-answer-label"]),document.createTextNode(" ")],s=t.split("").map(function(e,t){var r=document.createElement("span");return r.classList.add(n[t]?"correct":"incorrect"),r.innerText=e,r}),a=document.createTextNode(t);return r?[i,s]:[i,a]}},{key:"renderCipherRing",value:function(){var e=this,t=this.setting.characterSet.split("").map(function(t,n){var i=e.getRingRotation(n),s=document.createElement("li");return s.classList.add("characterSet"),s.innerText=t,(0,r.setVendorStyle)(s,"transform","rotateY("+i+"deg) translateZ(300px)"),s}),n=this.renderElement("ul","characters",t,null),i=this.renderElement("div","ringWrapper",n,null),s=this.renderElement("button","eraseButton",this.options["str-erase"],null),a=this.renderElement("button","prevButton","<<<",null),o=this.renderElement("button","nextButton",">>>",null),c=this.renderElement("button","selectButton",this.options["str-select"],null);s.disabled=!0,s.onclick=this.onErase.bind(this),a.onclick=this.onPrev.bind(this),o.onclick=this.onNext.bind(this),c.onclick=this.onSelect.bind(this);var u=this.renderElement("div","controls",[s,a,o,c]);return this.eraseButton=s,this.selectButton=c,[i,u]}},{key:"getRingRotation",value:function(e){return e*(360/this.setting.characterSet.length)}}]),h}(),u=exports.Cipherer=function(){function t(e,n){i(this,t);var r=/([+-])(\d+)/g.exec(n);this.factor="-"===r[1]?-parseInt(r[2]):parseInt(r[2]),this.characterSet=e}return e(t,[{key:"cipherChar",value:function(e){if(-1===this.characterSet.indexOf(e))return e;var t=this.characterSet.indexOf(e)+this.factor;return t<0?t+=this.characterSet.length:t>this.characterSet.length-1&&(t-=this.characterSet.length),this.characterSet[t]}},{key:"cipherMessage",value:function(e){if("string"==typeof e)return e.toUpperCase().split("").map(this.cipherChar.bind(this)).join("")}},{key:"checkCharacter",value:function(e,t){return e&&t&&e===this.cipherChar(t)}},{key:"checkMessage",value:function(e,t){var n=this;return t.toUpperCase().split("").map(function(t,r){return n.checkCharacter(e[r],t)})}}]),t}();
},{"./BasePuzzle":12,"../lib/util":10,"./Puzzle1.css":4}],14:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Puzzle2=void 0;var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),t=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(r):void 0},n=require("./BasePuzzle"),r=require("../lib/util");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}require("./Puzzle2.css");var a={"str-name":"Majavakartta","str-description":"Majavakartassa esineen paikka ilmaistaan kahdella suluissa olevalla numerolla. Ensin rivin numero ja sitten sarakkeen numero.","str-input-types":{"text-or-mouse":"Anna vastauksesi klikkaamalla tai kirjoittamalla.","text-only":"Anna vastauksesi kirjoittamalla.","mouse-only":"Anna vastauksesi klikkaamalla."}},l=exports.Puzzle2=function(l){function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,c);var n=o(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,Object.assign(a,t)));return n.setting=e,n.state=Object.assign(n.state,{answer:{row:null,col:null}}),n.indexToRowCol=r.indexToRowCol.bind(null,e.cols),n.rowColToIndex=r.rowColToIndex.bind(null,e.cols),n.onSpotClick=n.onSpotClick.bind(n),n.onAnswerChange=n.onAnswerChange.bind(n),n.grid=Array(n.setting.rows*n.setting.cols).fill(null).map(function(e,t){var r=n.indexToRowCol(t);return new u(r.row,r.col)}),n.setting.objects.forEach(function(e){var t=n.rowColToIndex(e[0]-1,e[1]-1);n.grid[t].objectType=e[2]}),n.setup(),n}return s(c,n.BasePuzzle),e(c,[{key:"onSendAnswer",value:function(){this.canSend()&&this.sendAnswer()}},{key:"onSpotClick",value:function(e,t){if("text-only"!==this.setting.input){var n=t.row,r=t.col;this.onAnswerChange(null,{row:n,col:r})}}},{key:"onAnswerChange",value:function(e,t){if(this.canEditAnswer()){var n=this.state.answer;e&&["row","col"].indexOf(e.target.name)>-1&&(n[e.target.name]=e.target.value),this.setState({answer:e?n:t})}}},{key:"canSend",value:function(){var e=this.state,t=e.answer;return!e.answerSent&&null!==t.row&&null!==t.col}},{key:"canEditAnswer",value:function(){return!this.state.answerSent}},{key:"updateView",value:function(){t(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"updateView",this).call(this),this.updateAnswer(),this.updateButtons()}},{key:"updateButtons",value:function(){this.sendAnswerButton.disabled=!this.canSend()}},{key:"updateAnswer",value:function(){var e=this.state.answer;this.rowInput.value=e.row,this.rowInput.disabled=!this.canEditAnswer()||"mouse-only"===this.setting.input,this.colInput.value=e.col,this.colInput.disabled=!this.canEditAnswer()||"mouse-only"===this.setting.input}},{key:"renderHTML",value:function(){t(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"renderHTML",this).call(this),this.renderElement("p","puzzleDescription",this.options["str-description"]),this.renderElement("div","puzzleExample",this.renderExamples()),this.renderElement("div","puzzleGrid",this.renderGrid()),this.renderElement("p","puzzleQuestion",[document.createTextNode(this.setting.question),document.createElement("br"),document.createTextNode(this.options["str-input-types"][this.setting.input])]),this.renderElement("p","puzzleAnswerLabel",this.options["str-answer-label"]),this.renderElement("div","puzzleInput",this.renderInputForm()),this.sendAnswerButton=this.renderElement("button","puzzleSend",this.options["str-send-answer"]),this.sendAnswerButton.onclick=this.onSendAnswer.bind(this),this.sendAnswerButton.disabled=!0,this.updateView()}},{key:"renderExamples",value:function(){var e=document.createElement("ul");return this.setting.examples.forEach(function(t){var n=document.createElement("li");n.innerText=t,e.appendChild(n)}),e}},{key:"renderGrid",value:function(){var e=this,t=this.grid.map(function(t){return t.renderHTML({onClick:e.onSpotClick})});return this.renderElement("div","gridWrapper",t,null)}},{key:"renderInputForm",value:function(){var e=this;return this.rowInput=document.createElement("input"),this.colInput=document.createElement("input"),[this.rowInput,this.colInput].forEach(function(t){t.type="number",t.step=1,t.min=1,t.disabled="mouse-only"===e.setting.input,t.onchange=e.onAnswerChange,t.onkeyup=e.onAnswerChange}),this.rowInput.max=this.setting.rows,this.rowInput.name="row",this.colInput.max=this.setting.cols,this.colInput.name="col",this.renderElement("form","inputForm",[this.rowInput,this.colInput],null)}}]),c}(),u=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i(this,t),this.col=n+1,this.row=e+1,this.objectType=r}return e(t,[{key:"renderHTML",value:function(e){var t=this,n=e.onClick,r=document.createElement("div");return r.className="spot",this.objectType?r.classList.add(this.objectType):(r.classList.add("empty"),r.innerText="•"),r.style.gridColumn=this.col,r.style.gridRow=this.row,1===this.row&&r.appendChild(this.renderIndexingNumber("col",this.col)),1===this.col&&r.appendChild(this.renderIndexingNumber("row",this.row)),r.onclick=function(e){return n(e,t)},r}},{key:"renderIndexingNumber",value:function(e,t){var n=document.createElement("span");return n.className="indexingNumber",n.classList.add(e),n.innerText=t,n}}]),t}();
},{"./BasePuzzle":12,"../lib/util":10,"./Puzzle2.css":4}],15:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Puzzle3=void 0;var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),t=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,i)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(i):void 0},n=require("./BasePuzzle");require("./Puzzle3.css");var i=require("dns");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o={"str-name":"Drag & Drop"},l=exports.Puzzle3=function(i){function l(e,t){r(this,l);var n=s(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,Object.assign(o,t)));return n.setting=e,n.state=Object.assign(n.state,{answerCheck:[],submitted:!1}),n.slots=n.setting.slots.map(function(e){return new u(e,{onChange:n.onAnswerChange.bind(n)})}),n.draggables=n.setting.draggables.map(function(e){return new d(e)}),n.setup(),n}return a(l,n.BasePuzzle),e(l,[{key:"setup",value:function(){var e=this;t(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"setup",this).call(this),window.onresize=function(){e.updateSlotPositions(e.backgroundImage)}}},{key:"cleanUp",value:function(){window.onresize=null}},{key:"onSubmit",value:function(){if(this.canSubmit()){var e=this.slots.map(function(e){return e.check()});this.setState({answerCheck:e,submitted:!0})}}},{key:"onSendAnswer",value:function(){this.canSend()&&this.sendAnswer()}},{key:"onAnswerChange",value:function(){if(this.canEditAnswer()){var e=this.slots.map(function(e){return{slot:e.id,draggable:e.draggable?e.draggable.id:null}});this.setState({answer:e})}}},{key:"canEditAnswer",value:function(){return!this.state.answerSent}},{key:"canSubmit",value:function(){var e=this.state,t=e.answer;return!e.submitted&&t.length>0}},{key:"canSend",value:function(){var e=this.state,t=e.answerSent;return e.submitted&&!t}},{key:"updateView",value:function(){t(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"updateView",this).call(this),this.updateButtons()}},{key:"updateButtons",value:function(){this.submitButton.disabled=!this.canSubmit(),this.sendAnswerButton.disabled=!this.canSend()}},{key:"updateSlotPositions",value:function(e){var t=e.offsetWidth/e.naturalWidth,n=e.offsetHeight/e.naturalHeight;this.slots.forEach(function(e){return e.setPosition({widthRatio:t,heightRatio:n})})}},{key:"renderHTML",value:function(){t(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"renderHTML",this).call(this);var e=this.renderElement("div","wrapper",null);this.renderElement("div","background",this.renderBackground(),e);var n=this.renderElement("div","draggables-container",this.renderDraggables(),e);n.ondragover=function(e){return e.preventDefault()},n.ondrop=function(e){e.preventDefault();var t=e.dataTransfer.getData("dragged-id");if(t){var i=document.getElementById(t);i.Draggable&&(i.Draggable.setSlot(null),n.appendChild(i))}},this.submitButton=this.renderElement("button","puzzleSubmit",this.options["str-check-answer"]),this.submitButton.onclick=this.onSubmit.bind(this),this.submitButton.disabled=!0,this.sendAnswerButton=this.renderElement("button","puzzleSend",this.options["str-send-answer"]),this.sendAnswerButton.onclick=this.onSendAnswer.bind(this),this.sendAnswerButton.disabled=!0,this.updateView()}},{key:"renderBackground",value:function(){var e=this,t=document.createElement("img");return t.src=this.setting.backgroundUrl,t.id="background-image",t.onload=function(){e.updateSlotPositions(t),e.slots.forEach(function(e){return t.parentNode.appendChild(e.el)})},this.backgroundImage=t,t}},{key:"renderDraggables",value:function(){return this.draggables.map(function(e){return e.render()})}}]),l}(),u=function(){function t(e,n){var i=e.id,s=e.correctDraggable,a=e.top,o=e.left,l=n.onChange;r(this,t),this.id=i,this.correctDraggable=s,this.position={top:a,left:o},this.size=20,this.onDraggableChange=l,this.draggable=null,this.el=document.createElement("div"),this.el.className="slot",this.el.style.width=this.size+"px",this.el.style.height=this.size+"px",this.el.ondragover=this.onDragover.bind(this),this.el.ondrop=this.onDrop.bind(this),this.el.ondragenter=this.onDragEnter.bind(this),this.el.ondragleave=this.onDragLeave.bind(this)}return e(t,[{key:"check",value:function(){return!this.correctDraggable||!!this.draggable&&this.correctDraggable===this.draggable.id}},{key:"setDraggable",value:function(e){this.draggable=e,this.onDraggableChange()}},{key:"setPosition",value:function(e){var t=e.widthRatio,n=void 0===t?1:t,i=e.heightRatio,r=void 0===i?1:i;this.el.style.top=n*this.position.top-this.size/2+"px",this.el.style.left=r*this.position.left-this.size/2+"px"}},{key:"render",value:function(e){return this.setPosition(e),this.el}},{key:"onDragover",value:function(e){e.preventDefault()}},{key:"onDrop",value:function(e){e.preventDefault(),this.el.classList.remove("drag-hover");var t=e.dataTransfer.getData("dragged-id");if(t){var n=document.getElementById(t);n.Draggable&&(this.draggable?this.draggable.swap(n.Draggable):(n.Draggable.setSlot(this),this.el.appendChild(n)))}}},{key:"onDragEnter",value:function(){this.el.classList.add("drag-hover")}},{key:"onDragLeave",value:function(){this.el.classList.remove("drag-hover")}}]),t}(),d=function(){function t(e){var n=e.id,i=e.type,s=e.content;r(this,t),this.id=n,this.type=i,this.content=s,this.slot=null,this.el=this.renderElement(),this.el.ondragstart=this.onDragStart.bind(this),this.el.ondragend=this.onDragEnd.bind(this),this.el.Draggable=this}return e(t,[{key:"render",value:function(){return this.el}},{key:"renderElement",value:function(){var e=document.createElement("div");return e.id="draggable-"+this.id,e.className="draggable",e.ondragstart=this.onDragStart.bind(this),e.ondragend=this.onDragEnd.bind(this),e.appendChild(this.renderContent(e)),e}},{key:"renderContent",value:function(e){switch(this.type.split("/")[0]){case"text":return e.draggable=!0,this.renderTextContent(e);case"image":return e.draggable=!0,this.renderImageContent(e);case"audio":return this.renderAudioContent(e);case"video":return this.renderVideoContent(e);default:return document.createTextNode("N/A")}}},{key:"renderImageContent",value:function(e){e.classList.add("loading");var t=document.createElement("img");return t.src=this.content,t.onload=function(){e.classList.remove("loading")},t}},{key:"renderAudioContent",value:function(e){e.classList.add("loading"),e.classList.add("audio-video");var t=document.createElement("span");t.innerText="DRAG HERE",t.className="anchor";var n=document.createElement("audio");return n.controls=!0,n.preload=!0,n.src=this.content,n.type=this.type,n.oncanplay=function(){e.classList.remove("loading")},n}},{key:"renderVideoContent",value:function(e){e.classList.add("loading"),e.classList.add("audio-video");var t=document.createElement("video");return t.controls=!0,t.preload=!0,t.src=this.content,t.type=this.type,t.width=300,t.oncanplay=function(){e.classList.remove("loading")},t}},{key:"renderTextContent",value:function(e){e.style.minWidth="100px",e.style.padding="4px";var t=document.createElement("p");return t.innerText=this.content,t}},{key:"setSlot",value:function(e){this.slot&&this.slot.setDraggable(null),e?(e.setDraggable(this),this.el.classList.add("in-slot")):this.el.classList.remove("in-slot"),this.slot=e}},{key:"onDragStart",value:function(e){var t=this;e.dataTransfer.setData("dragged-id",this.el.id),this.el.classList.add("dragging"),setTimeout(function(){t.el.classList.add("hide")},1)}},{key:"onDragEnd",value:function(){this.el.classList.remove("dragging"),this.el.classList.remove("hide")}},{key:"swap",value:function(e){if(e instanceof t){var n=e.el.parentNode,i=e.slot,r=this.el.parentNode,s=this.slot;this.setSlot(i),n.appendChild(this.el),e.setSlot(s),r.appendChild(e.el)}}}]),t}();
},{"./BasePuzzle":12,"./Puzzle3.css":4,"dns":4}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./BasePuzzle");Object.defineProperty(exports,"BasePuzzle",{enumerable:!0,get:function(){return e.BasePuzzle}});var r=require("./Puzzle1");Object.defineProperty(exports,"Puzzle1",{enumerable:!0,get:function(){return r.Puzzle1}}),Object.defineProperty(exports,"Cipherer",{enumerable:!0,get:function(){return r.Cipherer}});var t=require("./Puzzle2");Object.defineProperty(exports,"Puzzle2",{enumerable:!0,get:function(){return t.Puzzle2}});var u=require("./Puzzle3");Object.defineProperty(exports,"Puzzle3",{enumerable:!0,get:function(){return u.Puzzle3}});
},{"./BasePuzzle":12,"./Puzzle1":13,"./Puzzle2":14,"./Puzzle3":15}],5:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./lib/util"),r=require("./puzzles");function a(){var a=(0,e.randomChoice)([{key:"+1",keyExample:"A → B, B → C..., Ä → Ö, Ö → A"},{key:"+2",keyExample:"A → C, B → D..., Ä → A, Ö → B"},{key:"-1",keyExample:"A → Ö, B → A..., Ä → Å, Ö → Ä"},{key:"-2",keyExample:"A → Ä, B → Ö..., Ä → Z, Ö → Å"}]);a.characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";var t=new r.Cipherer(a.characterSet,a.key);a.cipherText=t.cipherMessage((0,e.randomChoice)(["HEI MAAILMA","JS ROKKAA","YLIOPISTO ON PARAS"]));return new r.Puzzle1(a,{})}exports.default=a;
},{"./lib/util":10,"./puzzles":11}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./lib/util"),s=require("./puzzles");function a(){var a=(0,e.randomChoice)([{rows:10,cols:10,objects:[[1,1,"lake"],[2,5,"mushroom"],[3,9,"tree"],[9,6,"treestump"]],examples:["Järvi (1, 1)","Sieni (2, 5)"]},{rows:10,cols:10,objects:[[4,2,"lake"],[3,5,"mushroom"],[2,9,"tree"],[9,6,"treestump"]],examples:["Järvi (4, 2)","Sieni (3, 5)"]}]);a.question=(0,e.randomChoice)(["Missä puunkanto sijaitsee?","Majavan talo sijaitsee neljä askelta sienen alapuolella ja siitä kaksi askelta oikealle. Missä rivissä ja sarakkeessa Majavan talo sijaitsee?"]),a.input=(0,e.randomChoice)(["text-or-mouse","text-only","mouse-only"]);return new s.Puzzle2(a,{})}exports.default=a;
},{"./lib/util":10,"./puzzles":11}],9:[function(require,module,exports) {
module.exports="/finland-23572_1280.16de7af1.png";
},{}],7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./lib/util"),e=require("./puzzles"),n=require("./static/finland-23572_1280.png"),o=r(n);function r(t){return t&&t.__esModule?t:{default:t}}function i(){var n=[{backgroundUrl:o.default,slots:[{id:1,correctDraggable:1,top:620,left:390},{id:2,correctDraggable:2,top:1070,left:280},{id:3,correctDraggable:3,top:1230,left:340},{id:4,correctDraggable:4,top:1190,left:160}],draggables:[{id:1,type:"image/png",content:"https://picsum.photos/200/100/?random"},{id:2,type:"image/png",content:"https://picsum.photos/200/200/?random"},{id:3,type:"image/png",content:"https://picsum.photos/100/100/?random"},{id:4,type:"text/plain",content:"Drag me 1"},{id:5,type:"text/plain",content:"Drag me 2"},{id:6,type:"text/plain",content:"Drag me 3 very long text"},{id:7,type:"video/ogg",content:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv"},{id:8,type:"audio/mp3",content:"https://html5tutorial.info/media/vincent.mp3"}]}],r=(0,t.randomChoice)(n);return new e.Puzzle3(r)}exports.default=i;
},{"./lib/util":10,"./puzzles":11,"./static/finland-23572_1280.png":9}],2:[function(require,module,exports) {
"use strict";require("./index.css");var e=require("./initPuzzle1"),i=l(e),u=require("./initPuzzle2"),n=l(u),t=require("./initPuzzle3"),c=l(t);function l(e){return e&&e.__esModule?e:{default:e}}function z(e){window.activePuzzle&&window.activePuzzle.cleanUp&&window.activePuzzle.cleanUp(),window.activePuzzle=e()}document.querySelector("#initPuzzle1").onclick=function(){z(i.default)},document.querySelector("#initPuzzle2").onclick=function(){z(n.default)},document.querySelector("#initPuzzle3").onclick=function(){z(c.default)};
},{"./index.css":4,"./initPuzzle1":5,"./initPuzzle2":6,"./initPuzzle3":7}]},{},[2])
//# sourceMappingURL=/src.29b4f172.map