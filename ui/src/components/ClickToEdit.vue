<!-- Do not use this component on a :key of a v-for --->
<template>
  <div>
    <div
      v-show="!showInput"
      @click="showInputElement"
      class="cte-text"
    >
      {{value}}
      <q-tooltip :delay="1000">
        Click to edit
      </q-tooltip>
    </div>
    <q-input
      v-if="showInput"
      v-bind="qInputProps"
      :value="value"
      @input="updateValue($event)"
      @keyup.enter="inputType === 'text' ? save : ''"
      v-DetectOutsideClick:delay="outsideClick"
      :class="qInputProps.dense ? 'cte-dense' : ''"
    >
      <template
        v-if="saveButton && !$slots.append"
        v-slot:append
      >
        <q-btn
          :icon="saveIcon"
          round
          size="sm"
          flat
          @click="save"
        />
      </template>
      <slot
        v-for="(_, name) in $slots"
        :name="name"
        :slot="name"
      />

    </q-input>
  </div>
</template>

<script>
import DetectOutsideClick from '../directives/DetectOutsideClick'

export default {
  name: 'ClickToEdit',
  props: {
    saveButton: {
      type: Boolean,
      default: true
    },
    value: {},
    showInputOnStart: {
      type: Boolean,
      default: false
    },
    persistantInputOnBlank: {
      type: Boolean,
      default: false
    },
    saveIcon: {
      type: String,
      default: 'save'
    },
    qInputProps: {
      type: Object
    }
  },
  directives: {
    DetectOutsideClick
  },
  data () {
    return {
      showInput: this.showInputOnStart
    }
  },
  methods: {
    showInputElement () {
      this.showInput = true
    },
    save () {
      this.showInput = false
      this.$emit('save')
    },
    updateValue (value) {
      this.$emit('input', value)
    },
    outsideClick () {
      if (this.persistantInputOnBlank) {
        if (this.value !== '') {
          this.save()
        }
      } else {
        this.save()
      }
    }
  },
  created () {
    console.log(this.$slots)
  }
}
</script>

<style lang="scss" scoped>
.cte-text {
  white-space: pre-line;
  padding-bottom: 14px; // This keeps elements below from jumping when going to and from input.
}
.cte-dense {
  white-space: pre-line;
  margin-bottom: 16px; // This keeps elements below from jumping when going to and from input.
}
</style>
