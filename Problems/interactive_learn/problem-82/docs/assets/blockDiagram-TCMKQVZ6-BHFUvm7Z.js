var e,t;import{i as s,p as i,d as n,b as r,e as o,m as l}from"./chunk-REEJFE46-BvyCz9PH.js";import{_ as a,d as c,l as u,Q as h,D as d,j as g,t as y,z as p,e as b}from"./mermaid-DQSM_sqh.js";import{c as x}from"./clone-g0J2IX27.js";import{s as S}from"./transform-C6EuPmuu.js";import{G as f}from"./graph-kMqJ244R.js";import{c as L}from"./channel-CTFZTC6a.js";import"./step-DY8hpDjU.js";import"./index-BjgPZtE2.js";import"./_baseUniq-DqUXMYBe.js";import"./_baseEach-BQYkekEb.js";var m=function(){var e=a((function(e,t,s,i){for(s=s||{},i=e.length;i--;s[e[i]]=t);return s}),"o"),t=[1,7],s=[1,13],i=[1,14],n=[1,15],r=[1,19],o=[1,16],l=[1,17],c=[1,18],u=[8,30],h=[8,21,28,29,30,31,32,40,44,47],d=[1,23],g=[1,24],y=[8,15,16,21,28,29,30,31,32,40,44,47],p=[8,15,16,21,27,28,29,30,31,32,40,44,47],b=[1,49],x={trace:a((function(){}),"trace"),yy:{},symbols_:{error:2,spaceLines:3,SPACELINE:4,NL:5,separator:6,SPACE:7,EOF:8,start:9,BLOCK_DIAGRAM_KEY:10,document:11,stop:12,statement:13,link:14,LINK:15,START_LINK:16,LINK_LABEL:17,STR:18,nodeStatement:19,columnsStatement:20,SPACE_BLOCK:21,blockStatement:22,classDefStatement:23,cssClassStatement:24,styleStatement:25,node:26,SIZE:27,COLUMNS:28,"id-block":29,end:30,block:31,NODE_ID:32,nodeShapeNLabel:33,dirList:34,DIR:35,NODE_DSTART:36,NODE_DEND:37,BLOCK_ARROW_START:38,BLOCK_ARROW_END:39,classDef:40,CLASSDEF_ID:41,CLASSDEF_STYLEOPTS:42,DEFAULT:43,class:44,CLASSENTITY_IDS:45,STYLECLASS:46,style:47,STYLE_ENTITY_IDS:48,STYLE_DEFINITION_DATA:49,$accept:0,$end:1},terminals_:{2:"error",4:"SPACELINE",5:"NL",7:"SPACE",8:"EOF",10:"BLOCK_DIAGRAM_KEY",15:"LINK",16:"START_LINK",17:"LINK_LABEL",18:"STR",21:"SPACE_BLOCK",27:"SIZE",28:"COLUMNS",29:"id-block",30:"end",31:"block",32:"NODE_ID",35:"DIR",36:"NODE_DSTART",37:"NODE_DEND",38:"BLOCK_ARROW_START",39:"BLOCK_ARROW_END",40:"classDef",41:"CLASSDEF_ID",42:"CLASSDEF_STYLEOPTS",43:"DEFAULT",44:"class",45:"CLASSENTITY_IDS",46:"STYLECLASS",47:"style",48:"STYLE_ENTITY_IDS",49:"STYLE_DEFINITION_DATA"},productions_:[0,[3,1],[3,2],[3,2],[6,1],[6,1],[6,1],[9,3],[12,1],[12,1],[12,2],[12,2],[11,1],[11,2],[14,1],[14,4],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[19,3],[19,2],[19,1],[20,1],[22,4],[22,3],[26,1],[26,2],[34,1],[34,2],[33,3],[33,4],[23,3],[23,3],[24,3],[25,3]],performAction:a((function(e,t,s,i,n,r,o){var l=r.length-1;switch(n){case 4:i.getLogger().debug("Rule: separator (NL) ");break;case 5:i.getLogger().debug("Rule: separator (Space) ");break;case 6:i.getLogger().debug("Rule: separator (EOF) ");break;case 7:i.getLogger().debug("Rule: hierarchy: ",r[l-1]),i.setHierarchy(r[l-1]);break;case 8:i.getLogger().debug("Stop NL ");break;case 9:i.getLogger().debug("Stop EOF ");break;case 10:i.getLogger().debug("Stop NL2 ");break;case 11:i.getLogger().debug("Stop EOF2 ");break;case 12:i.getLogger().debug("Rule: statement: ",r[l]),"number"==typeof r[l].length?this.$=r[l]:this.$=[r[l]];break;case 13:i.getLogger().debug("Rule: statement #2: ",r[l-1]),this.$=[r[l-1]].concat(r[l]);break;case 14:i.getLogger().debug("Rule: link: ",r[l],e),this.$={edgeTypeStr:r[l],label:""};break;case 15:i.getLogger().debug("Rule: LABEL link: ",r[l-3],r[l-1],r[l]),this.$={edgeTypeStr:r[l],label:r[l-1]};break;case 18:const t=parseInt(r[l]),s=i.generateId();this.$={id:s,type:"space",label:"",width:t,children:[]};break;case 23:i.getLogger().debug("Rule: (nodeStatement link node) ",r[l-2],r[l-1],r[l]," typestr: ",r[l-1].edgeTypeStr);const n=i.edgeStrToEdgeData(r[l-1].edgeTypeStr);this.$=[{id:r[l-2].id,label:r[l-2].label,type:r[l-2].type,directions:r[l-2].directions},{id:r[l-2].id+"-"+r[l].id,start:r[l-2].id,end:r[l].id,label:r[l-1].label,type:"edge",directions:r[l].directions,arrowTypeEnd:n,arrowTypeStart:"arrow_open"},{id:r[l].id,label:r[l].label,type:i.typeStr2Type(r[l].typeStr),directions:r[l].directions}];break;case 24:i.getLogger().debug("Rule: nodeStatement (abc88 node size) ",r[l-1],r[l]),this.$={id:r[l-1].id,label:r[l-1].label,type:i.typeStr2Type(r[l-1].typeStr),directions:r[l-1].directions,widthInColumns:parseInt(r[l],10)};break;case 25:i.getLogger().debug("Rule: nodeStatement (node) ",r[l]),this.$={id:r[l].id,label:r[l].label,type:i.typeStr2Type(r[l].typeStr),directions:r[l].directions,widthInColumns:1};break;case 26:i.getLogger().debug("APA123",this?this:"na"),i.getLogger().debug("COLUMNS: ",r[l]),this.$={type:"column-setting",columns:"auto"===r[l]?-1:parseInt(r[l])};break;case 27:i.getLogger().debug("Rule: id-block statement : ",r[l-2],r[l-1]),i.generateId(),this.$={...r[l-2],type:"composite",children:r[l-1]};break;case 28:i.getLogger().debug("Rule: blockStatement : ",r[l-2],r[l-1],r[l]);const o=i.generateId();this.$={id:o,type:"composite",label:"",children:r[l-1]};break;case 29:i.getLogger().debug("Rule: node (NODE_ID separator): ",r[l]),this.$={id:r[l]};break;case 30:i.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ",r[l-1],r[l]),this.$={id:r[l-1],label:r[l].label,typeStr:r[l].typeStr,directions:r[l].directions};break;case 31:i.getLogger().debug("Rule: dirList: ",r[l]),this.$=[r[l]];break;case 32:i.getLogger().debug("Rule: dirList: ",r[l-1],r[l]),this.$=[r[l-1]].concat(r[l]);break;case 33:i.getLogger().debug("Rule: nodeShapeNLabel: ",r[l-2],r[l-1],r[l]),this.$={typeStr:r[l-2]+r[l],label:r[l-1]};break;case 34:i.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ",r[l-3],r[l-2]," #3:",r[l-1],r[l]),this.$={typeStr:r[l-3]+r[l],label:r[l-2],directions:r[l-1]};break;case 35:case 36:this.$={type:"classDef",id:r[l-1].trim(),css:r[l].trim()};break;case 37:this.$={type:"applyClass",id:r[l-1].trim(),styleClass:r[l].trim()};break;case 38:this.$={type:"applyStyles",id:r[l-1].trim(),stylesStr:r[l].trim()}}}),"anonymous"),table:[{9:1,10:[1,2]},{1:[3]},{11:3,13:4,19:5,20:6,21:t,22:8,23:9,24:10,25:11,26:12,28:s,29:i,31:n,32:r,40:o,44:l,47:c},{8:[1,20]},e(u,[2,12],{13:4,19:5,20:6,22:8,23:9,24:10,25:11,26:12,11:21,21:t,28:s,29:i,31:n,32:r,40:o,44:l,47:c}),e(h,[2,16],{14:22,15:d,16:g}),e(h,[2,17]),e(h,[2,18]),e(h,[2,19]),e(h,[2,20]),e(h,[2,21]),e(h,[2,22]),e(y,[2,25],{27:[1,25]}),e(h,[2,26]),{19:26,26:12,32:r},{11:27,13:4,19:5,20:6,21:t,22:8,23:9,24:10,25:11,26:12,28:s,29:i,31:n,32:r,40:o,44:l,47:c},{41:[1,28],43:[1,29]},{45:[1,30]},{48:[1,31]},e(p,[2,29],{33:32,36:[1,33],38:[1,34]}),{1:[2,7]},e(u,[2,13]),{26:35,32:r},{32:[2,14]},{17:[1,36]},e(y,[2,24]),{11:37,13:4,14:22,15:d,16:g,19:5,20:6,21:t,22:8,23:9,24:10,25:11,26:12,28:s,29:i,31:n,32:r,40:o,44:l,47:c},{30:[1,38]},{42:[1,39]},{42:[1,40]},{46:[1,41]},{49:[1,42]},e(p,[2,30]),{18:[1,43]},{18:[1,44]},e(y,[2,23]),{18:[1,45]},{30:[1,46]},e(h,[2,28]),e(h,[2,35]),e(h,[2,36]),e(h,[2,37]),e(h,[2,38]),{37:[1,47]},{34:48,35:b},{15:[1,50]},e(h,[2,27]),e(p,[2,33]),{39:[1,51]},{34:52,35:b,39:[2,31]},{32:[2,15]},e(p,[2,34]),{39:[2,32]}],defaultActions:{20:[2,7],23:[2,14],50:[2,15],52:[2,32]},parseError:a((function(e,t){if(!t.recoverable){var s=new Error(e);throw s.hash=t,s}this.trace(e)}),"parseError"),parse:a((function(e){var t=this,s=[0],i=[],n=[null],r=[],o=this.table,l="",c=0,u=0,h=r.slice.call(arguments,1),d=Object.create(this.lexer),g={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(g.yy[y]=this.yy[y]);d.setInput(e,g.yy),g.yy.lexer=d,g.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var p=d.yylloc;r.push(p);var b=d.options&&d.options.ranges;function x(){var e;return"number"!=typeof(e=i.pop()||d.lex()||1)&&(e instanceof Array&&(e=(i=e).pop()),e=t.symbols_[e]||e),e}"function"==typeof g.yy.parseError?this.parseError=g.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,a((function(e){s.length=s.length-2*e,n.length=n.length-e,r.length=r.length-e}),"popStack"),a(x,"lex");for(var S,f,L,m,_,k,E,w,v={};;){if(f=s[s.length-1],this.defaultActions[f]?L=this.defaultActions[f]:(null==S&&(S=x()),L=o[f]&&o[f][S]),void 0===L||!L.length||!L[0]){var D="";for(_ in w=[],o[f])this.terminals_[_]&&_>2&&w.push("'"+this.terminals_[_]+"'");D=d.showPosition?"Parse error on line "+(c+1)+":\n"+d.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[S]||S)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==S?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(D,{text:d.match,token:this.terminals_[S]||S,line:d.yylineno,loc:p,expected:w})}if(L[0]instanceof Array&&L.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+S);switch(L[0]){case 1:s.push(S),n.push(d.yytext),r.push(d.yylloc),s.push(L[1]),S=null,u=d.yyleng,l=d.yytext,c=d.yylineno,p=d.yylloc;break;case 2:if(k=this.productions_[L[1]][1],v.$=n[n.length-k],v._$={first_line:r[r.length-(k||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(k||1)].first_column,last_column:r[r.length-1].last_column},b&&(v._$.range=[r[r.length-(k||1)].range[0],r[r.length-1].range[1]]),void 0!==(m=this.performAction.apply(v,[l,u,c,g.yy,L[1],n,r].concat(h))))return m;k&&(s=s.slice(0,-1*k*2),n=n.slice(0,-1*k),r=r.slice(0,-1*k)),s.push(this.productions_[L[1]][0]),n.push(v.$),r.push(v._$),E=o[s[s.length-2]][s[s.length-1]],s.push(E);break;case 3:return!0}}return!0}),"parse")},S=function(){return{EOF:1,parseError:a((function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)}),"parseError"),setInput:a((function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:a((function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e}),"input"),unput:a((function(e){var t=e.length,s=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===i.length?this.yylloc.first_column:0)+i[i.length-s.length].length-s[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this}),"unput"),more:a((function(){return this._more=!0,this}),"more"),reject:a((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:a((function(e){this.unput(this.match.slice(e))}),"less"),pastInput:a((function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:a((function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:a((function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"}),"showPosition"),test_match:a((function(e,t){var s,i,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(i=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],s=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var r in n)this[r]=n[r];return!1}return!1}),"test_match"),next:a((function(){if(this.done)return this.EOF;var e,t,s,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),r=0;r<n.length;r++)if((s=this._input.match(this.rules[n[r]]))&&(!t||s[0].length>t[0].length)){if(t=s,i=r,this.options.backtrack_lexer){if(!1!==(e=this.test_match(s,n[r])))return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,n[i]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:a((function(){var e=this.next();return e||this.lex()}),"lex"),begin:a((function(e){this.conditionStack.push(e)}),"begin"),popState:a((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:a((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:a((function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"}),"topState"),pushState:a((function(e){this.begin(e)}),"pushState"),stateStackSize:a((function(){return this.conditionStack.length}),"stateStackSize"),options:{},performAction:a((function(e,t,s,i){switch(s){case 0:return 10;case 1:return e.getLogger().debug("Found space-block"),31;case 2:return e.getLogger().debug("Found nl-block"),31;case 3:return e.getLogger().debug("Found space-block"),29;case 4:e.getLogger().debug(".",t.yytext);break;case 5:e.getLogger().debug("_",t.yytext);break;case 6:return 5;case 7:return t.yytext=-1,28;case 8:return t.yytext=t.yytext.replace(/columns\s+/,""),e.getLogger().debug("COLUMNS (LEX)",t.yytext),28;case 9:case 77:case 78:case 100:this.pushState("md_string");break;case 10:return"MD_STR";case 11:case 35:case 80:this.popState();break;case 12:this.pushState("string");break;case 13:e.getLogger().debug("LEX: POPPING STR:",t.yytext),this.popState();break;case 14:return e.getLogger().debug("LEX: STR end:",t.yytext),"STR";case 15:return t.yytext=t.yytext.replace(/space\:/,""),e.getLogger().debug("SPACE NUM (LEX)",t.yytext),21;case 16:return t.yytext="1",e.getLogger().debug("COLUMNS (LEX)",t.yytext),21;case 17:return 43;case 18:return"LINKSTYLE";case 19:return"INTERPOLATE";case 20:return this.pushState("CLASSDEF"),40;case 21:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 22:return this.popState(),this.pushState("CLASSDEFID"),41;case 23:return this.popState(),42;case 24:return this.pushState("CLASS"),44;case 25:return this.popState(),this.pushState("CLASS_STYLE"),45;case 26:return this.popState(),46;case 27:return this.pushState("STYLE_STMNT"),47;case 28:return this.popState(),this.pushState("STYLE_DEFINITION"),48;case 29:return this.popState(),49;case 30:return this.pushState("acc_title"),"acc_title";case 31:return this.popState(),"acc_title_value";case 32:return this.pushState("acc_descr"),"acc_descr";case 33:return this.popState(),"acc_descr_value";case 34:this.pushState("acc_descr_multiline");break;case 36:return"acc_descr_multiline_value";case 37:return 30;case 38:case 39:case 41:case 42:case 45:return this.popState(),e.getLogger().debug("Lex: (("),"NODE_DEND";case 40:return this.popState(),e.getLogger().debug("Lex: ))"),"NODE_DEND";case 43:return this.popState(),e.getLogger().debug("Lex: (-"),"NODE_DEND";case 44:return this.popState(),e.getLogger().debug("Lex: -)"),"NODE_DEND";case 46:return this.popState(),e.getLogger().debug("Lex: ]]"),"NODE_DEND";case 47:return this.popState(),e.getLogger().debug("Lex: ("),"NODE_DEND";case 48:return this.popState(),e.getLogger().debug("Lex: ])"),"NODE_DEND";case 49:case 50:return this.popState(),e.getLogger().debug("Lex: /]"),"NODE_DEND";case 51:return this.popState(),e.getLogger().debug("Lex: )]"),"NODE_DEND";case 52:return this.popState(),e.getLogger().debug("Lex: )"),"NODE_DEND";case 53:return this.popState(),e.getLogger().debug("Lex: ]>"),"NODE_DEND";case 54:return this.popState(),e.getLogger().debug("Lex: ]"),"NODE_DEND";case 55:return e.getLogger().debug("Lexa: -)"),this.pushState("NODE"),36;case 56:return e.getLogger().debug("Lexa: (-"),this.pushState("NODE"),36;case 57:return e.getLogger().debug("Lexa: ))"),this.pushState("NODE"),36;case 58:case 60:case 61:case 62:case 65:return e.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 59:return e.getLogger().debug("Lex: ((("),this.pushState("NODE"),36;case 63:return e.getLogger().debug("Lexc: >"),this.pushState("NODE"),36;case 64:return e.getLogger().debug("Lexa: (["),this.pushState("NODE"),36;case 66:case 67:case 68:case 69:case 70:case 71:case 72:return this.pushState("NODE"),36;case 73:return e.getLogger().debug("Lexa: ["),this.pushState("NODE"),36;case 74:return this.pushState("BLOCK_ARROW"),e.getLogger().debug("LEX ARR START"),38;case 75:return e.getLogger().debug("Lex: NODE_ID",t.yytext),32;case 76:return e.getLogger().debug("Lex: EOF",t.yytext),8;case 79:return"NODE_DESCR";case 81:e.getLogger().debug("Lex: Starting string"),this.pushState("string");break;case 82:e.getLogger().debug("LEX ARR: Starting string"),this.pushState("string");break;case 83:return e.getLogger().debug("LEX: NODE_DESCR:",t.yytext),"NODE_DESCR";case 84:e.getLogger().debug("LEX POPPING"),this.popState();break;case 85:e.getLogger().debug("Lex: =>BAE"),this.pushState("ARROW_DIR");break;case 86:return t.yytext=t.yytext.replace(/^,\s*/,""),e.getLogger().debug("Lex (right): dir:",t.yytext),"DIR";case 87:return t.yytext=t.yytext.replace(/^,\s*/,""),e.getLogger().debug("Lex (left):",t.yytext),"DIR";case 88:return t.yytext=t.yytext.replace(/^,\s*/,""),e.getLogger().debug("Lex (x):",t.yytext),"DIR";case 89:return t.yytext=t.yytext.replace(/^,\s*/,""),e.getLogger().debug("Lex (y):",t.yytext),"DIR";case 90:return t.yytext=t.yytext.replace(/^,\s*/,""),e.getLogger().debug("Lex (up):",t.yytext),"DIR";case 91:return t.yytext=t.yytext.replace(/^,\s*/,""),e.getLogger().debug("Lex (down):",t.yytext),"DIR";case 92:return t.yytext="]>",e.getLogger().debug("Lex (ARROW_DIR end):",t.yytext),this.popState(),this.popState(),"BLOCK_ARROW_END";case 93:return e.getLogger().debug("Lex: LINK","#"+t.yytext+"#"),15;case 94:case 95:case 96:return e.getLogger().debug("Lex: LINK",t.yytext),15;case 97:case 98:case 99:return e.getLogger().debug("Lex: START_LINK",t.yytext),this.pushState("LLABEL"),16;case 101:return e.getLogger().debug("Lex: Starting string"),this.pushState("string"),"LINK_LABEL";case 102:return this.popState(),e.getLogger().debug("Lex: LINK","#"+t.yytext+"#"),15;case 103:case 104:return this.popState(),e.getLogger().debug("Lex: LINK",t.yytext),15;case 105:return e.getLogger().debug("Lex: COLON",t.yytext),t.yytext=t.yytext.slice(1),27}}),"anonymous"),rules:[/^(?:block-beta\b)/,/^(?:block\s+)/,/^(?:block\n+)/,/^(?:block:)/,/^(?:[\s]+)/,/^(?:[\n]+)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:columns\s+auto\b)/,/^(?:columns\s+[\d]+)/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:space[:]\d+)/,/^(?:space\b)/,/^(?:default\b)/,/^(?:linkStyle\b)/,/^(?:interpolate\b)/,/^(?:classDef\s+)/,/^(?:DEFAULT\s+)/,/^(?:\w+\s+)/,/^(?:[^\n]*)/,/^(?:class\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:style\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:end\b\s*)/,/^(?:\(\(\()/,/^(?:\)\)\))/,/^(?:[\)]\))/,/^(?:\}\})/,/^(?:\})/,/^(?:\(-)/,/^(?:-\))/,/^(?:\(\()/,/^(?:\]\])/,/^(?:\()/,/^(?:\]\))/,/^(?:\\\])/,/^(?:\/\])/,/^(?:\)\])/,/^(?:[\)])/,/^(?:\]>)/,/^(?:[\]])/,/^(?:-\))/,/^(?:\(-)/,/^(?:\)\))/,/^(?:\))/,/^(?:\(\(\()/,/^(?:\(\()/,/^(?:\{\{)/,/^(?:\{)/,/^(?:>)/,/^(?:\(\[)/,/^(?:\()/,/^(?:\[\[)/,/^(?:\[\|)/,/^(?:\[\()/,/^(?:\)\)\))/,/^(?:\[\\)/,/^(?:\[\/)/,/^(?:\[\\)/,/^(?:\[)/,/^(?:<\[)/,/^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,/^(?:$)/,/^(?:["][`])/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]+)/,/^(?:["])/,/^(?:\]>\s*\()/,/^(?:,?\s*right\s*)/,/^(?:,?\s*left\s*)/,/^(?:,?\s*x\s*)/,/^(?:,?\s*y\s*)/,/^(?:,?\s*up\s*)/,/^(?:,?\s*down\s*)/,/^(?:\)\s*)/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?:\s*~~[\~]+\s*)/,/^(?:\s*[xo<]?--\s*)/,/^(?:\s*[xo<]?==\s*)/,/^(?:\s*[xo<]?-\.\s*)/,/^(?:["][`])/,/^(?:["])/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?::\d+)/],conditions:{STYLE_DEFINITION:{rules:[29],inclusive:!1},STYLE_STMNT:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[23],inclusive:!1},CLASSDEF:{rules:[21,22],inclusive:!1},CLASS_STYLE:{rules:[26],inclusive:!1},CLASS:{rules:[25],inclusive:!1},LLABEL:{rules:[100,101,102,103,104],inclusive:!1},ARROW_DIR:{rules:[86,87,88,89,90,91,92],inclusive:!1},BLOCK_ARROW:{rules:[77,82,85],inclusive:!1},NODE:{rules:[38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,78,81],inclusive:!1},md_string:{rules:[10,11,79,80],inclusive:!1},space:{rules:[],inclusive:!1},string:{rules:[13,14,83,84],inclusive:!1},acc_descr_multiline:{rules:[35,36],inclusive:!1},acc_descr:{rules:[33],inclusive:!1},acc_title:{rules:[31],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,12,15,16,17,18,19,20,24,27,30,32,34,37,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,93,94,95,96,97,98,99,105],inclusive:!0}}}}();function f(){this.yy={}}return x.lexer=S,a(f,"Parser"),f.prototype=x,x.Parser=f,new f}();m.parser=m;var _=m,k=new Map,E=[],w=new Map,v="color",D="fill",$=c(),N=new Map,I=a((e=>b.sanitizeText(e,$)),"sanitizeText"),T=a((function(e,t=""){let s=N.get(e);s||(s={id:e,styles:[],textStyles:[]},N.set(e,s)),null!=t&&t.split(",").forEach((e=>{const t=e.replace(/([^;]*);/,"$1").trim();if(RegExp(v).exec(e)){const e=t.replace(D,"bgFill").replace(v,D);s.textStyles.push(e)}s.styles.push(t)}))}),"addStyleClass"),z=a((function(e,t=""){const s=k.get(e);null!=t&&(s.styles=t.split(","))}),"addStyle2Node"),C=a((function(e,t){e.split(",").forEach((function(e){let s=k.get(e);if(void 0===s){const t=e.trim();s={id:t,type:"na",children:[]},k.set(t,s)}s.classes||(s.classes=[]),s.classes.push(t)}))}),"setCssClass"),O=a(((e,t)=>{const s=e.flat(),i=[];for(const n of s)if(n.label&&(n.label=I(n.label)),"classDef"!==n.type)if("applyClass"!==n.type)if("applyStyles"!==n.type)if("column-setting"===n.type)t.columns=n.columns??-1;else if("edge"===n.type){const e=(w.get(n.id)??0)+1;w.set(n.id,e),n.id=e+"-"+n.id,E.push(n)}else{n.label||("composite"===n.type?n.label="":n.label=n.id);const e=k.get(n.id);if(void 0===e?k.set(n.id,n):("na"!==n.type&&(e.type=n.type),n.label!==n.id&&(e.label=n.label)),n.children&&O(n.children,n),"space"===n.type){const e=n.width??1;for(let t=0;t<e;t++){const e=x(n);e.id=e.id+"-"+t,k.set(e.id,e),i.push(e)}}else void 0===e&&i.push(n)}else(null==n?void 0:n.stylesStr)&&z(n.id,null==n?void 0:n.stylesStr);else C(n.id,(null==n?void 0:n.styleClass)??"");else T(n.id,n.css);t.children=i}),"populateBlockDatabase"),A=[],R={id:"root",type:"composite",children:[],columns:-1},B=a((()=>{u.debug("Clear called"),y(),R={id:"root",type:"composite",children:[],columns:-1},k=new Map([["root",R]]),A=[],N=new Map,E=[],w=new Map}),"clear");function P(e){switch(u.debug("typeStr2Type",e),e){case"[]":return"square";case"()":return u.debug("we have a round"),"round";case"(())":return"circle";case">]":return"rect_left_inv_arrow";case"{}":return"diamond";case"{{}}":return"hexagon";case"([])":return"stadium";case"[[]]":return"subroutine";case"[()]":return"cylinder";case"((()))":return"doublecircle";case"[//]":return"lean_right";case"[\\\\]":return"lean_left";case"[/\\]":return"trapezoid";case"[\\/]":return"inv_trapezoid";case"<[]>":return"block_arrow";default:return"na"}}function F(e){return u.debug("typeStr2Type",e),"=="===e?"thick":"normal"}function Y(e){switch(e.trim()){case"--x":return"arrow_cross";case"--o":return"arrow_circle";default:return"arrow_point"}}a(P,"typeStr2Type"),a(F,"edgeTypeStr2Type"),a(Y,"edgeStrToEdgeData");var M=0,K=a((()=>(M++,"id-"+Math.random().toString(36).substr(2,12)+"-"+M)),"generateId"),X=a((e=>{R.children=e,O(e,R),A=R.children}),"setHierarchy"),j=a((e=>{const t=k.get(e);return t?t.columns?t.columns:t.children?t.children.length:-1:-1}),"getColumns"),W=a((()=>[...k.values()]),"getBlocksFlat"),U=a((()=>A||[]),"getBlocks"),H=a((()=>E),"getEdges"),G=a((e=>k.get(e)),"getBlock"),q=a((e=>{k.set(e.id,e)}),"setBlock"),J=a((()=>console),"getLogger"),Z=a((function(){return N}),"getClasses"),Q={getConfig:a((()=>d().block),"getConfig"),typeStr2Type:P,edgeTypeStr2Type:F,edgeStrToEdgeData:Y,getLogger:J,getBlocksFlat:W,getBlocks:U,getEdges:H,setHierarchy:X,getBlock:G,setBlock:q,getColumns:j,getClasses:Z,clear:B,generateId:K},V=a(((e,t)=>{const s=L,i=s(e,"r"),n=s(e,"g"),r=s(e,"b");return p(i,n,r,t)}),"fade"),ee=a((e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${V(e.edgeLabelBackground,.5)};\n    // background-color:\n  }\n\n  .node .cluster {\n    // fill: ${V(e.mainBkg,.5)};\n    fill: ${V(e.clusterBkg,.5)};\n    stroke: ${V(e.clusterBorder,.2)};\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`),"getStyles"),te=(null==(t=null==(e=c())?void 0:e.block)?void 0:t.padding)??8;function se(e,t){if(0===e||!Number.isInteger(e))throw new Error("Columns must be an integer !== 0.");if(t<0||!Number.isInteger(t))throw new Error("Position must be a non-negative integer."+t);if(e<0)return{px:t,py:0};if(1===e)return{px:0,py:t};return{px:t%e,py:Math.floor(t/e)}}a(se,"calculateBlockPosition");var ie=a((e=>{let t=0,s=0;for(const i of e.children){const{width:n,height:r,x:o,y:l}=i.size??{width:0,height:0,x:0,y:0};u.debug("getMaxChildSize abc95 child:",i.id,"width:",n,"height:",r,"x:",o,"y:",l,i.type),"space"!==i.type&&(n>t&&(t=n/(e.widthInColumns??1)),r>s&&(s=r))}return{width:t,height:s}}),"getMaxChildSize");function ne(e,t,s=0,i=0){var n,r,o,l,a,c,h,d,g,y,p;u.debug("setBlockSizes abc95 (start)",e.id,null==(n=null==e?void 0:e.size)?void 0:n.x,"block width =",null==e?void 0:e.size,"sieblingWidth",s),(null==(r=null==e?void 0:e.size)?void 0:r.width)||(e.size={width:s,height:i,x:0,y:0});let b=0,x=0;if((null==(o=e.children)?void 0:o.length)>0){for(const s of e.children)ne(s,t);const n=ie(e);b=n.width,x=n.height,u.debug("setBlockSizes abc95 maxWidth of",e.id,":s children is ",b,x);for(const t of e.children)t.size&&(u.debug(`abc95 Setting size of children of ${e.id} id=${t.id} ${b} ${x} ${JSON.stringify(t.size)}`),t.size.width=b*(t.widthInColumns??1)+te*((t.widthInColumns??1)-1),t.size.height=x,t.size.x=0,t.size.y=0,u.debug(`abc95 updating size of ${e.id} children child:${t.id} maxWidth:${b} maxHeight:${x}`));for(const s of e.children)ne(s,t,b,x);const r=e.columns??-1;let o=0;for(const t of e.children)o+=t.widthInColumns??1;let d=e.children.length;r>0&&r<o&&(d=r);const g=Math.ceil(o/d);let y=d*(b+te)+te,p=g*(x+te)+te;if(y<s){u.debug(`Detected to small siebling: abc95 ${e.id} sieblingWidth ${s} sieblingHeight ${i} width ${y}`),y=s,p=i;const t=(s-d*te-te)/d,n=(i-g*te-te)/g;u.debug("Size indata abc88",e.id,"childWidth",t,"maxWidth",b),u.debug("Size indata abc88",e.id,"childHeight",n,"maxHeight",x),u.debug("Size indata abc88 xSize",d,"padding",te);for(const s of e.children)s.size&&(s.size.width=t,s.size.height=n,s.size.x=0,s.size.y=0)}if(u.debug(`abc95 (finale calc) ${e.id} xSize ${d} ySize ${g} columns ${r}${e.children.length} width=${Math.max(y,(null==(l=e.size)?void 0:l.width)||0)}`),y<((null==(a=null==e?void 0:e.size)?void 0:a.width)||0)){y=(null==(c=null==e?void 0:e.size)?void 0:c.width)||0;const t=r>0?Math.min(e.children.length,r):e.children.length;if(t>0){const s=(y-t*te-te)/t;u.debug("abc95 (growing to fit) width",e.id,y,null==(h=e.size)?void 0:h.width,s);for(const t of e.children)t.size&&(t.size.width=s)}}e.size={width:y,height:p,x:0,y:0}}u.debug("setBlockSizes abc94 (done)",e.id,null==(d=null==e?void 0:e.size)?void 0:d.x,null==(g=null==e?void 0:e.size)?void 0:g.width,null==(y=null==e?void 0:e.size)?void 0:y.y,null==(p=null==e?void 0:e.size)?void 0:p.height)}function re(e,t){var s,i,n,r,o,l,a,c,h,d,g,y,p,b,x,S,f;u.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${null==(s=null==e?void 0:e.size)?void 0:s.x} y: ${null==(i=null==e?void 0:e.size)?void 0:i.y} width: ${null==(n=null==e?void 0:e.size)?void 0:n.width}`);const L=e.columns??-1;if(u.debug("layoutBlocks columns abc95",e.id,"=>",L,e),e.children&&e.children.length>0){const t=(null==(o=null==(r=null==e?void 0:e.children[0])?void 0:r.size)?void 0:o.width)??0,s=e.children.length*t+(e.children.length-1)*te;u.debug("widthOfChildren 88",s,"posX");let i=0;u.debug("abc91 block?.size?.x",e.id,null==(l=null==e?void 0:e.size)?void 0:l.x);let n=(null==(a=null==e?void 0:e.size)?void 0:a.x)?(null==(c=null==e?void 0:e.size)?void 0:c.x)+(-(null==(h=null==e?void 0:e.size)?void 0:h.width)/2||0):-te,x=0;for(const r of e.children){const t=e;if(!r.size)continue;const{width:s,height:o}=r.size,{px:l,py:a}=se(L,i);if(a!=x&&(x=a,n=(null==(d=null==e?void 0:e.size)?void 0:d.x)?(null==(g=null==e?void 0:e.size)?void 0:g.x)+(-(null==(y=null==e?void 0:e.size)?void 0:y.width)/2||0):-te,u.debug("New row in layout for block",e.id," and child ",r.id,x)),u.debug(`abc89 layout blocks (child) id: ${r.id} Pos: ${i} (px, py) ${l},${a} (${null==(p=null==t?void 0:t.size)?void 0:p.x},${null==(b=null==t?void 0:t.size)?void 0:b.y}) parent: ${t.id} width: ${s}${te}`),t.size){const e=s/2;r.size.x=n+te+e,u.debug(`abc91 layout blocks (calc) px, pyid:${r.id} startingPos=X${n} new startingPosX${r.size.x} ${e} padding=${te} width=${s} halfWidth=${e} => x:${r.size.x} y:${r.size.y} ${r.widthInColumns} (width * (child?.w || 1)) / 2 ${s*((null==r?void 0:r.widthInColumns)??1)/2}`),n=r.size.x+e,r.size.y=t.size.y-t.size.height/2+a*(o+te)+o/2+te,u.debug(`abc88 layout blocks (calc) px, pyid:${r.id}startingPosX${n}${te}${e}=>x:${r.size.x}y:${r.size.y}${r.widthInColumns}(width * (child?.w || 1)) / 2${s*((null==r?void 0:r.widthInColumns)??1)/2}`)}r.children&&re(r),i+=(null==r?void 0:r.widthInColumns)??1,u.debug("abc88 columnsPos",r,i)}}u.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${null==(x=null==e?void 0:e.size)?void 0:x.x} y: ${null==(S=null==e?void 0:e.size)?void 0:S.y} width: ${null==(f=null==e?void 0:e.size)?void 0:f.width}`)}function oe(e,{minX:t,minY:s,maxX:i,maxY:n}={minX:0,minY:0,maxX:0,maxY:0}){if(e.size&&"root"!==e.id){const{x:r,y:o,width:l,height:a}=e.size;r-l/2<t&&(t=r-l/2),o-a/2<s&&(s=o-a/2),r+l/2>i&&(i=r+l/2),o+a/2>n&&(n=o+a/2)}if(e.children)for(const r of e.children)({minX:t,minY:s,maxX:i,maxY:n}=oe(r,{minX:t,minY:s,maxX:i,maxY:n}));return{minX:t,minY:s,maxX:i,maxY:n}}function le(e){const t=e.getBlock("root");if(!t)return;ne(t,e,0,0),re(t),u.debug("getBlocks",JSON.stringify(t,null,2));const{minX:s,minY:i,maxX:n,maxY:r}=oe(t);return{x:s,y:i,width:n-s,height:r-i}}function ae(e,t,s=!1){var i,n,r;const o=e;let l="default";((null==(i=null==o?void 0:o.classes)?void 0:i.length)||0)>0&&(l=((null==o?void 0:o.classes)??[]).join(" ")),l+=" flowchart-label";let a,c=0,u="";switch(o.type){case"round":c=5,u="rect";break;case"composite":c=0,u="composite",a=0;break;case"square":case"group":default:u="rect";break;case"diamond":u="question";break;case"hexagon":u="hexagon";break;case"block_arrow":u="block_arrow";break;case"odd":case"rect_left_inv_arrow":u="rect_left_inv_arrow";break;case"lean_right":u="lean_right";break;case"lean_left":u="lean_left";break;case"trapezoid":u="trapezoid";break;case"inv_trapezoid":u="inv_trapezoid";break;case"circle":u="circle";break;case"ellipse":u="ellipse";break;case"stadium":u="stadium";break;case"subroutine":u="subroutine";break;case"cylinder":u="cylinder";break;case"doublecircle":u="doublecircle"}const g=h((null==o?void 0:o.styles)??[]),y=o.label,p=o.size??{width:0,height:0,x:0,y:0};return{labelStyle:g.labelStyle,shape:u,labelText:y,rx:c,ry:c,class:l,style:g.style,id:o.id,directions:o.directions,width:p.width,height:p.height,x:p.x,y:p.y,positioned:s,intersect:void 0,type:o.type,padding:a??(null==(r=null==(n=d())?void 0:n.block)?void 0:r.padding)??0}}async function ce(e,t,i){const n=ae(t,0,!1);if("group"===n.type)return;const r=d(),o=await s(e,n,{config:r}),l=o.node().getBBox(),a=i.getBlock(n.id);a.size={width:l.width,height:l.height,x:0,y:0,node:o},i.setBlock(a),o.remove()}async function ue(e,t,n){const r=ae(t,0,!0);if("space"!==n.getBlock(r.id).type){const n=d();await s(e,r,{config:n}),t.intersect=null==r?void 0:r.intersect,i(r)}}async function he(e,t,s,i){for(const n of t)await i(e,n,s),n.children&&await he(e,n.children,s,i)}async function de(e,t,s){await he(e,t,s,ce)}async function ge(e,t,s){await he(e,t,s,ue)}async function ye(e,t,s,i,l){const a=new f({multigraph:!0,compound:!0});a.setGraph({rankdir:"TB",nodesep:10,ranksep:10,marginx:8,marginy:8});for(const n of s)n.size&&a.setNode(n.id,{width:n.size.width,height:n.size.height,intersect:n.intersect});for(const c of t)if(c.start&&c.end){const t=i.getBlock(c.start),s=i.getBlock(c.end);if((null==t?void 0:t.size)&&(null==s?void 0:s.size)){const i=t.size,u=s.size,h=[{x:i.x,y:i.y},{x:i.x+(u.x-i.x)/2,y:i.y+(u.y-i.y)/2},{x:u.x,y:u.y}];n(e,{v:c.start,w:c.end,name:c.id},{...c,arrowTypeEnd:c.arrowTypeEnd,arrowTypeStart:c.arrowTypeStart,points:h,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"},void 0,"block",a,l),c.label&&(await r(e,{...c,label:c.label,labelStyle:"stroke: #333; stroke-width: 1.5px;fill:none;",arrowTypeEnd:c.arrowTypeEnd,arrowTypeStart:c.arrowTypeStart,points:h,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"}),o({...c,x:h[1].x,y:h[1].y},{originalPath:h}))}}}a(ne,"setBlockSizes"),a(re,"layoutBlocks"),a(oe,"findBounds"),a(le,"layout"),a(ae,"getNodeFromBlock"),a(ce,"calculateBlockSize"),a(ue,"insertBlockPositioned"),a(he,"performOperations"),a(de,"calculateBlockSizes"),a(ge,"insertBlocks"),a(ye,"insertEdges");var pe=a((function(e,t){return t.db.getClasses()}),"getClasses"),be={parser:_,db:Q,renderer:{draw:a((async function(e,t,s,i){const{securityLevel:n,block:r}=d(),o=i.db;let a;"sandbox"===n&&(a=S("#i"+t));const c=S("sandbox"===n?a.nodes()[0].contentDocument.body:"body"),h="sandbox"===n?c.select(`[id="${t}"]`):S(`[id="${t}"]`);l(h,["point","circle","cross"],i.type,t);const y=o.getBlocks(),p=o.getBlocksFlat(),b=o.getEdges(),x=h.insert("g").attr("class","block");await de(x,y,o);const f=le(o);if(await ge(x,y,o),await ye(x,b,p,o,t),f){const e=f,t=Math.max(1,Math.round(e.width/e.height*.125)),s=e.height+t+10,i=e.width+10,{useMaxWidth:n}=r;g(h,s,i,!!n),u.debug("Here Bounds",f,e),h.attr("viewBox",`${e.x-5} ${e.y-5} ${e.width+10} ${e.height+10}`)}}),"draw"),getClasses:pe},styles:ee};export{be as diagram};
