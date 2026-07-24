import { NextResponse } from 'next/server';
import { getSiteDataServer, saveSiteDataServer } from '@/lib/data.server';
import { SiteData } from '@/lib/data';

export async function GET() {
  try {
    const data = getSiteDataServer();
    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Lỗi đọc dữ liệu';
    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { siteData } = body;

    if (!siteData || typeof siteData !== 'object') {
      return NextResponse.json(
        { success: false, message: 'Dữ liệu không hợp lệ' },
        { status: 400 }
      );
    }

    const saved = saveSiteDataServer(siteData as SiteData);

    if (saved) {
      return NextResponse.json({
        success: true,
        message: 'Lưu dữ liệu thành công!',
        data: siteData,
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Không thể ghi file dữ liệu' },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Lỗi hệ thống';
    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}
