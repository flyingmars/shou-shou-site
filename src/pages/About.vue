<template>
  <div class="about">
    <div class="container">
      <!-- 頁面標題 -->
      <section class="page-header">
        <h1>{{ t('about.title') }}</h1>
        <p>{{ t('about.subtitle') }}</p>
      </section>

      <!-- 夢想的開始 -->
      <section class="dream-beginning">
        <div class="story-content">
          <div class="story-text">
            <h2>{{ t('about.dream.title') }}</h2>
            <p>
              {{ t('about.dream.text1') }}
            </p>
            <p>
              {{ t('about.dream.text2') }}
            </p>
          </div>
          <div class="story-image">
            <div class="image-placeholder">☕</div>
          </div>
        </div>
      </section>

      <!-- 現實的轉折 -->
      <section class="reality-turn">
        <div class="container">
          <div class="turn-content">
            <h2>{{ t('about.reality.title') }}</h2>
            <p>
              {{ t('about.reality.text1') }}
            </p>
            <p>
              {{ t('about.reality.text2') }}
              <strong>{{ t('about.reality.highlight') }}</strong>
            </p>
          </div>
        </div>
      </section>

      <!-- 愛情與夢想的結合 -->
      <section class="love-and-dream">
        <div class="story-content reverse">
          <div class="story-image">
            <div class="image-placeholder">💕</div>
          </div>
          <div class="story-text">
            <h2>{{ t('about.love.title') }}</h2>
            <p>
              {{ t('about.love.text1') }}
            </p>
            <p>
              {{ t('about.love.text2') }}<strong>{{ t('about.love.highlight') }}</strong>
            </p>
          </div>
        </div>
      </section>

      <!-- 店舖理念 -->
      <section class="store-concept">
        <h2 class="section-title">{{ t('about.concept.title') }}</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">☕</div>
            <h3>{{ t('about.concept.coffee.title') }}</h3>
            <p>{{ t('about.concept.coffee.description') }}</p>
          </div>
          <div class="concept-card">
            <div class="concept-icon">🤍</div>
            <h3>{{ t('about.concept.minimal.title') }}</h3>
            <p>{{ t('about.concept.minimal.description') }}</p>
          </div>
          <div class="concept-card">
            <div class="concept-icon">🏪</div>
            <h3>{{ t('about.concept.oasis.title') }}</h3>
            <p>{{ t('about.concept.oasis.description') }}</p>
          </div>
        </div>
      </section>

      <!-- 我們的信念 -->
      <section class="our-belief">
        <div class="belief-content">
          <h2>{{ t('about.belief.title') }}</h2>
          <p class="belief-text">
            {{ t('about.belief.text') }}
          </p>
          <div class="quote-box">
            <p class="quote">
              {{ t('about.belief.quote') }}
            </p>
            <span class="quote-author">— {{ t('about.belief.author') }}</span>
          </div>
        </div>
      </section>

      <!-- 營業資訊 -->
      <section class="business-info">
        <h2 class="section-title">{{ t('about.business.title') }}</h2>
        <div class="info-grid">
          <div class="info-card">
            <h3>{{ t('about.business.hours.title') }}</h3>
            <p>{{ t('about.business.hours.morning') }}</p>
            <p>{{ t('about.business.hours.weekday') }}</p>
            <p>{{ t('about.business.hours.evening') }}</p>
            <p>{{ t('about.business.hours.weekend') }}</p>
          </div>
          <div class="info-card">
            <h3>{{ t('about.business.contact.title') }}</h3>
            <p>{{ t('about.business.contact.phone') }}</p>
            <p>{{ t('about.business.contact.address') }}</p>
            <p>{{ t('about.business.contact.email') }}</p>
          </div>
          <div class="info-card">
            <h3>{{ t('about.business.service.title') }}</h3>
            <p>{{ t('about.business.service.coffee') }}</p>
            <p>{{ t('about.business.service.alcohol') }}</p>
            <p>{{ t('about.business.service.space') }}</p>
            <p>{{ t('about.business.service.relax') }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script> 