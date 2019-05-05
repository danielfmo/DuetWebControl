<template>
	<v-btn v-bind="$props" :class="statusClass" tabindex="0">
		<v-icon>info</v-icon>
		<span v-if="this.state.status" class="ml-2">{{ statusText }}</span>
		<span v-if="state.mode">{{ $t('panel.status.mode', [state.mode]) }}</span>
	</v-btn>
</template>

<script>
'use strict';

import { VBtn } from 'vuetify/lib';
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState('machine/model', ['state']),
		...mapState('settings', ['darkTheme']),
		statusType() {
			if (!this.state.status) {
				return 'unknown';
			}
			if (this.state.status === 'processing' && this.state.mode === 'FFF') {
				return 'printing';
			}
			return this.state.status;
		},
		statusText() {
			return this.$t(`generic.status.${this.statusType}`);
		},
		statusClass() {
			switch (this.state.status) {
				case 'updating':
					return this.darkTheme ? 'blue darken-3' : 'blue lighten-3';
				case 'off':
					return this.darkTheme ? 'red darken-2 white--text' : 'red darken-1 white--text';
				case 'halted':
					return 'red white--text';
				case 'pausing':
					return this.darkTheme ? 'yellow darken-3' : 'orange accent-2';
				case 'paused':
					return this.darkTheme ? 'orange darken-2' : 'yellow lighten-1';
				case 'resuming':
					return this.darkTheme ? 'yellow darken-3' : 'orange accent-2';
				case 'processing':
					return 'green white--text';
				case 'simulating':
					return this.darkTheme ? 'light-blue darken-3' : 'light-blue accent-1';
				case 'busy':
					return this.darkTheme ? 'amber darken-2 white--text' : 'amber white--text';
				case 'changingTool':
					return this.darkTheme ? 'light-blue darken-2' : 'light-blue';
				case 'idle':
					return this.darkTheme ? 'light-green darken-3' : 'light-green lighten-4';
			}
			return 'red white--text';
		}
	},
	extends: VBtn
};
</script>
