// ================================================================================= //
// CƠ SỞ DỮ LIỆU GAME PHỤC VỤ QUAY GACHA VÀ PHẦN THƯỞNG BANNER
// critDame = % SÁT THƯƠNG CHÍ MẠNG: khi ra đòn chí mạng, sát thương nhân thêm (critDame/100) lần. VD 150 nghĩa là x1.5 sát thương.
// hitRate  = % ĐÁNH TRÚNG: xác suất đòn đánh/kỹ năng trúng mục tiêu, nếu trượt thì không gây sát thương ("Trượt!").
// Nếu 1 tướng không khai báo critDame/hitRate riêng thì dùng DEFAULT_CRIT_DAME / DEFAULT_HIT_RATE ở dưới.
// THÊM TƯỚNG MỚI: chỉ cần thêm 1 dòng mới vào HERO_DB với đủ các thuộc tính bên dưới.
// FILE NÀY PHẢI ĐƯỢC NẠP (<script src>) TRƯỚC file logic chính (index.html) VÌ HERO_DB
// LÀ BIẾN TOÀN CỤC ĐƯỢC DÙNG XUYÊN SUỐT GAME.
// ================================================================================= //
const DEFAULT_CRIT_DAME = 150; // mặc định +50% sát thương khi chí mạng
const DEFAULT_HIT_RATE = 90;   // mặc định 90% cơ hội đánh trúng
const HERO_DB = {
    "Thỏ Ngọc": { rarity: "SSR", element: "KIM", job: "CHIẾN SĨ", atk: 120, hp: 1000, def: 60, spd: 115, critDame: 150, hitRate: 92, avatar: "Assets/img/heroes/thongoc/avatar.png", splash: "Assets/img/heroes/thongoc/splash.png" },
    "Thetis": { rarity: "SSR", element: "THỦY", job: "PHÁP SƯ", atk: 150, hp: 850, def: 45, spd: 110, critDame: 145, hitRate: 90, avatar: "Assets/img/heroes/thetis/avatar.png", splash: "Assets/img/heroes/thetis/splash.png" },
    "Arthur": { rarity: "SR", element: "HỎA", job: "KIẾM SĨ", atk: 140, hp: 1100, def: 70, spd: 105, critDame: 150, hitRate: 90,avatar: "Assets/img/heroes/Arthur/avatar.png", splash: "Assets/img/heroes/Arthur/splash.png" },
    "Merlin": { rarity: "SR", element: "PHONG", job: "PHÁP SƯ", atk: 110, hp: 750, def: 40, spd: 112, critDame: 140, hitRate: 93, avatar: "Assets/img/heroes/merlin/avatar.png", splash: "Assets/img/heroes/merlin/splash.png" },
    "Goku": { rarity: "SR", element: "LÔI", job: "ĐẤU SĨ", atk: 170, hp: 950, def: 50, spd: 120, critDame: 160, hitRate: 88, avatar: "Assets/img/heroes/goku/avatar.png", splash: "Assets/img/heroes/goku/splash.png" },
    "Luffy": { rarity: "R", element: "THỦY", job: "DỰ BI", atk: 5, hp: 200, def: 5, spd: 98, critDame: 135, hitRate: 88, avatar: "Assets/img/heroes/luffy/avatar.png", splash: "Assets/img/heroes/luffy/splash.png" },
	"Odin": { rarity: "SSR", element: "QUANG", job: "PHÁP SƯ", atk: 160, hp: 950, def: 55, spd: 118, critDame: 155, hitRate: 94, avatar: "Assets/img/heroes/odin/avatar.png", splash: "Assets/img/heroes/odin/splash.png" },
            "Athena": { rarity: "SSR", element: "KIM", job: "HỘ VỆ", atk: 105, hp: 1300, def: 85, spd: 102, critDame: 140, hitRate: 90, avatar: "Assets/img/heroes/athena/avatar.png", splash: "Assets/img/heroes/athena/splash.png" },
            "Medusa": { rarity: "SSR", element: "ÁM", job: "KHỐNG CHẾ", atk: 135, hp: 900, def: 50, spd: 114, critDame: 150, hitRate: 96, avatar: "Assets/img/heroes/medusa/avatar.png", splash: "Assets/img/heroes/medusa/splash.png" },
            "Zoro": { rarity: "SR", element: "PHONG", job: "KIẾM SĨ", atk: 155, hp: 1000, def: 58, spd: 116, critDame: 165, hitRate: 89, avatar: "Assets/img/heroes/zoro/avatar.png", splash: "Assets/img/heroes/zoro/splash.png" },
            "Ace": { rarity: "SR", element: "HỎA", job: "CHIẾN SĨ", atk: 148, hp: 1050, def: 52, spd: 110, critDame: 150, hitRate: 91, avatar: "Assets/img/heroes/ace/avatar.png", splash: "Assets/img/heroes/ace/splash.png" },
            "Robin Hood": { rarity: "SR", element: "MỘC", job: "XẠ THỦ", atk: 138, hp: 680, def: 42, spd: 122, critDame: 155, hitRate: 95, avatar: "Assets/img/heroes/robinhood/avatar.png", splash: "Assets/img/heroes/robinhood/splash.png" },
            "Thor": { rarity: "SR", element: "LÔI", job: "ĐẤU SĨ", atk: 150, hp: 1150, def: 65, spd: 106, critDame: 145, hitRate: 88, avatar: "Assets/img/heroes/thor/avatar.png", splash: "Assets/img/heroes/thor/splash.png" },
            "Anubis": { rarity: "SR", element: "ÁM", job: "SÁT THỦ", atk: 162, hp: 800, def: 40, spd: 124, critDame: 170, hitRate: 92, avatar: "Assets/img/heroes/anubis/avatar.png", splash: "Assets/img/heroes/anubis/splash.png" },
            "Saitama": { rarity: "R", element: "THỔ", job: "DỰ BI", atk: 10, hp: 300, def: 15, spd: 100, critDame: 120, hitRate: 85, avatar: "Assets/img/heroes/saitama/avatar.png", splash: "Assets/img/heroes/saitama/splash.png" },
            "Chopper": { rarity: "R", element: "MỘC", job: "DỰ BI", atk: 4, hp: 250, def: 8, spd: 95, critDame: 130, hitRate: 90, avatar: "", splash: "" },
	"Zeus": { rarity: "SSR", element: "LÔI", job: "PHÁP SƯ", atk: 165, hp: 900, def: 48, spd: 116, critDame: 160, hitRate: 94, avatar: "Assets/img/heroes/zeus/avatar.png", splash: "Assets/img/heroes/zeus/splash.png" },
            "Poseidon": { rarity: "SSR", element: "THỦY", job: "KHỐNG CHẾ", atk: 130, hp: 1100, def: 65, spd: 112, critDame: 145, hitRate: 95, avatar: "Assets/img/heroes/poseidon/avatar.png", splash: "Assets/img/heroes/poseidon/splash.png" },
            "Hades": { rarity: "SSR", element: "ÁM", job: "SÁT THỦ", atk: 175, hp: 850, def: 40, spd: 121, critDame: 165, hitRate: 91, avatar: "Assets/img/heroes/hades/avatar.png", splash: "Assets/img/heroes/hades/splash.png" },
            "Hercules": { rarity: "SSR", element: "THỔ", job: "ĐẤU SĨ", atk: 145, hp: 1250, def: 75, spd: 104, critDame: 150, hitRate: 88, avatar: "Assets/img/heroes/hercules/avatar.png", splash: "Assets/img/heroes/hercules/splash.png" },
            "Achilles": { rarity: "SR", element: "KIM", job: "CHIẾN SĨ", atk: 138, hp: 1050, def: 62, spd: 111, critDame: 155, hitRate: 90, avatar: "Assets/img/heroes/achilles/avatar.png", splash: "Assets/img/heroes/achilles/splash.png" },
            "Valerie": { rarity: "SR", element: "PHONG", job: "XẠ THỦ", atk: 142, hp: 800, def: 38, spd: 120, critDame: 160, hitRate: 96, avatar: "Assets/img/heroes/valerie/avatar.png", splash: "Assets/img/heroes/valerie/splash.png" },
            "Freya": { rarity: "SR", element: "QUANG", job: "HỖ TRỢ", atk: 100, hp: 980, def: 55, spd: 115, critDame: 140, hitRate: 93, avatar: "Assets/img/heroes/freya/avatar.png", splash: "Assets/img/heroes/freya/splash.png" },
            "Kratos": { rarity: "SR", element: "HỎA", job: "CHIẾN SĨ", atk: 150, hp: 1000, def: 50, spd: 108, critDame: 150, hitRate: 89, avatar: "Assets/img/heroes/kratos/avatar.png", splash: "Assets/img/heroes/kratos/splash.png" },
            "Naruto": { rarity: "R", element: "PHONG", job: "DỰ BI", atk: 8, hp: 220, def: 6, spd: 102, critDame: 140, hitRate: 87, avatar: "Assets/img/heroes/naruto/avatar.png", splash: "Assets/img/heroes/naruto/splash.png" }
};
