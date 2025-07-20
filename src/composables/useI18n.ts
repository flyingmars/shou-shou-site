import { ref, computed } from 'vue'

// 支援的語言
export type Locale = 'zh-TW' | 'vi'

// 語言資源類型
export interface Messages {
  [key: string]: string | Messages
}

// 語言資源
const messages: Record<Locale, Messages> = {
  'zh-TW': {
    nav: {
      home: '首頁',
      about: '關於我們',
      menu: '菜單',
      contact: '聯絡我們'
    },
    common: {
      welcome: '歡迎',
      loading: '載入中...',
      error: '錯誤',
      submit: '送出',
      cancel: '取消',
      save: '儲存',
      edit: '編輯',
      delete: '刪除',
      confirm: '確認',
      back: '返回',
      next: '下一步',
      previous: '上一步',
      search: '搜尋',
      filter: '篩選',
      clear: '清除',
      all: '全部',
      none: '無',
      yes: '是',
      no: '否',
      close: '關閉'
    },
    home: {
      title: '歡迎來到 ShouShou 咖啡館',
      subtitle: '用「少少」的東西，感受滿滿的生活質感',
      cta: '查看菜單',
      features: {
        title: '我們的特色',
        coffee: {
          title: '咖啡與酒的共存',
          description: '白天享受精品咖啡的純粹，夜晚品味威士忌的深度'
        },
        minimal: {
          title: '極簡美學',
          description: '沒有多餘的裝飾，只有剛剛好的安靜與餘白'
        },
        location: {
          title: '菜市場裡的綠洲',
          description: '在熱鬧的菜市場轉角，為您提供一個安靜的角落'
        }
      },
      gallery: {
        title: '我們的空間',
        subtitle: '在這裡，你不需要理由，只需要一點放空的時間'
      },
      featured: {
        title: '精選推薦',
        americano: {
          name: '美式咖啡',
          description: '經典純粹的咖啡體驗'
        },
        orangeLatte: {
          name: '橙酒拿鐵',
          description: '咖啡與酒的完美融合'
        },
        ethiopia: {
          name: '衣索比亞 耶加雪夫',
          description: '精品單品手沖咖啡'
        }
      }
    },
    about: {
      title: '關於我們',
      subtitle: '一個十年夢想的實現故事',
      dream: {
        title: '十年前的畫面',
        text1: '十年前，她腦海中就有一個畫面。',
        text2: '一間極簡、乾淨、白色調的小店，咖啡香淡淡繚繞，吧台上放著一瓶瓶低調而迷人的威士忌。人們可以進來坐著，發呆、聊天、讀書，或只是靜靜地喝一口「少少（shou shou）」的咖啡，讓心放鬆。'
      },
      reality: {
        title: '但現實總讓人繞遠路',
        text1: '那年，她原本相中的店面突然被搶走；工作也在毫無預警下結束了。她一度以為夢想會隨之停擺。',
        text2: '卻沒想到，就在某天走過熱鬧的菜市場時，一個轉角的空店面讓她的心靜了下來：',
        highlight: '「就是這裡了。」'
      },
      love: {
        title: '攜手同行',
        text1: '那年，她和男友也在愛情長跑八年後，牽起彼此的手，一起走進人生的另一個階段——不只是婚姻，還有共同經營這家夢想中的店。',
        text2: '於是，',
        highlight: 'shou shou 誕生了。'
      },
      concept: {
        title: '我們的空間',
        coffee: {
          title: '咖啡與酒的共存',
          description: '這是一間咖啡與酒共存的空間，白天品味精品咖啡，夜晚享受低調威士忌'
        },
        minimal: {
          title: '極簡美學',
          description: '沒有多餘的裝飾，只有剛剛好的安靜與餘白，讓心靈得到真正的放鬆'
        },
        oasis: {
          title: '菜市場裡的綠洲',
          description: '在菜市場這樣的地方，用「少少」的東西，讓人感受到滿滿的生活質感'
        }
      },
      belief: {
        title: '我們相信',
        text: '你來這裡時，不需要理由，只需要一點放空的時間、一點喜歡咖啡與酒的心情。',
        quote: '「我要成為這個菜市場裡，最舒服的咖啡霸主。」',
        author: 'ShouShou 創辦人'
      },
      business: {
        title: '營業資訊',
        hours: {
          title: '營業時間',
          morning: '☀️ 白天咖啡時光',
          weekday: '週一至週五：07:00 - 17:00',
          evening: '🌙 夜晚微醺時光',
          weekend: '週五至週六：18:00 - 23:00'
        },
        contact: {
          title: '聯絡資訊',
          phone: '📞 電話：(02) 1234-5678',
          address: '📍 地址：菜市場轉角的那個安靜角落',
          email: '✉️ Email: hello@shoushoucafe.com'
        },
        service: {
          title: '我們提供',
          coffee: '☕ 精品咖啡・手沖單品',
          alcohol: '🥃 精選威士忌・調酒',
          space: '📚 安靜的閱讀空間',
          relax: '💭 發呆・聊天・放鬆'
        }
      }
    },
    menu: {
      title: '菜單',
      subtitle: '咖啡與酒的完美融合，品味生活的每一刻',
      categories: {
        coffee: '☕ 咖啡',
        'special-drinks': '🍊 特調飲品 / 果汁',
        tea: '🍵 茶類 / 其他',
        alcohol: '🍸 酒類 / 調酒',
        'single-origin': '🧊 單品手沖'
      },
      brewing: {
        title: '🧊 單品手沖說明',
        description: '威士忌單杯 ｜ 手沖單杯',
        note: '以下為可選單品豆，每款都有獨特的風味特色'
      },
      flavorLabel: '風味：',
      alcoholLabel: '酒',
      addAlcohol: '+酒 NT$'
    },
    contact: {
      title: '聯絡我們',
      subtitle: '歡迎隨時與我們聯繫',
      info: {
        title: '聯絡資訊',
        address: {
          title: '地址',
          value: '菜市場轉角的那個安靜角落'
        },
        phone: {
          title: '電話',
          value: '(02) 1234-5678'
        },
        email: {
          title: '電子郵件',
          value: 'hello@shoushoucafe.com'
        },
        hours: {
          title: '營業時間',
          weekday: '週一至週五：07:00 - 17:00',
          weekend: '週五至週六：18:00 - 23:00'
        }
      },
      form: {
        title: '留言給我們',
        name: '姓名',
        email: '電子郵件',
        phone: '電話',
        subject: '主旨',
        message: '訊息',
        nameRequired: '姓名 *',
        emailRequired: '電子郵件 *',
        subjectRequired: '主旨 *',
        messageRequired: '訊息 *',
        namePlaceholder: '請輸入您的姓名',
        emailPlaceholder: '請輸入您的電子郵件',
        phonePlaceholder: '請輸入您的電話號碼',
        messagePlaceholder: '請輸入您的訊息內容',
        subjectOptions: {
          placeholder: '請選擇主旨',
          general: '一般詢問',
          reservation: '預約包場',
          catering: '外燴服務',
          feedback: '意見回饋',
          other: '其他'
        },
        submit: '送出訊息',
        submitting: '傳送中...',
        success: '感謝您的留言！我們會盡快回覆您。',
        error: '發送失敗，請稍後再試。'
      },
      map: {
        title: '位置地圖',
        placeholder: '🗺️ 地圖位置'
      }
    },
    footer: {
      title: 'ShouShou 咖啡館',
      slogan: '用「少少」的東西，感受滿滿的生活質感',
      copyright: '© 2024 ShouShou 咖啡館. All rights reserved.'
    }
  },
  vi: {
    nav: {
      home: 'Trang chủ',
      about: 'Về chúng tôi',
      menu: 'Thực đơn',
      contact: 'Liên hệ'
    },
    common: {
      welcome: 'Chào mừng',
      loading: 'Đang tải...',
      error: 'Lỗi',
      submit: 'Gửi',
      cancel: 'Hủy',
      save: 'Lưu',
      edit: 'Chỉnh sửa',
      delete: 'Xóa',
      confirm: 'Xác nhận',
      back: 'Quay lại',
      next: 'Tiếp theo',
      previous: 'Trước',
      search: 'Tìm kiếm',
      filter: 'Lọc',
      clear: 'Xóa',
      all: 'Tất cả',
      none: 'Không có',
      yes: 'Có',
      no: 'Không',
      close: 'Đóng'
    },
    home: {
      title: 'Chào mừng đến với ShouShou Café',
      subtitle: 'Cảm nhận chất lượng cuộc sống đầy đủ từ những điều "ít ỏi"',
      cta: 'Xem thực đơn',
      features: {
        title: 'Đặc điểm của chúng tôi',
        coffee: {
          title: 'Sự kết hợp cà phê và rượu',
          description: 'Ban ngày thưởng thức cà phê tinh túy, ban đêm thưởng thức độ sâu của whisky'
        },
        minimal: {
          title: 'Thẩm mỹ tối giản',
          description: 'Không có trang trí thừa, chỉ có sự yên tĩnh và khoảng trống vừa đủ'
        },
        location: {
          title: 'Ốc đảo giữa chợ',
          description: 'Ở góc chợ nhộn nhịp, cung cấp cho bạn một góc yên tĩnh'
        }
      },
      gallery: {
        title: 'Không gian của chúng tôi',
        subtitle: 'Ở đây, bạn không cần lý do, chỉ cần một chút thời gian thư giãn'
      },
      featured: {
        title: 'Gợi ý đặc biệt',
        americano: {
          name: 'Cà phê Americano',
          description: 'Trải nghiệm cà phê cổ điển thuần khiết'
        },
        orangeLatte: {
          name: 'Orange Latte với rượu',
          description: 'Sự kết hợp hoàn hảo giữa cà phê và rượu'
        },
        ethiopia: {
          name: 'Ethiopia Yirgacheffe',
          description: 'Cà phê pha chế đơn phẩm cao cấp'
        }
      }
    },
    about: {
      title: 'Về chúng tôi',
      subtitle: 'Câu chuyện hiện thực hóa giấc mơ 10 năm',
      dream: {
        title: 'Hình ảnh từ 10 năm trước',
        text1: 'Mười năm trước, cô ấy đã có một hình ảnh trong đầu.',
        text2: 'Một cửa hàng nhỏ tối giản, sạch sẽ, tông màu trắng, với hương cà phê thoang thoảng, trên quầy bar đặt những chai whisky khiêm tốn nhưng quyến rũ. Mọi người có thể vào ngồi, thư giãn, trò chuyện, đọc sách, hoặc chỉ yên lặng nhấp một ngụm cà phê "ít ỏi (shou shou)", để tâm hồn thư giãn.'
      },
      reality: {
        title: 'Nhưng thực tế luôn khiến người ta đi vòng',
        text1: 'Năm đó, cửa hàng mà cô ấy đã chọn đột nhiên bị chiếm mất; công việc cũng kết thúc mà không báo trước. Cô ấy từng nghĩ rằng giấc mơ sẽ dừng lại.',
        text2: 'Nhưng không ngờ, trong một ngày đi qua khu chợ nhộn nhịp, một cửa hàng trống ở góc phố khiến tâm hồn cô ấy bình tĩnh lại:',
        highlight: '"Đây là nơi rồi."'
      },
      love: {
        title: 'Đồng hành cùng nhau',
        text1: 'Năm đó, cô ấy và bạn trai cũng sau 8 năm yêu xa, nắm tay nhau bước vào giai đoạn khác của cuộc đời - không chỉ là hôn nhân, mà còn cùng nhau điều hành cửa hàng trong mơ này.',
        text2: 'Và như vậy,',
        highlight: 'shou shou ra đời.'
      },
      concept: {
        title: 'Không gian của chúng tôi',
        coffee: {
          title: 'Sự cộng tồn của cà phê và rượu',
          description: 'Đây là không gian cà phê và rượu cộng tồn, ban ngày thưởng thức cà phê tinh túy, ban đêm thưởng thức whisky khiêm tốn'
        },
        minimal: {
          title: 'Thẩm mỹ tối giản',
          description: 'Không có trang trí thừa, chỉ có sự yên tĩnh và khoảng trống vừa đủ, để tâm hồn được thư giãn thực sự'
        },
        oasis: {
          title: 'Ốc đảo giữa chợ',
          description: 'Ở nơi như chợ, dùng những thứ "ít ỏi" để cảm nhận chất lượng cuộc sống đầy đủ'
        }
      },
      belief: {
        title: 'Chúng tôi tin rằng',
        text: 'Khi đến đây, bạn không cần lý do, chỉ cần một chút thời gian thư giãn, một chút tâm trạng yêu thích cà phê và rượu.',
        quote: '"Tôi muốn trở thành ông chủ cà phê thoải mái nhất trong khu chợ này."',
        author: 'Người sáng lập ShouShou'
      },
      business: {
        title: 'Thông tin kinh doanh',
        hours: {
          title: 'Giờ hoạt động',
          morning: '☀️ Thời gian cà phê ban ngày',
          weekday: 'Thứ Hai đến Thứ Sáu: 07:00 - 17:00',
          evening: '🌙 Thời gian say sưa ban đêm',
          weekend: 'Thứ Sáu đến Thứ Bảy: 18:00 - 23:00'
        },
        contact: {
          title: 'Thông tin liên hệ',
          phone: '📞 Điện thoại: (02) 1234-5678',
          address: '📍 Địa chỉ: Góc yên tĩnh đó ở góc chợ',
          email: '✉️ Email: hello@shoushoucafe.com'
        },
        service: {
          title: 'Chúng tôi cung cấp',
          coffee: '☕ Cà phê tinh túy・Pha chế đơn phẩm',
          alcohol: '🥃 Whisky chọn lọc・Cocktail',
          space: '📚 Không gian đọc sách yên tĩnh',
          relax: '💭 Thư giãn・Trò chuyện・Nghỉ ngơi'
        }
      }
    },
    menu: {
      title: 'Thực đơn',
      subtitle: 'Sự kết hợp hoàn hảo giữa cà phê và rượu, thưởng thức từng khoảnh khắc cuộc sống',
      categories: {
        coffee: '☕ Cà phê',
        'special-drinks': '🍊 Đồ uống đặc biệt / Nước ép',
        tea: '🍵 Trà / Khác',
        alcohol: '🍸 Rượu / Cocktail',
        'single-origin': '🧊 Pha chế đơn phẩm'
      },
      brewing: {
        title: '🧊 Hướng dẫn pha chế đơn phẩm',
        description: 'Ly whisky đơn ｜ Ly pha chế đơn',
        note: 'Dưới đây là các hạt cà phê đơn phẩm có thể chọn, mỗi loại đều có đặc điểm hương vị độc đáo'
      },
      flavorLabel: 'Hương vị:',
      alcoholLabel: 'rượu',
      addAlcohol: '+rượu NT$'
    },
    contact: {
      title: 'Liên hệ với chúng tôi',
      subtitle: 'Hoan nghênh liên hệ với chúng tôi bất cứ lúc nào',
      info: {
        title: 'Thông tin liên hệ',
        address: {
          title: 'Địa chỉ',
          value: 'Góc yên tĩnh đó ở góc chợ'
        },
        phone: {
          title: 'Điện thoại',
          value: '(02) 1234-5678'
        },
        email: {
          title: 'Email',
          value: 'hello@shoushoucafe.com'
        },
        hours: {
          title: 'Giờ hoạt động',
          weekday: 'Thứ Hai đến Thứ Sáu: 07:00 - 17:00',
          weekend: 'Thứ Sáu đến Thứ Bảy: 18:00 - 23:00'
        }
      },
      form: {
        title: 'Để lại lời nhắn cho chúng tôi',
        name: 'Họ tên',
        email: 'Email',
        phone: 'Điện thoại',
        subject: 'Chủ đề',
        message: 'Tin nhắn',
        nameRequired: 'Họ tên *',
        emailRequired: 'Email *',
        subjectRequired: 'Chủ đề *',
        messageRequired: 'Tin nhắn *',
        namePlaceholder: 'Vui lòng nhập họ tên của bạn',
        emailPlaceholder: 'Vui lòng nhập email của bạn',
        phonePlaceholder: 'Vui lòng nhập số điện thoại của bạn',
        messagePlaceholder: 'Vui lòng nhập nội dung tin nhắn của bạn',
        subjectOptions: {
          placeholder: 'Vui lòng chọn chủ đề',
          general: 'Câu hỏi chung',
          reservation: 'Đặt chỗ riêng',
          catering: 'Dịch vụ tiệc ngoài',
          feedback: 'Phản hồi ý kiến',
          other: 'Khác'
        },
        submit: 'Gửi tin nhắn',
        submitting: 'Đang gửi...',
        success: 'Cảm ơn lời nhắn của bạn! Chúng tôi sẽ phản hồi sớm nhất có thể.',
        error: 'Gửi thất bại, vui lòng thử lại sau.'
      },
      map: {
        title: 'Bản đồ vị trí',
        placeholder: '🗺️ Vị trí bản đồ'
      }
    },
    footer: {
      title: 'ShouShou Café',
      slogan: 'Cảm nhận chất lượng cuộc sống đầy đủ từ những điều "ít ỏi"',
      copyright: '© 2024 ShouShou Café. Tất cả quyền được bảo lưu.'
    }
  }
}

// 當前語言狀態
const currentLocale = ref<Locale>('zh-TW')

// 翻譯函數
export function useI18n() {
  const locale = computed(() => currentLocale.value)
  
  const setLocale = (newLocale: Locale) => {
    currentLocale.value = newLocale
    // 儲存到 localStorage
    localStorage.setItem('shou-shou-locale', newLocale)
  }
  
  const t = (key: string): string => {
    const keys = key.split('.')
    let result: any = messages[currentLocale.value]
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }
    
    return typeof result === 'string' ? result : key
  }
  
  // 初始化語言設定
  const initLocale = () => {
    const savedLocale = localStorage.getItem('shou-shou-locale') as Locale
    if (savedLocale && ['zh-TW', 'vi'].includes(savedLocale)) {
      currentLocale.value = savedLocale
    }
  }
  
  return {
    locale,
    setLocale,
    t,
    initLocale
  }
} 