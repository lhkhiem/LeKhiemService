"use client";

import React from 'react';
import { 
  Layout, Code, Lightbulb, MonitorSmartphone, Palette, Search, 
  Rocket, Headset, PenTool, CheckCircle, Mail, Phone, MapPin, 
  Globe, Shield, Cpu, Zap, Star, Users, Layers, Award, Terminal, 
  HardDrive, Wrench, Settings, HelpCircle 
} from 'lucide-react';

export const AVAILABLE_ICONS = [
  { name: 'Layout', label: 'Layout (Giao diện)', icon: Layout },
  { name: 'Code', label: 'Code (Mã nguồn)', icon: Code },
  { name: 'Lightbulb', label: 'Lightbulb (Ý tưởng)', icon: Lightbulb },
  { name: 'MonitorSmartphone', label: 'MonitorSmartphone (Thiết bị)', icon: MonitorSmartphone },
  { name: 'Palette', label: 'Palette (Thiết kế/Màu sắc)', icon: Palette },
  { name: 'Search', label: 'Search (SEO/Tìm kiếm)', icon: Search },
  { name: 'Rocket', label: 'Rocket (Tốc độ/Khởi động)', icon: Rocket },
  { name: 'Headset', label: 'Headset (Hỗ trợ IT)', icon: Headset },
  { name: 'PenTool', label: 'PenTool (Phác thảo)', icon: PenTool },
  { name: 'CheckCircle', label: 'CheckCircle (Hoàn thành)', icon: CheckCircle },
  { name: 'Mail', label: 'Mail (Thư tử)', icon: Mail },
  { name: 'Phone', label: 'Phone (Điện thoại)', icon: Phone },
  { name: 'MapPin', label: 'MapPin (Địa chỉ)', icon: MapPin },
  { name: 'Globe', label: 'Globe (Website/Toàn cầu)', icon: Globe },
  { name: 'Shield', label: 'Shield (Bảo mật)', icon: Shield },
  { name: 'Cpu', label: 'Cpu (Kỹ thuật/Cấu hình)', icon: Cpu },
  { name: 'Zap', label: 'Zap (Nhanh nhạy)', icon: Zap },
  { name: 'Star', label: 'Star (Đánh giá)', icon: Star },
  { name: 'Users', label: 'Users (Khách hàng)', icon: Users },
  { name: 'Layers', label: 'Layers (Đa nền tảng)', icon: Layers },
  { name: 'Award', label: 'Award (Chất lượng)', icon: Award },
  { name: 'Terminal', label: 'Terminal (Lập trình)', icon: Terminal },
  { name: 'HardDrive', label: 'HardDrive (Phần cứng)', icon: HardDrive },
  { name: 'Wrench', label: 'Wrench (Sửa chữa)', icon: Wrench },
  { name: 'Settings', label: 'Settings (Cấu hình)', icon: Settings },
];

const iconMap: Record<string, React.ElementType> = AVAILABLE_ICONS.reduce((acc, curr) => {
  acc[curr.name] = curr.icon;
  return acc;
}, {} as Record<string, React.ElementType>);

interface DynamicIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function DynamicIcon({ name, size = 24, className }: DynamicIconProps) {
  const IconComp = iconMap[name] || HelpCircle;
  return <IconComp size={size} className={className} />;
}

interface IconPickerSelectProps {
  value: string;
  onChange: (iconName: string) => void;
}

export function IconPickerSelect({ value, onChange }: IconPickerSelectProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        background: 'rgba(0, 242, 254, 0.1)',
        border: '1px solid var(--accent-primary, #00f2fe)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#00f2fe'
      }}>
        <DynamicIcon name={value} size={22} />
      </div>
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        style={{
          flex: 1,
          padding: '10px 14px',
          borderRadius: '8px',
          background: '#161b22',
          border: '1px solid #30363d',
          color: '#f0f6fc',
          fontSize: '14px',
          outline: 'none'
        }}
      >
        {AVAILABLE_ICONS.map((item) => (
          <option key={item.name} value={item.name}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
