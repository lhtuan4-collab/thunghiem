// ================================================================================= //
// CƠ SỞ DỮ LIỆU RÀNG BUỘC / DUYÊN PHẬN (BOND_DB)                                       //
// Nếu người chơi SỞ HỮU CẢ 2 TƯỚNG trong 1 cặp thì cả 2 được cộng thêm % chỉ số (bonus). //
// bonus tính theo % (0.1 = +10%) áp dụng lên atk/hp/def/spd sau khi tính trang bị.       //
// THÊM CẶP RÀNG BUỘC MỚI: copy 1 dòng bên dưới và đổi heroA/heroB/name/desc/bonus.        //
// LƯU Ý: isHeroOwned() bên dưới dùng biến toàn cục `myHeroes` (khai báo ở file logic       //
// chính) - hàm chỉ CHẠY khi được GỌI trong lúc chơi nên không yêu cầu thứ tự nạp đặc biệt. //
// ================================================================================= //
const BOND_DB = [
    { heroA: "Thỏ Ngọc", heroB: "Thetis", name: "Băng Ngọc Tương Hòa", desc: "Thỏ Ngọc và Thetis vốn là đôi bạn tri kỷ, cùng ra trận sẽ hợp lực tăng sức mạnh.", bonus: { atk: 0.08, hp: 0.08, def: 0.05, spd: 0.05 } },
    { heroA: "Arthur", heroB: "Merlin", name: "Vua & Đại Pháp Sư", desc: "Arthur và Merlin là cặp bài trùng huyền thoại, hỗ trợ nhau cả công lẫn thủ.", bonus: { atk: 0.1, def: 0.1 } },
    { heroA: "Goku", heroB: "Luffy", name: "Chiến Hữu Nhiệt Huyết", desc: "Hai chiến binh máu lửa khi đứng cùng chiến tuyến sẽ càng thêm mạnh mẽ.", bonus: { atk: 0.12, spd: 0.08 } },
{ heroA: "Odin", heroB: "Zeus", name: "Đỉnh Cao Thần Lực", desc: "Hai vị vua tối cao của thần thoại phương Tây cùng xuất trận, hiệu triệu sức mạnh hủy diệt.", bonus: { atk: 0.12, spd: 0.08 } },
    { heroA: "Athena", heroB: "Hercules", name: "Thần Điện Hộ Vệ", desc: "Sự kết hợp giữa trí tuệ kiên định và sức mạnh á thần tạo nên bức tường thành bất bại.", bonus: { hp: 0.12, def: 0.12 } },
    { heroA: "Poseidon", heroB: "Hades", name: "Minh Hải Song Hành", desc: "Chúa tể biển cả và bá chủ minh phủ bắt tay, khiến ranh giới sống chết đảo lộn.", bonus: { atk: 0.10, hp: 0.10 } },
    { heroA: "Zoro", heroB: "Ace", name: "Hải Trình Định Mệnh", desc: "Những người con kiêu hãnh của đại dương khi đứng cạnh nhau sẽ thắp lên ý chí rực cháy.", bonus: { atk: 0.12, spd: 0.06 } },
    { heroA: "Robin Hood", heroB: "Valerie", name: "Tiễn Thần Tốc Độ", desc: "Hai xạ thủ thiên tài phối hợp bọc lót, tạo nên cơn mưa tên không thể né tránh.", bonus: { atk: 0.08, spd: 0.12 } },
    { heroA: "Thor", heroB: "Kratos", name: "Cuồng Nộ Chiến Thần", desc: "Cơn thịnh nộ của lôi thần và thần chiến tranh giao thoa, nghiền nát mọi tuyến phòng thủ.", bonus: { atk: 0.15, def: 0.05 } },
    { heroA: "Anubis", heroB: "Medusa", name: "Khương Tửu Vong Hồn", desc: "Ánh nhìn hóa đá kết hợp cùng phán quyết lăng mộ, tiễn đưa kẻ địch vào cõi vĩnh hằng.", bonus: { atk: 0.10, def: 0.08 } },
    { heroA: "Naruto", heroB: "Saitama", name: "Anh Hùng Phá Cách", desc: "Hai thực thể sở hữu nguồn năng lượng vô hạn, hỗ trợ nhau phá vỡ mọi giới hạn.", bonus: { atk: 0.08, hp: 0.10, spd: 0.05 } },
    { heroA: "Freya", heroB: "Chopper", name: "Thần Y Phúc Lành", desc: "Phước lành phương Bắc hòa cùng y thuật tinh thông, hồi sinh sinh mệnh cho toàn đội ngũ.", bonus: { hp: 0.15, def: 0.08 } },
    { heroA: "Achilles", heroB: "Athena", name: "Chiến Ý Bất Diệt", desc: "Chiến binh mình đồng da sắt nhận được sự bảo hộ từ nữ thần, trở nên bất khả chiến bại.", bonus: { hp: 0.10, def: 0.10, spd: 0.05 } }
];
// TRẢ VỀ TẤT CẢ CẶP RÀNG BUỘC LIÊN QUAN TỚI 1 TƯỚNG
function getHeroBonds(heroName) { return BOND_DB.filter(b => b.heroA === heroName || b.heroB === heroName); }
// TRẢ VỀ TÊN TƯỚNG "ĐỐI TÁC" TRONG 1 CẶP RÀNG BUỘC
function getBondPartnerName(bond, heroName) { return bond.heroA === heroName ? bond.heroB : bond.heroA; }
// KIỂM TRA XEM 1 TƯỚNG (THEO TÊN) CÓ ĐANG ĐƯỢC SỞ HỮU KHÔNG
function isHeroOwned(heroName) { return myHeroes.some(h => h.name === heroName); }
