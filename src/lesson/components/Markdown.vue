<template>
  <div class="c-markdown">
    <div class="markdown-body" @click.once="showMarkdown">#  Hello World</div>
  </div>
</template>

<script>
  import { markdown } from 'markdown';
  export default {
    name: 'Markdown.vue',
    components: {markdown},
    data() {
      return {}
    },
    methods: {
      showMarkdown () {
        let mb =document.getElementsByClassName('markdown-body')[0];
          mb.innerHTML=markdown.toHTML(mb.innerHTML);
      }
    }
  }
</script>
<style>
  .markdown-body{
    width: 700px;
    margin: 0 auto;
    text-align: center;
  }
</style>
