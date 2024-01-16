const nt="ENTRIES",V="KEYS",T="VALUES",F="";class D{set;_type;_path;constructor(t,s){const n=t._tree,u=Array.from(n.keys());this.set=t,this._type=s,this._path=u.length>0?[{node:n,keys:u}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===F)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==F).join("")}value(){return E(this._path).node.get(F)}result(){switch(this._type){case T:return this.value();case V:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ut=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const u=t.length+1,o=u+s,i=new Uint8Array(o*u).fill(s+1);for(let r=0;r<u;++r)i[r]=r;for(let r=1;r<o;++r)i[r*u]=r;return R(e,t,s,n,i,1,u,""),n},R=(e,t,s,n,u,o,i,r)=>{const d=o*i;t:for(const l of e.keys())if(l===F){const a=u[d-1];a<=s&&n.set(r,[e.get(l),a])}else{let a=o;for(let h=0;h<l.length;++h,++a){const m=l[h],p=i*a,f=p-i;let c=u[p];const g=Math.max(0,a-s-1),_=Math.min(i-1,a+s);for(let y=g;y<_;++y){const b=m!==t[y],z=u[f+y]+ +b,A=u[f+y+1]+1,w=u[p+y]+1,L=u[p+y+1]=Math.min(z,A,w);L<c&&(c=L)}if(c>s)continue t}R(e.get(l),t,s,n,u,a,i,r+l)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[u,o]=M(n);for(const i of u.keys())if(i!==F&&i.startsWith(o)){const r=new Map;return r.set(i.slice(o.length),u.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ut(this._tree,t,s)}get(t){const s=I(this._tree,t);return s!==void 0?s.get(F):void 0}has(t){const s=I(this._tree,t);return s!==void 0&&s.has(F)}keys(){return new D(this,V)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,O(this._tree,t).set(F,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=O(this._tree,t);return n.set(F,s(n.get(F))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=O(this._tree,t);let u=n.get(F);return u===void 0&&n.set(F,u=s()),u}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,u]of t)s.set(n,u);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==F&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},I=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==F&&t.startsWith(s))return I(e.get(s),t.slice(s.length))},O=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const o of e.keys())if(o!==F&&t[n]===o[0]){const i=Math.min(s-n,o.length);let r=1;for(;r<i&&t[n+r]===o[r];)++r;const d=e.get(o);if(r===o.length)e=d;else{const l=new Map;l.set(o.slice(r),d),e.set(t.slice(n,n+r),l),e.delete(o),e=l}n+=r;continue t}const u=new Map;return e.set(t.slice(n),u),u}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(F),s.size===0)W(n);else if(s.size===1){const[u,o]=s.entries().next().value;q(n,u,o)}}},W=e=>{if(e.length===0)return;const[t,s]=M(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,u]=t.entries().next().value;n!==F&&q(e.slice(0,-1),n,u)}},q=(e,t,s)=>{if(e.length===0)return;const[n,u]=M(e);n.set(u+t,s),n.delete(u)},M=e=>e[e.length-1],it=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},rt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",$="and",ct="and_not",lt=(e,t)=>{e.includes(t)||e.push(t)},P=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},N=({score:e},{score:t})=>t-e,ht=()=>new Map,k=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,dt={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:u,terms:o,match:i}=t.get(s);n.score=n.score+u,n.match=Object.assign(n.match,i),P(n.terms,o)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const u=e.get(n);if(u==null)continue;const{score:o,terms:i,match:r}=t.get(n);P(u.terms,i),s.set(n,{score:u.score+o,terms:u.terms,match:Object.assign(u.match,r)})}return s},[ct]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},at=(e,t,s,n,u,o)=>{const{k:i,b:r,d}=o;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/u)))},ft=e=>(t,s,n)=>{const u=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,o=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:u,prefix:o}},H=(e,t,s,n)=>{for(const u of Object.keys(e._fieldIds))if(e._fieldIds[u]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${u}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},gt=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const u=e._index.fetch(n,ht),o=u.get(t);o==null||o.get(s)==null?H(e,s,t,n):o.get(s)<=1?o.size<=1?u.delete(t):o.delete(s):o.set(s,o.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},mt={k:1.2,b:.7,d:.5},pt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(rt),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:mt},Ft={combineWith:$,prefix:(e,t,s)=>t===s.length-1},_t={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},yt={..._t,...U},Y=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase();return e.reduce(dt[s])||new Map},B=(e,t,s,n,u,o,i,r,d=new Map)=>{if(u==null)return d;for(const l of Object.keys(o)){const a=o[l],h=e._fieldIds[l],m=u.get(h);if(m==null)continue;let p=m.size;const f=e._avgFieldLength[h];for(const c of m.keys()){if(!e._documentIds.has(c)){gt(e,h,c,s),p-=1;continue}const g=i?i(e._documentIds.get(c),s,e._storedFields.get(c)):1;if(!g)continue;const _=m.get(c),y=e._fieldLength.get(c)[h],b=at(_,p,e._documentCount,y,f,r),z=n*a*g*b,A=d.get(c);if(A){A.score+=z,lt(A.terms,t);const w=G(A.match,s);w?w.push(l):A.match[s]=[l]}else d.set(c,{score:z,terms:[t],match:{[s]:[l]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},u=(n.fields||e._options.fields).reduce((c,g)=>({...c,[g]:G(n.boost,g)||1}),{}),{boostDocument:o,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:l,prefix:a}={...J.weights,...i},h=e._index.get(t.term),m=B(e,t.term,t.term,1,h,u,o,d);let p,f;if(t.prefix&&(p=e._index.atPrefix(t.term)),t.fuzzy){const c=t.fuzzy===!0?.2:t.fuzzy,g=c<1?Math.min(r,Math.round(t.term.length*c)):c;g&&(f=e._index.fuzzyGet(t.term,g))}if(p)for(const[c,g]of p){const _=c.length-t.term.length;if(!_)continue;f?.delete(c);const y=a*c.length/(c.length+.3*_);B(e,t.term,c,y,g,u,o,d,m)}if(f)for(const c of f.keys()){const[g,_]=f.get(c);if(!_)continue;const y=l*c.length/(c.length+_);B(e,t.term,c,y,g,u,o,d,m)}return m},X=(e,t,s={})=>{if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(m=>X(e,m,a));return Y(h,a.combineWith)}const{tokenize:n,processTerm:u,searchOptions:o}=e._options,i={tokenize:n,processTerm:u,...o,...s},{tokenize:r,processTerm:d}=i,l=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(ft(i)).map(a=>At(e,a,i));return Y(l,i.combineWith)},K=(e,t,s={})=>{const n=X(e,t,s),u=[];for(const[o,{score:i,terms:r,match:d}]of n){const l=r.length,a={id:e._documentIds.get(o),score:i*l,terms:Object.keys(d),match:d};Object.assign(a,e._storedFields.get(o)),(s.filter==null||s.filter(a))&&u.push(a)}return u.sort(N),u},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:o,terms:i}of K(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=o,d.count+=1):n.set(r,{score:o,terms:i,count:1})}const u=[];for(const[o,{score:i,terms:r,count:d}]of n)u.push({suggestion:o,terms:r,score:i/d});return u.sort(N),u};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?yt:t.autoVacuum;this._options={...pt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...Ft,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const u={};for(const[o,i]of n)u[o]=Object.fromEntries(i);t.push([s,u])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:u,fieldLength:o,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:l},a)=>{if(l!==1&&l!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=k(n),h._idToShortId=new Map,h._fieldIds=u,h._fieldLength=k(o),h._avgFieldLength=i,h._storedFields=k(r),h._dirtCount=d||0,h._index=new C;for(const[m,p]of h._documentIds)h._idToShortId.set(p,m);for(const[m,p]of e){const f=new Map;for(const c of Object.keys(p)){let g=p[c];l===1&&(g=g.ds),f.set(parseInt(c,10),k(g))}h._index.set(m,f)}return h},Q=Object.entries,wt=Object.fromEntries,j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),u=[];let o=0,i=0;const r=(l,a=!1)=>{let h="";i===0?h=l.length>20?`… ${l.slice(-20)}`:l:a?h=l.length+i>100?`${l.slice(0,100-i)}… `:l:h=l.length>20?`${l.slice(0,20)} … ${l.slice(-20)}`:l,h&&u.push(h),i+=h.length,a||(u.push(["mark",t]),i+=t.length,i>=100&&u.push(" …"))};let d=s.indexOf(n,o);if(d===-1)return null;for(;d>=0;){const l=d+n.length;if(r(e.slice(o,d)),o=l,i>100)break;d=s.indexOf(n,o)}return i<100&&r(e.slice(o),!0),u},Z=/[\u4e00-\u9fa5]/g,tt=(e={})=>({fuzzy:.2,prefix:!0,processTerm:t=>{const s=t.match(Z)||[],n=t.replace(Z,"").toLowerCase();return n?[n,...s]:[...s]},...e}),xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),kt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),et=(e,t,s={})=>{const n={};return K(t,e,tt({boost:{h:2,t:1,c:4},...s})).forEach(u=>{const{id:o,terms:i,score:r}=u,d=o.includes("@"),l=o.includes("#"),[a,h]=o.split(/[#@]/),m=i.sort((f,c)=>f.length-c.length).filter((f,c)=>i.slice(c+1).every(g=>!g.includes(f))),{contents:p}=n[a]??={title:"",contents:[]};if(d)p.push([{type:"customField",key:a,index:h,display:m.map(f=>u.c.map(c=>j(c,f))).flat().filter(f=>f!==null)},r]);else{const f=m.map(c=>j(u.h,c)).filter(c=>c!==null);if(f.length&&p.push([{type:l?"heading":"title",key:a,...l&&{anchor:h},display:f},r]),"t"in u)for(const c of u.t){const g=m.map(_=>j(c,_)).filter(_=>_!==null);g.length&&p.push([{type:"text",key:a,...l&&{anchor:h},display:g},r])}}}),Q(n).sort(([,u],[,o])=>"max"==="total"?xt(u,o):kt(u,o)).map(([u,{title:o,contents:i}])=>{if(!o){const r=it(t,u);r&&(o=r.h)}return{title:o,contents:i.map(([r])=>r)}})},st=(e,t,s={})=>Ct(t,e,tt(s)).map(({suggestion:n})=>n),v=wt(Q(JSON.parse("{\"/\":{\"documentCount\":27,\"nextId\":27,\"documentIds\":{\"0\":\"v-8daa1a0e\",\"1\":\"v-563401b1\",\"2\":\"v-aae05fde\",\"3\":\"v-aae05fde#汽车的分级\",\"4\":\"v-aae05fde#一、汽车a、b、c、d级汽车划分\",\"5\":\"v-aae05fde#二、轿车、suv、mpv\",\"6\":\"v-aae05fde#二、两厢车、三厢车\",\"7\":\"v-1472066c\",\"8\":\"v-1472066c#敬请期待-请先移步基础知识-购车指南-新能源汽车板块\",\"9\":\"v-ed6e4e28\",\"10\":\"v-ed6e4e28#敬请期待-请先移步基础知识-购车指南-新能源汽车板块\",\"11\":\"v-fffb8e28\",\"12\":\"v-94427752\",\"13\":\"v-94427752#一、轿车优雅永不过时\",\"14\":\"v-94427752#一、suv女性的最爱\",\"15\":\"v-94427752#三、奇思妙想\",\"16\":\"v-5a352c17\",\"17\":\"v-5a352c17#一、买车理由\",\"18\":\"v-5a352c17#一、不买车理由\",\"19\":\"v-39ca5d8c\",\"20\":\"v-39ca5d8c#一、买油车的理由\",\"21\":\"v-39ca5d8c#一、买电车的理由\",\"22\":\"v-39ca5d8c#三、奇思妙想\",\"23\":\"v-6d7f5acc\",\"24\":\"v-46bd7294\",\"25\":\"v-46bd7294#电动汽车包括哪些类型\",\"26\":\"v-46bd7294#一句话概括不同电动汽车类型\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1,30],\"1\":[1],\"2\":[1],\"3\":[1],\"4\":[5,64],\"5\":[4,32],\"6\":[3,16],\"7\":[1],\"8\":[5],\"9\":[1],\"10\":[5],\"11\":[1],\"12\":[1,3],\"13\":[2,29],\"14\":[2,31],\"15\":[2,12],\"16\":[1,5],\"17\":[2,23],\"18\":[2,41],\"19\":[1,4],\"20\":[2,14],\"21\":[2,10],\"22\":[2,19],\"23\":[1],\"24\":[1],\"25\":[1,7],\"26\":[1,71]},\"averageFieldLength\":[1.9259259259259258,26.589141936968026],\"storedFields\":{\"0\":{\"h\":\"主页\",\"t\":[\"2011年，iPhone 4s手机横空出世，曾一度风靡全球的手机霸主诺基亚轰然倒塌，HTC、三星、中兴、华为、小米、天语、夏新、尼采、波导....... 这些数不清的手机纷纷入局一场没有硝烟的厮杀中, 线下手机店铺天盖地，广告随处可见，但消费者却不知如何选择一部适合自己的手机，购买过程往往充满着忽悠与欺诈。终于良币驱逐劣币，购买手机变得如此简单。\",\"2023年，汽车市场如此繁华，像极了2011年后的手机市场，我们不愿作购车小白，因此我们决定打造买车指南（CarVerse），致力于让买车像买手机一样简单。\",\"欢迎加入我们，一起做有意义的事情。\"]},\"1\":{\"h\":\"基础知识\"},\"2\":{\"h\":\"汽车分类\"},\"3\":{\"h\":\"汽车的分级\"},\"4\":{\"h\":\"一、汽车A、B、C、D级汽车划分\",\"t\":[\"汽车等级划分是德国大众汽车对汽车的一种分级方法，主要按照车长、轴距、排量参数进行划分，其中轴距是最主要的划分依据。按照此依据被分为：A00级、A0级、A级、B级、C级、D级车。在国内分别对应为：微型车、小型车、紧凑型车、中型车、中大型车、大型车。随着车型的增加以及价格、款式、配置选择越来越多样化，A级、B级、C级车的边缘交叉也会越来越多。例如，有些车型或许轴距属于A级车范围，而排量与价格却与B级车相差无几。目前，按照A、B、C、D级进行汽车等级划分逐渐在淡化。\",\"级别\",\"类型\",\"车长/米\",\"轴距/米\",\"排量/升\",\"A00级车\",\"微型车\",\"不超过3.7\",\"不超过2.3\",\"0.8-1.2\",\"A0级车\",\"小型车\",\"不超过4.2\",\"不超过2.6\",\"1.0-1.5\",\"A级车\",\"紧凑型车\",\"4.2-4.6\",\"2.5-2.7\",\"1.5-2.0\",\"B级别车\",\"中型车\",\"4.6-4.8\",\"2.7-2.8\",\"1.6-2.5\",\"C级车\",\"中大型车\",\"4.8-5.0\",\"2.8-2.95\",\"2.3-3.0\",\"D级车\",\"大型车\",\"大于5.0\",\"大于2.95\",\"大于3\",\"车长： 可简单理解为车辆的最大长度，如下面这辆车的车长是4908厘米。\",\"轴距： 可简单理解为汽车前轴中心到后轴中心的距离。如下面这辆车的轴距是2900厘米。\",\"排量： 指每行程或每循环吸入或排出的流体体积。\"]},\"5\":{\"h\":\"二、轿车、SUV、MPV\",\"t\":[\"下面图片分别是：轿车、SUV、MPV。（简单的讲：SUV是升高的轿车，MPV是拉长的SUV）\",\"轿车：通常是典型的四门设计，车身较低，后备箱与乘客室分隔。由于轿车重心低，因此操控性好，相比较于SUV重量轻，在同排量的情况下油耗会低一些。\",\"SUV:其英文是Sport Utility Vehicle，因此简称SUV。翻译为运动多功能汽车，其底盘更高，空间更大，能适应更多的道路，但是由于其重心较高，高速行驶的操控性不如轿车。\",\"MPV:英文是Multi-Purpose Vehicle, MVP较为冷门，内部空间较大，一般可乘坐7人，座椅灵活性高，主要用于家庭或商务用途。\"]},\"6\":{\"h\":\"二、两厢车、三厢车\",\"t\":[\"两厢车：两厢车是指少了突出的“屁股”(后备箱)的轿车，它将车厢与后备箱做成同一个厢体。这种布局形式能增加车内空间，多用于小型车和紧凑型车。\",\"三项车：三厢车是轿车的标准形式，它的车身结构由三个相互封闭用途各异的“厢”所组成：前部的发动机舱、车身中部的乘员舱和后部的行李舱。\",\"更为详细的车辆级别信息点击这里\"]},\"7\":{\"h\":\"数据统计\"},\"8\":{\"h\":\"敬请期待，请先移步基础知识，购车指南，新能源汽车板块！\"},\"9\":{\"h\":\"燃油汽车\"},\"10\":{\"h\":\"敬请期待，请先移步基础知识，购车指南，新能源汽车板块！\"},\"11\":{\"h\":\"购车指南\"},\"12\":{\"h\":\"SUV还是轿车\",\"t\":[\"先说结论：喜欢什么买什么。\"]},\"13\":{\"h\":\"一、轿车优雅永不过时\",\"t\":[\"如果用一个词语来形容轿车，那一定是“优雅”二字，三厢的轿车更像一个少女，流线型的车身，极地的风阻，除了现实低调、高端、大气上档次外，较低的重心，使他具有更好的操控性，在高速进弯时更具安全性，因此轿车具有：\",\"高端、优雅。所以公务车总是三厢的轿车。\",\"重心低，加速快，过弯稳定性好。\",\"风阻小，车身轻，更省油。\",\"三厢轿车尾箱独立，不串味，路噪好。所以车尾箱放个榴莲，副驾驶的女神是闻不到的。\",\"车身离地间隙低，稍显复杂的路况容易蹭地盘。\",\"轿车\"]},\"14\":{\"h\":\"一、SUV女性的最爱\",\"t\":[\"SUV用中文说就是：运动多功能汽车。通俗一点就是城郊实用汽车。\",\"同样的，让我们用一个词语形容SUV，那一定是“猛男”。高大、威武的身姿给你足够的安全感，居高临下的视野让你感觉我就是那颗最亮的星。因此SUV具有：\",\"高大，霸气。给足女性足够的安全感觉。这仿佛和谈恋爱异曲同工之妙，女性往往更喜欢“猛男”，尽管他重心不稳，身体不够灵活。\",\"底盘高，较高的离地间隙能够适用于更多复杂的路况。\",\"视野好，相比较于轿车其较高的车身，能够看得更远。\",\"安全性好。较大的内部空间相比较于轿车能够有更好的碰撞缓冲。\",\"风阻大，操控性差，不适合跑高速。\",\"车身重，油耗高，百公里加速相比较同级别轿车慢。\",\"SUV\"]},\"15\":{\"h\":\"三、奇思妙想\",\"t\":[\"我想你并不会把SUV开到显现操控性不好的速度，也并不会真在碰撞的时候说轿车安全性不好。\",\"我想你不会在意SUV百公里加速慢，也不会觉得轿车省油。\",\"回归本质：外观是轿车和SUV最大的区别，选择你所喜欢的，如此简单。\",\"灵魂拷问：你真的会因为轿车的优点放弃选择SUV吗？ 你真的会因为SUV的优点放弃选择轿车吗？\"]},\"16\":{\"h\":\"买不买汽车\",\"t\":[\"**先说结论：买不买车要看自己需求，没有标准答案。**绝大多数人买车不划算。\"]},\"17\":{\"h\":\"一、买车理由\",\"t\":[\"买车提高脱单概率。约上“暗恋”对象亦或其其他女生开着电动汽车，外接电力烧烤炉来一次郊外野餐.......提升彼此之间的感情。\",\"如果你是一个生意人，汽车似乎没有不买的理由。\",\"有些地方，汽车成为结婚的必需品。\",\"小城市，公共交通不方便，买辆车便利生活。\",\"有一个小家，有父母，有孩子，有妻子，有房子，有个车子，带着家人看看世界。\",\"追求驾驶体验，享受速度激情。\",\"野外露营\"]},\"18\":{\"h\":\"一、不买车理由\",\"t\":[\"公共交通更便利。在北上广这样的大城市公共交通便利，堵车严重，长距离通勤公共交通要比自驾更加节约时间。此外寻找停车位需要大量时间。\",\"买车、养车比打车、租车更费钱。\",\"下面表格是一辆15万元左右汽车每年的花费，粗略估计在2.5万元，实际花费远不止这么多。\",\"项目\",\"油费\",\"保险\",\"保养\",\"停车费\",\"折旧\",\"总计\",\"费用（元）\",\"7000\",\"4000\",\"1000\",\"3000\",\"10000\",\"25000\",\" 假设每天打车100元，2.5万元能打车250天，租车每天500元花费，能租50天，一个月平均租四次，相当于每周末租一次。那么，打车不用停车，租车不用考虑保养，保险，折旧，这不是更省心吗！\",\"大城市上不了车牌号，无法购买。\",\"北京城市地铁图\"]},\"19\":{\"h\":\"买油车还是电车\",\"t\":[\"先说结论：选择可靠买油车，选择智能化买电车。\"]},\"20\":{\"h\":\"一、买油车的理由\",\"t\":[\"油车可靠性高。油车经过几十年的发展，发动机、变速箱、底盘系统已经发展的相当成熟。汽车坏掉的几率会小的多。\",\"油车没有里程焦虑。三两分钟加箱油，重新满续航。\",\"便宜。当前电动汽车的发展使油车不断降价，购买油车价格更低。\",\"保险费便宜。\",\"油车\"]},\"21\":{\"h\":\"一、买电车的理由\",\"t\":[\"使用成本低。由于电费较为便宜，百公里花费仅二三十元。\",\"智能化程度高。当前的电车普遍具有智能座舱，更像一个移动的家。\",\"加速快。\",\"可外接电器，更适合野餐。\",\"电车\"]},\"22\":{\"h\":\"三、奇思妙想\",\"t\":[\"燃油车最终一点会被新能源汽车替代，但新能源汽车不只有电动汽车，还有氢燃料电动汽车等。未来终极的新能源汽车是什么，我们不得而知。\",\"在燃油汽车向电动汽车转变的过程中，混动汽车作为一款过度产品，似乎是一个不错的选择。\",\"如果生活不是很富裕，那一定是油车，省心。\",\"如果是第一辆汽车，那么也一定是油车，靠谱。\",\"如果生活需要更精彩，那一定是电车。\",\"灵魂拷问：车的本质是什么？\"]},\"23\":{\"h\":\"新能源汽车\"},\"24\":{\"h\":\"电动汽车包括哪些类型\"},\"25\":{\"h\":\"电动汽车包括哪些类型\",\"t\":[\"先说结论：电动汽车种类分为HEV、PHEV、SHEV、PSHEV、EV。\"]},\"26\":{\"h\":\"一句话概括不同电动汽车类型\",\"t\":[\"油电混动汽车：具备燃油驱动和电动驱动系统，过优化两者之间的协同工作的汽车，不能外接充电。\",\"插电式混合动力汽车：可外接充电的油电混动汽车。\",\"增程式电动汽车：发动机给动力电池充电，通过电动机驱动的汽车，可以外接充电。\",\"混动式混合动力汽：综合了插电式混合动力和增程式的电动汽车。\",\"纯电动汽车：纯由动力电池给电动机供电的电动汽车。\",\"“油电混动”（HEV）：同时具备发动机和电动机，在车辆低速运行时电动机工作，在车辆高速时使用发动机工作，使发动机维持的最佳工作状态，从而带来良好的动力性能，有效减少燃油消耗。另外，动力电池依靠发动机进行充电，往往没有外接充电口。\",\"“并联式混合动力汽车”（PHEV）：也叫插电式混合动力汽车”，和它名字一样，插电式混合动力汽车可简单认为是在“有点混动”汽车基础上增加了给汽车动力电池充电的系统。它具备两套完整的驱动系统，不仅有传统燃油汽车的发动机、变速箱、油箱等部件，还有纯电动汽车的电池、电动机等部件。它可以单独使用电力驱动，也可单独使用燃油驱动，甚至可以相互叠加。一般会有纯电模式、纯油模式、混合驱动模式可供选择。但是整车往往较重，油耗较高。\",\"“串联式混合动力汽车”（SHEV）：也叫增程式电动汽车，发动机只给汽车电池充电，电动机依靠动力电池驱动汽车行驶的汽车。相当于发动机是汽车的移动充电器，汽车可以通过充电桩充电也可通过发动机充电。当发动机供电时，发动机将燃油转换成电力，电力再驱动汽车，此时油耗升高。\",\"“混动式混合动力汽车”（PSHEV）：有两个电机，一个电机专职直接驱动车轮，另一个可以驱动车轮，也可以充当发电机给蓄电池充电。它同PHEV一样有两套动力系统，但是可用一个电机回收制动、怠速时的能量和发电机产生的能量来给电池充电。PHEV由于只有一个电机，因此只有在燃油驱动时才能将电动机当作发电机来给电池充电。\",\"“纯电动汽车”（EV）：完全由电动机消耗动力电池带动行驶的汽车。\",\"视频讲解点点击这里\"]}},\"dirtCount\":0,\"index\":[[\"视频讲解点点击这里\",{\"1\":{\"26\":1}}],[\"视野好\",{\"1\":{\"14\":1}}],[\"完全由电动机消耗动力电池带动行驶的汽车\",{\"1\":{\"26\":1}}],[\"怠速时的能量和发电机产生的能量来给电池充电\",{\"1\":{\"26\":1}}],[\"另一个可以驱动车轮\",{\"1\":{\"26\":1}}],[\"另外\",{\"1\":{\"26\":1}}],[\"此时油耗升高\",{\"1\":{\"26\":1}}],[\"此外寻找停车位需要大量时间\",{\"1\":{\"18\":1}}],[\"当发动机供电时\",{\"1\":{\"26\":1}}],[\"当前的电车普遍具有智能座舱\",{\"1\":{\"21\":1}}],[\"当前电动汽车的发展使油车不断降价\",{\"1\":{\"20\":1}}],[\"串联式混合动力汽车\",{\"1\":{\"26\":1}}],[\"混合驱动模式可供选择\",{\"1\":{\"26\":1}}],[\"混动式混合动力汽车\",{\"1\":{\"26\":1}}],[\"混动式混合动力汽\",{\"1\":{\"26\":1}}],[\"混动汽车作为一款过度产品\",{\"1\":{\"22\":1}}],[\"甚至可以相互叠加\",{\"1\":{\"26\":1}}],[\"还有纯电动汽车的电池\",{\"1\":{\"26\":1}}],[\"还有氢燃料电动汽车等\",{\"1\":{\"22\":1}}],[\"和它名字一样\",{\"1\":{\"26\":1}}],[\"并联式混合动力汽车\",{\"1\":{\"26\":1}}],[\"往往没有外接充电口\",{\"1\":{\"26\":1}}],[\"动力电池依靠发动机进行充电\",{\"1\":{\"26\":1}}],[\"从而带来良好的动力性能\",{\"1\":{\"26\":1}}],[\"同时具备发动机和电动机\",{\"1\":{\"26\":1}}],[\"同样的\",{\"1\":{\"14\":1}}],[\"hev\",{\"1\":{\"26\":1}}],[\"htc\",{\"1\":{\"0\":1}}],[\"纯油模式\",{\"1\":{\"26\":1}}],[\"纯由动力电池给电动机供电的电动汽车\",{\"1\":{\"26\":1}}],[\"纯电动汽车\",{\"1\":{\"26\":2}}],[\"综合了插电式混合动力和增程式的电动汽车\",{\"1\":{\"26\":1}}],[\"增程式电动汽车\",{\"1\":{\"26\":1}}],[\"插电式混合动力汽车可简单认为是在\",{\"1\":{\"26\":1}}],[\"插电式混合动力汽车\",{\"1\":{\"26\":1}}],[\"过优化两者之间的协同工作的汽车\",{\"1\":{\"26\":1}}],[\"过弯稳定性好\",{\"1\":{\"13\":1}}],[\"具备燃油驱动和电动驱动系统\",{\"1\":{\"26\":1}}],[\"ev\",{\"1\":{\"25\":1,\"26\":1}}],[\"shev\",{\"1\":{\"25\":1,\"26\":1}}],[\"suv用中文说就是\",{\"1\":{\"14\":1}}],[\"suv女性的最爱\",{\"0\":{\"14\":1}}],[\"suv还是轿车\",{\"0\":{\"12\":1}}],[\"suv是升高的轿车\",{\"1\":{\"5\":1}}],[\"suv\",{\"0\":{\"5\":1},\"1\":{\"5\":2,\"14\":1}}],[\"pshev\",{\"1\":{\"25\":1,\"26\":1}}],[\"phev由于只有一个电机\",{\"1\":{\"26\":1}}],[\"phev\",{\"1\":{\"25\":1,\"26\":1}}],[\"purpose\",{\"1\":{\"5\":1}}],[\"电力再驱动汽车\",{\"1\":{\"26\":1}}],[\"电动机依靠动力电池驱动汽车行驶的汽车\",{\"1\":{\"26\":1}}],[\"电动机等部件\",{\"1\":{\"26\":1}}],[\"电动汽车种类分为hev\",{\"1\":{\"25\":1}}],[\"电动汽车包括哪些类型\",{\"0\":{\"24\":1,\"25\":1}}],[\"电车\",{\"1\":{\"21\":1}}],[\"新能源汽车\",{\"0\":{\"23\":1}}],[\"新能源汽车板块\",{\"0\":{\"8\":1,\"10\":1}}],[\"靠谱\",{\"1\":{\"22\":1}}],[\"省心\",{\"1\":{\"22\":1}}],[\"似乎是一个不错的选择\",{\"1\":{\"22\":1}}],[\"未来终极的新能源汽车是什么\",{\"1\":{\"22\":1}}],[\"燃油车最终一点会被新能源汽车替代\",{\"1\":{\"22\":1}}],[\"燃油汽车\",{\"0\":{\"9\":1}}],[\"可以外接充电\",{\"1\":{\"26\":1}}],[\"可外接充电的油电混动汽车\",{\"1\":{\"26\":1}}],[\"可外接电器\",{\"1\":{\"21\":1}}],[\"可简单理解为汽车前轴中心到后轴中心的距离\",{\"1\":{\"4\":1}}],[\"可简单理解为车辆的最大长度\",{\"1\":{\"4\":1}}],[\"智能化程度高\",{\"1\":{\"21\":1}}],[\"百公里花费仅二三十元\",{\"1\":{\"21\":1}}],[\"百公里加速相比较同级别轿车慢\",{\"1\":{\"14\":1}}],[\"由于电费较为便宜\",{\"1\":{\"21\":1}}],[\"由于轿车重心低\",{\"1\":{\"5\":1}}],[\"使发动机维持的最佳工作状态\",{\"1\":{\"26\":1}}],[\"使用成本低\",{\"1\":{\"21\":1}}],[\"使他具有更好的操控性\",{\"1\":{\"13\":1}}],[\"便宜\",{\"1\":{\"20\":1}}],[\"重新满续航\",{\"1\":{\"20\":1}}],[\"重心低\",{\"1\":{\"13\":1}}],[\"底盘系统已经发展的相当成熟\",{\"1\":{\"20\":1}}],[\"底盘高\",{\"1\":{\"14\":1}}],[\"变速箱\",{\"1\":{\"20\":1,\"26\":1}}],[\"发动机将燃油转换成电力\",{\"1\":{\"26\":1}}],[\"发动机只给汽车电池充电\",{\"1\":{\"26\":1}}],[\"发动机给动力电池充电\",{\"1\":{\"26\":1}}],[\"发动机\",{\"1\":{\"20\":1}}],[\"选择智能化买电车\",{\"1\":{\"19\":1}}],[\"选择可靠买油车\",{\"1\":{\"19\":1}}],[\"选择你所喜欢的\",{\"1\":{\"15\":1}}],[\"北京城市地铁图\",{\"1\":{\"18\":1}}],[\"无法购买\",{\"1\":{\"18\":1}}],[\"打车不用停车\",{\"1\":{\"18\":1}}],[\"那么也一定是油车\",{\"1\":{\"22\":1}}],[\"那么\",{\"1\":{\"18\":1}}],[\"那一定是电车\",{\"1\":{\"22\":1}}],[\"那一定是油车\",{\"1\":{\"22\":1}}],[\"那一定是\",{\"1\":{\"13\":1,\"14\":1}}],[\"相当于发动机是汽车的移动充电器\",{\"1\":{\"26\":1}}],[\"相当于每周末租一次\",{\"1\":{\"18\":1}}],[\"相比较于轿车其较高的车身\",{\"1\":{\"14\":1}}],[\"相比较于suv重量轻\",{\"1\":{\"5\":1}}],[\"租车不用考虑保养\",{\"1\":{\"18\":1}}],[\"租车每天500元花费\",{\"1\":{\"18\":1}}],[\"租车更费钱\",{\"1\":{\"18\":1}}],[\"假设每天打车100元\",{\"1\":{\"18\":1}}],[\"元\",{\"1\":{\"18\":1}}],[\"费用\",{\"1\":{\"18\":1}}],[\"总计\",{\"1\":{\"18\":1}}],[\"折旧\",{\"1\":{\"18\":2}}],[\"停车费\",{\"1\":{\"18\":1}}],[\"保养\",{\"1\":{\"18\":1}}],[\"保险费便宜\",{\"1\":{\"20\":1}}],[\"保险\",{\"1\":{\"18\":2}}],[\"油耗较高\",{\"1\":{\"26\":1}}],[\"油耗高\",{\"1\":{\"14\":1}}],[\"油箱等部件\",{\"1\":{\"26\":1}}],[\"油电混动\",{\"1\":{\"26\":1}}],[\"油电混动汽车\",{\"1\":{\"26\":1}}],[\"油车\",{\"1\":{\"20\":1}}],[\"油车没有里程焦虑\",{\"1\":{\"20\":1}}],[\"油车经过几十年的发展\",{\"1\":{\"20\":1}}],[\"油车可靠性高\",{\"1\":{\"20\":1}}],[\"油费\",{\"1\":{\"18\":1}}],[\"项目\",{\"1\":{\"18\":1}}],[\"实际花费远不止这么多\",{\"1\":{\"18\":1}}],[\"粗略估计在2\",{\"1\":{\"18\":1}}],[\"下面表格是一辆15万元左右汽车每年的花费\",{\"1\":{\"18\":1}}],[\"下面图片分别是\",{\"1\":{\"5\":1}}],[\"养车比打车\",{\"1\":{\"18\":1}}],[\"长距离通勤公共交通要比自驾更加节约时间\",{\"1\":{\"18\":1}}],[\"堵车严重\",{\"1\":{\"18\":1}}],[\"公共交通更便利\",{\"1\":{\"18\":1}}],[\"公共交通不方便\",{\"1\":{\"17\":1}}],[\"野外露营\",{\"1\":{\"17\":1}}],[\"享受速度激情\",{\"1\":{\"17\":1}}],[\"追求驾驶体验\",{\"1\":{\"17\":1}}],[\"带着家人看看世界\",{\"1\":{\"17\":1}}],[\"有两个电机\",{\"1\":{\"26\":1}}],[\"有点混动\",{\"1\":{\"26\":1}}],[\"有效减少燃油消耗\",{\"1\":{\"26\":1}}],[\"有个车子\",{\"1\":{\"17\":1}}],[\"有房子\",{\"1\":{\"17\":1}}],[\"有妻子\",{\"1\":{\"17\":1}}],[\"有孩子\",{\"1\":{\"17\":1}}],[\"有父母\",{\"1\":{\"17\":1}}],[\"有一个小家\",{\"1\":{\"17\":1}}],[\"有些地方\",{\"1\":{\"17\":1}}],[\"有些车型或许轴距属于a级车范围\",{\"1\":{\"4\":1}}],[\"提升彼此之间的感情\",{\"1\":{\"17\":1}}],[\"外接电力烧烤炉来一次郊外野餐\",{\"1\":{\"17\":1}}],[\"外观是轿车和suv最大的区别\",{\"1\":{\"15\":1}}],[\"对象亦或其其他女生开着电动汽车\",{\"1\":{\"17\":1}}],[\"暗恋\",{\"1\":{\"17\":1}}],[\"约上\",{\"1\":{\"17\":1}}],[\"买电车的理由\",{\"0\":{\"21\":1}}],[\"买油车的理由\",{\"0\":{\"20\":1}}],[\"买油车还是电车\",{\"0\":{\"19\":1}}],[\"买辆车便利生活\",{\"1\":{\"17\":1}}],[\"买车\",{\"1\":{\"18\":1}}],[\"买车提高脱单概率\",{\"1\":{\"17\":1}}],[\"买车理由\",{\"0\":{\"17\":1}}],[\"买不买车要看自己需求\",{\"1\":{\"16\":1}}],[\"买不买汽车\",{\"0\":{\"16\":1}}],[\"绝大多数人买车不划算\",{\"1\":{\"16\":1}}],[\"没有标准答案\",{\"1\":{\"16\":1}}],[\"你真的会因为suv的优点放弃选择轿车吗\",{\"1\":{\"15\":1}}],[\"你真的会因为轿车的优点放弃选择suv吗\",{\"1\":{\"15\":1}}],[\"灵魂拷问\",{\"1\":{\"15\":1,\"22\":1}}],[\"回归本质\",{\"1\":{\"15\":1}}],[\"也可以充当发电机给蓄电池充电\",{\"1\":{\"26\":1}}],[\"也可单独使用燃油驱动\",{\"1\":{\"26\":1}}],[\"也叫增程式电动汽车\",{\"1\":{\"26\":1}}],[\"也叫插电式混合动力汽车\",{\"1\":{\"26\":1}}],[\"也不会觉得轿车省油\",{\"1\":{\"15\":1}}],[\"也并不会真在碰撞的时候说轿车安全性不好\",{\"1\":{\"15\":1}}],[\"我们不得而知\",{\"1\":{\"22\":1}}],[\"我们不愿作购车小白\",{\"1\":{\"0\":1}}],[\"我想你不会在意suv百公里加速慢\",{\"1\":{\"15\":1}}],[\"我想你并不会把suv开到显现操控性不好的速度\",{\"1\":{\"15\":1}}],[\"奇思妙想\",{\"0\":{\"15\":1,\"22\":1}}],[\"操控性差\",{\"1\":{\"14\":1}}],[\"风阻大\",{\"1\":{\"14\":1}}],[\"风阻小\",{\"1\":{\"13\":1}}],[\"安全性好\",{\"1\":{\"14\":1}}],[\"能租50天\",{\"1\":{\"18\":1}}],[\"能够看得更远\",{\"1\":{\"14\":1}}],[\"能适应更多的道路\",{\"1\":{\"5\":1}}],[\"较大的内部空间相比较于轿车能够有更好的碰撞缓冲\",{\"1\":{\"14\":1}}],[\"较高的离地间隙能够适用于更多复杂的路况\",{\"1\":{\"14\":1}}],[\"较低的重心\",{\"1\":{\"13\":1}}],[\"身体不够灵活\",{\"1\":{\"14\":1}}],[\"尽管他重心不稳\",{\"1\":{\"14\":1}}],[\"女性往往更喜欢\",{\"1\":{\"14\":1}}],[\"给足女性足够的安全感觉\",{\"1\":{\"14\":1}}],[\"霸气\",{\"1\":{\"14\":1}}],[\"居高临下的视野让你感觉我就是那颗最亮的星\",{\"1\":{\"14\":1}}],[\"威武的身姿给你足够的安全感\",{\"1\":{\"14\":1}}],[\"猛男\",{\"1\":{\"14\":2}}],[\"让我们用一个词语形容suv\",{\"1\":{\"14\":1}}],[\"通过电动机驱动的汽车\",{\"1\":{\"26\":1}}],[\"通俗一点就是城郊实用汽车\",{\"1\":{\"14\":1}}],[\"通常是典型的四门设计\",{\"1\":{\"5\":1}}],[\"运动多功能汽车\",{\"1\":{\"14\":1}}],[\"稍显复杂的路况容易蹭地盘\",{\"1\":{\"13\":1}}],[\"副驾驶的女神是闻不到的\",{\"1\":{\"13\":1}}],[\"路噪好\",{\"1\":{\"13\":1}}],[\"不仅有传统燃油汽车的发动机\",{\"1\":{\"26\":1}}],[\"不能外接充电\",{\"1\":{\"26\":1}}],[\"不买车理由\",{\"0\":{\"18\":1}}],[\"不适合跑高速\",{\"1\":{\"14\":1}}],[\"不串味\",{\"1\":{\"13\":1}}],[\"不超过4\",{\"1\":{\"4\":1}}],[\"不超过2\",{\"1\":{\"4\":2}}],[\"不超过3\",{\"1\":{\"4\":1}}],[\"更适合野餐\",{\"1\":{\"21\":1}}],[\"更像一个移动的家\",{\"1\":{\"21\":1}}],[\"更省油\",{\"1\":{\"13\":1}}],[\"更为详细的车辆级别信息点击这里\",{\"1\":{\"6\":1}}],[\"加速快\",{\"1\":{\"13\":1,\"21\":1}}],[\"所以车尾箱放个榴莲\",{\"1\":{\"13\":1}}],[\"所以公务车总是三厢的轿车\",{\"1\":{\"13\":1}}],[\"所组成\",{\"1\":{\"6\":1}}],[\"高大\",{\"1\":{\"14\":2}}],[\"高端\",{\"1\":{\"13\":2}}],[\"高速行驶的操控性不如轿车\",{\"1\":{\"5\":1}}],[\"除了现实低调\",{\"1\":{\"13\":1}}],[\"极地的风阻\",{\"1\":{\"13\":1}}],[\"流线型的车身\",{\"1\":{\"13\":1}}],[\"优雅\",{\"1\":{\"13\":2}}],[\"如果生活需要更精彩\",{\"1\":{\"22\":1}}],[\"如果生活不是很富裕\",{\"1\":{\"22\":1}}],[\"如果是第一辆汽车\",{\"1\":{\"22\":1}}],[\"如果你是一个生意人\",{\"1\":{\"17\":1}}],[\"如果用一个词语来形容轿车\",{\"1\":{\"13\":1}}],[\"如此简单\",{\"1\":{\"15\":1}}],[\"如下面这辆车的轴距是2900厘米\",{\"1\":{\"4\":1}}],[\"如下面这辆车的车长是4908厘米\",{\"1\":{\"4\":1}}],[\"喜欢什么买什么\",{\"1\":{\"12\":1}}],[\"先说结论\",{\"1\":{\"12\":1,\"16\":1,\"19\":1,\"25\":1}}],[\"购车指南\",{\"0\":{\"8\":1,\"10\":1,\"11\":1}}],[\"购买油车价格更低\",{\"1\":{\"20\":1}}],[\"购买手机变得如此简单\",{\"1\":{\"0\":1}}],[\"购买过程往往充满着忽悠与欺诈\",{\"1\":{\"0\":1}}],[\"请先移步基础知识\",{\"0\":{\"8\":1,\"10\":1}}],[\"敬请期待\",{\"0\":{\"8\":1,\"10\":1}}],[\"数据统计\",{\"0\":{\"7\":1}}],[\"前部的发动机舱\",{\"1\":{\"6\":1}}],[\"厢\",{\"1\":{\"6\":1}}],[\"它同phev一样有两套动力系统\",{\"1\":{\"26\":1}}],[\"它可以单独使用电力驱动\",{\"1\":{\"26\":1}}],[\"它具备两套完整的驱动系统\",{\"1\":{\"26\":1}}],[\"它的车身结构由三个相互封闭用途各异的\",{\"1\":{\"6\":1}}],[\"它将车厢与后备箱做成同一个厢体\",{\"1\":{\"6\":1}}],[\"多用于小型车和紧凑型车\",{\"1\":{\"6\":1}}],[\"这不是更省心吗\",{\"1\":{\"18\":1}}],[\"这仿佛和谈恋爱异曲同工之妙\",{\"1\":{\"14\":1}}],[\"这种布局形式能增加车内空间\",{\"1\":{\"6\":1}}],[\"这些数不清的手机纷纷入局一场没有硝烟的厮杀中\",{\"1\":{\"0\":1}}],[\"的轿车\",{\"1\":{\"6\":1}}],[\"后备箱\",{\"1\":{\"6\":1}}],[\"后备箱与乘客室分隔\",{\"1\":{\"5\":1}}],[\"屁股\",{\"1\":{\"6\":1}}],[\"三两分钟加箱油\",{\"1\":{\"20\":1}}],[\"三\",{\"0\":{\"15\":1,\"22\":1}}],[\"三厢轿车尾箱独立\",{\"1\":{\"13\":1}}],[\"三厢的轿车更像一个少女\",{\"1\":{\"13\":1}}],[\"三厢车是轿车的标准形式\",{\"1\":{\"6\":1}}],[\"三厢车\",{\"0\":{\"6\":1}}],[\"三项车\",{\"1\":{\"6\":1}}],[\"三星\",{\"1\":{\"0\":1}}],[\"两厢车是指少了突出的\",{\"1\":{\"6\":1}}],[\"两厢车\",{\"0\":{\"6\":1},\"1\":{\"6\":1}}],[\"座椅灵活性高\",{\"1\":{\"5\":1}}],[\"内部空间较大\",{\"1\":{\"5\":1}}],[\"mvp较为冷门\",{\"1\":{\"5\":1}}],[\"mpv是拉长的suv\",{\"1\":{\"5\":1}}],[\"mpv\",{\"0\":{\"5\":1},\"1\":{\"5\":2}}],[\"英文是multi\",{\"1\":{\"5\":1}}],[\"但是可用一个电机回收制动\",{\"1\":{\"26\":1}}],[\"但是整车往往较重\",{\"1\":{\"26\":1}}],[\"但是由于其重心较高\",{\"1\":{\"5\":1}}],[\"但新能源汽车不只有电动汽车\",{\"1\":{\"22\":1}}],[\"但消费者却不知如何选择一部适合自己的手机\",{\"1\":{\"0\":1}}],[\"空间更大\",{\"1\":{\"5\":1}}],[\"翻译为运动多功能汽车\",{\"1\":{\"5\":1}}],[\"vehicle\",{\"1\":{\"5\":2}}],[\"utility\",{\"1\":{\"5\":1}}],[\"其底盘更高\",{\"1\":{\"5\":1}}],[\"其英文是sport\",{\"1\":{\"5\":1}}],[\"其中轴距是最主要的划分依据\",{\"1\":{\"4\":1}}],[\"在车辆高速时使用发动机工作\",{\"1\":{\"26\":1}}],[\"在车辆低速运行时电动机工作\",{\"1\":{\"26\":1}}],[\"在燃油汽车向电动汽车转变的过程中\",{\"1\":{\"22\":1}}],[\"在北上广这样的大城市公共交通便利\",{\"1\":{\"18\":1}}],[\"在高速进弯时更具安全性\",{\"1\":{\"13\":1}}],[\"在同排量的情况下油耗会低一些\",{\"1\":{\"5\":1}}],[\"在国内分别对应为\",{\"1\":{\"4\":1}}],[\"因此只有在燃油驱动时才能将电动机当作发电机来给电池充电\",{\"1\":{\"26\":1}}],[\"因此suv具有\",{\"1\":{\"14\":1}}],[\"因此轿车具有\",{\"1\":{\"13\":1}}],[\"因此简称suv\",{\"1\":{\"5\":1}}],[\"因此操控性好\",{\"1\":{\"5\":1}}],[\"因此我们决定打造买车指南\",{\"1\":{\"0\":1}}],[\"车的本质是什么\",{\"1\":{\"22\":1}}],[\"车身重\",{\"1\":{\"14\":1}}],[\"车身离地间隙低\",{\"1\":{\"13\":1}}],[\"车身轻\",{\"1\":{\"13\":1}}],[\"车身中部的乘员舱和后部的行李舱\",{\"1\":{\"6\":1}}],[\"车身较低\",{\"1\":{\"5\":1}}],[\"车长\",{\"1\":{\"4\":2}}],[\"简单的讲\",{\"1\":{\"5\":1}}],[\"轿车优雅永不过时\",{\"0\":{\"13\":1}}],[\"轿车\",{\"0\":{\"5\":1},\"1\":{\"5\":2,\"13\":1}}],[\"二字\",{\"1\":{\"13\":1}}],[\"二\",{\"0\":{\"5\":1,\"6\":1}}],[\"指每行程或每循环吸入或排出的流体体积\",{\"1\":{\"4\":1}}],[\"大城市上不了车牌号\",{\"1\":{\"18\":1}}],[\"大气上档次外\",{\"1\":{\"13\":1}}],[\"大于3\",{\"1\":{\"4\":1}}],[\"大于2\",{\"1\":{\"4\":1}}],[\"大于5\",{\"1\":{\"4\":1}}],[\"大型车\",{\"1\":{\"4\":2}}],[\"95\",{\"1\":{\"4\":2}}],[\"4000\",{\"1\":{\"18\":1}}],[\"4\",{\"1\":{\"4\":5}}],[\"4s手机横空出世\",{\"1\":{\"0\":1}}],[\"5万元能打车250天\",{\"1\":{\"18\":1}}],[\"5万元\",{\"1\":{\"18\":1}}],[\"5\",{\"1\":{\"4\":5}}],[\"6\",{\"1\":{\"4\":4}}],[\"25000\",{\"1\":{\"18\":1}}],[\"2\",{\"1\":{\"4\":12,\"18\":1}}],[\"2023年\",{\"1\":{\"0\":1}}],[\"2011年\",{\"1\":{\"0\":1}}],[\"10000\",{\"1\":{\"18\":1}}],[\"1000\",{\"1\":{\"18\":1}}],[\"1\",{\"1\":{\"4\":5}}],[\"8\",{\"1\":{\"4\":5}}],[\"0\",{\"1\":{\"4\":6}}],[\"3000\",{\"1\":{\"18\":1}}],[\"3\",{\"1\":{\"4\":3}}],[\"7000\",{\"1\":{\"18\":1}}],[\"7\",{\"1\":{\"4\":3}}],[\"升\",{\"1\":{\"4\":1}}],[\"排量\",{\"1\":{\"4\":2}}],[\"排量参数进行划分\",{\"1\":{\"4\":1}}],[\"米\",{\"1\":{\"4\":2}}],[\"类型\",{\"1\":{\"4\":1}}],[\"级别\",{\"1\":{\"4\":1}}],[\"按照a\",{\"1\":{\"4\":1}}],[\"按照此依据被分为\",{\"1\":{\"4\":1}}],[\"目前\",{\"1\":{\"4\":1}}],[\"而排量与价格却与b级车相差无几\",{\"1\":{\"4\":1}}],[\"例如\",{\"1\":{\"4\":1}}],[\"配置选择越来越多样化\",{\"1\":{\"4\":1}}],[\"款式\",{\"1\":{\"4\":1}}],[\"随着车型的增加以及价格\",{\"1\":{\"4\":1}}],[\"中大型车\",{\"1\":{\"4\":2}}],[\"中型车\",{\"1\":{\"4\":2}}],[\"中兴\",{\"1\":{\"0\":1}}],[\"紧凑型车\",{\"1\":{\"4\":2}}],[\"小城市\",{\"1\":{\"17\":1}}],[\"小型车\",{\"1\":{\"4\":2}}],[\"小米\",{\"1\":{\"0\":1}}],[\"微型车\",{\"1\":{\"4\":2}}],[\"d级进行汽车等级划分逐渐在淡化\",{\"1\":{\"4\":1}}],[\"d级车\",{\"1\":{\"4\":2}}],[\"d级汽车划分\",{\"0\":{\"4\":1}}],[\"a级车\",{\"1\":{\"4\":1}}],[\"a级\",{\"1\":{\"4\":2}}],[\"a0级车\",{\"1\":{\"4\":1}}],[\"a0级\",{\"1\":{\"4\":1}}],[\"a00级车\",{\"1\":{\"4\":1}}],[\"a00级\",{\"1\":{\"4\":1}}],[\"轴距\",{\"1\":{\"4\":3}}],[\"主要用于家庭或商务用途\",{\"1\":{\"5\":1}}],[\"主要按照车长\",{\"1\":{\"4\":1}}],[\"主页\",{\"0\":{\"0\":1}}],[\"c级车\",{\"1\":{\"4\":1}}],[\"c级车的边缘交叉也会越来越多\",{\"1\":{\"4\":1}}],[\"c级\",{\"1\":{\"4\":1}}],[\"c\",{\"0\":{\"4\":1},\"1\":{\"4\":1}}],[\"carverse\",{\"1\":{\"0\":1}}],[\"b级别车\",{\"1\":{\"4\":1}}],[\"b级\",{\"1\":{\"4\":2}}],[\"b\",{\"0\":{\"4\":1},\"1\":{\"4\":1}}],[\"一个电机专职直接驱动车轮\",{\"1\":{\"26\":1}}],[\"一个月平均租四次\",{\"1\":{\"18\":1}}],[\"一般会有纯电模式\",{\"1\":{\"26\":1}}],[\"一般可乘坐7人\",{\"1\":{\"5\":1}}],[\"一句话概括不同电动汽车类型\",{\"0\":{\"26\":1}}],[\"一\",{\"0\":{\"4\":1,\"13\":1,\"14\":1,\"17\":1,\"18\":1,\"20\":1,\"21\":1}}],[\"一起做有意义的事情\",{\"1\":{\"0\":1}}],[\"汽车可以通过充电桩充电也可通过发动机充电\",{\"1\":{\"26\":1}}],[\"汽车基础上增加了给汽车动力电池充电的系统\",{\"1\":{\"26\":1}}],[\"汽车坏掉的几率会小的多\",{\"1\":{\"20\":1}}],[\"汽车成为结婚的必需品\",{\"1\":{\"17\":1}}],[\"汽车似乎没有不买的理由\",{\"1\":{\"17\":1}}],[\"汽车等级划分是德国大众汽车对汽车的一种分级方法\",{\"1\":{\"4\":1}}],[\"汽车a\",{\"0\":{\"4\":1}}],[\"汽车的分级\",{\"0\":{\"3\":1}}],[\"汽车分类\",{\"0\":{\"2\":1}}],[\"汽车市场如此繁华\",{\"1\":{\"0\":1}}],[\"基础知识\",{\"0\":{\"1\":1}}],[\"欢迎加入我们\",{\"1\":{\"0\":1}}],[\"致力于让买车像买手机一样简单\",{\"1\":{\"0\":1}}],[\"像极了2011年后的手机市场\",{\"1\":{\"0\":1}}],[\"终于良币驱逐劣币\",{\"1\":{\"0\":1}}],[\"广告随处可见\",{\"1\":{\"0\":1}}],[\"线下手机店铺天盖地\",{\"1\":{\"0\":1}}],[\"波导\",{\"1\":{\"0\":1}}],[\"尼采\",{\"1\":{\"0\":1}}],[\"夏新\",{\"1\":{\"0\":1}}],[\"天语\",{\"1\":{\"0\":1}}],[\"华为\",{\"1\":{\"0\":1}}],[\"曾一度风靡全球的手机霸主诺基亚轰然倒塌\",{\"1\":{\"0\":1}}],[\"iphone\",{\"1\":{\"0\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(st(t,v[s],n)):e==="search"?self.postMessage(et(t,v[s],n)):self.postMessage({suggestions:st(t,v[s],n),results:et(t,v[s],n)})};
//# sourceMappingURL=index.js.map
