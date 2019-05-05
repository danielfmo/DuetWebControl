'use strict'

import Vue from 'vue'

import CodeBtn from './CodeBtn.vue'
import ConnectBtn from './ConnectBtn.vue'
import EmergencyBtn from './EmergencyBtn.vue'
import SDCardBtn from './SDCardBtn.vue'
import CurrentStateBtn from './CurrentStateBtn.vue'

Vue.component('code-btn', CodeBtn)
Vue.component('connect-btn', ConnectBtn)
Vue.component('emergency-btn', EmergencyBtn)
Vue.component('sd-card-btn', SDCardBtn)
Vue.component('current-state-btn', CurrentStateBtn)

export default {
	CodeBtn,
	ConnectBtn,
	EmergencyBtn,
	SDCardBtn,
	CurrentStateBtn
}
