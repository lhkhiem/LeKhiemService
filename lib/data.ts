export interface NavLink {
  name: string;
  href: string;
}

export interface HeaderData {
  logoText1: string;
  logoText2: string;
  navLinks: NavLink[];
  ctaButton: string;
}

export interface HeroData {
  greeting: string;
  title: string;
  subtitle: string;
  subtitleHighlight: string;
  subtitleEnd: string;
  description: string;
  primaryBtn: string;
  secondaryBtn: string;
}

export interface CoreValue {
  iconName: string;
  title: string;
  desc: string;
}

export interface AboutData {
  title: string;
  titleHighlight: string;
  subtitle: string;
  paragraphs: string[];
  coreValues: CoreValue[];
}

export interface ServiceItem {
  iconName: string;
  title: string;
  desc: string;
}

export interface ServicesData {
  title: string;
  titleHighlight: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  img: string;
  description?: string;
  techStack?: string[];
  liveUrl?: string;
  gallery?: string[];
}

export interface PortfolioData {
  title: string;
  titleHighlight: string;
  subtitle: string;
  categories: string[];
  projects: ProjectItem[];
}

export interface ProcessStep {
  iconName: string;
  title: string;
  desc: string;
}

export interface ProcessData {
  title: string;
  titleHighlight: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface FooterData {
  description: string;
  quickLinksTitle: string;
  contactTitle: string;
  email: string;
  phone: string;
  address: string;
  copyright: string;
}

export interface SiteData {
  header: HeaderData;
  hero: HeroData;
  about: AboutData;
  services: ServicesData;
  portfolio: PortfolioData;
  process: ProcessData;
  footer: FooterData;
}

export const defaultSiteData: SiteData = {
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
    subtitleHighlight: "Giải Pháp Số & Phần Mềm",
    subtitleEnd: "| Web, App Windows & Tool Quản Lý",
    description: "Tôi thiết kế và phát triển Website hiện đại, xây dựng App Windows, Tool tự động hóa và phần mềm quản lý theo yêu cầu. Đồng thời cung cấp dịch vụ IT Helpdesk chuyên nghiệp giúp cá nhân và doanh nghiệp tối ưu vận hành, bứt phá năng suất.",
    primaryBtn: "Xem Dự Án",
    secondaryBtn: "Liên Hệ Ngay"
  },
  about: {
    title: "Về",
    titleHighlight: "Tôi",
    subtitle: "Kết hợp tư duy thẩm mỹ, thuật toán và giải pháp thực tế",
    paragraphs: [
      "Với kinh nghiệm trong lĩnh vực phát triển Web, ứng dụng Desktop Windows và phần mềm quản lý, tôi không chỉ viết code mà còn mang đến giải pháp toàn diện. Tôi tin rằng một phần mềm tốt phải đi đôi với sự trực quan, vận hành ổn định và tối ưu hiệu suất công việc.",
      "Mục tiêu của tôi là giúp các cá nhân và doanh nghiệp tối ưu hóa quy trình thủ công, số hóa dữ liệu và sở hữu những công cụ phần mềm may đo chuẩn xác theo từng bài toán thực tế."
    ],
    coreValues: [
      { iconName: "Layout", title: "Thiết kế Độc bản", desc: "Giao diện được thiết kế may đo riêng biệt, không dùng template rập khuôn. Tùy biến linh hoạt." },
      { iconName: "Code", title: "Code Sạch & Tối ưu", desc: "Chuẩn hiệu năng cao, bảo mật, vận hành mượt mà trên cả trình duyệt và máy tính Windows." },
      { iconName: "Lightbulb", title: "Giải pháp Thực tế", desc: "Tập trung giải quyết bài toán vận hành, tiết kiệm thời gian và nâng cao hiệu quả kinh doanh." }
    ]
  },
  services: {
    title: "Các Dịch Vụ",
    titleHighlight: "Cốt Lõi",
    subtitle: "Những gì tôi có thể làm để giúp dự án và doanh nghiệp của bạn cất cánh.",
    items: [
      { iconName: "MonitorSmartphone", title: "Thiết kế Website & WebApp", desc: "Xây dựng các website thương mại, landing page, webapp hiện đại với trải nghiệm mượt mà trên mọi thiết bị." },
      { iconName: "AppWindow", title: "Lập trình App Windows & Desktop", desc: "Phát triển ứng dụng desktop Windows (.NET, C#, Electron, Tauri...), giao diện hiện đại, tốc độ cao, hoạt động mượt mà online/offline." },
      { iconName: "Database", title: "Phần Mềm Quản Lý May Đo", desc: "Xây dựng phần mềm quản lý bán hàng, kho bãi, nhân sự, lịch bảo trì (CRM/ERP mini) theo đúng quy trình thực tế của bạn." },
      { iconName: "Bot", title: "Tool Tự Động Hóa & Tiện Ích", desc: "Viết tool auto tác vụ, thu thập dữ liệu (crawler), xử lý và đồng bộ file Excel/PDF hàng loạt giúp tiết kiệm hàng chục giờ làm việc thủ công." },
      { iconName: "Rocket", title: "Tối ưu Tốc độ & Chuẩn SEO", desc: "Tối ưu hóa mã nguồn, tăng tốc độ tải trang, nâng cao trải nghiệm người dùng và thứ hạng trên công cụ tìm kiếm." },
      { iconName: "Headset", title: "IT Helpdesk & Hỗ trợ Kỹ thuật", desc: "Khắc phục sự cố máy tính, phần mềm, mạng nội bộ chuyên nghiệp. Xử lý nhanh chóng qua kết nối từ xa (Remote)." }
    ]
  },
  portfolio: {
    title: "Dự Án",
    titleHighlight: "Tiêu Biểu",
    subtitle: "Khám phá những sản phẩm và giải pháp tôi đã thực hiện.",
    categories: ["Tất cả", "Website", "UI/UX App", "App Windows & Tool", "Phần Mềm Quản Lý"],
    projects: [
      { id: 1, title: "E-Commerce Platform", category: "Website", img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1064&auto=format&fit=crop" },
      { id: 2, title: "Fintech Dashboard", category: "UI/UX App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
      { id: 3, title: "SaaS Landing Page", category: "Website", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
      { id: 4, title: "Real Estate Portal", category: "Website", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" },
      { id: 5, title: "Health Tracker App", category: "UI/UX App", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" },
      { id: 6, title: "Quản lý Bán hàng & Kho Windows", category: "App Windows & Tool", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" }
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
    description: "Chuyên gia phát triển Website, App Windows, Tool tự động hoá và Phần mềm quản lý theo yêu cầu, mang đến giải pháp số toàn diện tối ưu hiệu suất.",
    quickLinksTitle: "Liên Kết Nhanh",
    contactTitle: "Liên Hệ",
    email: "hoangkhiem.dev@gmail.com",
    phone: "0886939879",
    address: "Rạch Giá, An Giang, Việt Nam",
    copyright: "Lê Khiêm. All rights reserved."
  }
};

export const siteData: SiteData = defaultSiteData;
