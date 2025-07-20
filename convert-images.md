# 照片格式轉換說明

## 問題說明
您的照片目前是 HEIC 格式，這種格式在網頁瀏覽器中支援度不佳。建議轉換為 JPG 或 WebP 格式以確保在所有瀏覽器中正常顯示。

## 轉換方法

### 方法一：使用 macOS 預覽程式
1. 打開預覽程式
2. 選擇所有 HEIC 檔案
3. 選擇「檔案」→「輸出」
4. 格式選擇「JPEG」，品質設為 80-90%
5. 保存到相同資料夾

### 方法二：使用線上轉換工具
- CloudConvert (cloudconvert.com)
- Convertio (convertio.co)
- 上傳 HEIC 檔案，轉換為 JPG

### 方法三：使用 ImageMagick (命令列)
```bash
# 安裝 ImageMagick
brew install imagemagick

# 批次轉換
cd src/assets/space-photo
for file in *.heic; do
  magick "$file" "${file%.heic}.jpeg"
done
```

## 轉換後更新程式碼

轉換完成後，請將 `src/pages/Home.vue` 中的檔案路徑從：
```
/src/assets/space-photo/0${n}.heic
```

改為：
```
/src/assets/space-photo/0${n}.jpg
```

同時更新 `src/style.css` 中的背景圖片路徑：
```css
background-image: url('/src/assets/space-photo/main.jpg');
```

## 優化建議
- 照片大小建議控制在 500KB 以下
- 可以考慮使用 WebP 格式以獲得更好的壓縮效果
- 為不同解析度提供多種尺寸的圖片 