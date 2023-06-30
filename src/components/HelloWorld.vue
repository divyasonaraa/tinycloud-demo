<template>
  <div>
    <h1>VUE Tiny Mce Text Editor</h1>
    <Editor
      v-model="existingContent"
      api-key="2m7f78p7pmrvq75tvmkhqacr25cwfqvtmkrpa1h6czfwvvuj"
      :init="{
        plugins: [
          'lists link image paste help wordcount media mediaembed pageembed',
        ],
        toolbar:
          'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help',
      }"
      style="height: 900px"
    />

    <div>
      <h1>Output of the editor</h1>
      <p>{{ existingContent }}</p>
    </div>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import { content } from "@/assets/content";
export default {
  data: () => ({
    existingContent: "",
  }),
  components: {
    Editor,
  },
  mounted() {
    this.$data.existingContent = content;
  },
};
</script>

<style scoped></style>
