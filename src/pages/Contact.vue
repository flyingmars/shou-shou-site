<template>
  <div class="contact">
    <div class="container">
      <!-- 頁面標題 -->
      <section class="page-header">
        <h1>{{ t('contact.title') }}</h1>
        <p>{{ t('contact.subtitle') }}</p>
      </section>

      <div class="contact-content">
        <!-- 聯絡資訊 -->
        <section class="contact-info">
          <h2>{{ t('contact.info.title') }}</h2>
          <div class="info-cards">
            <div class="info-card">
              <div class="info-icon">📍</div>
              <h3>{{ t('contact.info.address.title') }}</h3>
              <p>{{ t('contact.info.address.value') }}</p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">📞</div>
              <h3>{{ t('contact.info.phone.title') }}</h3>
              <p>{{ t('contact.info.phone.value') }}</p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">✉️</div>
              <h3>{{ t('contact.info.email.title') }}</h3>
              <p>{{ t('contact.info.email.value') }}</p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">🕒</div>
              <h3>{{ t('contact.info.hours.title') }}</h3>
              <p>{{ t('contact.info.hours.weekday') }}</p>
              <p>{{ t('contact.info.hours.weekend') }}</p>
            </div>
          </div>
        </section>

        <!-- 聯絡表單 -->
        <section class="contact-form-section">
          <h2>{{ t('contact.form.title') }}</h2>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">{{ t('contact.form.nameRequired') }}</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                :placeholder="t('contact.form.namePlaceholder')"
              >
            </div>
            
            <div class="form-group">
              <label for="email">{{ t('contact.form.emailRequired') }}</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
                :placeholder="t('contact.form.emailPlaceholder')"
              >
            </div>
            
            <div class="form-group">
              <label for="phone">{{ t('contact.form.phone') }}</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="form.phone"
                :placeholder="t('contact.form.phonePlaceholder')"
              >
            </div>
            
            <div class="form-group">
              <label for="subject">{{ t('contact.form.subjectRequired') }}</label>
              <select id="subject" v-model="form.subject" required>
                <option value="">{{ t('contact.form.subjectOptions.placeholder') }}</option>
                <option value="general">{{ t('contact.form.subjectOptions.general') }}</option>
                <option value="reservation">{{ t('contact.form.subjectOptions.reservation') }}</option>
                <option value="catering">{{ t('contact.form.subjectOptions.catering') }}</option>
                <option value="feedback">{{ t('contact.form.subjectOptions.feedback') }}</option>
                <option value="other">{{ t('contact.form.subjectOptions.other') }}</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">{{ t('contact.form.messageRequired') }}</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required
                :placeholder="t('contact.form.messagePlaceholder')"
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? t('contact.form.submitting') : t('contact.form.submit') }}
            </button>
          </form>
          
          <div v-if="submitMessage" class="submit-message" :class="{ success: submitSuccess, error: !submitSuccess }">
            {{ submitMessage }}
          </div>
        </section>
      </div>

      <!-- 地圖區域 -->
      <section class="map-section">
        <h2>{{ t('contact.map.title') }}</h2>
        <div class="map-placeholder">
          <p>{{ t('contact.map.placeholder') }}</p>
          <p>{{ t('contact.info.address.value') }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // 模擬表單提交
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // 重置表單
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })
    
    submitMessage.value = t('contact.form.success')
    submitSuccess.value = true
    
    // 3秒後清除訊息
    setTimeout(() => {
      submitMessage.value = ''
    }, 3000)
    
  } catch (error) {
    submitMessage.value = t('contact.form.error')
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}
</script> 