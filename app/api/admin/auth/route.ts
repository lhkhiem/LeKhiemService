import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (password === adminPassword) {
      return NextResponse.json({ success: true, message: 'Đăng nhập thành công' });
    } else {
      return NextResponse.json({ success: false, message: 'Mật khẩu không chính xác' }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ success: false, message: 'Có lỗi xảy ra' }, { status: 500 });
  }
}
