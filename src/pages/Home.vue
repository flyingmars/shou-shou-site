<template>
  <div class="home">
    <!-- 英雄區域 -->
    <section class="hero">
      <!-- 背景主照片 -->
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      
      <div class="hero-content">
        <h1 class="hero-title">{{ t('home.title') }}</h1>
        <p class="hero-subtitle">{{ t('home.subtitle') }}</p>
        <router-link to="/menu" class="cta-button">{{ t('home.cta') }}</router-link>
      </div>
      <div class="hero-image">
        <div class="coffee-illustration">☕</div>
      </div>
    </section>

    <!-- 特色區域 -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">{{ t('home.features.title') }}</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">☕</div>
            <h3>{{ t('home.features.coffee.title') }}</h3>
            <p>{{ t('home.features.coffee.description') }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤍</div>
            <h3>{{ t('home.features.minimal.title') }}</h3>
            <p>{{ t('home.features.minimal.description') }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏪</div>
            <h3>{{ t('home.features.location.title') }}</h3>
            <p>{{ t('home.features.location.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 空間展示 -->
    <section class="space-gallery">
      <div class="container">
        <h2 class="section-title">{{ t('home.gallery.title') }}</h2>
        <p class="gallery-subtitle">{{ t('home.gallery.subtitle') }}</p>
        
        <div class="photo-grid">
          <div class="photo-item" v-for="(image, index) in sortedImageList" :key="index">
            <div class="photo-container">
              <img 
                :src="image as string" 
                :alt="`ShouShou 咖啡館空間照片 ${index}`"
                class="space-photo"
                @error="handleImageError"
              >
              <div class="photo-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 推薦商品 -->
    <section class="featured-items">
      <div class="container">
        <h2 class="section-title">{{ t('home.featured.title') }}</h2>
        <div class="items-grid">
          <div class="item-card">
            <div class="item-image">☕</div>
            <h3>{{ t('home.featured.americano.name') }}</h3>
            <p>{{ t('home.featured.americano.description') }}</p>
            <span class="price">NT$ 80</span>
          </div>
          <div class="item-card">
            <div class="item-image">🥃</div>
            <h3>{{ t('home.featured.orangeLatte.name') }}</h3>
            <p>{{ t('home.featured.orangeLatte.description') }}</p>
            <span class="price">NT$ 140</span>
          </div>
          <div class="item-card">
            <div class="item-image">🫖</div>
            <h3>{{ t('home.featured.ethiopia.name') }}</h3>
            <p>{{ t('home.featured.ethiopia.description') }}</p>
            <span class="price">NT$ 140</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
const images = import.meta.glob('/src/assets/space-photo/*.jpg', { eager: true, import: 'default' })

// 提取路徑值並排序（依檔名順序）
const sortedImageList = Object.entries(images)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, value]) => value)

const { t } = useI18n()

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // 如果 HEIC 載入失敗，嘗試其他格式或隱藏圖片
  img.style.display = 'none'
  console.warn('Image failed to load:', img.src)
}
</script> 