"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[40165],{30380:(e,o,t)=>{t.r(o),t.d(o,{data:()=>d});const d=JSON.parse('{"key":"v-4ab4feaf","path":"/devices/0402946.html","title":"Datek 0402946 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Datek 0402946 control via MQTT","description":"Integrate your Datek 0402946 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-04-29T18:07:03.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"PIN Code Usage","slug":"pin-code-usage","link":"#pin-code-usage","children":[]},{"level":3,"title":"Manual","slug":"manual","link":"#manual","children":[]},{"level":3,"title":"Where do I find this product","slug":"where-do-i-find-this-product","link":"#where-do-i-find-this-product","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Lock","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Pin_code (composite)","slug":"pin-code-composite","link":"#pin-code-composite","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Action_source_name (enum)","slug":"action-source-name-enum","link":"#action-source-name-enum","children":[]},{"level":3,"title":"Action_user (numeric)","slug":"action-user-numeric","link":"#action-user-numeric","children":[]},{"level":3,"title":"Sound_volume (enum)","slug":"sound-volume-enum","link":"#sound-volume-enum","children":[]},{"level":3,"title":"Master_pin_mode (binary)","slug":"master-pin-mode-binary","link":"#master-pin-mode-binary","children":[]},{"level":3,"title":"Rfid_enable (binary)","slug":"rfid-enable-binary","link":"#rfid-enable-binary","children":[]},{"level":3,"title":"Relock_enabled (binary)","slug":"relock-enabled-binary","link":"#relock-enabled-binary","children":[]},{"level":3,"title":"Lock_mode (enum)","slug":"lock-mode-enum","link":"#lock-mode-enum","children":[]},{"level":3,"title":"Service_mode (enum)","slug":"service-mode-enum","link":"#service-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1669574130000},"filePathRelative":"devices/0402946.md"}')},30617:(e,o,t)=>{t.r(o),t.d(o,{default:()=>f});var d=t(66252);const a=(0,d._)("h1",{id:"datek-0402946",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#datek-0402946","aria-hidden":"true"},"#"),(0,d.Uk)(" Datek 0402946")],-1),i=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),c=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"0402946")],-1),n=(0,d._)("td",null,"Vendor",-1),l=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"Zigbee module for ID lock 150")],-1),r=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"lock (state, lock_state), battery, pin_code, action, action_source_name, action_user, sound_volume, master_pin_mode, rfid_enable, relock_enabled, lock_mode, service_mode, linkquality")],-1),u=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/0402946.jpg",alt:"Datek 0402946"})])],-1),s=(0,d.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>If pairing failed, try the followings:</p><ul><li>Make sure door are in open state</li><li>Press and hold manual lock button and wait for 3 beeps</li><li>Keypad in front lights up</li><li>Type inn the Master PIN, then *, then 2, then *, then 0 Lock will now reset the Zigbee module and go to pairing mode</li></ul><h3 id="pin-code-usage" tabindex="-1"><a class="header-anchor" href="#pin-code-usage" aria-hidden="true">#</a> PIN Code Usage</h3><p>To retrieve the state, send a <code>get</code> message to the device topic (<code>zigbee2mqtt/DEVICE_FRIENDLY_NAME/get</code>) with the body <code>{&quot;pin_code&quot;:{&quot;user&quot;:1}}</code>. To set, send a <code>set</code> message to the device topic (<code>zigbee2mqtt/DEVICE_FRIENDLY_NAME/set</code>) with the body <code>{&quot;pin_code&quot;:{&quot;user&quot;:1,&quot;pin_code&quot;:1234}}</code>. To clear a code, send a <code>set</code> message with the body <code>{&quot;pin_code&quot;:{&quot;user&quot;:1}}</code></p><h3 id="manual" tabindex="-1"><a class="header-anchor" href="#manual" aria-hidden="true">#</a> Manual</h3>',7),h={href:"https://idlock.no/wp-content/uploads/2018/03/20180123-001-IDL150-UserManual.pdf",target:"_blank",rel:"noopener noreferrer"},p={href:"https://idlock.no/wp-content/uploads/2020/11/User-Manual-Zigbee-module_EN_v0.4.pdf",target:"_blank",rel:"noopener noreferrer"},m=(0,d._)("h3",{id:"where-do-i-find-this-product",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#where-do-i-find-this-product","aria-hidden":"true"},"#"),(0,d.Uk)(" Where do I find this product")],-1),_={href:"https://shop.evasmart.no/produkt/smarthus/id-lock-dorlaspakke",target:"_blank",rel:"noopener noreferrer"},b=(0,d._)("h2",{id:"options",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,d.Uk)(" Options")],-1),k=(0,d.uE)('<ul><li><code>expose_pin</code>: Expose pin of this lock in the published payload (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="pin-code-composite" tabindex="-1"><a class="header-anchor" href="#pin-code-composite" aria-hidden="true">#</a> Pin_code (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pin_code&quot;: {&quot;user&quot;: VALUE, &quot;user_type&quot;: VALUE, &quot;user_enabled&quot;: VALUE, &quot;pin_code&quot;: VALUE}}</code></p><ul><li><code>user</code> (numeric): User ID to set or clear the pincode for.</li><li><code>user_type</code> (enum): Type of user, unrestricted: owner (default), (year|week)_day_schedule: user has ability to open lock based on specific time period, master: user has ability to both program and operate the door lock, non_access: user is recognized by the lock but does not have the ability to open the lock. Allowed values: <code>unrestricted</code>, <code>year_day_schedule</code>, <code>week_day_schedule</code>, <code>master</code>, <code>non_access</code></li><li><code>user_enabled</code> (binary): Whether the user is enabled/disabled. Allowed values: <code>true</code> or <code>false</code></li><li><code>pin_code</code> (numeric): Pincode to set, set pincode to null to clear.</li></ul><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action on the lock. Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>unknown</code>, <code>lock</code>, <code>unlock</code>, <code>lock_failure_invalid_pin_or_id</code>, <code>lock_failure_invalid_schedule</code>, <code>unlock_failure_invalid_pin_or_id</code>, <code>unlock_failure_invalid_schedule</code>, <code>one_touch_lock</code>, <code>key_lock</code>, <code>key_unlock</code>, <code>auto_lock</code>, <code>schedule_lock</code>, <code>schedule_unlock</code>, <code>manual_lock</code>, <code>manual_unlock</code>, <code>non_access_user_operational_event</code>.</p><h3 id="action-source-name-enum" tabindex="-1"><a class="header-anchor" href="#action-source-name-enum" aria-hidden="true">#</a> Action_source_name (enum)</h3><p>Source of the triggered action on the lock. Value can be found in the published state on the <code>action_source_name</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>keypad</code>, <code>rfid</code>, <code>manual</code>, <code>rf</code>.</p><h3 id="action-user-numeric" tabindex="-1"><a class="header-anchor" href="#action-user-numeric" aria-hidden="true">#</a> Action_user (numeric)</h3><p>ID of user that triggered the action on the lock. Value can be found in the published state on the <code>action_user</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="sound-volume-enum" tabindex="-1"><a class="header-anchor" href="#sound-volume-enum" aria-hidden="true">#</a> Sound_volume (enum)</h3><p>Sound volume of the lock. Value can be found in the published state on the <code>sound_volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sound_volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>silent_mode</code>, <code>low_volume</code>, <code>high_volume</code>.</p><h3 id="master-pin-mode-binary" tabindex="-1"><a class="header-anchor" href="#master-pin-mode-binary" aria-hidden="true">#</a> Master_pin_mode (binary)</h3><p>Allow Master PIN Unlock. Value can be found in the published state on the <code>master_pin_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;master_pin_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;master_pin_mode&quot;: NEW_VALUE}</code>. If value equals <code>true</code> master_pin_mode is ON, if <code>false</code> OFF.</p><h3 id="rfid-enable-binary" tabindex="-1"><a class="header-anchor" href="#rfid-enable-binary" aria-hidden="true">#</a> Rfid_enable (binary)</h3><p>Allow RFID to Unlock. Value can be found in the published state on the <code>rfid_enable</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;rfid_enable&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rfid_enable&quot;: NEW_VALUE}</code>. If value equals <code>true</code> rfid_enable is ON, if <code>false</code> OFF.</p><h3 id="relock-enabled-binary" tabindex="-1"><a class="header-anchor" href="#relock-enabled-binary" aria-hidden="true">#</a> Relock_enabled (binary)</h3><p>Allow Auto Re-Lock. Value can be found in the published state on the <code>relock_enabled</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;relock_enabled&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;relock_enabled&quot;: NEW_VALUE}</code>. If value equals <code>true</code> relock_enabled is ON, if <code>false</code> OFF.</p><h3 id="lock-mode-enum" tabindex="-1"><a class="header-anchor" href="#lock-mode-enum" aria-hidden="true">#</a> Lock_mode (enum)</h3><p>Lock-Mode of the Lock. Value can be found in the published state on the <code>lock_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;lock_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lock_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>auto_off_away_off</code>, <code>auto_on_away_off</code>, <code>auto_off_away_on</code>, <code>auto_on_away_on</code>.</p><h3 id="service-mode-enum" tabindex="-1"><a class="header-anchor" href="#service-mode-enum" aria-hidden="true">#</a> Service_mode (enum)</h3><p>Service Mode of the Lock. Value can be found in the published state on the <code>service_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;service_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;service_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>deactivated</code>, <code>random_pin_1x_use</code>, <code>random_pin_24_hours</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',29),g={},f=(0,t(83744).Z)(g,[["render",function(e,o){const t=(0,d.up)("RouterLink"),g=(0,d.up)("ExternalLinkIcon");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),a,(0,d._)("table",null,[i,(0,d._)("tbody",null,[c,(0,d._)("tr",null,[n,(0,d._)("td",null,[(0,d.Wm)(t,{to:"/supported-devices/#v=Datek"},{default:(0,d.w5)((()=>[(0,d.Uk)("Datek")])),_:1})])]),l,r,u])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),s,(0,d._)("p",null,[(0,d._)("a",h,[(0,d.Uk)("ID LOCK 150 user manual"),(0,d.Wm)(g)]),(0,d._)("a",p,[(0,d.Uk)("Zigbee module user manual"),(0,d.Wm)(g)])]),m,(0,d._)("p",null,[(0,d._)("a",_,[(0,d.Uk)("Product page"),(0,d.Wm)(g)])]),(0,d.kq)(" Notes END: Do not edit below this line "),b,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[(0,d.Uk)("How to use device type specific configuration")])),_:1})])]),k])}]])}}]);