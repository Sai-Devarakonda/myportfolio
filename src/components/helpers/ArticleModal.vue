<template>
  <transition name="article-modal">
    <div class="article-overlay" @click.self="$emit('close')">
      <div class="article-modal" :class="{ 'article-modal--dark': nightMode }">
        <button class="article-close" @click="$emit('close')" aria-label="Close">
          <i class="fa fa-times"></i>
        </button>
        <div class="article-header">
          <div class="article-meta">
            <span class="article-category">{{ article.category }}</span>
            <span class="article-date">{{ article.date }}</span>
          </div>
          <div class="article-tags">
            <span
              class="article-tag"
              v-for="tag in article.tags"
              :key="tag"
            >{{ tag }}</span>
          </div>
        </div>
        <div class="article-body" v-html="renderedContent"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import { marked } from "marked";

export default {
  name: "ArticleModal",
  props: {
    article: { type: Object, required: true },
    nightMode: { type: Boolean, default: false },
  },
  computed: {
    renderedContent() {
      if (!this.article.content) return "<p>Content not available.</p>";
      return marked.parse(this.article.content);
    },
  },
  mounted() {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", this.handleKey);
  },
  beforeDestroy() {
    document.body.style.overflow = "";
    document.removeEventListener("keydown", this.handleKey);
  },
  methods: {
    handleKey(e) {
      if (e.key === "Escape") this.$emit("close");
    },
  },
};
</script>

<style scoped>
.article-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 16px;
  overflow-y: auto;
}

.article-modal {
  background: #ffffff;
  border-radius: 12px;
  width: 100%;
  max-width: 820px;
  padding: 48px 52px;
  position: relative;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.22);
}

.article-modal--dark {
  background: #1e2028;
  color: #e8e8e8;
}

.article-close {
  position: absolute;
  top: 18px;
  right: 22px;
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: #888;
  line-height: 1;
  padding: 4px 8px;
  border-radius: 4px;
  transition: color 0.2s, background 0.2s;
}
.article-close:hover {
  color: #333;
  background: #f0f0f0;
}
.article-modal--dark .article-close:hover {
  color: #fff;
  background: #2e3040;
}

.article-header {
  margin-bottom: 28px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 18px;
}
.article-modal--dark .article-header {
  border-bottom-color: #2e3040;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.article-category {
  background: #5b6af0;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.article-date {
  color: #888;
  font-size: 0.82rem;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.article-tag {
  background: #f0f2ff;
  color: #5b6af0;
  font-size: 0.74rem;
  padding: 2px 9px;
  border-radius: 12px;
  font-weight: 500;
}
.article-modal--dark .article-tag {
  background: #2e3260;
  color: #9fa8f5;
}

/* ── Markdown body ── */
.article-body {
  font-size: 0.97rem;
  line-height: 1.8;
  color: #333;
}
.article-modal--dark .article-body {
  color: #d0d0d0;
}

.article-body :deep(h1) {
  font-size: 1.7rem;
  font-weight: 700;
  margin: 0 0 6px;
  color: #1a1a2e;
  line-height: 1.25;
}
.article-modal--dark .article-body :deep(h1) { color: #e8e8ff; }

.article-body :deep(h2) {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 28px 0 10px;
  color: #1a1a2e;
  border-left: 3px solid #5b6af0;
  padding-left: 10px;
}
.article-modal--dark .article-body :deep(h2) { color: #c8ccff; }

.article-body :deep(h3) {
  font-size: 1.03rem;
  font-weight: 600;
  margin: 20px 0 8px;
  color: #2a2a40;
}
.article-modal--dark .article-body :deep(h3) { color: #b0b4e8; }

.article-body :deep(p) { margin: 0 0 14px; }

.article-body :deep(ul),
.article-body :deep(ol) {
  padding-left: 22px;
  margin: 0 0 14px;
}
.article-body :deep(li) { margin-bottom: 5px; }

.article-body :deep(strong) { color: #1a1a2e; font-weight: 600; }
.article-modal--dark .article-body :deep(strong) { color: #e0e0ff; }

.article-body :deep(em) { color: #555; font-style: italic; }
.article-modal--dark .article-body :deep(em) { color: #aaa; }

.article-body :deep(blockquote) {
  border-left: 3px solid #5b6af0;
  margin: 16px 0;
  padding: 10px 16px;
  background: #f5f6ff;
  border-radius: 0 6px 6px 0;
  color: #555;
}
.article-modal--dark .article-body :deep(blockquote) {
  background: #22243a;
  color: #bbb;
}

.article-body :deep(code) {
  background: #f0f2ff;
  color: #5b6af0;
  padding: 1px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.88em;
}
.article-modal--dark .article-body :deep(code) {
  background: #1a1c30;
  color: #9fa8f5;
}

.article-body :deep(pre) {
  background: #f5f6ff;
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
  margin: 14px 0;
}
.article-modal--dark .article-body :deep(pre) { background: #1a1c30; }
.article-body :deep(pre code) {
  background: none;
  padding: 0;
  color: #333;
}
.article-modal--dark .article-body :deep(pre code) { color: #c8ccff; }

.article-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 0.9rem;
}
.article-body :deep(th) {
  background: #5b6af0;
  color: #fff;
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
}
.article-body :deep(td) {
  padding: 7px 12px;
  border-bottom: 1px solid #eaeaea;
  vertical-align: top;
}
.article-body :deep(tr:nth-child(even) td) { background: #f8f9ff; }
.article-modal--dark .article-body :deep(td) { border-color: #2e3040; }
.article-modal--dark .article-body :deep(tr:nth-child(even) td) { background: #22243a; }

.article-body :deep(hr) {
  border: none;
  border-top: 1px solid #eaeaea;
  margin: 24px 0;
}
.article-modal--dark .article-body :deep(hr) { border-top-color: #2e3040; }

.article-body :deep(a) { color: #5b6af0; text-decoration: none; }
.article-body :deep(a:hover) { text-decoration: underline; }

/* Animation */
.article-modal-enter-active,
.article-modal-leave-active {
  transition: opacity 0.25s ease;
}
.article-modal-enter-active .article-modal,
.article-modal-leave-active .article-modal {
  transition: transform 0.25s ease;
}
.article-modal-enter,
.article-modal-leave-to {
  opacity: 0;
}
.article-modal-enter .article-modal,
.article-modal-leave-to .article-modal {
  transform: translateY(20px);
}

@media (max-width: 640px) {
  .article-modal { padding: 32px 22px; }
}
</style>
