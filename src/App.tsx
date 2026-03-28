import { motion, useScroll, useTransform } from "motion/react";
import { 
  Sparkles, 
  CheckCircle2, 
  Brain, 
  Heart, 
  Users, 
  BookOpen, 
  ArrowRight, 
  Mail, 
  Share2, 
  Facebook,
  Youtube,
  Music,
  ShieldCheck, 
  Leaf,
  Menu,
  X,
  Calendar,
  Clock,
  Video,
  MapPin,
  Phone,
  Target,
  GraduationCap,
  Briefcase,
  Sunrise,
  Quote
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import coachPortrait from "./coach-portrait.png";
import logoQma from "./logo-qma.png";
import tiktokLogo from "./tiktok-logo.png";
import innerChildImg from "./inner-child.jpg";
import giaiPhongImg from "./giai-phong.jpg";
import kienTaoImg from "./kien-tao.jpg";
import minhAnhImg from "./minh-anh.jpg";
import dinhTraImg from "./dinh-tra.png";
import lanVuImg from "./lan-vu.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src={logoQma} 
            alt="QMA Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-headline font-light text-primary/80">
          <a href="#gioi-thieu" className="hover:text-secondary transition-colors">Giới thiệu</a>
          <a href="#doi-tuong" className="hover:text-secondary transition-colors">Đối tượng</a>
          <a href="#loi-ich" className="hover:text-secondary transition-colors">Lợi ích</a>
          <a href="#coach" className="hover:text-secondary transition-colors">Master Coach</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#dang-ky" className="hidden sm:block bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg active:scale-95">
            Đăng ký miễn phí
          </a>
          <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-surface shadow-xl p-6 flex flex-col gap-4 font-headline"
        >
          <a href="#gioi-thieu" onClick={() => setIsMobileMenuOpen(false)}>Giới thiệu</a>
          <a href="#doi-tuong" onClick={() => setIsMobileMenuOpen(false)}>Đối tượng</a>
          <a href="#loi-ich" onClick={() => setIsMobileMenuOpen(false)}>Lợi ích</a>
          <a href="#coach" onClick={() => setIsMobileMenuOpen(false)}>Master Coach</a>
          <a href="#dang-ky" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-on-primary py-3 rounded-full text-center">Đăng ký ngay</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden" id="gioi-thieu">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px]" />
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-tertiary/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-medium tracking-wide">
            <Sparkles size={16} className="mr-2" />
            Workshop Online Miễn Phí
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] md:leading-[1.1] font-bold tracking-tight max-w-5xl">
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="block text-primary mb-1 md:mb-2"
            >
              Yêu Lại <span className="italic font-light text-primary-container">Chính Mình</span>
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="block bg-gradient-to-r from-primary via-primary-container to-tertiary bg-clip-text text-transparent pb-2 md:pb-4 drop-shadow-sm"
            >
              Kết Nối Bản Thể <span className="sm:whitespace-nowrap">Cảm Xúc</span>
            </motion.span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Làm bạn với chính mình: Chìa khóa vàng để gỡ rối nội tâm và kiến tạo tương lai phúc lạc.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
            <div className="flex items-center gap-3 text-primary">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs opacity-60 uppercase font-bold tracking-wider">Thời gian</p>
                <p className="font-semibold">19:30 - 22:30</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs opacity-60 uppercase font-bold tracking-wider">Ngày diễn ra</p>
                <p className="font-semibold">09, 10 & 11/04/2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Video size={20} />
              </div>
              <div>
                <p className="text-xs opacity-60 uppercase font-bold tracking-wider">Hình thức</p>
                <p className="font-semibold">Online qua Zoom</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-secondary">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs opacity-60 uppercase font-bold tracking-wider">Học phí</p>
                <p className="font-bold text-lg">MIỄN PHÍ</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#dang-ky" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all inline-block">
              Đăng Ký Tham Gia Ngay
            </a>
            <a href="#lo-trinh" className="border border-outline-variant text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-surface-container-low transition-all inline-block">
              Xem Chi Tiết Lộ Trình
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden ethereal-glow">
            <motion.img 
              style={{ y }}
              src={coachPortrait} 
              alt="Master Coach Đặng Thủy" 
              className="w-full h-full object-cover object-top scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[240px]">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="text-secondary" fill="currentColor" />
              <span className="font-bold text-primary">Master Coach Đặng Thủy</span>
            </div>
            <p className="text-sm text-on-surface-variant italic">"Mọi sự chữa lành đều bắt đầu từ việc chấp nhận chính mình."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SelfConnectionCheck = () => {
  const items = [
    "Bạn cảm thấy mệt mỏi, kiệt sức với cuộc sống hiện tại?",
    "Bạn luôn sống vì người khác mà quên mất bản thân?",
    "Bạn mang trong mình những tổn thương chưa được chữa lành?",
    "Bạn cảm thấy lạc lõng, không biết mình thực sự muốn gì?"
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-secondary/10 blur-[80px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary font-headline uppercase tracking-[0.3em] text-sm mb-4">Bạn có đang</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary leading-tight">
              Mất Kết Nối Với <span className="text-secondary italic">Chính Mình?</span>
            </h2>
            <p className="mt-8 text-lg text-on-surface-variant leading-relaxed max-w-lg">
              Đôi khi chúng ta mải mê chạy theo những kỳ vọng bên ngoài mà quên mất tiếng nói thầm lặng bên trong tâm hồn. Hãy dừng lại một chút để lắng nghe...
            </p>
          </motion.div>

          <div className="space-y-6">
            {items.map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="group flex items-center gap-6 p-6 rounded-2xl bg-surface-container-low border border-primary/5 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xl shrink-0 group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <p className="text-lg text-primary/80 font-medium leading-snug">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TargetAudience = () => {
  const targets = [
    { icon: <Target />, title: "Cá nhân", desc: "Muốn chữa lành nỗi đau quá khứ, gỡ bỏ mắc kẹt nội tâm, giải phóng tiềm năng." },
    { icon: <Users />, title: "Bậc phụ huynh", desc: "Muốn thấu hiểu chính mình, kết nối với con cái và nuôi dưỡng nội tâm con." },
    { icon: <GraduationCap />, title: "Chuyên gia", desc: "Nhà tâm lý, Coach, Healer muốn học hỏi từ Bậc Thầy Chữa Lành hàng đầu." },
    { icon: <Briefcase />, title: "Lãnh đạo & HR", desc: "Muốn thấu hiểu sâu sắc về chất lượng nhân lực và cải thiện sức mạnh tổ chức." },
  ];

  return (
    <section className="py-24 bg-white" id="doi-tuong">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-primary font-bold mb-4">Chương trình này dành cho ai?</h2>
          <p className="text-on-surface-variant max-w-4xl mx-auto">Tất cả đều bắt nguồn từ tâm thức và bạn cần được chữa lành để kiến tạo cuộc đời hạnh phúc.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targets.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2rem] border border-primary/5 hover:border-primary/20 hover:bg-surface-container-low transition-all duration-500"
            >
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const items = [
    { icon: <Brain />, title: "Thấu hiểu bản thân", desc: "Quay trở lại kết nối với chính mình, khám phá lại những giá trị sâu sắc trong cuộc sống." },
    { icon: <Leaf />, title: "Chữa lành tổn thương", desc: "Xoa dịu những vết thương quá khứ và giải phóng những gánh nặng cảm xúc bấy lâu." },
    { icon: <Heart />, title: "Làm chủ chính mình", desc: "Học cách tự yêu thương và chấp nhận bản thân một cách trọn vẹn nhất." },
    { icon: <Sparkles />, title: "Kiến tạo hạnh phúc", desc: "Sống đời Phúc Lạc, thịnh vượng viên mãn trong mọi khía cạnh cuộc sống." },
  ];

  return (
    <section className="py-24 bg-surface-container-low" id="loi-ich">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl text-primary font-bold mb-6">Lợi ích của khóa học</h2>
          <p className="text-on-surface-variant text-lg">Hành trình "Yêu Lại Chính Mình" là giải pháp đáng tin cậy để bạn phá vỡ vỏ bọc và chạm đến bình an nội tâm.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-container-lowest p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 shadow-sm"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DifferenceSection = () => {
  const sessions = [
    {
      day: "Buổi 01",
      title: "Thấu hiểu bản thân & Chữa lành đứa trẻ bên trong",
      desc: "Quay trở lại kết nối với chính mình, nhận diện những tổn thương từ thơ ấu và bắt đầu hành trình xoa dịu tâm hồn.",
      icon: <Sunrise size={32} />,
      image: innerChildImg
    },
    {
      day: "Buổi 02",
      title: "Giải phóng và kết nối",
      desc: "Buông bỏ tổn thương, tha thứ cho quá khứ và giải phóng năng lượng bị mắc kẹt. Lắng nghe cơ thể, kết nối với cảm xúc và xây dựng mối quan hệ lành mạnh với bản thân.",
      icon: <Heart size={32} />,
      image: giaiPhongImg
    },
    {
      day: "Buổi 03",
      title: "Kiến tạo cuộc đời Phúc Lạc & Thịnh vượng",
      desc: "Thiết lập tâm thức mới, đón nhận nguồn năng lượng dồi dào từ vũ trụ để kiến tạo một tương lai viên mãn.",
      icon: <Sparkles size={32} />,
      image: kienTaoImg
    }
  ];

  return (
    <section className="py-32 bg-[#fdfaf6] overflow-hidden relative" id="lo-trinh">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest"
          >
            Lộ trình 3 buổi Online
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary tracking-tight">
            Hành Trình <span className="text-secondary italic font-light">Chuyển Hóa</span> Tâm Thức
          </h2>
          <p className="text-on-surface-variant text-lg max-w-4xl mx-auto leading-relaxed">
            3 buổi tối thay đổi hoàn toàn cách bạn nhìn nhận về bản thân và thế giới xung quanh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sessions.map((session, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={session.image} 
                  alt={session.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-sm font-bold">
                  {session.day}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  {session.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6 leading-tight group-hover:text-secondary transition-colors">
                  {session.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed flex-grow">
                  {session.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 relative max-w-5xl mx-auto"
        >
          <div className="absolute -top-12 -left-12 text-primary/5 pointer-events-none">
            <Quote size={180} fill="currentColor" />
          </div>
          
          <div className="relative z-10 bg-white/40 backdrop-blur-xl rounded-[4rem] p-12 md:p-24 shadow-2xl shadow-primary/5 border border-white/60 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-10 p-4 rounded-full bg-secondary/10 text-secondary"
            >
              <Sparkles size={32} />
            </motion.div>

            <p className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-primary leading-[1.4] tracking-tight">
              "Mỗi buổi học là một <span className="text-secondary not-italic font-bold">mảnh ghép</span> quan trọng để bạn tìm lại chính mình. Đừng bỏ lỡ bất kỳ khoảnh khắc nào trong hành trình <span className="underline decoration-secondary/30 underline-offset-8">thiêng liêng</span> này."
            </p>
            
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-primary/10" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary/40 font-bold">Quantum Mind Academy</span>
              <div className="h-[1px] w-12 bg-primary/10" />
            </div>
          </div>

          <div className="absolute -bottom-12 -right-12 text-secondary/5 rotate-180 pointer-events-none">
            <Quote size={180} fill="currentColor" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CoachSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="py-32 bg-surface-container-low overflow-hidden relative" id="coach">
      {/* Atmospheric Background Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.3em]"
          >
            Người đồng hành tâm hồn
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight leading-tight">
            Hành trình cùng <span className="text-secondary italic font-serif">Master Coach</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Người dẫn dắt bạn quay về với bản thể thuần khiết, tháo gỡ những nút thắt tâm linh và kiến tạo cuộc đời phúc lạc.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Portrait with Creative Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl">
                <motion.img 
                  style={{ y }}
                  src={coachPortrait} 
                  alt="Master Coach Đặng Thủy" 
                  className="w-full h-full object-cover object-top scale-125"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-secondary text-on-secondary p-8 rounded-3xl shadow-xl z-30 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-4xl font-bold leading-none">15+</div>
                <div className="text-xs font-bold uppercase tracking-wider mt-1">Năm kinh nghiệm</div>
              </div>
            </motion.div>
            
            {/* Decorative Circle */}
            <div className="absolute -top-12 -left-12 w-64 h-64 border border-primary/10 rounded-full animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </div>

          {/* Right: Content with Editorial Layout */}
          <div className="lg:col-span-7 space-y-10 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-secondary" />
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Master Coach</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary leading-none">
                ĐẶNG THỦY
              </h2>
            </motion.div>

            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-white shadow-sm border border-primary/5 space-y-4">
                <p className="text-xl font-bold text-secondary">Nhà thực hành Khoa học tâm thức chữa lành</p>
                <p className="text-lg text-primary/90 leading-relaxed font-medium italic">
                  Master Chữa Lành Đứa Trẻ Bên Trong - Liên Kết Năng Lượng Gia Tộc - Quy Hồi Tiền Kiếp
                </p>
              </div>

              <ul className="space-y-6">
                {[
                  "Hơn 15 năm giảng dạy và đào tạo về phát triển con người và khoa học tâm thức",
                  "NLP Trainer/Master Coach được chứng nhận quốc tế",
                  "Truyền nhân của các GURU khai sáng và chữa lành hàng đầu Thế giới!"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 text-on-surface-variant text-lg leading-relaxed group"
                  >
                    <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-secondary transition-colors">
                      <CheckCircle2 size={14} className="text-secondary group-hover:text-white" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative pt-10"
            >
              <Quote size={64} className="absolute -top-4 -left-8 text-primary/5" />
              <p className="text-xl text-primary/80 italic leading-relaxed font-light border-l-2 border-secondary/30 pl-8 relative z-10">
                "Người hướng dẫn của bạn đã từng trải qua những tổn thương và tìm thấy con đường quay về với chính mình. Với trái tim chân thành và sự đồng cảm sâu sắc, Coach Đặng Thủy không chỉ là một người hướng dẫn mà còn là người đồng hành, sẻ chia và động viên bạn trong từng bước chân."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RegistrationForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Vui lòng nhập tên và số điện thoại.");
      return;
    }
    setIsSubmitting(true);
    
    // GOOGLE APPS SCRIPT WEB APP URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbybcRUi3xdzP7WSRrp-OEd4ry9HX3DuG2SydF3yeh4UUKQIWHKKZQ5USNiwVn-pk6BG/exec';
    
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('problem', problem);
      
      await fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' });
      
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push({
        'event': 'registration_button_click',
        'button_name': 'Hoàn Tất Đăng Ký'
      });
      
      onSuccess();
    } catch (error) {
      console.error('Error!', error);
      alert("Có lỗi xảy ra, vui lòng thử lại sau.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-24 pb-12 bg-surface-container-low" id="dang-ky">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-surface-container-lowest rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-primary p-12 text-on-primary flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Đăng Ký Tham Dự</h2>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">Đã đến lúc yêu lại chính mình – Phá vỡ vỏ bọc để chạm đến bình an nội tâm!</p>
            <ul className="space-y-4">
              {[
                "Workshop Online 3 buổi qua Zoom",
                "Tư vấn lộ trình chữa lành phù hợp",
                "Giá ưu đãi hôm nay: MIỄN PHÍ"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary-container" fill="currentColor" />
                  {text}
                </li>
              ))}
            </ul>
            <motion.div 
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              className="mt-10 p-8 bg-white/10 rounded-2xl border-2 border-secondary-container/30 shadow-[0_0_30px_rgba(242,125,38,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-secondary-container text-on-secondary-container text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider animate-pulse">
                Duy nhất hôm nay
              </div>
              <p className="text-sm opacity-70 mb-2 font-medium">Giá gốc chương trình:</p>
              <p className="text-xl sm:text-2xl line-through opacity-50 font-bold">1.500.000 VNĐ</p>
              <p className="text-3xl sm:text-4xl text-secondary-container font-black mt-1 drop-shadow-sm">MIỄN PHÍ 100%</p>
              <p className="text-[10px] opacity-50 mt-2 italic">* Số lượng có hạn cho 50 người đăng ký đầu tiên</p>
            </motion.div>
          </div>
          <div className="md:w-1/2 p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary ml-1">Tên của bạn <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                  placeholder="Họ và Tên" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary ml-1">Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                    placeholder="Địa chỉ email" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary ml-1">Số điện thoại <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                    placeholder="090..." 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary ml-1">Vấn đề bạn đang gặp phải</label>
                <textarea 
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none" 
                  placeholder="Chia sẻ câu chuyện của bạn..." 
                  rows={4}
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-lg active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Đang xử lý..." : "Hoàn Tất Đăng Ký (30 Giây)"}
              </button>
              <div className="mt-4 flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-[11px] text-primary/40 font-medium">
                <span className="flex items-center gap-1">🔒 Bảo mật tuyệt đối</span>
                <span className="text-primary/10">•</span>
                <span className="flex items-center gap-1 text-secondary/60">✓ Miễn phí 100%</span>
                <span className="text-primary/10">•</span>
                <span className="flex items-center gap-1">✓ Không ràng buộc</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="w-full pt-12 pb-8 px-6 bg-surface-container-low border-t border-primary/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      <div className="space-y-6">
        <img 
          src={logoQma} 
          alt="QMA Logo" 
          className="h-16 w-auto object-contain"
        />
        <p className="text-sm text-primary/60 leading-relaxed">
          Học viện Trí tuệ Lượng tử QMA - Nơi kết nối và chữa lành tâm hồn, kiến tạo cuộc đời hạnh phúc thịnh vượng.
        </p>
        <div className="flex gap-4">
          <a 
            href="https://web.facebook.com/DangThuyTamThuc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all" 
            title="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a 
            href="https://www.youtube.com/channel/UCsG7Ug6xy3JWnZ85o4Xfhpw/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all" 
            title="Youtube"
          >
            <Youtube size={18} />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all group" 
            title="TikTok"
          >
            <img src={tiktokLogo} alt="TikTok" className="w-5 h-5 object-contain opacity-70 group-hover:invert transition-all" referrerPolicy="no-referrer" />
          </a>
        </div>
      </div>
      
      <div className="space-y-6">
        <h4 className="font-bold text-primary uppercase tracking-wider text-sm">Liên hệ</h4>
        <ul className="space-y-4 text-sm text-primary/70">
          <li className="flex items-start gap-3">
            <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
            <span>Số 70, Lô 7, Khu Đô Thị Hồ Đền Lừ 2, Hoàng Mai, Hà Nội</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={18} className="text-secondary shrink-0" />
            <span>0965.165.685 - 0767.346.831</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-secondary shrink-0" />
            <span>hocvienqma@gmail.com</span>
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="font-bold text-primary uppercase tracking-wider text-sm">Chính sách</h4>
        <ul className="space-y-4 text-sm text-primary/70">
          <li><a href="#" className="hover:text-secondary transition-colors">Chính sách học phí</a></li>
          <li><a href="#" className="hover:text-secondary transition-colors">Chính sách khách hàng</a></li>
          <li><a href="#" className="hover:text-secondary transition-colors">Bảo mật thông tin</a></li>
          <li><a href="#" className="hover:text-secondary transition-colors">Điều khoản sử dụng</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-primary/5 text-center text-[10px] text-primary/30 font-medium uppercase tracking-[0.2em]">
      <p>© 2026 Học viện Trí tuệ Lượng tử QMA. All rights reserved.</p>
    </div>
  </footer>
);

const Testimonials = () => {
  const reviews = [
    {
      name: "Chị Thu Trang",
      role: "Học viên khóa 02",
      text: "Sau 3 buổi workshop, mình như tìm lại được chính mình. Những nút thắt trong lòng bấy lâu nay đã được gỡ bỏ. Cảm ơn Master Coach Đặng Thủy rất nhiều.",
      avatar: minhAnhImg
    },
    {
      name: "Anh Ngô Đình Trà",
      role: "Học viên khóa 04",
      text: "Hạnh phúc thật sự nở hoa vào khoảnh khắc ta cúi xuống vỗ về đứa trẻ bên trong mình.",
      avatar: dinhTraImg
    },
    {
      name: "Chị Lan Vũ",
      role: "Học viên khóa 05",
      text: "Một không gian chữa lành tuyệt vời. Mình đã học được cách yêu thương bản thân đúng nghĩa và kiến tạo cuộc sống hạnh phúc hơn.",
      avatar: lanVuImg
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4">Cảm nhận từ học viên</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Những câu chuyện chuyển hóa đầy cảm xúc từ những người đã can đảm bước đi trên hành trình yêu thương chính mình.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2rem] bg-surface-container-low border border-primary/5 relative"
            >
              <div className="absolute -top-4 -left-4 text-secondary opacity-20">
                <Sparkles size={48} />
              </div>
              <p className="text-on-surface-variant italic mb-8 leading-relaxed relative z-10">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-primary">{item.name}</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ThankYouPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = "Đăng Ký Thành Công - Yêu Lại Chính Mình";
    return () => { document.title = prevTitle; };
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-24 bg-surface flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-secondary/10 blur-[80px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-[80px]" />
      </div>

      <div className="max-w-2xl mx-auto px-6 relative z-10 text-center space-y-8">
        <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ type: "spring", stiffness: 200, damping: 20 }}
           className="w-24 h-24 mx-auto bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 size={48} />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-primary leading-tight"
        >
          Đăng Ký <span className="text-secondary italic font-light">Thành Công!</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-on-surface-variant leading-relaxed"
        >
          Chúng tôi đã ghi nhận thông tin của bạn. Đội ngũ <strong>Yêu Lại Chính Mình</strong> sẽ sớm liên hệ để hỗ trợ bạn trên hành trình kết nối bản thể cảm xúc.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="pt-8"
        >
          <button 
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all"
          >
            Quay lại trang chủ <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <Hero />
      <SelfConnectionCheck />
      <TargetAudience />
      <Benefits />
      <DifferenceSection />
      <CoachSection />
      <Testimonials />
      <RegistrationForm onSuccess={() => navigate('/thank-you')} />
      <Footer />
    </div>
  );
}

function ThankYouRoute() {
  return (
    <div className="min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <ThankYouPage />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYouRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
