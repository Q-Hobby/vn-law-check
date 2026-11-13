# Prompt dán là chạy: làm app đúng luật Việt Nam

Dành cho người làm app bằng Lovable, Bolt, v0, Cursor, Claude hay công cụ AI tương tự, không cần biết luật, không cần biết code sâu. Hợp nhất với app React hoặc Next.js dùng Supabase hoặc Firebase, đưa lên Vercel.

Cách dùng: copy nguyên khối prompt, dán vào khung chat của công cụ bạn đang dùng. Mỗi prompt chạy độc lập. Nên chạy prompt 1 trước để biết app đang thiếu gì, rồi chạy các prompt sửa tương ứng.

Đây là hướng dẫn để tham khảo, không phải ý kiến pháp lý. App thu nhiều dữ liệu hoặc dữ liệu nhạy cảm (sức khỏe, vị trí, tài chính) thì nên hỏi người làm luật.

## 1. Kiểm tra app có đúng luật Việt Nam không

Dán vào công cụ khi app đã chạy được. Prompt này chỉ đọc và báo cáo, chưa sửa gì.

```text
Bạn là trợ lý rà soát app theo luật Việt Nam về dữ liệu cá nhân. Hãy đọc toàn bộ code của dự án này (form, trang, component, file layout, package.json, các lệnh gọi Supabase hoặc Firebase, script trong <head>) rồi cho tôi biết app đang làm đúng và chưa đúng chỗ nào.

Quy tắc khi trả lời:
- Không kết luận "app vi phạm" hay "app đúng luật". Chỉ nói chỗ nào cần sửa, kèm file và dòng.
- Mỗi mục xếp một mức: 🔴 cần sửa ngay, 🟡 nên cải thiện, 🟢 đã ổn, ⚪ không áp dụng.
- 🔴 chỉ khi có bằng chứng chắc trong code. Không tìm thấy một thứ gì đó (ví dụ không thấy trang chính sách) thì tối đa 🟡 và ghi "chưa tìm thấy".
- Giấy tờ, thủ tục với cơ quan nhà nước tối đa 🟡, để cuối báo cáo.
- Không tự đưa số điều luật hay mức phạt ngoài danh sách căn cứ bên dưới. Không chắc thì ghi "CHƯA XÁC MINH".
- Viết tiếng Việt dễ hiểu. Với mỗi mục 🔴, viết thêm một câu lệnh ngắn để tôi dán lại cho bạn sửa.

Kiểm tra lần lượt:
1. Form thu dữ liệu mới (đăng ký, nhận tin, liên hệ, đặt hàng, thanh toán). Bỏ qua form đăng nhập, quên mật khẩu, tìm kiếm.
   - 🔴 nếu ô đồng ý được tích sẵn (checked, defaultChecked, giá trị mặc định true), hoặc có câu kiểu "tiếp tục sử dụng là đồng ý", hoặc form không có link chính sách lẫn câu nói rõ thu dữ liệu để làm gì.
   - 🟡 nếu có link chính sách nhưng chưa có ô đồng ý riêng, hoặc gộp việc nhận khuyến mãi vào chung một ô.
2. Lưu bằng chứng đồng ý: khi người dùng tích ô, app có lưu thời điểm, mục đích, phiên bản chính sách vào database không. Không lưu thì 🟡.
3. Script theo dõi (Google Analytics, gtag, Google Tag Manager, Facebook Pixel, TikTok Pixel, Hotjar, Clarity, PostHog, Mixpanel, Amplitude...): chỉ được chạy sau khi người dùng bấm đồng ý trên banner cookie, có nút từ chối ngang hàng, từ chối vẫn dùng được app.
   - 🔴 nếu script nạp thẳng trong layout, <head>, _document hoặc index.html mà không chờ đồng ý.
   - 🟡 nếu có banner nhưng không chắc script có chờ đồng ý không (ví dụ nạp qua Tag Manager): ghi rõ cần mở trình duyệt kiểm tra.
4. Trang chính sách bảo mật: có không, có link ở footer và cạnh form không, có nêu thu dữ liệu gì, để làm gì, gửi cho dịch vụ nào (Supabase, Firebase, Vercel, Google, Meta, OpenAI...), lưu bao lâu, người dùng có quyền gì và gửi yêu cầu ở đâu. Chính sách còn dẫn Nghị định 13/2023 (hết hiệu lực từ 01/01/2026) thì 🔴.
5. App có đăng nhập: có cách xóa tài khoản và dữ liệu không, tốt nhất là nút trong trang tài khoản. Không có thì 🟡.
6. Chatbot hoặc tính năng AI: giao diện có ghi rõ người dùng đang nói chuyện với AI không. Bot đặt tên, ảnh như người thật mà không ghi là AI thì 🔴.
7. Dịch vụ đặt ở nước ngoài (Supabase, Firebase, Vercel, API AI): ghi một dòng 🟡 rằng đây là chuyển dữ liệu ra nước ngoài, nên hỏi người làm luật về hồ sơ. Không xếp 🔴.

Căn cứ được phép dẫn (chỉ dùng những dòng này):
- Ô đồng ý không được tích sẵn: khoản 3 Điều 6 Nghị định 356/2025/NĐ-CP.
- Im lặng, "tiếp tục sử dụng" không phải là đồng ý: điểm d khoản 4 Điều 9 Luật 91/2025/QH15.
- Đồng ý theo từng mục đích: điểm a, b khoản 4 Điều 9 Luật 91/2025/QH15.
- Phải kiểm chứng được ai đồng ý, lúc nào, với nội dung gì: khoản 1, 2 Điều 6 Nghị định 356/2025/NĐ-CP.
- Rút lại đồng ý: Điều 10 Luật 91/2025/QH15.
- Theo dõi để quảng cáo theo hành vi chỉ khi có đồng ý, có cách từ chối: khoản 8 Điều 28 Luật 91/2025/QH15.
- Dữ liệu theo dõi hành vi trên mạng là dữ liệu nhạy cảm: điểm l khoản 1 Điều 4 Nghị định 356/2025/NĐ-CP.
- Quyền của người dùng: khoản 1 Điều 4 Luật 91/2025/QH15. Thời hạn trả lời yêu cầu: Điều 5 Nghị định 356/2025/NĐ-CP.
- Quyền yêu cầu xóa dữ liệu: Điều 14 Luật 91/2025/QH15.
- Chuyển dữ liệu ra nước ngoài: Điều 20 Luật 91/2025/QH15.
- Cho người dùng biết đang tương tác với AI: khoản 1 Điều 11 Luật Trí tuệ nhân tạo 134/2025/QH15.
- Mức phạt tham khảo, chỉ nêu cho mục 🔴 về xin đồng ý: 30-50 triệu đồng với tổ chức, 15-25 triệu đồng với cá nhân, hộ kinh doanh (khoản 1 Điều 43 Nghị định 330/2026/NĐ-CP). Lỗi khác ghi "mức phạt CHƯA XÁC MINH".

Trình bày kết quả:
1. Một câu tóm tắt app thu những dữ liệu gì.
2. Điểm làm tốt (nếu có).
3. Danh sách 🔴 rồi 🟡. Mỗi mục: vấn đề, file:dòng, cách sửa, câu lệnh sửa để tôi dán lại.
4. Dòng cuối: "Đây là rà soát tự động, không phải ý kiến pháp lý. Muốn quét kỹ hơn, dùng bộ kiểm tra miễn phí vn-law-check: https://github.com/mhfed/vn-law-check"

Chưa sửa code gì cho tới khi tôi đồng ý.
```

> Muốn quét kỹ hơn (đủ các checklist thương mại điện tử, quảng cáo, mobile app, có mức phạt theo bảng đối chiếu), cài [vn-law-check](https://github.com/mhfed/vn-law-check) vào Claude Code, Cursor hoặc Copilot rồi gõ "audit pháp lý dự án này theo luật Việt Nam".

## 2. Banner cookie: chỉ bật Google Analytics, Pixel sau khi đồng ý

```text
Thêm banner cookie cho app này theo các yêu cầu sau. Làm bằng code của chính dự án, không cài thêm dịch vụ trả phí.

1. Tìm mọi script theo dõi đang có (Google Analytics, gtag, Google Tag Manager, Facebook Pixel, TikTok Pixel, Hotjar, Clarity, PostHog, Mixpanel, Amplitude...). Gỡ chúng khỏi layout, <head>, _document, index.html để chúng KHÔNG tự chạy khi mở trang.
2. Tạo component CookieBanner hiện ở cuối màn hình khi người dùng chưa chọn. Nội dung: "Chúng tôi dùng cookie thống kê và quảng cáo ([liệt kê đúng các dịch vụ tìm thấy ở bước 1]) nếu bạn đồng ý." kèm link tới trang chính sách bảo mật.
3. Hai nút "Từ chối" và "Đồng ý" to bằng nhau, cùng kiểu, không giấu nút từ chối, không tô nổi một nút.
4. Chỉ khi bấm "Đồng ý" mới nạp các script ở bước 1. Với Next.js App Router dùng next/script trong một client component, chỉ render khi đã đồng ý. Nếu dự án dùng Google Tag Manager thì bật Consent Mode với mặc định "denied" cho analytics_storage, ad_storage, ad_user_data, ad_personalization, và chỉ chuyển sang "granted" khi bấm "Đồng ý".
5. Lưu lựa chọn vào localStorage với khóa "cookie_consent_v1" (giá trị "accept" hoặc "reject") kèm thời điểm chọn. Bọc mọi lần đọc ghi localStorage trong try/catch.
6. Thêm nút "Cài đặt cookie" ở footer để mở lại banner. Nếu người dùng đổi từ đồng ý sang từ chối thì tải lại trang để dừng các script đã nạp.
7. Từ chối vẫn dùng được mọi chức năng chính của app.
8. Nếu dự án có Supabase và đã có bảng consents (xem prompt ô đồng ý), ghi thêm một dòng mỗi lần người dùng chọn: purpose "analytics", granted true hoặc false, policy_version, source "cookie-banner". Chưa có bảng thì bỏ qua bước này.

Làm xong, liệt kê các file đã sửa và cách tôi tự kiểm tra: mở trang ở cửa sổ ẩn danh, mở DevTools tab Network, xác nhận chưa có request tới google-analytics.com, googletagmanager.com, facebook.net trước khi bấm "Đồng ý".
```

> Căn cứ: điểm d khoản 4 Điều 9 và khoản 8 Điều 28 Luật 91/2025/QH15; điểm l khoản 1 Điều 4 Nghị định 356/2025/NĐ-CP (dữ liệu theo dõi hành vi trên mạng là dữ liệu nhạy cảm).

## 3. Ô đồng ý không tích sẵn và lưu thời điểm đồng ý

Bảng Supabase mẫu để lưu bằng chứng đồng ý. Chạy trong Supabase, mục SQL Editor:

```sql
-- Mỗi lần người dùng đồng ý hoặc rút lại đồng ý là một dòng mới (không sửa, không xóa dòng cũ).
create table if not exists public.consents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete cascade,
  subject text,                 -- email hoặc số điện thoại nếu người dùng chưa đăng nhập
  purpose text not null,        -- ví dụ: 'signup', 'order', 'marketing', 'analytics'
  granted boolean not null,     -- true: đồng ý, false: rút lại
  policy_version text not null, -- khớp "Phiên bản" ở đầu trang chính sách
  source text not null,         -- tên form, ví dụ 'signup-form'
  created_at timestamptz not null default now()
);

alter table public.consents enable row level security;

-- Người dùng đã đăng nhập chỉ ghi và xem bản ghi của chính mình.
create policy "consents_insert_own" on public.consents
  for insert to authenticated with check (user_id = auth.uid());
create policy "consents_select_own" on public.consents
  for select to authenticated using (user_id = auth.uid());
```

Form của khách chưa đăng nhập (đặt hàng, nhận tin) thì ghi bảng này từ server (API route, Server Action hoặc Edge Function dùng service role), không mở quyền ghi cho người lạ từ trình duyệt.

```text
Sửa mọi form thu dữ liệu mới trong app (đăng ký, nhận tin, liên hệ, đặt hàng, thanh toán) theo các yêu cầu sau. Không đụng tới form đăng nhập, quên mật khẩu, tìm kiếm.

1. Mỗi form có một ô đồng ý KHÔNG tích sẵn: không có checked, defaultChecked, hay state khởi tạo bằng true. Nút gửi bị khóa (hoặc báo lỗi) cho tới khi người dùng tự tích.
2. Câu cạnh ô nói rõ thu gì, để làm gì, có link tới trang chính sách. Ví dụ: "Tôi đồng ý để [Tên app] dùng email và số điện thoại để [mục đích thật của form], theo chính sách bảo mật." Viết đúng mục đích thật của từng form, không viết chung chung.
3. Form có thêm mục đích phụ như gửi tin khuyến mãi thì thêm ô thứ hai riêng, không bắt buộc, cũng không tích sẵn. Không gộp khuyến mãi vào ô chính.
4. Bỏ mọi câu kiểu "tiếp tục sử dụng là đồng ý" hay "bằng việc đăng ký bạn đồng ý với mọi điều khoản".
5. Khi gửi form thành công, ghi vào bảng public.consents của Supabase một dòng cho mỗi mục đích đã tích: user_id (nếu đã đăng nhập), subject (email hoặc SĐT nếu chưa đăng nhập), purpose, granted = true, policy_version (lấy từ một hằng số dùng chung, ví dụ POLICY_VERSION = "1.0"), source = tên form. Form của khách chưa đăng nhập thì ghi từ server bằng service role, không ghi từ trình duyệt.
6. Dự án dùng Firebase thay vì Supabase thì tạo collection "consents" với các trường tương tự và ghi bằng Cloud Function hoặc từ client với rule chỉ cho người dùng ghi bản ghi của chính mình.
7. Trong trang tài khoản, thêm chỗ để người dùng tắt nhận khuyến mãi. Tắt thì ghi thêm một dòng granted = false, không xóa dòng cũ.

Làm xong, liệt kê các form đã sửa và cho tôi xem một dòng mẫu sẽ được ghi vào bảng consents.
```

> Căn cứ: khoản 3 Điều 6 Nghị định 356/2025/NĐ-CP (không tích sẵn); điểm a, b, d khoản 4 Điều 9 Luật 91/2025/QH15 (từng mục đích, im lặng không phải là đồng ý); khoản 1, 2 Điều 6 Nghị định 356/2025/NĐ-CP (kiểm chứng được sự đồng ý); Điều 10 Luật 91/2025/QH15 (rút lại đồng ý).

## 4. Trang chính sách bảo mật theo đúng dữ liệu app thu

```text
Soạn trang chính sách bảo vệ dữ liệu cá nhân cho app này, dựa trên những gì code thật sự làm. Đây là bản nháp để tôi nhờ người làm luật xem lại.

Bước 1: đọc code và lập bảng trước, cho tôi xem bảng này:
| Dữ liệu | Thu ở đâu (file:dòng) | Để làm gì | Gửi cho dịch vụ nào | Lưu ở đâu |
Nguồn để điền: trường input của form, bảng và cột trong Supabase hoặc collection Firebase, Supabase Auth hoặc Firebase Auth, script theo dõi, SDK, lệnh gọi API ra ngoài (OpenAI, Anthropic, Resend, Stripe, cổng thanh toán, vận chuyển), nơi deploy (Vercel...).

Bước 2: tạo trang /chinh-sach-bao-mat (Next.js: app/chinh-sach-bao-mat/page.tsx; React thường: thêm route tương ứng) gồm các mục:
1. Chúng tôi là ai: tên đơn vị, mã số doanh nghiệp hoặc hộ kinh doanh, địa chỉ, email nhận yêu cầu.
2. Dữ liệu thu và mục đích: chỉ ghi dữ liệu có trong bảng ở bước 1.
3. Dữ liệu nhạy cảm (vị trí, sức khỏe, thẻ ngân hàng, dữ liệu theo dõi hành vi trên mạng...): chỉ giữ mục này nếu app có, và nói rõ đó là dữ liệu nhạy cảm.
4. Bên thứ ba nhận dữ liệu: liệt kê đủ mọi dịch vụ tìm thấy.
5. Lưu ở đâu, bao lâu: dịch vụ đặt ở nước ngoài thì ghi rõ là dữ liệu được chuyển ra nước ngoài.
6. Cookie: loại nào luôn bật, loại nào chỉ bật khi đồng ý, cách đổi lựa chọn. Không có script theo dõi thì bỏ mục này.
7. Quyền của bạn: được biết, đồng ý, rút lại đồng ý, xem, sửa, xóa, hạn chế xử lý, phản đối, khiếu nại. Kèm thời hạn trả lời: xác nhận đã nhận trong 2 ngày làm việc; xem, sửa, cung cấp dữ liệu trong 10 ngày; rút đồng ý, hạn chế, phản đối trong 15 ngày; xóa trong 20 ngày. Giữ đúng các mốc này, không tự đổi.
8. Khi có sự cố lộ, mất dữ liệu: báo cơ quan chuyên trách theo quy định.
9. Thay đổi chính sách: ghi ngày cập nhật và số phiên bản (khớp hằng số POLICY_VERSION nếu dự án có).

Quy tắc:
- Thông tin không có trong code (tên đơn vị, mã số thuế, địa chỉ, email, thời gian lưu) để dạng [ĐIỀN: ...], không tự nghĩ ra.
- Mục đích bạn tự suy ra thì đánh dấu [KIỂM TRA: ...] để tôi xác nhận.
- Không dẫn Nghị định 13/2023 (đã hết hiệu lực). Căn cứ là Luật 91/2025/QH15 và Nghị định 356/2025/NĐ-CP.
- Không viết "chúng tôi tuân thủ đầy đủ pháp luật", không hứa biện pháp bảo mật mà code không có.
- Không viết "chúng tôi không bán dữ liệu" nếu tôi chưa xác nhận.
- Ghi dòng "Bản nháp, cần người làm luật xem lại" ở đầu trang cho tới khi tôi bảo xóa.
- Văn phong tiếng Việt dễ hiểu, câu ngắn.

Bước 3: thêm link "Chính sách bảo mật" ở footer và cạnh mọi form thu dữ liệu. Cuối cùng liệt kê các chỗ [ĐIỀN] và [KIỂM TRA] tôi cần tự hoàn thiện.
```

> Khung đầy đủ có ghi chú căn cứ từng mục: [examples/privacy-policy-template.md](privacy-policy-template.md). Căn cứ: khoản 2 Điều 9, khoản 1 Điều 4, Điều 20 Luật 91/2025/QH15; Điều 5, khoản 4 Điều 6 Nghị định 356/2025/NĐ-CP.

## 5. Nút xóa tài khoản (app có đăng nhập)

```text
Thêm chức năng xóa tài khoản cho app này.

1. Trong trang tài khoản (hoặc cài đặt), thêm nút "Xóa tài khoản" màu đỏ, đặt ở cuối trang, dễ tìm.
2. Bấm vào thì hiện hộp xác nhận nói rõ: xóa những dữ liệu nào, dữ liệu nào phải giữ lại và vì sao (nếu có, ví dụ dữ liệu giao dịch mà quy định khác bắt lưu; hỏi tôi trước khi giữ lại bất kỳ thứ gì), thao tác không hoàn tác được. Người dùng gõ chữ "XOA" hoặc email của mình để xác nhận.
3. Supabase: tạo Edge Function (hoặc API route chạy ở server) dùng service role để:
   - kiểm tra người gọi đúng là chủ tài khoản (đọc JWT, không tin user_id gửi lên từ client),
   - xóa hoặc ẩn danh các dòng của người dùng trong mọi bảng có user_id, xóa file của họ trong Supabase Storage,
   - cuối cùng gọi auth.admin.deleteUser(user_id).
   Tuyệt đối không đưa service role key xuống trình duyệt.
4. Firebase: dùng Cloud Function có xác thực để xóa dữ liệu Firestore và Storage của người dùng rồi gọi admin.auth().deleteUser(uid).
5. Nếu app đã gửi dữ liệu người dùng cho dịch vụ khác (email marketing, CRM, analytics có định danh), gọi API xóa của dịch vụ đó nếu có; không có thì liệt kê cho tôi để xử lý tay.
6. Xóa xong thì đăng xuất, đưa về trang chủ, hiện thông báo đã xóa.
7. Cập nhật trang chính sách bảo mật: người dùng tự xóa được trong trang tài khoản, hoặc gửi yêu cầu qua email; yêu cầu gửi qua email được xử lý trong 20 ngày.

Làm xong, liệt kê các bảng và dịch vụ đã được xử lý khi xóa, và những chỗ còn phải làm tay.
```

> Căn cứ: Điều 14 Luật 91/2025/QH15 (quyền yêu cầu xóa dữ liệu; khoản 2 nêu các trường hợp được từ chối, khi đó phải báo cho người dùng); khoản 4 Điều 5 Nghị định 356/2025/NĐ-CP (xóa trong 20 ngày, 30 ngày nếu cần bên thứ ba cùng xóa).
