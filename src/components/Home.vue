<template>
  <section class="hero p-st" :class="{ 'hero-night': nightMode }">
    <div class="container">
      <div class="row align-items-center hero-row">
        <div
          class="col-lg-7 col-md-7 col-sm-12 order-2 order-md-1"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="900"
        >
          <div class="hero-eyebrow">{{ eyebrow }}</div>
          <h1 class="hero-name">{{ name }}</h1>
          <div class="hero-role">{{ role }}</div>
          <p class="hero-tagline">{{ tagline }}</p>

          <div class="hero-actions">
            <a class="hero-btn hero-btn-gold" :href="resume" target="_blank" rel="noopener">
              <i class="fa fa-download"></i> Download CV
            </a>
            <a class="hero-btn hero-btn-outline" href="#contact" @click.prevent="goContact">
              Contact me
            </a>
            <a class="hero-icon" :href="linkedin" target="_blank" rel="noopener" aria-label="LinkedIn" v-tooltip.bottom="'LinkedIn'">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a v-if="github" class="hero-icon" :href="github" target="_blank" rel="noopener" aria-label="GitHub" v-tooltip.bottom="'GitHub'">
              <i class="fab fa-github"></i>
            </a>
          </div>

          <div class="hero-stats">
            <div class="stat" v-for="s in stats" :key="s.label">
              <div class="stat-value">{{ s.value }}</div>
              <div class="stat-label">{{ s.label }}</div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-5 col-md-5 col-sm-12 text-center order-1 order-md-2"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1200"
        >
          <div class="portrait-ring">
            <img :src="picture" :alt="name" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import info from "../../info";

export default {
  name: "Home",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.flat_picture,
      name: info.name,
      eyebrow: info.hero.eyebrow,
      role: info.hero.role,
      tagline: info.hero.tagline,
      stats: info.hero.stats,
      linkedin: info.links.linkedin,
      github: info.links.github,
      resume: info.links.resume,
    };
  },
  methods: {
    goContact() {
      this.$emit("scroll", "contact");
    },
  },
};
</script>

<style scoped>
.hero {
  background: radial-gradient(1200px 500px at 85% 20%, rgba(201, 162, 39, 0.12), transparent 60%),
    linear-gradient(160deg, #1b2a4a 0%, #13203b 100%);
  color: #f4f1ea;
  padding: 140px 0 90px;
  position: relative;
  overflow: hidden;
}

.hero::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, #c9a227, transparent);
}

.hero-night {
  background: radial-gradient(1200px 500px at 85% 20%, rgba(201, 162, 39, 0.1), transparent 60%),
    linear-gradient(160deg, #0d1628 0%, #0a1222 100%);
}

.hero-row {
  min-height: 460px;
}

.hero-eyebrow {
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #c9a227;
  margin-bottom: 14px;
}

.hero-name {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
  font-size: 54px;
  line-height: 1.08;
  color: #ffffff;
  margin-bottom: 14px;
}

.hero-role {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #e3c565;
  margin-bottom: 18px;
}

.hero-tagline {
  font-family: "Inter", sans-serif;
  font-size: 17px;
  line-height: 1.7;
  color: #d5d9e3;
  max-width: 560px;
  margin-bottom: 30px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none !important;
  transition: all 0.25s ease;
}

.hero-btn-gold {
  background: #c9a227;
  color: #1b2a4a !important;
  border: 1px solid #c9a227;
}

.hero-btn-gold:hover {
  background: #e3c565;
  border-color: #e3c565;
  transform: translateY(-1px);
}

.hero-btn-outline {
  border: 1px solid rgba(255, 255, 255, 0.55);
  color: #ffffff !important;
}

.hero-btn-outline:hover {
  border-color: #c9a227;
  color: #e3c565 !important;
}

.hero-icon {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #d5d9e3 !important;
  font-size: 17px;
  transition: all 0.25s ease;
}

.hero-icon:hover {
  border-color: #c9a227;
  color: #c9a227 !important;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 24px;
  max-width: 600px;
}

.stat {
  flex: 1 1 0;
  min-width: 150px;
  padding-right: 20px;
}

.stat + .stat {
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  padding-left: 20px;
}

.stat-value {
  font-family: "Playfair Display", Georgia, serif;
  font-size: 30px;
  font-weight: 700;
  color: #c9a227;
  line-height: 1.1;
}

.stat-label {
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: #aeb6c7;
  margin-top: 6px;
  line-height: 1.4;
}

.portrait-ring {
  display: inline-block;
  padding: 8px;
  border-radius: 50%;
  background: linear-gradient(145deg, #e3c565, #c9a227 45%, #8a6d12);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}

.portrait-ring img {
  width: 320px;
  height: 320px;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 50%;
  border: 6px solid #1b2a4a;
  display: block;
}

@media only screen and (max-width: 991px) {
  .hero-name {
    font-size: 44px;
  }
  .portrait-ring img {
    width: 260px;
    height: 260px;
  }
}

@media only screen and (max-width: 767px) {
  .hero {
    padding: 110px 0 60px;
    text-align: left;
  }
  .hero-row {
    min-height: 0;
  }
  .portrait-ring {
    margin-bottom: 32px;
  }
  .portrait-ring img {
    width: 180px;
    height: 180px;
  }
  .hero-name {
    font-size: 36px;
  }
  .hero-tagline {
    font-size: 16px;
  }
  .stat {
    min-width: 0;
    padding-right: 12px;
  }
  .stat + .stat {
    padding-left: 12px;
  }
  .stat-value {
    font-size: 24px;
  }
  .stat-label {
    font-size: 12px;
  }
}
</style>
