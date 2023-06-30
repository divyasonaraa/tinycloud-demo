<template>
  <div>
    <h1>VUE Tiny Mce Text Editor</h1>
    <Editor
      v-model="data"
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
      <p>{{ data }}</p>
    </div>
  </div>
</template>

<script>
// import Editor from "./EditorVue.vue";
import edjsParser from "editorjs-parser";
import Editor from "@tinymce/tinymce-vue";
// import edjsHTML from "editorjs-html";

export default {
  data: () => ({
    data: `<h1 style="text-align: center;"><span style="font-family: 'courier new', courier, monospace; background-color: #2dc26b;"><strong>The starting point of <span style="color: #ecf0f1;">the earth</span></strong></span></h1> <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1172&amp;q=80" alt="" width="1324" height="881" /></p> <h2>Images:</h2> <p><img src="https://images.unsplash.com/photo-1688019984360-50d40dfa955a?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80" alt="" width="1034" height="1552" /></p> <p><img src="https://images.unsplash.com/photo-1678874780591-0f4ba3fe5dde?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80" alt="" width="880" height="880" /></p> <h1><strong>Slides:&nbsp;</strong></h1> <div class="tiny-pageembed"><iframe src="https://docs.google.com/presentation/d/1POs14q59tZuj3ZQQzS9RTF62A51U11UAzBDtG9Bnwk4/edit#slide=id.gcb9a0b074_1_0" width="900px" height="669px" scrolling="no"></iframe></div> <p>&nbsp;</p> <div class="tiny-pageembed"><iframe src="https://docs.google.com/presentation/d/1pLPUVo_mBGp5kZScPqErXp1jd2NODJaMkS-Ifu7Bpmw/edit#slide=id.gc6f8954bc_0_53" width="950px" height="706px" scrolling="no"></iframe></div> <p>&nbsp;</p> <div class="tiny-pageembed"><iframe src="https://docs.google.com/presentation/d/1mV7t-mSaFWPZaiNAOK8Z_q_YE_6Hnf3hQzwY6cQoSRs/edit#slide=id.gc6f59039d_0_0" width="950px" height="706px" scrolling="no"></iframe></div> <div class="tiny-pageembed"><iframe src="https://docs.google.com/presentation/d/1mV7t-mSaFWPZaiNAOK8Z_q_YE_6Hnf3hQzwY6cQoSRs/edit#slide=id.gc6f59039d_0_0" width="950px" height="706px" scrolling="no"></iframe></div> <p><iframe class="airtable-embed" style="background: transparent; border: 1px solid #cccccc; width: 1768px; height: 3132px;" src="https://airtable.com/embed/shr6AMwJfVoIyLbgt?backgroundColor=blue&amp;viewControls=on" width="1768" height="3132" frameborder="0"></iframe></p> <p>&nbsp;</p> <p><iframe style="width: 1411px; height: 1058px;" src="https://drive.google.com/file/d/1BL0PXu41ZYRY_7iNwq2gVROo6Ib27yR2/preview" width="1411" height="1058"></iframe></p> <p>&nbsp;</p> <p><iframe style="border-radius: 12px; width: 628px; height: 737px;" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator" width="628" height="737" frameborder="0" allowfullscreen="allowfullscreen" loading="lazy"></iframe></p> <p>&nbsp;</p> <p><iframe style="border-radius: 12px; width: 640px; height: 751px;" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator" width="640" height="751" frameborder="0" allowfullscreen="allowfullscreen" loading="lazy"></iframe></p>`,
  }),
  components: {
    Editor,
  },
  methods: {
    handleUpdateData(data) {
      const parser = new edjsParser();
      console.log("calling");
      console.log(
        "✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ ✈ tag",
        parser.parse(data)
      );
      this.$data.data = `${parser.parse(data)}------${parser.parse(
        this.$data.extingData
      )}`;
    },
  },
};
</script>

<style scoped></style>
