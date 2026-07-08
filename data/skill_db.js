// ================================================================================= //
// CƠ SỞ DỮ LIỆU KỸ NĂNG (SKILL_DB)                                                     //
// Mỗi tướng có đúng 4 loại kỹ năng cố định (khoá "thuong/kynang/dacbiet/bidong"):        //
//   - thuong  = Đánh Thường (chiêu cơ bản, luôn dùng được)                              //
//   - kynang  = Kỹ Năng (chiêu chủ động thường dùng trong trận)                          //
//   - dacbiet = Kỹ Năng Đặc Biệt (chiêu mạnh nhất / cần tích năng lượng)                  //
//   - bidong  = Kỹ Năng Bị Động (hiệu ứng luôn tồn tại, không cần bấm)                    //
// THÊM TƯỚNG MỚI: chỉ cần thêm 1 khoá tên tướng mới với đủ 4 mục thuong/kynang/dacbiet/bidong. //
// NẾU KHÔNG KHAI BÁO RIÊNG, TƯỚNG SẼ DÙNG DEFAULT_SKILL_TEMPLATE PHÍA DƯỚI.               //
// LƯU Ý: FILE NÀY CHỈ PHỤC VỤ HIỂN THỊ UI (tên/icon/mô tả). Số liệu THỰC SỰ dùng khi     //
// mô phỏng chiến đấu (multiplier/targeting/hiệu ứng) nằm ở data/hero_combat_skills.js.    //
// ================================================================================= //
const SKILL_DB = {
    "Thỏ Ngọc": {
        thuong:  { name: "Húc Ngọc",           icon: "👊", desc: "Đánh thường gây sát thương hệ Kim lên 1 kẻ địch." },
        kynang:  { name: "Xoáy Băng Ngọc",       icon: "🌀", desc: "Gây sát thương diện rộng và làm chậm tốc độ địch." },
        dacbiet: { name: "Thịnh Nộ Bạch Thố",     icon: "💥", desc: "Kỹ năng đặc biệt: sát thương cực lớn lên toàn bộ kẻ địch." },
        bidong:  { name: "Thiên Phú Thỏ",         icon: "🎯", desc: "Bị động: tự động tăng % Tấn Công cho toàn team khi ra trận." }
    },
    "Thetis": {
        thuong:  { name: "Trượng Thủy Triều",     icon: "👊", desc: "Đánh thường gây sát thương hệ Thủy lên 1 kẻ địch." },
        kynang:  { name: "Sóng Ngầm Băng Giá",     icon: "🌊", desc: "Tạo một cột nước đóng băng, gây sát thương và giảm né." },
        dacbiet: { name: "Đại Hồng Thủy",         icon: "💥", desc: "Kỹ năng đặc biệt: nhấn chìm toàn bộ kẻ địch, sát thương cực lớn." },
        bidong:  { name: "Máu Của Biển Cả",       icon: "🎯", desc: "Bị động: hồi phục % HP mỗi khi kết thúc lượt." }
    },
    "Arthur": {
        thuong:  { name: "Chém Vương Kiếm",       icon: "👊", desc: "Đánh thường gây sát thương hệ Hỏa lên 1 kẻ địch." },
        kynang:  { name: "Lưỡi Kiếm Rực Lửa",       icon: "🔥", desc: "Tung một đường kiếm khí gây sát thương lan sang địch gần." },
        dacbiet: { name: "Excalibur Giáng Thế",    icon: "💥", desc: "Kỹ năng đặc biệt: giáng một đòn chí mạng sát thương cực lớn." },
        bidong:  { name: "Ý Chí Quân Vương",       icon: "🎯", desc: "Bị động: tăng % Phòng Thủ khi HP xuống dưới 50%." }
    },
    "Merlin": {
        thuong:  { name: "Trượng Phong Ma",       icon: "👊", desc: "Đánh thường gây sát thương hệ Phong lên 1 kẻ địch." },
        kynang:  { name: "Cuồng Phong Hỗn Loạn",   icon: "🌪️", desc: "Tạo lốc xoáy gây sát thương và có tỉ lệ làm choáng địch." },
        dacbiet: { name: "Đại Pháp Thuật Cổ Xưa",  icon: "💥", desc: "Kỹ năng đặc biệt: triệu hồi phép thuật cổ, sát thương toàn màn." },
        bidong:  { name: "Trí Tuệ Vô Song",        icon: "🎯", desc: "Bị động: tăng % Tấn Công theo % Tốc Độ hiện có." }
    },
    "Goku": {
        thuong:  { name: "Đấm Lôi Chấn",          icon: "👊", desc: "Đánh thường gây sát thương hệ Lôi lên 1 kẻ địch." },
        kynang:  { name: "Kamehameha",            icon: "⚡", desc: "Phóng ra luồng năng lượng gây sát thương lớn theo đường thẳng." },
        dacbiet: { name: "Bản Năng Vô Cực",       icon: "💥", desc: "Kỹ năng đặc biệt: tăng mạnh mọi chỉ số trong vài lượt." },
        bidong:  { name: "Tinh Thần Chiến Đấu",   icon: "🎯", desc: "Bị động: tăng % Tốc Độ khi bị đánh trúng." }
    },
    "Luffy": {
        thuong:  { name: "Đấm Cao Su",            icon: "👊", desc: "Đánh thường gây sát thương hệ Thủy lên 1 kẻ địch." },
        kynang:  { name: "Súng Gatling",          icon: "🥊", desc: "Tung liên tiếp nhiều cú đấm gây sát thương dồn dập." },
        dacbiet: { name: "Thức Tỉnh Trái Ác Quỷ",  icon: "💥", desc: "Kỹ năng đặc biệt: biến hình tăng mạnh sát thương gây ra." },
        bidong:  { name: "Cơ Thể Cao Su",         icon: "🎯", desc: "Bị động: giảm % sát thương vật lý phải nhận." }
    },
"Odin": {
        thuong:  { name: "Thương Quang Thần",   icon: "👊", desc: "Đánh thường gây sát thương hệ Quang lên 1 kẻ địch." },
        kynang:  { name: "Mưa Cổ Ngữ",          icon: "⚡", desc: "Triệu hồi các ký tự cổ ngữ, gây sát thương diện rộng lên kẻ địch." },
        dacbiet: { name: "Định Mệnh Gungnir",   icon: "💥", desc: "Kỹ năng đặc biệt: phóng thương thần bách phát bách trúng, sát thương cực lớn lên mục tiêu mạnh nhất." },
        bidong:  { name: "Trí Tuệ Tối Cao",      icon: "🎯", desc: "Bị động: áp chế tinh thần làm giảm % Phòng Thủ của toàn bộ phe địch khi vào trận." }
    },
    "Athena": {
        thuong:  { name: "Khiên Kích",          icon: "👊", desc: "Đánh thường gây sát thương hệ Kim lên 1 kẻ địch." },
        kynang:  { name: "Ánh Sáng Hộ Vệ",      icon: "🛡️", desc: "Tạo vầng sáng bảo vệ, gây sát thương và giảm công hàng trước địch." },
        dacbiet: { name: "Thánh Thuẫn Thần Điện",icon: "💥", desc: "Kỹ năng đặc biệt: kích hoạt khiên tối cao, gây sát thương và tăng mạnh % Phòng Thủ bản thân." },
        bidong:  { name: "Khiên Thần Aegis",    icon: "🎯", desc: "Bị động: tự động hồi phục % HP tối đa mỗi khi nhận sát thương." }
    },
    "Medusa": {
        thuong:  { name: "Rắn Độc Cắn",         icon: "👊", desc: "Đánh thường gây sát thương hệ Ám lên 1 kẻ địch." },
        kynang:  { name: "Nguyền Rủa",          icon: "🐍", desc: "Phát tán độc lực, gây sát thương và làm suy yếu hàng sau của địch." },
        dacbiet: { name: "Ánh Nhìn Hóa Đá",      icon: "💥", desc: "Kỹ năng đặc biệt: trừng mắt hóa đá, gây sát thương diện rộng và giảm % Tốc Độ toàn đội địch." },
        bidong:  { name: "Huyết Tộc Xà Nữ",     icon: "🎯", desc: "Bị động: tăng tỷ lệ chính xác và hiệu ứng khống chế cho bản thân." }
    },
    "Zoro": {
        thuong:  { name: "Nhất Kiếm Phái",      icon: "👊", desc: "Đánh thường gây sát thương hệ Phong lên 1 kẻ địch." },
        kynang:  { name: "Tam Thiên Thế Giới",   icon: "⚔️", desc: "Múa ba thanh kiếm tạo lốc xoáy chém xuyên mục tiêu." },
        dacbiet: { name: "Quỷ Kiếm Ashura",     icon: "💥", desc: "Kỹ năng đặc biệt: hóa thân quỷ thần trảm kích mục tiêu yếu máu, sát thương cực lớn." },
        bidong:  { name: "Ý Chí Kiếm Sĩ",       icon: "🎯", desc: "Bị động: mỗi khi nhận sát thương, tự tăng % Sát thương chí mạng của bản thân." }
    },
    "Ace": {
        thuong:  { name: "Súng Lửa",            icon: "👊", desc: "Đánh thường gây sát thương hệ Hỏa lên 1 kẻ địch." },
        kynang:  { name: "Hỏa Quyền",           icon: "🔥", desc: "Phóng ra cú đấm lửa khổng lồ thiêu rụi hàng trước của kẻ địch." },
        dacbiet: { name: "Đại Viêm Giới Đế",     icon: "💥", desc: "Kỹ năng đặc biệt: tạo cầu lửa khổng lồ hủy diệt, gây sát thương cực lớn lên toàn bộ địch." },
        bidong:  { name: "Ý Chí Doflaming",     icon: "🎯", desc: "Bị động: tăng % Tấn Công hệ Hỏa cho bản thân khi lượng HP xuống thấp." }
    },
    "Robin Hood": {
        thuong:  { name: "Tiễn Kích",           icon: "👊", desc: "Đánh thường gây sát thương hệ Mộc lên 1 kẻ địch." },
        kynang:  { name: "Mưa Tên Rừng Già",    icon: "🏹", desc: "Bắn loạt tên thần tốc, gây sát thương diện rộng lên hàng sau địch." },
        dacbiet: { name: "Mũi Tên Định Mệnh",   icon: "💥", desc: "Kỹ năng đặc biệt: ngắm bắn chuẩn xác vào chủ lực địch, sát thương đơn mục tiêu cực lớn." },
        bidong:  { name: "Biệt Kích Rừng Sâu",   icon: "🎯", desc: "Bị động: tự động tăng % Tốc Độ cho bản thân ngay khi ra trận." }
    },
    "Thor": {
        thuong:  { name: "Búa Gõ",              icon: "👊", desc: "Đánh thường gây sát thương hệ Lôi lên 1 kẻ địch." },
        kynang:  { name: "Lôi Phạt",            icon: "⚡", desc: "Triệu hồi sét đánh từ trên trời xuống, gây sát thương và giảm giáp mục tiêu." },
        dacbiet: { name: "Sấm Sét Mjolnir",     icon: "💥", desc: "Kỹ năng đặc biệt: ném búa lôi đình chấn động hàng trước, sát thương cực lớn và tăng công." },
        bidong:  { name: "Điên Cuồng Chiến Đấu", icon: "🎯", desc: "Bị động: mỗi lần chịu đòn giúp tích lũy và tăng % Tấn Công cho bản thân." }
    },
    "Anubis": {
        thuong:  { name: "Trảo Hồn",            icon: "👊", desc: "Đánh thường gây sát thương hệ Ám lên 1 kẻ địch." },
        kynang:  { name: "Phán Quyết Tử Thần",   icon: "⚖️", desc: "Triệu hồi cán cân linh hồn, gây sát thương mạnh vào kẻ địch thấp máu nhất." },
        dacbiet: { name: "Lời Nguyền Lăng Mộ",   icon: "💥", desc: "Kỹ năng đặc biệt: gieo rắc tai ương hủy diệt mục tiêu hàng sau, sát thương cực lớn." },
        bidong:  { name: "Trấn Giữ Vong Hồn",   icon: "🎯", desc: "Bị động: tăng mạnh % Sát thương chí mạng khi tấn công mục tiêu dưới 50% HP." }
    },
    "Saitama": {
        thuong:  { name: "Đấm Thường",          icon: "👊", desc: "Đánh thường gây sát thương hệ Thổ lên 1 kẻ địch." },
        kynang:  { name: "Đấm Thường Liên Tục",  icon: "🥊", desc: "Tung chuỗi đấm chớp nhoáng, gây sát thương liên tiếp lên 1 mục tiêu." },
        dacbiet: { name: "Đấm Nghiêm Túc",      icon: "💥", desc: "Kỹ năng đặc biệt: cú đấm hủy thiên diệt địa, sát thương đơn thể siêu cao." },
        bidong:  { name: "Giới Hạn Phá Vỡ",     icon: "🎯", desc: "Bị động: miễn nhiễm hoàn toàn với các hiệu ứng giảm Tốc Độ." }
    },
    "Chopper": {
        thuong:  { name: "Cào Cấu",            icon: "👊", desc: "Đánh thường gây sát thương hệ Mộc lên 1 kẻ địch." },
        kynang:  { name: "Thuốc Cấp Cứu",       icon: "💊", desc: "Chế tạo dược phẩm đặc biệt, gây sát thương nhẹ hoặc hồi phục cho đồng đội thấp máu." },
        dacbiet: { name: "Rumble Ball",         icon: "💥", desc: "Kỹ năng đặc biệt: hóa hình dạng khổng lồ càn quét, gây sát thương diện rộng lên phe địch." },
        bidong:  { name: "Trực Giác Bác Sĩ",     icon: "🎯", desc: "Bị động: tự động tăng % Phòng Thủ cho bản thân khi máu giảm sâu." }
    },
    "Zeus": {
        thuong:  { name: "Chớp Sét",            icon: "👊", desc: "Đánh thường gây sát thương hệ Lôi lên 1 kẻ địch." },
        kynang:  { name: "Lôi Tiễn",            icon: "⚡", desc: "Phóng luồng điện năng, gây sát thương xuyên thấu qua hai mục tiêu liên tiếp." },
        dacbiet: { name: "Phán Quyết Thiên Đình",icon: "💥", desc: "Kỹ năng đặc biệt: giáng vạn tia sét hủy diệt, gây sát thương cực lớn lên TOÀN ĐỘI kẻ địch." },
        bidong:  { name: "Uy Nghiêm Của Thần",   icon: "🎯", desc: "Bị động: tăng vĩnh viễn % Sát thương chí mạng cho TOÀN ĐỘI khi bắt đầu trận." }
    },
    "Poseidon": {
        thuong:  { name: "Thủy Kích",           icon: "👊", desc: "Đánh thường gây sát thương hệ Thủy lên 1 kẻ địch." },
        kynang:  { name: "Sóng Thần",           icon: "🌊", desc: "Triệu hồi đợt sóng cuộn trào, gây sát thương diện rộng lên hàng trước địch." },
        dacbiet: { name: "Nộ Hải Cuồng Lưu",    icon: "💥", desc: "Kỹ năng đặc biệt: giải phóng sức mạnh đại dương chôn vùi kẻ địch, gây sát thương và giảm % Tốc Độ chúng." },
        bidong:  { name: "Bảo Hộ Biển Sâu",     icon: "🎯", desc: "Bị động: giảm sát thương gánh chịu từ các kỹ năng diện rộng của kẻ địch." }
    },
    "Hades": {
        thuong:  { name: "Minh Kiếm",           icon: "👊", desc: "Đánh thường gây sát thương hệ Ám lên 1 kẻ địch." },
        kynang:  { name: "Chiêu Hồn",           icon: "💀", desc: "Triệu gọi oán hồn từ cõi chết, tấn công và gây sát thương lớn lên mục tiêu thấp máu nhất." },
        dacbiet: { name: "Tiếng Gọi Minh Phủ",   icon: "💥", desc: "Kỹ năng đặc biệt: mở cửa địa ngục nuốt chửng chủ lực địch, gây sát thương đơn thể cực lớn." },
        bidong:  { name: "Khiên Oán Hồn",       icon: "🎯", desc: "Bị động: mỗi khi nhận sát thương, oán hồn tích lũy giúp tăng % Phòng Thủ bản thân." }
    },
    "Hercules": {
        thuong:  { name: "Quyền Lực Sĩ",         icon: "👊", desc: "Đánh thường gây sát thương hệ Thổ lên 1 kẻ địch." },
        kynang:  { name: "Chấn Động Mặt Đất",   icon: "⛰️", desc: "Nện mạnh xuống đất tạo cơn địa chấn, gây sát thương lên hàng trước địch." },
        dacbiet: { name: "Sức Mạnh Thần Lực",   icon: "💥", desc: "Kỹ năng đặc biệt: giải phóng sức mạnh á thần, gây sát thương lớn và buff mạnh % Tấn Công, Phòng Thủ." },
        bidong:  { name: "Thân Thể Á Thần",     icon: "🎯", desc: "Bị động: tăng % Kháng các hiệu ứng bất lợi khi bắt đầu trận đấu." }
    },
    "Achilles": {
        thuong:  { name: "Giáo Kích",           icon: "👊", desc: "Đánh thường gây sát thương hệ Kim lên 1 kẻ địch." },
        kynang:  { name: "Chiến Thần Xung Phong",icon: "🛡️", desc: "Cầm khiên lao thẳng vào đội hình địch, gây sát thương mục tiêu theo trận hình." },
        dacbiet: { name: "Điểm Yếu Gót Chân",   icon: "💥", desc: "Kỹ năng đặc biệt: đâm kích chuẩn xác vào yếu huyệt chủ lực địch, sát thương cực lớn." },
        bidong:  { name: "Thân Thể Bất Tử",     icon: "🎯", desc: "Bị động: chiến ý dâng cao, mỗi lần bị tấn công tự tăng % Tốc Độ bản thân." }
    },
    "Valerie": {
        thuong:  { name: "Phong Tiễn",          icon: "👊", desc: "Đánh thường gây sát thương hệ Phong lên 1 kẻ địch." },
        kynang:  { name: "Vũ Điệu Cuồng Phong",  icon: "🏹", desc: "Bắn loạt tiễn phong ba dữ dội, gây sát thương mạnh vào hàng sau địch." },
        dacbiet: { name: "Ưng Kích Tử Vong",     icon: "💥", desc: "Kỹ năng đặc biệt: gọi ưng thần lao xuống kết liễu kẻ yếu nhất, sát thương cực lớn." },
        bidong:  { name: "Mắt Ưng Hội Tụ",       icon: "🎯", desc: "Bị động: tăng mạnh % Tỷ lệ bạo kích cho bản thân trong suốt trận đấu." }
    },
    "Freya": {
        thuong:  { name: "Quang Chưởng",        icon: "👊", desc: "Đánh thường gây sát thương hệ Quang lên 1 kẻ địch." },
        kynang:  { name: "Ánh Sáng Phục Sinh",  icon: "✨", desc: "Tỏa ra hào quang thần thánh, gây sát thương diện rộng lên toàn bộ phe địch." },
        dacbiet: { name: "Phước Lành Valhalla",  icon: "💥", desc: "Kỹ năng đặc biệt: ban phước lành tối cao, gây sát thương địch và buff % Tấn Công cho toàn đội." },
        bidong:  { name: "Tình Yêu Của Thần",    icon: "🎯", desc: "Bị động: gia trì phúc lành giúp tăng vĩnh viễn % HP tối đa cho TOÀN ĐỘI khi vào trận." }
    },
    "Kratos": {
        thuong:  { name: "Song Đao Hỗn Loạn",    icon: "👊", desc: "Đánh thường gây sát thương hệ Hỏa lên 1 kẻ địch." },
        kynang:  { name: "Lửa Địa Ngục",         icon: "🔥", desc: "Vung xích đao rực lửa chém quét, gây sát thương lên hàng trước địch." },
        dacbiet: { name: "Thần Chiến Tranh",     icon: "💥", desc: "Kỹ năng đặc biệt: nộ khí cuồng bạo hủy diệt vạn vật, sát thương diện rộng cực lớn và tự tăng công." },
        bidong:  { name: "Cơn Thịnh Nộ Sparta",  icon: "🎯", desc: "Bị động: càng nhận sát thương càng điên cuồng, tăng mạnh % Sát thương chí mạng." }
    },
    "Naruto": {
        thuong:  { name: "Phân Thân Chi Thuật",   icon: "👊", desc: "Đánh thường gây sát thương hệ Phong lên 1 kẻ địch." },
        kynang:  { name: "Loa Toàn Hoàn",        icon: "🌀", desc: "Tích tụ luồng phong ấn hình cầu, đánh xuyên thẳng hai mục tiêu liên tiếp." },
        dacbiet: { name: "Đại Ngọc Rasengan",    icon: "💥", desc: "Kỹ năng đặc biệt: dồn toàn bộ chakra tạo đại cầu phong ba, sát thương cực đại lên mục tiêu." },
        bidong:  { name: "Ý Chí Hỏa Ảnh",       icon: "🎯", desc: "Bị động: tự động phục hồi một lượng nhỏ % HP khi lượng máu phe ta xuống thấp." }
    }
};
// MẪU KỸ NĂNG DÙNG CHUNG CHO TƯỚNG CHƯA ĐƯỢC KHAI BÁO RIÊNG TRONG SKILL_DB
const DEFAULT_SKILL_TEMPLATE = {
    thuong:  { name: "Đánh Thường",        icon: "👊", desc: "Gây sát thương vật lý cơ bản lên 1 kẻ địch." },
    kynang:  { name: "Kỹ Năng",            icon: "✨", desc: "Chiêu thức chủ động gây sát thương hoặc hiệu ứng lên kẻ địch." },
    dacbiet: { name: "Kỹ Năng Đặc Biệt",   icon: "💥", desc: "Chiêu thức mạnh nhất, cần tích lũy năng lượng để kích hoạt." },
    bidong:  { name: "Kỹ Năng Bị Động",    icon: "🎯", desc: "Hiệu ứng bị động luôn tồn tại khi tướng ra trận." }
};
// THỨ TỰ & NHÃN HIỂN THỊ CỦA 4 LOẠI KỸ NĂNG TRÊN GIAO DIỆN
const SKILL_TYPES = [
    { key: "thuong",  label: "Đánh Thường" },
    { key: "kynang",  label: "Kỹ Năng" },
    { key: "dacbiet", label: "Kỹ Năng Đặc Biệt" },
    { key: "bidong",  label: "Kỹ Năng Bị Động" }
];
function getHeroSkillTemplate(heroName) { return SKILL_DB[heroName] || DEFAULT_SKILL_TEMPLATE; }
