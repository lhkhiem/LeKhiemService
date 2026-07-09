import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Vui lòng điền đầy đủ thông tin.' }, { status: 400 });
    }

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options for the site owner
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Gửi đến chính bạn
      replyTo: email, // Khi bạn bấm Reply, nó sẽ gửi đến email của khách
      subject: `[Portfolio] Tin nhắn mới từ ${name}`,
      html: `
        <h2>Bạn có một tin nhắn mới từ website liên hệ</h2>
        <p><strong>Tên khách hàng:</strong> ${name}</p>
        <p><strong>Số điện thoại:</strong> ${phone || 'Không cung cấp'}</p>
        <p><strong>Email liên hệ:</strong> ${email}</p>
        <p><strong>Nhu cầu/Tin nhắn:</strong></p>
        <p style="white-space: pre-wrap; padding: 10px; background: #f4f4f4; border-radius: 5px;">${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Gửi thành công!' }, { status: 200 });
  } catch (error) {
    console.error('Lỗi khi gửi email:', error);
    return NextResponse.json({ message: 'Gặp lỗi khi gửi email. Hãy thử lại.' }, { status: 500 });
  }
}
