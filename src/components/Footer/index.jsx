import './footer.css';

export default function Footer() {
  return (
    <div className="text-white opacity-80">
      {/* 分隔線 */}
      <hr className="my-6 w-full border-t-2 border-blue-400 rounded-sm opacity-100" />

      <footer className="footer py-6 mt-6">
        {/* 描述區塊 */}
        <div className="footer-content">
          <p className="font-extrabold">DESCRIPTIONS</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            deleniti iste sit enim. Veniam eos sequi laudantium optio, saepe
            excepturi illo autem quibusdam delectus illum ipsa? Nobis culpa
            debitis error!
          </p>
        </div>

        {/* 追蹤我們 */}
        <div className="footer-followUs">
          <p className="font-extrabold">FOLLOW US</p>
          <div className="flex items-center space-x-4">
            <a href="#">
              <img className="w-8 h-8" src="/images/nn-icon-facebook.svg" alt="facebook" />
            </a>
            <a href="#">
              <img className="w-8 h-8" src="/images/nn-icon-instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>

        {/* 聯絡我們 */}
        <div className="footer-contactUs">
          <p className="font-extrabold">CONTACT US</p>
          <p className="">02 2732 1104</p>
        </div>

        {/* 版權聲明 */}
        <p className="footer-copyRight text-center opacity-60">
          © 2006 - 2025 Copyright Digital Technology Design
        </p>
      </footer>
    </div>
  );
}