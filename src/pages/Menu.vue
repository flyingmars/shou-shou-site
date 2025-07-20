<template>
  <div class="menu">
    <div class="container">
      <!-- 頁面標題 -->
      <section class="page-header">
        <h1>{{ t('menu.title') }}</h1>
        <p>{{ t('menu.subtitle') }}</p>
      </section>

      <!-- 菜單分類導航 -->
      <nav class="menu-nav">
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="activeCategory = category.id"
          :class="{ active: activeCategory === category.id }"
          class="category-btn"
        >
          {{ t(`menu.categories.${category.id}`) }}
        </button>
      </nav>

      <!-- 菜單內容 -->
      <section class="menu-content">
        <div class="menu-items">
          <div 
            v-for="item in filteredItems" 
            :key="item.id"
            class="menu-item"
          >
            <div class="item-info">
              <h3 class="item-name">
                {{ item.name }}
                                 <span v-if="item.isAlcoholic" class="alcohol-badge">{{ t('menu.alcoholLabel') }}</span>
              </h3>
              <p v-if="item.description" class="item-description">{{ item.description }}</p>
                             <div v-if="item.flavorNotes" class="flavor-notes">
                 <span class="notes-label">{{ t('menu.flavorLabel') }}</span>
                 <span class="notes">{{ item.flavorNotes }}</span>
               </div>
              <div class="item-details">
                <span v-if="item.brewing" class="brewing-method">{{ item.brewing }}</span>
                <span v-if="item.special" class="special-note">{{ item.special }}</span>
              </div>
            </div>
            <div class="item-price">
              <span class="price">NT$ {{ item.price }}</span>
                             <span v-if="item.alcoholPrice" class="alcohol-price">{{ t('menu.addAlcohol') }}{{ item.alcoholPrice }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 單品手沖說明 -->
             <section v-if="activeCategory === 'single-origin'" class="brewing-note">
         <div class="note-box">
           <h3>{{ t('menu.brewing.title') }}</h3>
           <p>{{ t('menu.brewing.description') }}</p>
           <p class="sub-note">{{ t('menu.brewing.note') }}</p>
         </div>
       </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

interface MenuItem {
  id: number
  name: string
  description?: string
  price: number
  category: string
  isAlcoholic?: boolean
  alcoholPrice?: number
  flavorNotes?: string
  brewing?: string
  special?: string
}

interface Category {
  id: string
  name: string
}

const activeCategory = ref('coffee')

const categories: Category[] = [
  { id: 'coffee', name: 'coffee' },
  { id: 'special-drinks', name: 'special-drinks' },
  { id: 'tea', name: 'tea' },
  { id: 'alcohol', name: 'alcohol' },
  { id: 'single-origin', name: 'single-origin' }
]

const menuItems: MenuItem[] = [
  // 咖啡類
  { id: 1, name: '美式咖啡', price: 80, category: 'coffee' },
  { id: 2, name: 'Long Black', price: 80, category: 'coffee' },
  { id: 3, name: '拿鐵／卡布', price: 110, category: 'coffee' },
  { id: 4, name: '摩卡', price: 140, category: 'coffee' },
  { id: 5, name: '濃萃咖啡', price: 160, category: 'coffee' },
  { id: 6, name: '橙酒拿鐵', price: 140, category: 'coffee', isAlcoholic: true },
  { id: 7, name: '美式和歌', price: 170, category: 'coffee', isAlcoholic: true },
  { id: 8, name: '阿芙嘉朵', price: 100, category: 'coffee' },

  // 特調飲品 / 果汁
  { id: 9, name: '通寧王', price: 150, category: 'special-drinks' },
  { id: 10, name: '林果美式', price: 180, category: 'special-drinks' },
  { id: 11, name: '桃酥', price: 50, category: 'special-drinks' },
  { id: 12, name: '布丁', price: 90, category: 'special-drinks' },
  { id: 13, name: '蜜沙拉麵包', price: 90, category: 'special-drinks' },

  // 茶類 / 其他
  { id: 14, name: '紅茶', price: 80, category: 'tea', brewing: 'I' },
  { id: 15, name: '伯爵茶', price: 150, category: 'tea', brewing: 'H' },
  { id: 16, name: '坦林茶', price: 100, category: 'tea' },
  { id: 17, name: '玫瑰果大黃', price: 110, category: 'tea' },
  { id: 18, name: '黑莓覆盆子', price: 110, category: 'tea' },
  { id: 19, name: '青森蘋果汁', price: 100, category: 'tea' },
  { id: 20, name: '柳橙泡泡', price: 100, category: 'tea', alcoholPrice: 30 },
  { id: 21, name: '玫瑰牛奶', price: 130, category: 'tea' },

  // 酒類 / 調酒
  { id: 22, name: '阿布德爾', price: 80, category: 'alcohol', isAlcoholic: true },
  { id: 23, name: '密友', price: 200, category: 'alcohol', isAlcoholic: true },

  // 單品手沖
  { id: 24, name: '芬亞 AA', price: 140, category: 'single-origin', brewing: '水洗' },
  { id: 25, name: '衣索比亞 耶加雪夫', price: 140, category: 'single-origin', brewing: '日曬' },
  { id: 26, name: '衣索比亞 班奇馬吉', price: 160, category: 'single-origin', brewing: '水洗', flavorNotes: '百花、荔枝、檸檬' },
  { id: 27, name: '衣索比亞 西達摩', price: 160, category: 'single-origin', brewing: '橘光舞伎 G1／蜜', flavorNotes: '莓果、柑橘、太妃糖' },
  { id: 28, name: '哥斯大黎加 貝多芬', price: 176, category: 'single-origin', flavorNotes: '葡萄、青草、發酵水果或橘子果茶' },
  { id: 29, name: '瓜地馬拉 薄荷烘葡萄', price: 140, category: 'single-origin', brewing: '水洗' }
]

const filteredItems = computed(() => {
  return menuItems.filter(item => item.category === activeCategory.value)
})
</script> 