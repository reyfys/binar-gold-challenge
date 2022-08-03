import whyIcon1 from "../asset/icon_complete.png";
import whyIcon2 from "../asset/icon_price.png";
import whyIcon3 from "../asset/icon_24hrs.png";
import whyIcon4 from "../asset/icon_professional.png";
import profile1 from "../asset/profile1.png";
import profile2 from "../asset/profile2.png";
import profile3 from "../asset/profile3.png";
import rate from "../asset/Rate.png";

const strList = [
  "Sewa Mobil Dengan Supir di Bali 12 Jam",
  "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  "Sewa Mobil Jangka Panjang Bulanan",
  "Gratis Antar - Jemput Mobil di Bandara",
  "Layanan Airport Transfer / Drop In Out",
];

const CardWhyUs = [
  {
    icon: whyIcon1,
    titleWhy: "Mobil Lengkap",
    detailWhy:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },

  {
    icon: whyIcon2,
    titleWhy: "Harga Murah",
    detailWhy:
      "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },

  {
    icon: whyIcon3,
    titleWhy: "Layanan 24 Jam",
    detailWhy:
      "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },

  {
    icon: whyIcon4,
    titleWhy: "Sopir Profesional",
    detailWhy:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

const CardTestimonial = [
  {
    photo: profile1,
    rating: rate,
    detailTesti:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    name: "John Dee 32, Bromo",
  },
  {
    photo: profile2,
    rating: rate,
    detailTesti:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    name: "John Dee 32, Bromo",
  },
  {
    photo: profile3,
    rating: rate,
    detailTesti:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    name: "John Dee 32, Bromo",
  },
];

const DetailInclude = [
  "Apa saja yang termasuk dalam paket misal durasi max 12 jam",
  "Sudah termasuk bensin selama 12 jam",
  "Sudah termasuk Tiket Wisata",
  "Sudah termasuk pajak",
];

const DetailExclude = [
  "Tidak termasuk biaya makan sopir Rp 75.000/hari",
  "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
  "Tidak termasuk akomodasi penginapan",
];

const navList = [
  {
    name: "Our Services",
    href: "#OurServices",
  },
  { name: "Why Us", href: "#WhyUs" },
  { name: "Testimonial", href: "#Testimonial" },
  { name: "FAQ", href: "#FAQ" },
];

export {
  strList,
  CardWhyUs,
  CardTestimonial,
  DetailInclude,
  DetailExclude,
  navList,
};
