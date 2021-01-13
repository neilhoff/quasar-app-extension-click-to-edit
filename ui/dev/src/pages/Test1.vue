<template>
  <q-page padding>
    <div class="text-h4">Input type: Text</div>
    <click-to-edit
      v-model="text"
      :qInputProps="textProps"
      persistantInputOnBlank
      :showInputOnStart="text === ''"
      class="directive-target"
    />
    <div class="text-h4">Input type: TextArea</div>
    <click-to-edit
      v-model="textArea"
      :qInputProps="textAreaProps"
      inputType="textarea"
      persistantInputOnBlank
      :showInputOnStart="textArea === ''"
      class="directive-target"
    >
      <!-- You can pass all the QInput slots -->
      <template v-slot:prepend>
        <q-icon name="event" />
      </template>
    </click-to-edit>
  </q-page>
</template>
<script>
export default {
  name: 'Test1',
  data () {
    return {
      text: 'Here is some text that can be changed by clicking on it',
      textProps: {
        type: 'text',
        borderless: true,
        autofocus: true,
        filled: true
      },
      textArea: 'Here is a TextArea that can be changed by clicking on it',
      textAreaProps: {
        type: 'textarea',
        borderless: true,
        autofocus: true,
        filled: true,
        rounded: true
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.directive-target {
  max-width: 500px;
}
</style>
