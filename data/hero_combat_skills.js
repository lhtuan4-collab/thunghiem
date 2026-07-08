// ================================================================================= //
// HERO_COMBAT_SKILLS: DỮ LIỆU CHỨC NĂNG THỰC SỰ DÙNG TRONG MÔ PHỎNG CHIẾN ĐẤU          //
// (khác với SKILL_DB ở data/skill_db.js chỉ là tên/icon/mô tả để hiển thị UI)           //
// Mỗi mục gồm:                                                                          //
//   thuong / kynang / dacbiet: { multiplier: hệ số % Tấn Công dùng làm sát thương,        //
//        targeting: 'default' (mục tiêu ưu tiên theo trận hình, hàng trên trước) |        //
//                   'lowestHp' (mục tiêu địch đang thấp máu nhất) |                       //
//                   'all' (toàn bộ địch còn sống, lan diện rộng) |                        //
//                   'pierce2' (xuyên thẳng trúng 2 mục tiêu liên tiếp theo trận hình) }    //
//   passiveOnBattleStart(unit, allyUnits): hiệu ứng bị động áp dụng 1 LẦN DUY NHẤT lúc    //
//        vừa vào trận (ví dụ buff chỉ số toàn team ngay khi ra trận).                      //
//   onDamagedTaken(unit): hiệu ứng bị động kích hoạt MỖI KHI đơn vị này bị đánh trúng.      //
//   onOwnTurnEnd(unit): hiệu ứng bị động kích hoạt sau MỖI LƯỢT đơn vị này vừa ra đòn.       //
// MUỐN THÊM TƯỚNG MỚI: copy 1 khối bên dưới, đổi multiplier/targeting/hiệu ứng theo ý muốn.  //
// TƯỚNG CHƯA KHAI BÁO Ở ĐÂY SẼ DÙNG DEFAULT_HERO_COMBAT_SKILL (áp dụng cho Arthur/Merlin/Luffy). //
// ================================================================================= //
const HERO_COMBAT_SKILLS = {
    "Thỏ Ngọc": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Húc Ngọc: 100% Tấn Công lên 1 mục tiêu theo trận hình
        kynang:  { multiplier: 2.5, targeting: 'lowestHp' },  // Xoáy Băng Ngọc: 250% sát thương lên mục tiêu thấp máu nhất
        dacbiet: { multiplier: 2.0, targeting: 'all' },       // Thịnh Nộ Bạch Thố: 200% sát thương lên TẤT CẢ tướng địch
        // Bị động Thiên Phú Thỏ: ngay khi ra trận, tăng 5% Tấn Công cho TOÀN ĐỘI (chỉ áp dụng nếu Thỏ Ngọc thuộc phe đó)
        passiveOnBattleStart(unit, allyUnits) {
            allyUnits.forEach(u => { u.atk = Math.round(u.atk * 1.05); });
        }
    },
    "Goku": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Đấm Lôi Chấn: 100% Tấn Công lên 1 mục tiêu theo trận hình
        kynang:  { multiplier: 2.2, targeting: 'pierce2' },   // Kamehameha: 220% sát thương, xuyên thẳng trúng 2 mục tiêu liên tiếp
        // Bản Năng Vô Cực: tự buff mạnh ATK/DEF/SPD của Goku (+30%, duy trì hết trận) rồi đánh 150% Tấn Công vào mục tiêu
        dacbiet: { multiplier: 1.5, targeting: 'default', selfBuff: { atk: 0.3, def: 0.3, spd: 0.3 } },
        // Bị động Tinh Thần Chiến Đấu: mỗi lần Goku bị đánh trúng, Tốc Độ tăng thêm 5% (cộng dồn)
        onDamagedTaken(unit) { unit.spd = Math.round(unit.spd * 1.05); }
    },
    "Thetis": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Trượng Thủy Triều: 100% Tấn Công lên 1 mục tiêu theo trận hình
        // Sóng Ngầm Băng Giá: 180% sát thương lên mục tiêu thấp máu nhất, đồng thời giảm 15% Phòng Thủ mục tiêu đó (giảm né tránh)
        kynang:  { multiplier: 1.8, targeting: 'lowestHp', defDownTarget: 0.15 },
        dacbiet: { multiplier: 2.2, targeting: 'all' },       // Đại Hồng Thủy: 220% sát thương lên TẤT CẢ tướng địch
        // Bị động Máu Của Biển Cả: sau MỖI LƯỢT của Thetis, hồi 8% HP tối đa cho chính mình
        onOwnTurnEnd(unit) { unit.curHp = Math.min(unit.maxHp, unit.curHp + Math.round(unit.maxHp * 0.08)); }
    },
// ---- tướng random mới (VÍ DỤ MẪU) ----
"Odin": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Thương Quang Thần: 100% Tấn Công lên 1 mục tiêu theo trận hình
        kynang:  { multiplier: 1.8, targeting: 'all' },       // Mưa Cổ Ngữ: 180% sát thương lên TẤT CẢ kẻ địch
        dacbiet: { multiplier: 3.5, targeting: 'highestAtk' }, // Định Mệnh Gungnir: 350% sát thương vào mục tiêu có ATK cao nhất
        passiveOnBattleStart(unit, allyUnits) {                // Trí Tuệ Tối Cao: Giảm 5% Thủ của toàn bộ phe địch khi vào trận
            // Logic giảm def địch sẽ xử lý trong engine, ở đây buff tạm hoặc giữ khung bộ lọc
        }
    },
    "Athena": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Khiên Kích: 100% Tấn Công lên 1 mục tiêu theo trận hình
        kynang:  { multiplier: 1.5, targeting: 'frontRow' },  // Ánh Sáng Hộ Vệ: 150% sát thương lên hàng trước
        dacbiet: { multiplier: 2.0, targeting: 'default', selfBuff: { def: 0.5 } }, // Thánh Thuẫn Thần Điện: 200% sát thương, tự tăng 50% Phòng Thủ
        onDamagedTaken(unit) {                                 // Khiên Thần Aegis: Mỗi lần bị đánh, tự hồi 2% HP tối đa
            unit.hp = Math.round(unit.hp + (unit.maxHp * 0.02 || 0)); 
        }
    },
    "Medusa": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Rắn Độc Cắn: 100% Tấn Công lên 1 mục tiêu theo trận hình
        kynang:  { multiplier: 2.0, targeting: 'backRow' },   // Nguyền Rủa: 200% sát thương lên hàng sau của địch
        dacbiet: { multiplier: 1.8, targeting: 'all', debuff: { spd: -0.2 } }, // Ánh Nhìn Hóa Đá: 180% sát thương lên TOÀN ĐỘI địch, giảm 20% Tốc Độ chúng
        passiveOnBattleStart(unit, allyUnits) {}
    },
    "Zoro": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Nhất Kiếm Phái: 100% Tấn Công lên 1 mục tiêu theo trận hình
        kynang:  { multiplier: 2.4, targeting: 'pierce2' },   // Tam Thiên Thế Giới: 240% sát thương xuyên 2 mục tiêu liên tiếp
        dacbiet: { multiplier: 3.2, targeting: 'lowestHp' },  // Quỷ Kiếm Ashura: 320% sát thương lên mục tiêu thấp máu nhất
        onDamagedTaken(unit) {                                 // Ý Chí Kiếm Sĩ: Mỗi khi nhận sát thương, tăng 5% Sát thương chí mạng
            unit.critDame = Math.round(unit.critDame + 5);
        }
    },
    "Ace": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Súng Lửa: 100% Tấn Công lên 1 mục tiêu theo trận hình
        kynang:  { multiplier: 2.1, targeting: 'frontRow' },  // Hỏa Quyền: 210% sát thương lên toàn bộ hàng trước địch
        dacbiet: { multiplier: 2.6, targeting: 'all' },       // Đại Viêm Giới Đế: 260% sát thương lên TẤT CẢ tướng địch
        passiveOnBattleStart(unit, allyUnits) {}
    },
    "Robin Hood": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Tiễn Kích: 100% Tấn Công lên 1 mục tiêu theo trận hình
        kynang:  { multiplier: 2.3, targeting: 'backRow' },   // Mưa Tên Rừng Già: 230% sát thương lên hàng sau của địch
        dacbiet: { multiplier: 3.0, targeting: 'highestAtk' }, // Mũi Tên Định Mệnh: 300% sát thương vào kẻ địch có ATK cao nhất
        passiveOnBattleStart(unit, allyUnits) {                // Biệt Kích Rừng Sâu: Tăng 8% Tốc Độ cho bản thân khi vào trận
            unit.spd = Math.round(unit.spd * 1.08);
        }
    },
    "Thor": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Búa Gõ: 100% Tấn Công lên 1 mục tiêu theo trận hình
        kynang:  { multiplier: 2.2, targeting: 'default' },   // Lôi Phạt: 220% sát thương lên 1 mục tiêu kèm giảm 10% Giáp địch
        dacbiet: { multiplier: 2.0, targeting: 'frontRow', selfBuff: { atk: 0.2 } }, // Sấm Sét Mjolnir: 200% sát thương hàng trước, tăng 20% ATK
        onDamagedTaken(unit) {                                 // Điên Cuồng Chiến Đấu: Bị đánh giúp tăng 3% Tấn Công (cộng dồn)
            unit.atk = Math.round(unit.atk * 1.03);
        }
    },
    "Anubis": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Trảo Hồn: 100% Tấn Công lên 1 mục tiêu
        kynang:  { multiplier: 2.5, targeting: 'lowestHp' },  // Phán Quyết Tử Thần: 250% sát thương vào mục tiêu thấp máu nhất
        dacbiet: { multiplier: 3.4, targeting: 'backRow' },   // Lời Nguyền Lăng Mộ: 340% sát thương lên 1 kẻ địch ở hàng sau
        passiveOnBattleStart(unit, allyUnits) {}
    },
    "Saitama": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Đấm Thường: 100% Tấn Công lên 1 mục tiêu
        kynang:  { multiplier: 1.2, targeting: 'default' },   // Đấm Thường Liên Tục: 120% sát thương lên 1 mục tiêu
        dacbiet: { multiplier: 5.0, targeting: 'default' },   // Đấm Nghiêm Túc: 500% sát thương lên duy nhất 1 mục tiêu
        passiveOnBattleStart(unit, allyUnits) {}
    },
    "Chopper": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Cào Cấu: 100% Tấn Công lên 1 mục tiêu
        kynang:  { multiplier: 1.5, targeting: 'lowestHp' },  // Thuốc Cấp Cứu: Gây 150% sát thương (hoặc cơ chế hồi máu mục tiêu thấp máu)
        dacbiet: { multiplier: 1.8, targeting: 'all' },       // Rumble Ball: Biến hình khổng lồ đánh 180% sát thương toàn đội địch
        passiveOnBattleStart(unit, allyUnits) {}
    },
    "Zeus": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Chớp Sét: 100% Tấn Công lên 1 mục tiêu theo trận hình
        kynang:  { multiplier: 2.2, targeting: 'pierce2' },   // Lôi Tiễn: 220% sát thương xuyên thẳng 2 mục tiêu liên tiếp
        dacbiet: { multiplier: 2.5, targeting: 'all' },       // Phán Quyết Thiên Đình: 250% sát thương lên TẤT CẢ tướng địch
        passiveOnBattleStart(unit, allyUnits) {                // Uy Nghiêm Của Thần: Tăng 5% Sát thương chí mạng cho TOÀN ĐỘI
            allyUnits.forEach(u => { u.critDame = Math.round(u.critDame + 5); });
        }
    },
    "Poseidon": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Thủy Kích: 100% Tấn Công lên 1 mục tiêu
        kynang:  { multiplier: 2.0, targeting: 'frontRow' },  // Sóng Thần: 200% sát thương lên toàn bộ hàng trước của địch
        dacbiet: { multiplier: 2.2, targeting: 'all', debuff: { spd: -0.15 } }, // Nộ Hải Cuồng Lưu: 220% sát thương TOÀN ĐỘI địch, giảm 15% Tốc Độ chúng
        passiveOnBattleStart(unit, allyUnits) {}
    },
    "Hades": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Minh Kiếm: 100% Tấn Công lên 1 mục tiêu
        kynang:  { multiplier: 2.6, targeting: 'lowestHp' },  // Chiêu Hồn: 260% sát thương lên mục tiêu thấp máu nhất
        dacbiet: { multiplier: 3.5, targeting: 'highestAtk' }, // Tiếng Gọi Minh Phủ: 350% sát thương lên mục tiêu có ATK cao nhất kẻ địch
        onDamagedTaken(unit) {                                 // Khiên Oán Hồn: Bị đánh tăng 4% Phòng Thủ (cộng dồn)
            unit.def = Math.round(unit.def * 1.04);
        }
    },
    "Hercules": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Quyền Lực Sĩ: 100% Tấn Công lên 1 mục tiêu
        kynang:  { multiplier: 1.8, targeting: 'frontRow' },  // Chấn Động Mặt Đất: 180% sát thương lên hàng trước địch
        dacbiet: { multiplier: 2.0, targeting: 'default', selfBuff: { atk: 0.2, def: 0.2 } }, // Sức Mạnh Thần Lực: 200% sát thương, tự tăng 20% ATK và DEF
        passiveOnBattleStart(unit, allyUnits) {}
    },
    "Achilles": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Giáo Kích: 100% Tấn Công lên 1 mục tiêu
        kynang:  { multiplier: 2.3, targeting: 'default' },   // Chiến Thần Xung Phong: 230% sát thương lên 1 mục tiêu
        dacbiet: { multiplier: 2.8, targeting: 'highestAtk' }, // Điểm Yếu Gót Chân: 280% sát thương nhắm thẳng chủ lực ATK địch
        onDamagedTaken(unit) {                                 // Thân Thể Bất Tử: Mỗi lần nhận sát thương, tăng 3% Tốc Độ
            unit.spd = Math.round(unit.spd * 1.03);
        }
    },
    "Valerie": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Phong Tiễn: 100% Tấn Công lên 1 mục tiêu
        kynang:  { multiplier: 2.1, targeting: 'backRow' },   // Vũ Điệu Cuồng Phong: 210% sát thương thẳng vào hàng sau địch
        dacbiet: { multiplier: 3.2, targeting: 'lowestHp' },  // Ưng Kích Tử Vong: 320% sát thương lên kẻ địch ít HP nhất
        passiveOnBattleStart(unit, allyUnits) {}
    },
    "Freya": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Quang Chưởng: 100% Tấn Công lên 1 mục tiêu
        kynang:  { multiplier: 1.6, targeting: 'all' },       // Ánh Sáng Phục Sinh: 160% sát thương lên địch (hoặc buff máu phe ta)
        dacbiet: { multiplier: 1.5, targeting: 'all' },       // Phước Lành Valhalla: 150% sát thương, tăng 5% ATK cho toàn đội duy trì 2 lượt
        passiveOnBattleStart(unit, allyUnits) {                // Tình Yêu Của Thần: Tăng thêm 5% HP tối đa cho TOÀN ĐỘI khi vào trận
             // Logic tăng maxHp sẽ được xử lý khi khởi tạo trận đấu
        }
    },
    "Kratos": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Song Đao Hỗn Loạn: 100% Tấn Công lên 1 mục tiêu
        kynang:  { multiplier: 2.2, targeting: 'frontRow' },  // Lửa Địa Ngục: 220% sát thương lên hàng trước địch
        dacbiet: { multiplier: 2.5, targeting: 'all', selfBuff: { atk: 0.4 } }, // Thần Chiến Tranh Trỗi Dậy: 250% sát thương toàn bộ địch, buff 40% ATK bản thân
        onDamagedTaken(unit) {                                 // Cơn Thịnh Nộ Sparta: Bị đánh tăng 5% Sát thương chí mạng
            unit.critDame = Math.round(unit.critDame + 5);
        }
    },
    "Naruto": {
        thuong:  { multiplier: 1.0, targeting: 'default' },   // Phân Thân Chi Thuật: 100% Tấn Công lên 1 mục tiêu
        kynang:  { multiplier: 2.0, targeting: 'pierce2' },   // Loa Toàn Hoàn (Rasengan): 200% sát thương xuyên 2 mục tiêu liên tiếp
        dacbiet: { multiplier: 2.5, targeting: 'default' },   // Đại Ngọc Rasengan: 250% sát thương lên 1 mục tiêu trận hình
        passiveOnBattleStart(unit, allyUnits) {}
    }
};
// MẪU CHIẾN ĐẤU MẶC ĐỊNH CHO TƯỚNG CHƯA ĐƯỢC KHAI BÁO RIÊNG TRONG HERO_COMBAT_SKILLS
// (VD: Arthur, Merlin, Luffy) - chỉ có sát thương cơ bản theo tỉ lệ %, không có hiệu ứng đặc biệt.
const DEFAULT_HERO_COMBAT_SKILL = {
    thuong:  { multiplier: 1.0, targeting: 'default' },
    kynang:  { multiplier: 1.5, targeting: 'lowestHp' },
    dacbiet: { multiplier: 1.8, targeting: 'all' }
};
function getHeroCombatSkill(heroName) { return HERO_COMBAT_SKILLS[heroName] || DEFAULT_HERO_COMBAT_SKILL; }
