<template>
  <div class="my-3 mx-3">
    <div
      class="card smcard article-card"
      :class="{
        'pcard-dark': nightMode,
        pcard: !nightMode,
        'bg-dark3': nightMode,
      }"
    >
      <div class="card-cover article-cover" style="height: 180px;">
        <span class="cover-eyebrow">{{ article.category }}</span>
        <span class="card-cover-title">{{ article.title }}</span>
      </div>
      <div class="card-body pborder-top">
        <div class="pb-1 bheight">
          <span
            class="badge mr-2 mb-2"
            v-for="tag in article.tags"
            :key="tag"
            :class="{ 'bg-dark4': nightMode }"
            >{{ tag }}</span
          >
        </div>
        <p class="title3 m-0 pb-2 pt-1 pheight">
          {{ article.summary }}
        </p>
        <div class="article-footer">
          <span class="date">{{ article.date }}</span>
          <button
            v-if="article.content"
            class="btn-sm btn btn-outline-secondary no-outline"
            @click.prevent="$emit('read', article)"
          >
            Read article
          </button>
          <span v-else class="badge" :class="{ 'bg-dark4': nightMode }">Coming soon</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    article: {
      type: Object,
    },
    nightMode: {
      type: Boolean,
    },
    idx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
