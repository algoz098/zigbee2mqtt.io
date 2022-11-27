"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[29639],{92294:(t,e,o)=>{o.r(e),o.d(e,{data:()=>i});const i=JSON.parse('{"key":"v-7e09c01c","path":"/devices/Z6.html","title":"Atsmart Z6 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Atsmart Z6 control via MQTT","description":"Integrate your Atsmart Z6 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-12-30T11:31:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"About the 4th bottom switch","slug":"about-the-4th-bottom-switch","link":"#about-the-4th-bottom-switch","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (left endpoint)","slug":"switch-left-endpoint","link":"#switch-left-endpoint","children":[]},{"level":3,"title":"Switch (center endpoint)","slug":"switch-center-endpoint","link":"#switch-center-endpoint","children":[]},{"level":3,"title":"Switch (right endpoint)","slug":"switch-right-endpoint","link":"#switch-right-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1669574130000},"filePathRelative":"devices/Z6.md"}')},99514:(t,e,o)=>{o.r(e),o.d(e,{default:()=>w});var i=o(66252);const s=(0,i._)("h1",{id:"atsmart-z6",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#atsmart-z6","aria-hidden":"true"},"#"),(0,i.Uk)(" Atsmart Z6")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"Z6")],-1),d=(0,i._)("td",null,"Vendor",-1),h=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"3 gang smart wall switch (no neutral wire)")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"switch (state), linkquality")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/Z6.jpg",alt:"Atsmart Z6"})])],-1),r=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),u=(0,i._)("h3",{id:"about-the-4th-bottom-switch",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#about-the-4th-bottom-switch","aria-hidden":"true"},"#"),(0,i.Uk)(" About the 4th bottom switch")],-1),p=(0,i._)("p",null,"This button acts as a master switch -- toggles the full on and off of the other three switches This button exposes NO endpoint Long-press this button 2s --\x3e pair mode (all light(s) blink 2 times), if the light(s) stay on, it means the pairing is successful Long-press this button 10s --\x3e unpair mode, all light(s) will blink 4 times",-1),q=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint" aria-hidden="true">#</a> Switch (left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-center-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-center-endpoint" aria-hidden="true">#</a> Switch (center endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_center</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_center&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_center&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_center&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_center&quot;: &quot;&quot;}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint" aria-hidden="true">#</a> Switch (right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),g={},w=(0,o(83744).Z)(g,[["render",function(t,e){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),s,(0,i._)("table",null,[a,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[d,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Atsmart"},{default:(0,i.w5)((()=>[(0,i.Uk)("Atsmart")])),_:1})])]),h,c,l])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),r,u,p,(0,i.kq)(" Notes END: Do not edit below this line "),q])}]])}}]);