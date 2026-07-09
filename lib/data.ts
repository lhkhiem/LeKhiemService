export const siteData = {
  header: {
    logoText1: "Lê",
    logoText2: "Khiêm",
    navLinks: [
      { name: "Giới thiệu", href: "#about" },
      { name: "Dịch vụ", href: "#services" },
      { name: "Dự án", href: "#portfolio" },
      { name: "Quy trình", href: "#process" }
    ],
    ctaButton: "Liên hệ ngay"
  },

  hero: {
    greeting: "👋 Xin chào, tôi là",
    title: "Lê Khiêm",
    subtitle: "Chuyên gia Kiến tạo",
    subtitleHighlight: "Giao diện Số",
    subtitleEnd: "& Trải nghiệm Người dùng",
    description: "Tôi thiết kế và phát triển các trang web hiện đại, tối ưu tốc độ và mang đậm dấu ấn thương hiệu cá nhân/doanh nghiệp. Giúp bạn nâng tầm hiện diện trên Internet.",
    primaryBtn: "Xem Dự Án",
    secondaryBtn: "Liên Hệ Ngay"
  },

  about: {
    title: "Về",
    titleHighlight: "Tôi",
    subtitle: "Kết hợp thẩm mỹ thiết kế và tư duy lập trình",
    paragraphs: [
      "Với kinh nghiệm trong lĩnh vực phát triển Web, tôi không chỉ viết code mà còn tạo ra trải nghiệm. Tôi tin rằng một giao diện đẹp phải đi đôi với hiệu năng tối ưu và cấu trúc chặt chẽ.",
      "Mục tiêu của tôi là giúp các cá nhân và doanh nghiệp xây dựng sự hiện diện mạnh mẽ, chuyên nghiệp trên nền tảng số thông qua những sản phẩm vượt trên cả sự mong đợi."
    ],
    coreValues: [
      { iconName: "Layout", title: "Thiết kế Độc bản", desc: "Giao diện được thiết kế may đo riêng biệt, không dùng template rập khuôn." },
      { iconName: "Code", title: "Code Sạch & Tối ưu", desc: "Chuẩn SEO, tốc độ tải trang nhanh nhạy trên mọi thiết bị di động." },
      { iconName: "Lightbulb", title: "Giải pháp Thực tế", desc: "Tập trung vào hiệu quả chuyển đổi và giải quyết bài toán kinh doanh." }
    ]
  },

  services: {
    title: "Các Dịch Vụ",
    titleHighlight: "Cốt Lõi",
    subtitle: "Những gì tôi có thể làm để giúp dự án của bạn cất cánh.",
    items: [
      { iconName: "MonitorSmartphone", title: "Thiết kế Web Responsive", desc: "Tạo ra các trang web tương thích hoàn hảo trên mọi thiết bị, từ điện thoại đến màn hình desktop siêu lớn." },
      { iconName: "Palette", title: "UI/UX & Branding", desc: "Nghiên cứu và thiết kế trải nghiệm người dùng, mang lại giao diện trực quan, bắt mắt và giữ chân khách hàng." },
      { iconName: "Search", title: "Tối ưu chuẩn SEO", desc: "Cấu trúc website thân thiện với bộ máy tìm kiếm (Google), giúp tăng thứ hạng tự nhiên cho doanh nghiệp." },
      { iconName: "Rocket", title: "Tối ưu Hiệu năng (Speed)", desc: "Áp dụng các công nghệ hiện đại nhất (Next.js, Server Components) để web load trong nháy mắt." }
    ]
  },

  portfolio: {
    title: "Dự Án",
    titleHighlight: "Tiêu Biểu",
    subtitle: "Khám phá những sản phẩm tôi đã thực hiện.",
    categories: ["Tất cả", "Website", "UI/UX App", "Landing Page"],
    projects: [
      { id: 1, title: "E-Commerce Platform", category: "Website", img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1064&auto=format&fit=crop" },
      { id: 2, title: "Fintech Dashboard", category: "UI/UX App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
      { id: 3, title: "SaaS Landing Page", category: "Landing Page", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
      { id: 4, title: "Real Estate Portal", category: "Website", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" },
      { id: 5, title: "Health Tracker App", category: "UI/UX App", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" },
      { id: 6, title: "Event Promo Page", category: "Landing Page", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" }
    ]
  },

  process: {
    title: "Quy Trình",
    titleHighlight: "Làm Việc",
    subtitle: "Minh bạch, chuyên nghiệp và bám sát mục tiêu.",
    steps: [
      { iconName: "Search", title: "1. Khảo sát & Tư vấn", desc: "Tìm hiểu yêu cầu, phân tích mục tiêu kinh doanh và đề xuất giải pháp kỹ thuật tối ưu nhất." },
      { iconName: "PenTool", title: "2. Phác thảo (UI/UX)", desc: "Thiết kế wireframe, mockup và prototype để thống nhất giao diện trước khi lập trình." },
      { iconName: "Code", title: "3. Tinh chỉnh kỹ thuật", desc: "Lập trình frontend/backend, tối ưu hiệu năng, SEO và các hiệu ứng chuyển động mượt mà." },
      { iconName: "CheckCircle", title: "4. Bàn giao & Hỗ trợ", desc: "Kiểm thử (Testing) kỹ lưỡng trên nhiều thiết bị, bàn giao mã nguồn và hướng dẫn sử dụng." }
    ]
  },

  footer: {
    description: "Chuyên gia thiết kế & phát triển giao diện web, mang đến giải pháp số toàn diện và tối ưu trải nghiệm người dùng.",
    quickLinksTitle: "Liên Kết Nhanh",
    contactTitle: "Liên Hệ",
    email: "hoangkhiem.dev@gmail.com",
    phone: "0886939879",
    address: "Rạch Giá, An Giang, Việt Nam",
    copyright: "Lê Khiêm. All rights reserved."
  }
};
