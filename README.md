# 手手咖啡館網站

一個使用 Vue 3 + TypeScript + Vite 建立的簡約風格咖啡館網站。

## 功能特色

- ✨ 簡約現代的設計風格
- 📱 完全響應式設計 (RWD)
- 🎯 單頁應用程式 (SPA) 與路由導航
- ☕ 完整的咖啡館網站功能
- 🎨 流暢的動畫效果
- 📞 聯絡表單與社群媒體連結

## 頁面結構

- **首頁** - 歡迎頁面與咖啡館特色介紹
- **關於我們** - 咖啡館的故事與理念
- **菜單** - 多元化菜單（咖啡、特調飲品、茶類、酒類調酒、單品手沖）
- **聯絡我們** - 聯絡資訊與留言表單

## 技術架構

- **Vue 3** - 使用 Composition API
- **TypeScript** - 型別安全的開發體驗
- **Vite** - 快速的開發建置工具
- **Vue Router** - 客戶端路由管理
- **CSS Grid & Flexbox** - 現代化佈局
- **響應式設計** - 支援各種裝置尺寸

## 環境需求

- Node.js 16+ 
- npm 或 yarn

## 安裝與運行

1. 安裝依賴套件：
```bash
npm install
```

2. 啟動開發伺服器：
```bash
npm run dev
```

3. 建置生產版本：
```bash
npm run build
```

4. 預覽生產版本：
```bash
npm run preview
```

## 專案結構

```
src/
├── pages/           # 頁面組件
│   ├── Home.vue     # 首頁
│   ├── About.vue    # 關於我們
│   ├── Menu.vue     # 菜單
│   └── Contact.vue  # 聯絡我們
├── App.vue          # 主要應用程式組件
├── main.ts          # 應用程式入口點
├── style.css        # 全域樣式
└── vite-env.d.ts    # TypeScript 類型宣告
```

## 自訂設置

### 修改咖啡館資訊
- 編輯 `src/pages/About.vue` 修改咖啡館故事與營業資訊
- 編輯 `src/pages/Contact.vue` 修改聯絡資訊

### 修改菜單
- 編輯 `src/pages/Menu.vue` 中的 `menuItems` 陣列
- 支援咖啡、酒類調酒、特調飲品、茶類、單品手沖等分類
- 可以新增/修改商品名稱、價格、風味描述、處理法等

### 修改社群媒體連結
- 編輯 `src/App.vue` 中的社群媒體連結 URL

### 修改樣式
- 主要樣式在 `src/style.css`
- 顏色主題：咖啡色系 (#8b4513)
- 支援深色模式可額外擴充

## 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)  
- Safari (最新版本)
- Edge (最新版本)

## 授權

此專案僅供學習使用。 