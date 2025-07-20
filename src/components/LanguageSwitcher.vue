<template>
  <div class="language-switcher">
    <button 
      @click="toggleDropdown" 
      class="language-button"
      :class="{ active: isOpen }"
    >
      <span class="current-language">{{ getCurrentLanguageDisplay() }}</span>
      <svg 
        class="dropdown-icon" 
        :class="{ rotate: isOpen }"
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2"
      >
        <polyline points="6,9 12,15 18,9"></polyline>
      </svg>
    </button>
    
    <div class="language-dropdown" v-show="isOpen">
      <button 
        v-for="lang in languages" 
        :key="lang.code"
        @click="selectLanguage(lang.code)"
        class="language-option"
        :class="{ active: locale === lang.code }"
      >
        <span class="flag">{{ lang.flag }}</span>
        <span class="name">{{ lang.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n, type Locale } from '../composables/useI18n'

const { locale, setLocale } = useI18n()
const isOpen = ref(false)

const languages = [
  { code: 'zh-TW' as Locale, name: '繁體中文', flag: '🇹🇼' },
  { code: 'vi' as Locale, name: 'Tiếng Việt', flag: '🇻🇳' }
]

const getCurrentLanguageDisplay = () => {
  const current = languages.find(lang => lang.code === locale.value)
  return current ? `${current.flag} ${current.name}` : languages[0].flag + ' ' + languages[0].name
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (langCode: Locale) => {
  setLocale(langCode)
  isOpen.value = false
}

const closeDropdown = (event: Event) => {
  const target = event.target as HTMLElement
  const switcher = document.querySelector('.language-switcher')
  
  if (switcher && !switcher.contains(target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
.language-switcher {
  position: relative;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  color: #2c3e50;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.language-button:hover,
.language-button.active {
  border-color: #8b4513;
  background-color: rgba(139, 69, 19, 0.05);
}

.current-language {
  font-weight: 500;
}

.dropdown-icon {
  transition: transform 0.3s ease;
}

.dropdown-icon.rotate {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 160px;
  overflow: hidden;
}

.language-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  color: #2c3e50;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-align: left;
}

.language-option:hover {
  background-color: #f8f9fa;
}

.language-option.active {
  background-color: rgba(139, 69, 19, 0.1);
  color: #8b4513;
  font-weight: 500;
}

.flag {
  font-size: 1.1rem;
}

.name {
  flex: 1;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .language-button {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
  }
  
  .current-language {
    display: none;
  }
  
  .language-dropdown {
    right: -0.5rem;
  }
  
  .language-option {
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .language-button {
    padding: 0.3rem 0.5rem;
  }
  
  .language-dropdown {
    min-width: 140px;
  }
}
</style> 