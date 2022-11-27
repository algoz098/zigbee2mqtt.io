"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[92755],{22371:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-288b2824","path":"/devices/TS0012.html","title":"TuYa TS0012 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0012 control via MQTT","description":"Integrate your TuYa TS0012 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-08-11T22:17:44.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Rebrand","slug":"rebrand","link":"#rebrand","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (left endpoint)","slug":"switch-left-endpoint","link":"#switch-left-endpoint","children":[]},{"level":3,"title":"Switch (right endpoint)","slug":"switch-right-endpoint","link":"#switch-right-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1669574130000},"filePathRelative":"devices/TS0012.md"}')},9418:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var o=i(66252);const a=(0,o._)("h1",{id:"tuya-ts0012",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#tuya-ts0012","aria-hidden":"true"},"#"),(0,o.Uk)(" TuYa TS0012")],-1),d=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"TS0012")],-1),l=(0,o._)("td",null,"Vendor",-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Smart light switch - 2 gang")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"switch (state), linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0012.jpg",alt:"TuYa TS0012"})])],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"White-label"),(0,o._)("td",null,"Vrey VR-X712U-0013, TUYATEC GDKES-02TZXD, Earda ESW-2ZAA-EU")],-1),c=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),p=(0,o._)("h3",{id:"rebrand",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#rebrand","aria-hidden":"true"},"#"),(0,o.Uk)(" Rebrand")],-1),q=(0,o._)("p",null,"Also branded as Yagusmart in the UK, with a version that does not require a neutral wire.",-1),g=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint" aria-hidden="true">#</a> Switch (left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint" aria-hidden="true">#</a> Switch (right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),_={},w=(0,i(83744).Z)(_,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[d,(0,o._)("tbody",null,[n,(0,o._)("tr",null,[l,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=TuYa"},{default:(0,o.w5)((()=>[(0,o.Uk)("TuYa")])),_:1})])]),s,r,u,h])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,p,q,(0,o.kq)(" Notes END: Do not edit below this line "),g])}]])}}]);