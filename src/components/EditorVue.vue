<template>
  <div class>
    <div class>
      <h1 style="text-align: center">This is vue editor.js</h1>
    </div>

    <div class="editorx_body">
      <div class id="codex-editor" />
    </div>
  </div>
</template>

<script>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";

export default {
  data() {
    return {};
  },
  methods: {
    myEditor: function () {
      const context = this;
      window.editor = new EditorJS({
        holder: "codex-editor",
        placeholder: "please fill the rq details",
        initialBlock: "paragraph",
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                vimeo: true,
                miro: true,
                twitter: true,
                codepen: true,
                pinterest: true,
              },
            },
          },
        },
        onReady: function () {
          console.log("ready");
        },
        onChange: async function () {
          // eslint-disable-next-line
          const savedData = await editor.save();
          console.log("✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈ ", savedData);
          context.$emit("updateData", savedData);
        },
      });
    },
  },
  mounted: function () {
    this.myEditor();
  },
};
</script>

<style lang="css" scoped>
.editorx_body {
  /* width: 62%;
    margin-left: 15%; */
  width: 60%;
  margin-left: 20%;
  border: 2px solid #f1f3f5;
  box-sizing: border-box;
}

.ce-block--focused {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 0.5438550420168067) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>
