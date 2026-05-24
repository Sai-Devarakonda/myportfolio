<template>
  <div class="my-3 mx-3">
    <div
      class="card smcard"
      :class="{
        'pcard-dark': nightMode,
        pcard: !nightMode,
        'bg-dark3': nightMode,
      }"
    >
      <div
        class="d-flex align-items-center justify-content-center"
        style="height: 120px; border-top-left-radius: 7px; border-top-right-radius: 7px;"
        :style="{ background: gradientColor }"
      >
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 1.8rem; margin-bottom: 0.3rem;">{{ icon }}</div>
          <span style="color: white; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; opacity: 0.9;">{{ article.category }}</span>
        </div>
      </div>
      <div class="card-body pborder-top">
        <h5 class="title2" style="font-size: 0.95rem; line-height: 1.4;">{{ article.title }}</h5>
        <div>
          <div class="pb-1">
            <span
              class="badge mr-1 mb-1"
              v-for="tag in article.tags"
              :key="tag"
              :class="{ 'bg-dark4': nightMode }"
              style="font-size: 0.7rem;"
              >{{ tag }}</span
            >
          </div>
          <p
            class="title3 m-0 pb-2 pt-1"
            style="font-size: 0.82rem; line-height: 1.5; min-height: 60px;"
          >
            {{
              article.summary.length > 110
                ? article.summary.substring(0, 110) + "..."
                : article.summary
            }}
          </p>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <span class="date" style="font-size: 0.75rem;">{{ article.date }}</span>
          <button
            v-if="article.link"
            class="btn-sm btn btn-outline-secondary no-outline"
            @click.prevent="open(article.link)"
          >
            read more
          </button>
          <span v-else class="badge" :class="{ 'bg-dark4': nightMode }" style="font-size: 0.72rem;">coming soon</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const gradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
];

const icons = ["✍️", "🛠️", "🔄", "⚠️", "🤝", "📊"];

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
  computed: {
    gradientColor() {
      return gradients[this.idx % gradients.length];
    },
    icon() {
      return icons[this.idx % icons.length];
    },
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
