import{_ as t,d as e,s as r,g as a,c as i,b as n,p as s,q as o,l,t as c,u as h,j as d,O as u}from"./mermaid-DDrAQ3fQ.js";import{G as y}from"./graph-CFa9UCy9.js";import{s as p}from"./transform-C6EuPmuu.js";import{l as _}from"./layout-CVD5I9XP.js";import{l as f,k as m}from"./step-DY8hpDjU.js";import"./index-BWfZxyoz.js";import"./_baseUniq-DqPpeVEt.js";import"./_baseEach-B3hi12ys.js";import"./min-DmzNl1px.js";import"./_baseMap-DOaHhKS7.js";import"./sortBy-CKbtRcB_.js";const E=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const g=[];for(let V=0;V<256;++V)g.push((V+256).toString(16).slice(1));function O(t){if(!function(t){return"string"==typeof t&&E.test(t)}(t))throw TypeError("Invalid UUID");let e;const r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r}function b(t,e,r,a){switch(t){case 0:return e&r^~e&a;case 1:case 3:return e^r^a;case 2:return e&r^e&a^r&a}}function k(t,e){return t<<e|t>>>32-e}const R=function(t,e,r){function a(t,a,i,n){var s;if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));const e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}(t)),"string"==typeof a&&(a=O(a)),16!==(null===(s=a)||void 0===s?void 0:s.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let o=new Uint8Array(16+t.length);if(o.set(a),o.set(t,a.length),o=r(o),o[6]=15&o[6]|e,o[8]=63&o[8]|128,i){n=n||0;for(let t=0;t<16;++t)i[n+t]=o[t];return i}return function(t,e=0){return g[t[e+0]]+g[t[e+1]]+g[t[e+2]]+g[t[e+3]]+"-"+g[t[e+4]]+g[t[e+5]]+"-"+g[t[e+6]]+g[t[e+7]]+"-"+g[t[e+8]]+g[t[e+9]]+"-"+g[t[e+10]]+g[t[e+11]]+g[t[e+12]]+g[t[e+13]]+g[t[e+14]]+g[t[e+15]]}(o)}try{a.name=t}catch(i){}return a.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",a.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",a}("v5",80,(function(t){const e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){const e=unescape(encodeURIComponent(t));t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const a=t.length/4+2,i=Math.ceil(a/16),n=new Array(i);for(let s=0;s<i;++s){const e=new Uint32Array(16);for(let r=0;r<16;++r)e[r]=t[64*s+4*r]<<24|t[64*s+4*r+1]<<16|t[64*s+4*r+2]<<8|t[64*s+4*r+3];n[s]=e}n[i-1][14]=8*(t.length-1)/Math.pow(2,32),n[i-1][14]=Math.floor(n[i-1][14]),n[i-1][15]=8*(t.length-1)&4294967295;for(let s=0;s<i;++s){const t=new Uint32Array(80);for(let e=0;e<16;++e)t[e]=n[s][e];for(let e=16;e<80;++e)t[e]=k(t[e-3]^t[e-8]^t[e-14]^t[e-16],1);let a=r[0],i=r[1],o=r[2],l=r[3],c=r[4];for(let r=0;r<80;++r){const n=Math.floor(r/20),s=k(a,5)+b(n,i,o,l)+c+e[n]+t[r]>>>0;c=l,l=o,o=k(i,30)>>>0,i=a,a=s}r[0]=r[0]+a>>>0,r[1]=r[1]+i>>>0,r[2]=r[2]+o>>>0,r[3]=r[3]+l>>>0,r[4]=r[4]+c>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}));var N=function(){var e=t((function(t,e,r,a){for(r=r||{},a=t.length;a--;r[t[a]]=e);return r}),"o"),r=[6,8,10,20,22,24,26,27,28],a=[1,10],i=[1,11],n=[1,12],s=[1,13],o=[1,14],l=[1,15],c=[1,21],h=[1,22],d=[1,23],u=[1,24],y=[1,25],p=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],_=[1,34],f=[27,28,46,47],m=[41,42,43,44,45],E=[17,34],g=[1,54],O=[1,53],b=[17,34,36,38],k={trace:t((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:t((function(t,e,r,a,i,n,s){var o=n.length-1;switch(i){case 1:break;case 2:case 6:case 7:this.$=[];break;case 3:n[o-1].push(n[o]),this.$=n[o-1];break;case 4:case 5:case 19:case 43:case 27:case 28:case 31:this.$=n[o];break;case 8:a.addEntity(n[o-4]),a.addEntity(n[o-2]),a.addRelationship(n[o-4],n[o],n[o-2],n[o-3]);break;case 9:a.addEntity(n[o-3]),a.addAttributes(n[o-3],n[o-1]);break;case 10:a.addEntity(n[o-2]);break;case 11:a.addEntity(n[o]);break;case 12:a.addEntity(n[o-6],n[o-4]),a.addAttributes(n[o-6],n[o-1]);break;case 13:a.addEntity(n[o-5],n[o-3]);break;case 14:a.addEntity(n[o-3],n[o-1]);break;case 15:case 16:this.$=n[o].trim(),a.setAccTitle(this.$);break;case 17:case 18:this.$=n[o].trim(),a.setAccDescription(this.$);break;case 20:case 41:case 42:case 32:this.$=n[o].replace(/"/g,"");break;case 21:case 29:this.$=[n[o]];break;case 22:n[o].push(n[o-1]),this.$=n[o];break;case 23:this.$={attributeType:n[o-1],attributeName:n[o]};break;case 24:this.$={attributeType:n[o-2],attributeName:n[o-1],attributeKeyTypeList:n[o]};break;case 25:this.$={attributeType:n[o-2],attributeName:n[o-1],attributeComment:n[o]};break;case 26:this.$={attributeType:n[o-3],attributeName:n[o-2],attributeKeyTypeList:n[o-1],attributeComment:n[o]};break;case 30:n[o-2].push(n[o]),this.$=n[o-2];break;case 33:this.$={cardA:n[o],relType:n[o-1],cardB:n[o-2]};break;case 34:this.$=a.Cardinality.ZERO_OR_ONE;break;case 35:this.$=a.Cardinality.ZERO_OR_MORE;break;case 36:this.$=a.Cardinality.ONE_OR_MORE;break;case 37:this.$=a.Cardinality.ONLY_ONE;break;case 38:this.$=a.Cardinality.MD_PARENT;break;case 39:this.$=a.Identification.NON_IDENTIFYING;break;case 40:this.$=a.Identification.IDENTIFYING}}),"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(r,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:a,22:i,24:n,26:s,27:o,28:l},e(r,[2,7],{1:[2,1]}),e(r,[2,3]),{9:16,11:9,20:a,22:i,24:n,26:s,27:o,28:l},e(r,[2,5]),e(r,[2,6]),e(r,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:c,42:h,43:d,44:u,45:y}),{21:[1,26]},{23:[1,27]},{25:[1,28]},e(r,[2,18]),e(p,[2,19]),e(p,[2,20]),e(r,[2,4]),{11:29,27:o,28:l},{16:30,17:[1,31],29:32,30:33,34:_},{11:35,27:o,28:l},{40:36,46:[1,37],47:[1,38]},e(f,[2,34]),e(f,[2,35]),e(f,[2,36]),e(f,[2,37]),e(f,[2,38]),e(r,[2,15]),e(r,[2,16]),e(r,[2,17]),{13:[1,39]},{17:[1,40]},e(r,[2,10]),{16:41,17:[2,21],29:32,30:33,34:_},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:c,42:h,43:d,44:u,45:y},e(m,[2,39]),e(m,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},e(r,[2,9]),{17:[2,22]},e(E,[2,23],{32:50,33:51,35:52,37:g,38:O}),e([17,34,37,38],[2,28]),e(r,[2,14],{15:[1,55]}),e([27,28],[2,33]),e(r,[2,8]),e(r,[2,41]),e(r,[2,42]),e(r,[2,43]),e(E,[2,24],{33:56,36:[1,57],38:O}),e(E,[2,25]),e(b,[2,29]),e(E,[2,32]),e(b,[2,31]),{16:58,17:[1,59],29:32,30:33,34:_},e(E,[2,26]),{35:60,37:g},{17:[1,61]},e(r,[2,13]),e(b,[2,30]),e(r,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:t((function(t,e){if(!e.recoverable){var r=new Error(t);throw r.hash=e,r}this.trace(t)}),"parseError"),parse:t((function(e){var r=this,a=[0],i=[],n=[null],s=[],o=this.table,l="",c=0,h=0,d=s.slice.call(arguments,1),u=Object.create(this.lexer),y={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(y.yy[p]=this.yy[p]);u.setInput(e,y.yy),y.yy.lexer=u,y.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var _=u.yylloc;s.push(_);var f=u.options&&u.options.ranges;function m(){var t;return"number"!=typeof(t=i.pop()||u.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=r.symbols_[t]||t),t}"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,t((function(t){a.length=a.length-2*t,n.length=n.length-t,s.length=s.length-t}),"popStack"),t(m,"lex");for(var E,g,O,b,k,R,N,x,T={};;){if(g=a[a.length-1],this.defaultActions[g]?O=this.defaultActions[g]:(null==E&&(E=m()),O=o[g]&&o[g][E]),void 0===O||!O.length||!O[0]){var A="";for(k in x=[],o[g])this.terminals_[k]&&k>2&&x.push("'"+this.terminals_[k]+"'");A=u.showPosition?"Parse error on line "+(c+1)+":\n"+u.showPosition()+"\nExpecting "+x.join(", ")+", got '"+(this.terminals_[E]||E)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==E?"end of input":"'"+(this.terminals_[E]||E)+"'"),this.parseError(A,{text:u.match,token:this.terminals_[E]||E,line:u.yylineno,loc:_,expected:x})}if(O[0]instanceof Array&&O.length>1)throw new Error("Parse Error: multiple actions possible at state: "+g+", token: "+E);switch(O[0]){case 1:a.push(E),n.push(u.yytext),s.push(u.yylloc),a.push(O[1]),E=null,h=u.yyleng,l=u.yytext,c=u.yylineno,_=u.yylloc;break;case 2:if(R=this.productions_[O[1]][1],T.$=n[n.length-R],T._$={first_line:s[s.length-(R||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(R||1)].first_column,last_column:s[s.length-1].last_column},f&&(T._$.range=[s[s.length-(R||1)].range[0],s[s.length-1].range[1]]),void 0!==(b=this.performAction.apply(T,[l,h,c,y.yy,O[1],n,s].concat(d))))return b;R&&(a=a.slice(0,-1*R*2),n=n.slice(0,-1*R),s=s.slice(0,-1*R)),a.push(this.productions_[O[1]][0]),n.push(T.$),s.push(T._$),N=o[a[a.length-2]][a[a.length-1]],a.push(N);break;case 3:return!0}}return!0}),"parse")},R=function(){return{EOF:1,parseError:t((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:t((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:t((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:t((function(t){var e=t.length,r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===a.length?this.yylloc.first_column:0)+a[a.length-r.length].length-r[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:t((function(){return this._more=!0,this}),"more"),reject:t((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:t((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:t((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:t((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:t((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:t((function(t,e){var r,a,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),(a=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],r=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var n in i)this[n]=i[n];return!1}return!1}),"test_match"),next:t((function(){if(this.done)return this.EOF;var t,e,r,a;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),n=0;n<i.length;n++)if((r=this._input.match(this.rules[i[n]]))&&(!e||r[0].length>e[0].length)){if(e=r,a=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(r,i[n])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,i[a]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:t((function(){var t=this.next();return t||this.lex()}),"lex"),begin:t((function(t){this.conditionStack.push(t)}),"begin"),popState:t((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:t((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:t((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:t((function(t){this.begin(t)}),"pushState"),stateStackSize:t((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:t((function(t,e,r,a){switch(r){case 0:return this.begin("acc_title"),22;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),24;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:case 15:case 20:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;case 14:return 36;case 16:return 37;case 17:case 18:return 34;case 19:return 38;case 21:return this.popState(),17;case 22:case 54:return e.yytext[0];case 23:return 18;case 24:return 19;case 25:case 29:case 30:case 43:return 41;case 26:case 27:case 28:case 36:case 38:case 45:return 43;case 31:case 32:case 33:case 34:case 35:case 37:case 44:return 42;case 39:case 40:case 41:case 42:return 44;case 46:return 45;case 47:case 50:case 51:case 52:return 46;case 48:case 49:return 47;case 53:return 27;case 55:return 6}}),"anonymous"),rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}}}();function N(){this.yy={}}return k.lexer=R,t(N,"Parser"),N.prototype=k,k.Parser=N,new N}();N.parser=N;var x=N,T=new Map,A=[],M=t((function(t,e=void 0){return T.has(t)?!T.get(t).alias&&e&&(T.get(t).alias=e,l.info(`Add alias '${e}' to entity '${t}'`)):(T.set(t,{attributes:[],alias:e}),l.info("Added new entity :",t)),T.get(t)}),"addEntity"),w=t((()=>T),"getEntities"),I=t((function(t,e){let r,a=M(t);for(r=e.length-1;r>=0;r--)a.attributes.push(e[r]),l.debug("Added attribute ",e[r].attributeName)}),"addAttributes"),S=t((function(t,e,r,a){let i={entityA:t,roleA:e,entityB:r,relSpec:a};A.push(i),l.debug("Added new relationship :",i)}),"addRelationship"),D=t((()=>A),"getRelationships"),v=t((function(){T=new Map,A=[],c()}),"clear"),L={Cardinality:{ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},Identification:{NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},getConfig:t((()=>e().er),"getConfig"),addEntity:M,addAttributes:I,getEntities:w,addRelationship:S,getRelationships:D,clear:v,setAccTitle:r,getAccTitle:a,setAccDescription:i,getAccDescription:n,setDiagramTitle:s,getDiagramTitle:o},$={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},B={ERMarkers:$,insertMarkers:t((function(t,e){let r;t.append("defs").append("marker").attr("id",$.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",$.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",$.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",$.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",$.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",$.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",$.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",$.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),r=t.append("defs").append("marker").attr("id",$.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),r=t.append("defs").append("marker").attr("id",$.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")}),"insertMarkers")},C=/[^\dA-Za-z](\W)*/g,P={},Y=new Map,Z=t((function(t){const e=Object.keys(t);for(const r of e)P[r]=t[r]}),"setConf"),F=t(((t,r,a)=>{const i=P.entityPadding/3,n=P.entityPadding/3,s=.85*P.fontSize,o=r.node().getBBox(),l=[];let c=!1,h=!1,d=0,y=0,p=0,_=0,f=o.height+2*i,m=1;a.forEach((t=>{void 0!==t.attributeKeyTypeList&&t.attributeKeyTypeList.length>0&&(c=!0),void 0!==t.attributeComment&&(h=!0)})),a.forEach((a=>{const n=`${r.node().id}-attr-${m}`;let o=0;const E=u(a.attributeType),g=t.append("text").classed("er entityLabel",!0).attr("id",`${n}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",e().fontFamily).style("font-size",s+"px").text(E),O=t.append("text").classed("er entityLabel",!0).attr("id",`${n}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",e().fontFamily).style("font-size",s+"px").text(a.attributeName),b={};b.tn=g,b.nn=O;const k=g.node().getBBox(),R=O.node().getBBox();if(d=Math.max(d,k.width),y=Math.max(y,R.width),o=Math.max(k.height,R.height),c){const r=void 0!==a.attributeKeyTypeList?a.attributeKeyTypeList.join(","):"",i=t.append("text").classed("er entityLabel",!0).attr("id",`${n}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",e().fontFamily).style("font-size",s+"px").text(r);b.kn=i;const l=i.node().getBBox();p=Math.max(p,l.width),o=Math.max(o,l.height)}if(h){const r=t.append("text").classed("er entityLabel",!0).attr("id",`${n}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",e().fontFamily).style("font-size",s+"px").text(a.attributeComment||"");b.cn=r;const i=r.node().getBBox();_=Math.max(_,i.width),o=Math.max(o,i.height)}b.height=o,l.push(b),f+=o+2*i,m+=1}));let E=4;c&&(E+=2),h&&(E+=2);const g=d+y+p+_,O={width:Math.max(P.minEntityWidth,Math.max(o.width+2*P.entityPadding,g+n*E)),height:a.length>0?f:Math.max(P.minEntityHeight,o.height+2*P.entityPadding)};if(a.length>0){const e=Math.max(0,(O.width-g-n*E)/(E/2));r.attr("transform","translate("+O.width/2+","+(i+o.height/2)+")");let a=o.height+2*i,s="attributeBoxOdd";l.forEach((r=>{const o=a+i+r.height/2;r.tn.attr("transform","translate("+n+","+o+")");const l=t.insert("rect","#"+r.tn.node().id).classed(`er ${s}`,!0).attr("x",0).attr("y",a).attr("width",d+2*n+e).attr("height",r.height+2*i),u=parseFloat(l.attr("x"))+parseFloat(l.attr("width"));r.nn.attr("transform","translate("+(u+n)+","+o+")");const f=t.insert("rect","#"+r.nn.node().id).classed(`er ${s}`,!0).attr("x",u).attr("y",a).attr("width",y+2*n+e).attr("height",r.height+2*i);let m=parseFloat(f.attr("x"))+parseFloat(f.attr("width"));if(c){r.kn.attr("transform","translate("+(m+n)+","+o+")");const l=t.insert("rect","#"+r.kn.node().id).classed(`er ${s}`,!0).attr("x",m).attr("y",a).attr("width",p+2*n+e).attr("height",r.height+2*i);m=parseFloat(l.attr("x"))+parseFloat(l.attr("width"))}h&&(r.cn.attr("transform","translate("+(m+n)+","+o+")"),t.insert("rect","#"+r.cn.node().id).classed(`er ${s}`,"true").attr("x",m).attr("y",a).attr("width",_+2*n+e).attr("height",r.height+2*i)),a+=r.height+2*i,s="attributeBoxOdd"===s?"attributeBoxEven":"attributeBoxOdd"}))}else O.height=Math.max(P.minEntityHeight,f),r.attr("transform","translate("+O.width/2+","+O.height/2+")");return O}),"drawAttributes"),j=t((function(t,r,a){let i;return[...r.keys()].forEach((function(n){const s=X(n,"entity");Y.set(n,s);const o=t.append("g").attr("id",s);i=void 0===i?s:i;const l="text-"+s,c=o.append("text").classed("er entityLabel",!0).attr("id",l).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",e().fontFamily).style("font-size",P.fontSize+"px").text(r.get(n).alias??n),{width:h,height:d}=F(o,c,r.get(n).attributes),u=o.insert("rect","#"+l).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",h).attr("height",d).node().getBBox();a.setNode(s,{width:u.width,height:u.height,shape:"rect",id:s})})),i}),"drawEntities"),z=t((function(t,e){e.nodes().forEach((function(r){void 0!==r&&void 0!==e.node(r)&&t.select("#"+r).attr("transform","translate("+(e.node(r).x-e.node(r).width/2)+","+(e.node(r).y-e.node(r).height/2)+" )")}))}),"adjustEntities"),W=t((function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")}),"getEdgeName"),U=t((function(t,e){return t.forEach((function(t){e.setEdge(Y.get(t.entityA),Y.get(t.entityB),{relationship:t},W(t))})),t}),"addRelationships"),K=0,G=t((function(t,r,a,i,n){K++;const s=a.edge(Y.get(r.entityA),Y.get(r.entityB),W(r)),o=f().x((function(t){return t.x})).y((function(t){return t.y})).curve(m),l=t.insert("path","#"+i).classed("er relationshipLine",!0).attr("d",o(s.points)).style("stroke",P.stroke).style("fill","none");r.relSpec.relType===n.db.Identification.NON_IDENTIFYING&&l.attr("stroke-dasharray","8,8");let c="";switch(P.arrowMarkerAbsolute&&(c=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,c=c.replace(/\(/g,"\\("),c=c.replace(/\)/g,"\\)")),r.relSpec.cardA){case n.db.Cardinality.ZERO_OR_ONE:l.attr("marker-end","url("+c+"#"+B.ERMarkers.ZERO_OR_ONE_END+")");break;case n.db.Cardinality.ZERO_OR_MORE:l.attr("marker-end","url("+c+"#"+B.ERMarkers.ZERO_OR_MORE_END+")");break;case n.db.Cardinality.ONE_OR_MORE:l.attr("marker-end","url("+c+"#"+B.ERMarkers.ONE_OR_MORE_END+")");break;case n.db.Cardinality.ONLY_ONE:l.attr("marker-end","url("+c+"#"+B.ERMarkers.ONLY_ONE_END+")");break;case n.db.Cardinality.MD_PARENT:l.attr("marker-end","url("+c+"#"+B.ERMarkers.MD_PARENT_END+")")}switch(r.relSpec.cardB){case n.db.Cardinality.ZERO_OR_ONE:l.attr("marker-start","url("+c+"#"+B.ERMarkers.ZERO_OR_ONE_START+")");break;case n.db.Cardinality.ZERO_OR_MORE:l.attr("marker-start","url("+c+"#"+B.ERMarkers.ZERO_OR_MORE_START+")");break;case n.db.Cardinality.ONE_OR_MORE:l.attr("marker-start","url("+c+"#"+B.ERMarkers.ONE_OR_MORE_START+")");break;case n.db.Cardinality.ONLY_ONE:l.attr("marker-start","url("+c+"#"+B.ERMarkers.ONLY_ONE_START+")");break;case n.db.Cardinality.MD_PARENT:l.attr("marker-start","url("+c+"#"+B.ERMarkers.MD_PARENT_START+")")}const h=l.node().getTotalLength(),d=l.node().getPointAtLength(.5*h),u="rel"+K,y=r.roleA.split(/<br ?\/>/g),p=t.append("text").classed("er relationshipLabel",!0).attr("id",u).attr("x",d.x).attr("y",d.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",e().fontFamily).style("font-size",P.fontSize+"px");if(1==y.length)p.text(r.roleA);else{const t=.5*-(y.length-1);y.forEach(((e,r)=>{p.append("tspan").attr("x",d.x).attr("dy",`${0===r?t:1}em`).text(e)}))}const _=p.node().getBBox();t.insert("rect","#"+u).classed("er relationshipLabelBox",!0).attr("x",d.x-_.width/2).attr("y",d.y-_.height/2).attr("width",_.width).attr("height",_.height)}),"drawRelationshipFromLayout"),H=t((function(t,r,a,i){P=e().er,l.info("Drawing ER diagram");const n=e().securityLevel;let s;"sandbox"===n&&(s=p("#i"+r));const o=p("sandbox"===n?s.nodes()[0].contentDocument.body:"body").select(`[id='${r}']`);let c;B.insertMarkers(o,P),c=new y({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:P.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel((function(){return{}}));const u=j(o,i.db.getEntities(),c),f=U(i.db.getRelationships(),c);_(c),z(o,c),f.forEach((function(t){G(o,t,c,u,i)}));const m=P.diagramPadding;h.insertTitle(o,"entityTitleText",P.titleTopMargin,i.db.getDiagramTitle());const E=o.node().getBBox(),g=E.width+2*m,O=E.height+2*m;d(o,O,g,P.useMaxWidth),o.attr("viewBox",`${E.x-m} ${E.y-m} ${g} ${O}`)}),"draw"),Q="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function X(t="",e=""){const r=t.replace(C,"");return`${q(e)}${q(r)}${R(t,Q)}`}function q(t=""){return t.length>0?`${t}-`:""}t(X,"generateId"),t(q,"strWithHyphen");var J={parser:x,db:L,renderer:{setConf:Z,draw:H},styles:t((t=>`\n  .entityBox {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n  }\n\n  .attributeBoxOdd {\n    fill: ${t.attributeBackgroundColorOdd};\n    stroke: ${t.nodeBorder};\n  }\n\n  .attributeBoxEven {\n    fill:  ${t.attributeBackgroundColorEven};\n    stroke: ${t.nodeBorder};\n  }\n\n  .relationshipLabelBox {\n    fill: ${t.tertiaryColor};\n    opacity: 0.7;\n    background-color: ${t.tertiaryColor};\n      rect {\n        opacity: 0.5;\n      }\n  }\n\n    .relationshipLine {\n      stroke: ${t.lineColor};\n    }\n\n  .entityTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor};\n  }    \n  #MD_PARENT_START {\n    fill: #f5f5f5 !important;\n    stroke: ${t.lineColor} !important;\n    stroke-width: 1;\n  }\n  #MD_PARENT_END {\n    fill: #f5f5f5 !important;\n    stroke: ${t.lineColor} !important;\n    stroke-width: 1;\n  }\n  \n`),"getStyles")};export{J as diagram};
