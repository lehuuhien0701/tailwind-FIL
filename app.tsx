import React , { useState, useRef, useEffect } from 'react';
const HeaderMenu = () => {
    // 1. Quản lý trạng thái mở/đóng của menu (đóng mặc định)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. Tham chiếu đến các phần tử DOM
    const menuRef = useRef(null); // Ref cho menu mobile (phần sẽ hiện/ẩn)
    const buttonRef = useRef(null); // Ref cho nút hamburger

    // 3. Hàm chuyển đổi trạng thái menu
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    // 4. Logic Xử lý Click Ra Ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMenuOpen && 
                menuRef.current && 
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

// Custom Icons
const CheckIcon = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.84192 12.0008C5.56569 12.0008 5.28999 11.8971 5.07904 11.6891L0 6.68272L1.52576 5.17825L5.84192 9.43268L14.4742 0.923828L16 2.4283L6.6048 11.6891C6.39385 11.8971 6.11816 12.0008 5.84192 12.0008Z" fill="#BBA25A"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 15.0587L15.8333 4.22534M15.8333 4.22534V14.6253M15.8333 4.22534H5.43334" stroke="#0A2540" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> 
);

 
  return (
    <div className="min-h-screen bg-beige">
      {/* Navigation */}
      <nav className="bg-navy border-b border-white/10 sticky top-0 z-50">
        <div className="px-5 lg:px-20 h-[69px] flex items-center justify-between max-w-[1440px] m-auto w-full">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/1f1869e088ee1a808d020a85d04bbebc715b1fd0?width=496" 
            alt="FIL Logo" 
            className="h-[69px] w-[248px]"
          />
          <div className="relative">
            <div className='flex items-center justify-end'>
                
                {/* 1. NÚT HAMBURGER (BLOCK LG:HIDDEN) */}
                <div 
                    className='block xl:hidden cursor-pointer p-2'
                    onClick={toggleMenu}
                    ref={buttonRef} 
                >
                    <span>
                        <svg className="open" xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15385 0C0.5166 0 0 0.497467 0 1.11111C0 1.72476 0.5166 2.22222 1.15385 2.22222H28.8462C29.4833 2.22222 30 1.72476 30 1.11111C30 0.497467 29.4833 0 28.8462 0H1.15385ZM0 10C0 9.38636 0.5166 8.88889 1.15385 8.88889H28.8462C29.4833 8.88889 30 9.38636 30 10C30 10.6136 29.4833 11.1111 28.8462 11.1111H1.15385C0.5166 11.1111 0 10.6136 0 10ZM0 18.8889C0 18.2753 0.5166 17.7778 1.15385 17.7778H28.8462C29.4833 17.7778 30 18.2753 30 18.8889C30 19.5024 29.4833 20 28.8462 20H1.15385C0.5166 20 0 19.5024 0 18.8889Z" fill="#ffffff"/>
                        </svg> 
                    </span>
                </div>
                
                {/* 2. MENU DESKTOP (HIDDEN LG:FLEX) */}
                <div className="hidden xl:flex items-center gap-5 xl:gap-10">
                    <a href="#" className="text-white text-sm leading-[14px]">Members Directory</a>
                    <a href="#" className="text-white text-sm leading-[14px]">Who We Are</a>
                    <a href="#" className="text-white text-sm leading-[14px]">Members' Area</a>
                    <a href="#" className="text-white text-sm leading-[14px]">News</a>
                    <a href="#" className="text-white text-sm leading-[14px]">Professions</a>
                    <button className="flex items-center gap-2.5 px-5 h-10 rounded-full border border-beige/20 bg-navy text-white text-sm leading-[14px]">
                        Contact
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.19727 12.1203L9.0006 8.31703C9.44977 7.86787 9.44977 7.13287 9.0006 6.6837L5.19727 2.88037" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className="w-10 h-10 flex items-center justify-center">
                        <svg className='rounded-full' width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.239624 -0.0639648H30.7851V32.0891H0.239624V-0.0639648Z" fill="#083F80"/>
                        <path d="M0.239624 11.1899H30.7851V20.7211H0.239624V11.1899Z" fill="white"/>
                        <path d="M18.4293 -0.139648V32.0135H12.3929V-0.139648H18.4293Z" fill="white"/>
                        <path d="M30.7851 28.5293V32.0891H27.1487L0.239624 3.84028V-0.0639648H3.80325L30.7851 28.5293Z" fill="white"/>
                        <path d="M30.7851 3.49587V-0.0639648H27.1487L0.239624 28.07V32.0891H3.80325L30.7851 3.49587Z" fill="white"/>
                        <path d="M0.239655 2.46235L8.45784 11.1896H10.9306L0.239624 -0.0639648L0.239655 2.46235ZM30.7851 29.448L22.5669 20.7207H20.0942L30.7851 32.0891L30.7851 29.448ZM18.4215 10.2709V11.1896H20.0215L30.7851 -0.0639648H28.0942L18.4215 10.2709ZM12.6033 21.7542V20.7207H11.0033L0.239655 32.0891H2.93056L12.6033 21.7542ZM13.6942 -0.0639648H17.2578V32.0891H13.6942V-0.0639648Z" fill="#B7333C"/>
                        <path d="M0.16394 18.8157V13.189H30.7821V18.8158L0.16394 18.8157Z" fill="#B7333C"/>
                        </svg> 
                    </div>
                </div>
            </div>

            {/* 3. MENU MOBILE SLIDEOUT (Đã thêm nút Close) */}
            <div
                ref={menuRef}
                className={`xl:hidden fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-2xl z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} `}
            >
                {/* ❗ NÚT CLOSE (Đã thêm vào đây) */}
                <div className="flex justify-end p-5">
                    <button 
                        onClick={toggleMenu} 
                        className="text-white text-3xl font-light hover:text-red-500 transition-colors"
                    >
                        <svg className="close" xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
                        <path d="M3.375 3.875L23.625 24.125M3.375 24.125L23.625 3.875" stroke="#ffffff" stroke-width="2.29787"/>
                        </svg> 
                    </button>
                </div>

                {/* Danh sách các mục menu mobile */}
                <div className="p-5 flex flex-col gap-4">
                    <a href="#" className="block text-lg hover:text-teal-400">Members Directory</a>
                    <a href="#" className="block text-lg hover:text-teal-400">Who We Are</a>
                    <a href="#" className="block text-lg hover:text-teal-400">Members' Area</a>
                    <a href="#" className="block text-lg hover:text-teal-400">News</a>
                    <a href="#" className="block text-lg hover:text-teal-400">Professions</a>
                    <button className="mt-4 px-5 h-10 rounded-full border border-beige/20 bg-navy text-white text-sm leading-[14px]">
                        Contact
                    </button>
                </div>
            </div>

            {/* LỚP PHỦ (OVERLAY) */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
                    onClick={toggleMenu}
                ></div>
            )}
        </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-navy">
        <div className='flex flex-col-reverse lg:flex-row max-w-[1440px] m-auto'>
        <div className="lg:w-[50%] flex-1 px-5 lg:px-20 py-10 lg:py-[120px] flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[18px]">
            <div className="inline-flex items-center gap-2.5 px-[18px] py-2 rounded-[50px] border border-white w-fit">
              <span className="text-white text-[11.1px] leading-[14.4px]">Fédération Immobilière du Luxembourg</span>
            </div>
            <div className="flex flex-col gap-[60px]">
              <div className="flex flex-col gap-5">
                <h1 className="font-display text-[40px] leading-[40px] lg:text-[60px] lg:leading-[60px] font-bold">
                  <span className="text-white block">The leading voice of</span>
                  <span className="text-gold block"> Real estate agencies <br/> and Developers </span>
                  <span className="text-white block">in Luxembourg.</span>
                </h1>
                <p className="text-white text-[15px] leading-[26px]">
                  Defending the profession, promoting ethics, informing the public, and<br/> contributing to a sustainable and responsible real estate sector.
                </p>
              </div>
              <div className="flex items-center gap-[25px]">
                <button className="flex items-center justify-center gap-2.5 w-[150px] h-10 rounded-full border border-beige/20 bg-navy text-white text-sm leading-[14px]">
                  Join now
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.19727 12.6203L9.0006 8.81703C9.44977 8.36787 9.44977 7.63287 9.0006 7.1837L5.19727 3.38037" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <a href="#" className="flex items-center gap-2 text-white text-sm leading-[14px]">
                  Access the Members' Area
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0 pr-5">
              <div className="">
                 <img alt="" src="./icon-fil01.png"/>
              </div>
            </div>
            <span className="text-white text-[13.7px] leading-[21px] font-normal">Code of Ethics – Transparency & Quality</span>
          </div>
        </div>
        <div className="lg:w-[50%] h-[450px] lg:h-auto w-full relative">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/08378f817f8f1732f87f7ed1c864d751af8e3088?width=1440" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/c7f919668872e9d13dfce1b1cfe056ba67cba365?width=1440" 
            alt="Luxembourg cityscape" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        </div>      
      </section>

      {/* Welcome Section */}
      <section className="relative px-5 lg:px-20 py-10 lg:py-20 pb-40 lg:flex items-center max-w-[1440px] m-auto w-full bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
        {/* KHỐI 1: HÌNH ẢNH */}
        <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/418e83592b040ad6dd5367793119430c8143ede6?width=1464" 
            alt="Building" 
            className="flex-1 w-full lg:w-[50%] h-[450px] lg:h-[640px] object-cover" // flex-1 cho phép ảnh chiếm hết không gian còn lại
        />
        
        {/* KHỐI 2: NỘI DUNG TRẮNG (Chồng lấn lên ảnh) */}
        {/* ❌ Thay thế gap-[-60px] bằng ml-[-60px] (margin-left âm) */}
        <div 
            className="
                lg:w-[656px] p-10 bg-white 
                shadow-[10px_24px_70px_-12px_rgba(0,0,0,0.08)] 
                flex flex-col gap-8 
                relative z-10 
                lg:ml-[-60px]  
                h-fit 
            "
        >
            <div className="flex flex-col gap-4"> 
                {/* Tối ưu các giá trị font tùy chỉnh */}
                <h2 className="font-display font-bold text-[32px] leading-[40px] lg:text-[37px] lg:leading-[45px] text-[#333]"> 
                    Welcome to the official website of the Fédération Immobilière du Luxembourg (FIL).
                </h2>
                <p className="text-gray-600 text-[15px] leading-[26px]">
                    As a leading organization, FIL unites and represents real estate professionals across the Grand Duchy.
                </p>
            </div>
            
            <div className="flex flex-col gap-5">
                <p className="text-gray-500 text-sm leading-5 font-semibold">FIL fulfills this role by being:</p>
                
                <div className="flex flex-col gap-0"> {/* Giảm khoảng cách giữa các mục */}
                    
                    {/* MỤC 1 */}
                    <div className="flex items-start py-5 border-b border-gray-200"> {/* Dùng py-5 và border-gray-200 */}
                        <div className="flex items-center gap-4 flex-1">
                            {/* ⚠️ Dùng SVG Check thực tế hoặc component CheckIcon */}
                            {/* Thay thế bằng SVG (hoặc component của bạn) */}
                            <div className='w-4'>
                            <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                            </div>
                            <div className='w-[calc(100%-16px)]'>
                            <span className="text-[#333] text-[15px] leading-6">Defend the interests of the profession</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* MỤC 2 */}
                    <div className="flex items-start py-5 border-b border-gray-200">
                        <div className="flex items-center gap-4 flex-1">
                            <div className='w-4'>
                            <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                            </div>
                            <div className='w-[calc(100%-16px)]'>
                            <span className="text-[#333] text-[15px] leading-6">Promote high standards of quality and ethics</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* MỤC 3 (Mục cuối cùng, không có border-b) */}
                    <div className="flex items-start py-5"> 
                        <div className="flex items-center gap-4 flex-1">
                            <div className='w-4'>
                              <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                            </div>
                            <div className='w-[calc(100%-16px)]'>
                            <span className="text-[#333] text-[15px] leading-6">Actively contribute to the sustainable and balanced development of the Luxembourg real estate market</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Our Role Section */}
    <section className='relative'>
        <div 
            className="min-h-[80px] absolute z-10 left-0 right-0 bottom-0 overflow-hidden bg-custom-blue mb-[-5px]" 
            style={{ backgroundImage: "url('/Vector01.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
        > 
        
        </div>
      </section>  
      <section className="bg-navy">
        <div className='px-5 lg:px-20 py-10 lg:py-20 max-w-[1440px] w-full m-auto relative overflow-hidden'>
          <svg className="absolute right-0 lg:right-[-303px] bottom-[-97px] w-[1498px] h-[696px]" viewBox="0 0 1195 503" fill="none">
            <path d="M220.355 -37.8128V244.564H348.467C372.156 243.806 391.771 235.752 407.216 220.306C422.851 204.956 430.716 185.246 430.716 161.178V152.46H440.571V376.466H430.716V368.886C430.716 344.912 423.135 325.203 407.974 309.757C392.813 294.122 373.577 286.068 350.362 285.499H220.355V528.836C220.355 545.798 226.419 560.201 238.548 572.046C250.867 583.985 265.459 589.86 282.137 589.86H293.886L295.024 599.715H0.138672V589.86H12.6466C29.3239 589.86 43.5375 583.985 55.477 572.046C67.6059 560.201 74.0494 545.798 74.8075 528.836V-11.6598C74.8075 -34.1173 64.0051 -50.8893 42.59 -62.0707C33.4933 -67.0928 23.449 -69.6513 12.6466 -69.6513H0.138672V-79.5061H371.587C391.487 -79.5061 413.47 -81.4012 437.539 -85.1915C461.512 -89.1713 478.284 -93.1511 487.95 -96.9414V67.1783H478.474V57.3236C478.474 28.8016 470.135 6.05984 453.458 -10.9017C436.97 -28.0528 414.513 -37.0548 385.991 -37.8128H220.355Z" fill="#071F38"/>
          </svg>
          <div className="relative z-10 flex flex-col gap-10"> 
            <h2 className="font-display text-[32px] leading-[40px] lg:text-[37.3px] lg:leading-[45.6px] font-bold text-white">Our Role</h2>
            <div className="lg:flex gap-[100px]">
              <div className='mb-10 lg:mb-0'>
                <p className="w-[380px] text-[#D9D9D9] text-[15px] leading-[26px]">
                  Real estate is at the heart of the national economy and directly impacts every citizen's life.
                  <br/><br/>
                  Buying, selling, renting, building, investing—these are major decisions that require trust and transparency.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <div className="flex items-start gap-[60px] pb-5 border-b border-white/20">
                  <div className="flex items-center gap-[15px] flex-1">
                    <CheckIcon />
                    <span className="text-white text-sm leading-5">Be the voice of agencies and developers with public institutions and private partners</span>
                  </div>
                </div>
                <div className="flex items-start gap-[60px] pb-5 border-b border-white/20">
                  <div className="flex items-center gap-[15px] flex-1">
                    <CheckIcon />
                    <span className="text-white text-sm leading-5">Ensure an ethical framework through a demanding code of conduct</span>
                  </div>
                </div>
                <div className="flex items-start gap-[60px] pb-5 border-b border-white/20">
                  <div className="flex items-center gap-[15px] flex-1">
                    <CheckIcon />
                    <span className="text-white text-sm leading-5">Support members with practical tools, training, and ongoing regulatory monitoring</span>
                  </div>
                </div>
                <div className="flex items-start gap-[60px] pb-5 border-b border-white/20">
                  <div className="flex items-center gap-[15px] flex-1">
                    <CheckIcon />
                    <span className="text-white text-sm leading-5">Inform the public and foster a better understanding of the real estate market</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Federation Section */}
      <section className="bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
          <article className="relative px-5 lg:px-20 py-10 lg:py-20 lg:flex items-center max-w-[1440px] m-auto w-full">
            {/* KHỐI 1: HÌNH ẢNH */}
            <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7e080bff12760b7fcb13a562649c80cb6618334c?width=1340" 
                alt="Building" 
                className="flex-1 w-full lg:w-[50%] h-[450px] lg:h-[640px] object-cover" // flex-1 cho phép ảnh chiếm hết không gian còn lại
            />
            
            {/* KHỐI 2: NỘI DUNG TRẮNG (Chồng lấn lên ảnh) */}
            {/* ❌ Thay thế gap-[-60px] bằng ml-[-60px] (margin-left âm) */}
            <div 
                className="
                    lg:w-[656px] p-10 bg-white 
                    shadow-[10px_24px_70px_-12px_rgba(0,0,0,0.08)] 
                    flex flex-col gap-8 
                    relative z-10 
                    lg:ml-[-60px]  
                    h-fit 
                "
            >
                <div className="flex flex-col gap-4"> 
                    {/* Tối ưu các giá trị font tùy chỉnh */}
                    <h2 className="font-display font-bold text-[32px] leading-[40px] lg:text-[37px] lg:leading-[45px] text-[#333]"> 
                        Why a Federation?
                    </h2>
                    <p className="text-gray-600 text-[15px] leading-[26px]">
                        In a constantly evolving market—rising prices, limited land availability, regulatory complexity, energy transition—professionals need a credible, representative body that provides solutions.
                    </p>
                </div>
                
                <div className="flex flex-col gap-5">
                    <p className="text-gray-500 text-sm leading-5 font-semibold">FIL fulfills this role by being:</p>
                    
                    <div className="flex flex-col gap-0"> {/* Giảm khoảng cách giữa các mục */}
                        
                        {/* MỤC 1 */}
                        <div className="flex items-center py-5 border-b border-gray-200"> {/* Dùng py-5 và border-gray-200 */}
                            <div className="flex items-center gap-4 flex-1">
                                {/* ⚠️ Dùng SVG Check thực tế hoặc component CheckIcon */}
                                {/* Thay thế bằng SVG (hoặc component của bạn) */}
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">A privileged interlocutor for the Government, municipalities, and financial institutions</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* MỤC 2 */}
                        <div className="flex items-center py-5 border-b border-gray-200">
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">A recognized actor with expertise and influence on the regulatory framework</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* MỤC 3 (Mục cuối cùng, không có border-b) */}
                        <div className="flex items-start py-5"> 
                            <div className="flex items-center gap-4 flex-1"> 
                                <div className='w-4'>
                                  <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">A rallying point for industry stakeholders to move forward together towards innovative, sustainable, and responsible real estate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </article>

          {/* Trust & Commitments Section */}
          <article className="border-t border-b border-beige-light">
            <div className='px-5 lg:px-20 py-10 lg:py-20 md:flex gap-10 max-w-[1440px] m-auto w-full'>
              <div className="mb-10 md:mb-0 flex-1 p-[40px_40px_60px] lg:p-[60px_60px_80px] border border-black/20 bg-white shadow-[10px_24px_70px_-12px_rgba(0,0,0,0.08)] flex flex-col gap-[60px] relative overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/704fff7a309744f4bdfafcbb8d0b9a511172d6ca?width=490" 
                  alt="" 
                  className="absolute bottom-0 left-0 w-[245px] h-[364px] opacity-20 mix-blend-luminosity"
                />
                <div className="flex flex-col items-center gap-[14px] relative z-10">

                  

                  <svg className='m-auto' width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2036_568)">
                  <path d="M10.676 3.23859C8.77112 3.76323 6.8792 4.33407 5.00201 4.95059C4.83047 5.00591 4.67797 5.10841 4.56195 5.24635C4.44595 5.38429 4.37111 5.55211 4.34601 5.73059C3.23801 14.0446 5.79801 20.1106 8.852 24.1066C10.1445 25.8159 11.6863 27.3213 13.426 28.5726C14.118 29.0606 14.73 29.4126 15.212 29.6386C15.452 29.752 15.6474 29.8306 15.798 29.8746C15.8644 29.8948 15.9318 29.9115 16 29.9246C16.0675 29.9114 16.1342 29.8947 16.2 29.8746C16.352 29.8292 16.548 29.7506 16.788 29.6386C17.268 29.4126 17.882 29.0586 18.574 28.5726C20.3137 27.3213 21.8555 25.8159 23.148 24.1066C26.202 20.1126 28.762 14.0446 27.654 5.73059C27.6289 5.55211 27.5541 5.38429 27.4381 5.24635C27.3221 5.10841 27.1695 5.00591 26.998 4.95059C25.696 4.52459 23.498 3.83059 21.324 3.24059C19.104 2.63859 17.062 2.19259 16 2.19259C14.94 2.19259 12.896 2.63659 10.676 3.23859ZM10.144 1.17859C12.314 0.588594 14.62 0.0585938 16 0.0585938C17.38 0.0585938 19.686 0.588594 21.856 1.17859C24.076 1.77859 26.314 2.48859 27.63 2.91859C28.1802 3.1003 28.668 3.43352 29.0374 3.87999C29.4067 4.32647 29.6426 4.86807 29.718 5.44259C30.91 14.3966 28.144 21.0326 24.788 25.4226C23.3643 27.3 21.6675 28.9537 19.754 30.3286C19.093 30.8055 18.3918 31.2237 17.658 31.5786C17.098 31.8426 16.496 32.0586 16 32.0586C15.504 32.0586 14.904 31.8426 14.342 31.5786C13.6083 31.2237 12.907 30.8055 12.246 30.3286C10.3325 28.9537 8.63568 27.3 7.21201 25.4226C3.85601 21.0326 1.09001 14.3966 2.28201 5.44259C2.35739 4.86807 2.5933 4.32647 2.96265 3.87999C3.33199 3.43352 3.81979 3.1003 4.37001 2.91859C6.28052 2.29261 8.20576 1.71245 10.144 1.17859Z" fill="#0A2540"/>
                  <path d="M21.7081 10.3505C21.8012 10.4434 21.8751 10.5537 21.9255 10.6752C21.9759 10.7967 22.0018 10.927 22.0018 11.0585C22.0018 11.19 21.9759 11.3202 21.9255 11.4418C21.8751 11.5632 21.8012 11.6736 21.7081 11.7665L15.7081 17.7665C15.6152 17.8596 15.5049 17.9334 15.3833 17.9839C15.2618 18.0343 15.1316 18.0602 15.0001 18.0602C14.8685 18.0602 14.7383 18.0343 14.6168 17.9839C14.4953 17.9334 14.3849 17.8596 14.2921 17.7665L11.2921 14.7665C11.1991 14.6735 11.1253 14.5631 11.075 14.4416C11.0247 14.3202 10.9988 14.1899 10.9988 14.0585C10.9988 13.927 11.0247 13.7968 11.075 13.6753C11.1253 13.5538 11.1991 13.4434 11.2921 13.3505C11.385 13.2575 11.4954 13.1838 11.6169 13.1334C11.7384 13.0831 11.8686 13.0572 12.0001 13.0572C12.1316 13.0572 12.2617 13.0831 12.3833 13.1334C12.5047 13.1838 12.6151 13.2575 12.7081 13.3505L15.0001 15.6445L20.2921 10.3505C20.3849 10.2574 20.4953 10.1834 20.6168 10.133C20.7383 10.0826 20.8685 10.0566 21.0001 10.0566C21.1316 10.0566 21.2618 10.0826 21.3833 10.133C21.5049 10.1834 21.6152 10.2574 21.7081 10.3505Z" fill="#0A2540"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_2036_568">
                  <rect width="32" height="32" fill="white" transform="translate(0 0.0585938)"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <h2 className="font-display text-[32px] leading-[40px] lg:text-[37.3px] lg:leading-[45.6px] font-bold text-navy text-center">A Network of Trust</h2>
                  
                  <p className="text-navy text-[15px] leading-[26px] text-center">
                    Joining the Federation means becoming part of a strong community where:
                  </p>
                </div>
                <div className="flex flex-col gap-5 relative z-10">
                  <div className="flex items-start gap-[60px] pb-5 border-b border-black/20">
                    <div className="flex items-center gap-[15px] flex-1">
                      <CheckIcon />
                      <span className="text-navy text-sm leading-5">Agencies share experiences and strengthen best practices.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-[60px] pb-5 border-b border-black/20">
                    <div className="flex items-center gap-[15px] flex-1">
                      <CheckIcon />
                      <span className="text-navy text-sm leading-5">Developers exchange insights on urban planning and construction challenges.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-[60px] pb-5 border-b border-black/20">
                    <div className="flex items-center gap-[15px] flex-1">
                      <CheckIcon />
                      <span className="text-navy text-sm leading-5">Institutional partners find a single, structured point of contact.</span>
                    </div>
                  </div>
                </div>
                <p className="text-navy text-sm leading-5 text-center relative z-10">
                  Trust micro-text: Membership in the FIL is a guarantee of professionalism and credibility for clients and investors.
                </p>
              </div>

              <div className="flex-1 p-[40px_40px_60px] lg:p-[60px_60px_80px] bg-sage shadow-[10px_24px_70px_-12px_rgba(0,0,0,0.08)] flex flex-col items-center gap-[60px] relative overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b2138e5375ff4dd8e6dad441d0f1ab0352de49a3?width=496" 
                  alt="" 
                  className="absolute right-0 bottom-0 w-[248px] h-[397px] opacity-20 mix-blend-luminosity"
                />
                <div className="flex flex-col items-center gap-[14px] relative z-10">
                  <svg className='m-auto' width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7081 12.3504C20.8012 12.4434 20.8751 12.5537 20.9255 12.6752C20.9759 12.7966 21.0018 12.9269 21.0018 13.0584C21.0018 13.19 20.9759 13.3202 20.9255 13.4417C20.8751 13.5632 20.8012 13.6735 20.7081 13.7664L14.7081 19.7664C14.6152 19.8595 14.5048 19.9334 14.3833 19.9838C14.2618 20.0342 14.1316 20.0602 14.0001 20.0602C13.8685 20.0602 13.7383 20.0342 13.6168 19.9838C13.4953 19.9334 13.3849 19.8595 13.2921 19.7664L10.2921 16.7664C10.1991 16.6734 10.1253 16.563 10.075 16.4416C10.0247 16.3201 9.99878 16.1899 9.99878 16.0584C9.99878 15.927 10.0247 15.7967 10.075 15.6753C10.1253 15.5538 10.1991 15.4434 10.2921 15.3504C10.385 15.2574 10.4954 15.1837 10.6169 15.1334C10.7384 15.083 10.8685 15.0572 11.0001 15.0572C11.1316 15.0572 11.2617 15.083 11.3833 15.1334C11.5047 15.1837 11.6151 15.2574 11.7081 15.3504L14.0001 17.6444L19.2921 12.3504C19.3849 12.2573 19.4953 12.1834 19.6168 12.133C19.7383 12.0826 19.8685 12.0566 20.0001 12.0566C20.1316 12.0566 20.2618 12.0826 20.3833 12.133C20.5048 12.1834 20.6152 12.2573 20.7081 12.3504Z" fill="white"/>
                  <path d="M20.5461 5.08445L18.7041 3.19645L20.1341 1.80045L21.3781 3.07445L23.1581 3.05245C23.9286 3.04333 24.6931 3.18837 25.4067 3.47902C26.1204 3.76969 26.7687 4.2001 27.3136 4.74497C27.8584 5.28983 28.2889 5.93814 28.5795 6.65178C28.8702 7.3654 29.0152 8.12994 29.0061 8.90042L28.9861 10.6804L30.2581 11.9244C30.8091 12.4628 31.2467 13.1059 31.5456 13.8158C31.8445 14.5257 31.9985 15.2882 31.9985 16.0584C31.9985 16.8287 31.8445 17.5912 31.5456 18.3011C31.2467 19.0111 30.8091 19.6541 30.2581 20.1924L28.9841 21.4364L29.0061 23.2164C29.0152 23.987 28.8702 24.7515 28.5795 25.4651C28.2889 26.1787 27.8584 26.8271 27.3136 27.3719C26.7687 27.9168 26.1204 28.3472 25.4067 28.6379C24.6931 28.9285 23.9286 29.0735 23.1581 29.0644L21.3781 29.0444L20.1341 30.3164C19.5958 30.8674 18.9527 31.3051 18.2428 31.604C17.5329 31.9029 16.7703 32.0568 16.0001 32.0568C15.2299 32.0568 14.4673 31.9029 13.7574 31.604C13.0475 31.3051 12.4044 30.8674 11.8661 30.3164L10.6221 29.0424L8.8421 29.0644C8.07162 29.0735 7.30706 28.9285 6.59343 28.6379C5.87979 28.3472 5.23148 27.9168 4.68662 27.3719C4.14175 26.8271 3.71134 26.1787 3.42067 25.4651C3.13002 24.7515 2.98498 23.987 2.9941 23.2164L3.0141 21.4364L1.7421 20.1924C1.19118 19.6541 0.753421 19.0111 0.454546 18.3011C0.15567 17.5912 0.00170898 16.8287 0.00170898 16.0584C0.00170898 15.2882 0.15567 14.5257 0.454546 13.8158C0.753421 13.1059 1.19118 12.4628 1.7421 11.9244L3.0161 10.6804L2.9941 8.90042C2.98498 8.12994 3.13002 7.3654 3.42067 6.65178C3.71134 5.93814 4.14175 5.28983 4.68662 4.74497C5.23148 4.2001 5.87979 3.76969 6.59343 3.47902C7.30706 3.18837 8.07162 3.04333 8.8421 3.05245L10.6221 3.07245L11.8661 1.80045C12.4044 1.24953 13.0475 0.81177 13.7574 0.512895C14.4673 0.21402 15.2299 0.0600586 16.0001 0.0600586C16.7703 0.0600586 17.5329 0.21402 18.2428 0.512895C18.9527 0.81177 19.5958 1.24953 20.1341 1.80045L18.7041 3.19645C18.352 2.83602 17.9315 2.54962 17.4671 2.35408C17.0027 2.15854 16.5039 2.05781 16.0001 2.05781C15.4963 2.05781 14.9975 2.15854 14.5331 2.35408C14.0687 2.54962 13.6482 2.83602 13.2961 3.19645L11.4561 5.08445L8.8161 5.05245C8.31242 5.04682 7.81276 5.1419 7.34639 5.3321C6.88 5.52231 6.45634 5.8038 6.10028 6.16005C5.74422 6.5163 5.46295 6.9401 5.27299 7.40658C5.08303 7.87306 4.9882 8.37282 4.9941 8.87642L5.0261 11.5124L3.1381 13.3544C2.77767 13.7065 2.49127 14.1271 2.29573 14.5915C2.10019 15.0559 1.99946 15.5546 1.99946 16.0584C1.99946 16.5623 2.10019 17.0611 2.29573 17.5255C2.49127 17.9898 2.77767 18.4103 3.1381 18.7624L5.0261 20.6024L4.9941 23.2424C4.98847 23.7461 5.08355 24.2458 5.27375 24.7122C5.46396 25.1786 5.74545 25.6022 6.1017 25.9583C6.45795 26.3143 6.88175 26.5956 7.34823 26.7855C7.81472 26.9755 8.3145 27.0703 8.8181 27.0644L11.4541 27.0324L13.2961 28.9204C13.6482 29.2809 14.0687 29.5673 14.5331 29.7628C14.9975 29.9583 15.4963 30.0591 16.0001 30.0591C16.5039 30.0591 17.0027 29.9583 17.4671 29.7628C17.9315 29.5673 18.352 29.2809 18.7041 28.9204L20.5441 27.0324L23.1841 27.0644C23.6878 27.0701 24.1875 26.975 24.6538 26.7848C25.1202 26.5946 25.5439 26.3131 25.8999 25.9568C26.256 25.6006 26.5372 25.1768 26.7272 24.7103C26.9171 24.2439 27.012 23.7441 27.0061 23.2404L26.9741 20.6044L28.8621 18.7624C29.2225 18.4103 29.5089 17.9898 29.7045 17.5255C29.9 17.0611 30.0007 16.5623 30.0007 16.0584C30.0007 15.5546 29.9 15.0559 29.7045 14.5915C29.5089 14.1271 29.2225 13.7065 28.8621 13.3544L26.9741 11.5144L27.0061 8.87442C27.0117 8.37082 26.9167 7.87111 26.7264 7.40474C26.5363 6.93835 26.2547 6.51469 25.8985 6.15862C25.5423 5.80257 25.1184 5.5213 24.6519 5.33134C24.1855 5.14138 23.6858 5.04655 23.1821 5.05245L20.5461 5.08445Z" fill="white"/>
                  </svg>

                  <h2 className="font-display text-[32px] leading-[40px] lg:text-[37.3px] lg:leading-[45.6px] font-bold text-white text-center">Our Commitments to the Public</h2>
                  <p className="text-white text-[15px] leading-[26px] text-center">
                    The FIL does not only cater to professionals—it also serves citizens, investors, and institutions.
                  </p>
                </div>
                <div className="flex flex-col gap-5 relative z-10 w-full">
                  <div className="flex items-start gap-[60px] pb-5 border-b border-white">
                    <div className="flex items-center gap-[15px] flex-1">
                      
                      <span className="text-white text-sm leading-5">Adhere to a strict code of ethics.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-[60px] pb-5 border-b border-white">
                    <div className="flex items-center gap-[15px] flex-1">
                      <span className="text-white text-sm leading-5">Commit to transaction transparency.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-[60px] pb-5 border-b border-white">
                    <div className="flex items-center gap-[15px] flex-1">
                      <span className="text-white text-sm leading-5">Keep their skills up to date through continuous training.</span>
                    </div>
                  </div>
                </div>
                <p className="text-white text-sm leading-5 text-center relative z-10">
                  👉 Choosing a FIL member means benefiting from a reliable and responsible professional relationship.
                </p>
              </div>
            </div>
          </article>
      </section>

      {/* Large Image */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/52e1107f8d46b7947c1e6c3d8d997763a0a8a05e?width=2880" 
        alt="Luxembourg architecture" 
        className="w-full h-[450px] object-cover"
      />

      {/* Real Estate Barometer */}
      <section className="bg-navy">
        <div className='px-5 lg:px-20 py-10 lg:py-[120px] flex flex-col items-center gap-20 relative overflow-hidden max-w-[1440px] m-auto w-full'>  
            <img className='absolute right-[-191px] bottom-0 left-0 top-0 ring-0 m-auto' alt="" src="./Vector02.svg"/>
            
            <div className="lg:flex justify-between items-center w-full relative z-10">
              <h2 className="mb-5 lg:mb-0 font-display text-[32px] leading-[40px] lg:text-[37.3px] lg:leading-[45.6px] font-bold text-gold">Real Estate Barometer</h2>
              <a href="#" className="flex items-center gap-3 text-white text-sm leading-[14px]">
                Consult the Barometer
                <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
                  <ArrowRight  />
                </div>
              </a>
            </div>
            <div className="lg:flex gap-10 w-full relative z-10">
              <div className="mb-5 lg:mb-0 flex-1 pr-10 border-r border-black/20 flex flex-col gap-[15px]">
                <div className="flex justify-center items-end gap-[15px]">
                  <span className="font-display text-[40px] leading-[40px] lg:text-[60px] lg:leading-[60px] font-bold text-gold">+1.2%</span>
                  <span className="text-white text-[17.6px] leading-[27px] opacity-60">QoQ</span>
                </div>
                <p className="text-white text-[17.6px] leading-[27px] text-center">Median residential price: €xxx/m²</p>
              </div>
              <div className="mb-5 lg:mb-0 flex-1 pr-10 border-r border-black/20 flex flex-col gap-[15px]">
                <div className="flex justify-center items-end gap-[15px]">
                  <span className="font-display text-[40px] leading-[40px] lg:text-[60px] font-bold text-gold">+0.8%</span>
                  <span className="text-white text-[17.6px] leading-[27px] opacity-60">QoQ</span>
                </div>
                <p className="text-white text-[17.6px] leading-[27px] text-center">Median rent</p>
              </div>
              <div className="flex-1 pr-10 flex flex-col gap-[15px]">
                <div className="flex justify-center items-end gap-[15px]">
                  <span className="font-display text-[40px] leading-[40px] lg:text-[60px] font-bold text-gold">-3.1%</span>
                  <span className="text-white text-[17.6px] leading-[27px] opacity-60">QoQ</span>
                </div>
                <p className="text-white text-[17.6px] leading-[27px] text-center">Active supply: x,xxx properties</p>
              </div>
            </div>
        </div>
      </section>

      {/* Wave Divider */}
       
      <img className='mt-[-5px]' alt="" src="./Vector03.svg"/>

      {/* News & Innovation Section */}
      <section className="bg-white bg-[url('/bg-line.svg')] bg-top bg-repeat-y">
        
        <div className='relative z-20 px-5 lg:px-20 py-10 lg:py-[120px] lg:flex gap-20 max-w-[1440px] m-auto w-full'>
            <div className="mb-10 lg:mb-0 flex-1 flex flex-col justify-center gap-12">
              <div>
                <h2 className="font-display text-[32px] leading-[40px] lg:text-[37.3px] lg:leading-[45.6px] font-bold text-black mb-5 lg:mb-14">News & Innovation</h2>
                <div className="flex flex-col gap-10">
                  <p className="text-[#333] text-base leading-[27.2px]">
                    The FIL also supports the digital transformation of the sector and promotes innovative solutions to address current challenges:
                  </p>
                   

                  <div className="flex flex-col lg:flex-row gap-5">
                    <div className="flex-1 flex flex-col gap-2">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.4002 23.3585H15.6002M8.4002 23.3585V17.3585M8.4002 23.3585H1.8002C1.46882 23.3585 1.2002 23.0899 1.2002 22.7585V17.9585C1.2002 17.6271 1.46882 17.3585 1.8002 17.3585H8.4002M15.6002 23.3585V8.95855M15.6002 23.3585H22.2002C22.5316 23.3585 22.8002 23.0899 22.8002 22.7585V2.35854C22.8002 2.02717 22.5316 1.75854 22.2002 1.75854H16.2002C15.8688 1.75854 15.6002 2.02717 15.6002 2.35854V8.95855M8.4002 17.3585V9.55854C8.4002 9.22717 8.66883 8.95855 9.0002 8.95855H15.6002" stroke="black"/>
                      </svg>
                      <span className="text-[#333] text-sm leading-5">Housing accessibility.</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 16.8086L10.75 10.5586L13.25 14.3086L19.5 8.05859M19.5 8.05859H15.125M19.5 8.05859V11.8086" stroke="black"/>
                        <path d="M22 1.05859H2C1.17157 1.05859 0.5 1.73017 0.5 2.55859V22.5586C0.5 23.387 1.17157 24.0586 2 24.0586H22C22.8284 24.0586 23.5 23.387 23.5 22.5586V2.55859C23.5 1.73017 22.8284 1.05859 22 1.05859Z" stroke="black"/>
                      </svg>
                      <span className="text-[#333] text-sm leading-5">Sustainability and energy efficiency.</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14.8575C15.6583 14.8575 18.624 11.8715 18.624 8.18803C18.624 4.50458 15.6583 1.51855 12 1.51855C8.34164 1.51855 5.37598 4.50458 5.37598 8.18803C5.37598 11.8715 8.34164 14.8575 12 14.8575Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.4162 22.6386C20.0746 22.6386 23.0402 19.6525 23.0402 15.969C23.0402 12.2856 20.0746 9.29956 16.4162 9.29956C12.7579 9.29956 9.79224 12.2856 9.79224 15.969C9.79224 19.6525 12.7579 22.6386 16.4162 22.6386Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.58396 22.6386C11.2423 22.6386 14.208 19.6526 14.208 15.9692C14.208 12.2857 11.2423 9.29968 7.58396 9.29968C3.92563 9.29968 0.959961 12.2857 0.959961 15.9692C0.959961 19.6526 3.92563 22.6386 7.58396 22.6386Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[#333] text-sm leading-5">Affordable and inclusive housing.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[800px] lg:flex flex-row gap-2.5">
              <div className="flex flex-col gap-2.5 w-full lg:w-[50%]">
                <div className="flex-1 h-[300px] p-10 bg-[#001D40] shadow-[0_24px_70px_-12px_rgba(0,0,0,0.1)] flex flex-col justify-between">
                  <div className="flex flex-col gap-5">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" className="opacity-70">
                      <path d="M8 22.0586C8 21.5282 8.21072 21.0195 8.58576 20.6444C8.96088 20.2693 9.4696 20.0586 10 20.0586C10.5304 20.0586 11.0391 20.2693 11.4142 20.6444C11.7893 21.0195 12 21.5282 12 22.0586V24.0586C12 24.589 11.7893 25.0977 11.4142 25.4728C11.0391 25.8479 10.5304 26.0586 10 26.0586C9.4696 26.0586 8.96088 25.8479 8.58576 25.4728C8.21072 25.0977 8 24.589 8 24.0586V22.0586ZM20 14.0586C20 13.5282 20.2107 13.0195 20.5858 12.6444C20.9609 12.2693 21.4696 12.0586 22 12.0586C22.5304 12.0586 23.0391 12.2693 23.4142 12.6444C23.7893 13.0195 24 13.5282 24 14.0586V24.0586C24 24.589 23.7893 25.0977 23.4142 25.4728C23.0391 25.8479 22.5304 26.0586 22 26.0586C21.4696 26.0586 20.9609 25.8479 20.5858 25.4728C20.2107 25.0977 20 24.589 20 24.0586V14.0586ZM14 18.0586C14 17.5282 14.2107 17.0195 14.5858 16.6444C14.9609 16.2693 15.4696 16.0586 16 16.0586C16.5304 16.0586 17.0391 16.2693 17.4142 16.6444C17.7893 17.0195 18 17.5282 18 18.0586V24.0586C18 24.589 17.7893 25.0977 17.4142 25.4728C17.0391 25.8479 16.5304 26.0586 16 26.0586C15.4696 26.0586 14.9609 25.8479 14.5858 25.4728C14.2107 25.0977 14 24.589 14 24.0586V18.0586Z" fill="white"/>
                      <path d="M8 3.05859H6C4.93914 3.05859 3.92172 3.48002 3.17158 4.23017C2.42142 4.98031 2 5.99773 2 7.05859V28.0586C2 29.1195 2.42142 30.1369 3.17158 30.887C3.92172 31.6372 4.93914 32.0586 6 32.0586H26C27.0609 32.0586 28.0783 31.6372 28.8284 30.887C29.5786 30.1369 30 29.1195 30 28.0586V7.05859C30 5.99773 29.5786 4.98031 28.8284 4.23017C28.0783 3.48002 27.0609 3.05859 26 3.05859H24V5.05859H26C26.5304 5.05859 27.0391 5.26931 27.4142 5.64438C27.7893 6.01945 28 6.52816 28 7.05859V28.0586C28 28.589 27.7893 29.0977 27.4142 29.4728C27.0391 29.8479 26.5304 30.0586 26 30.0586H6C5.46957 30.0586 4.96086 29.8479 4.58578 29.4728C4.21071 29.0977 4 28.589 4 28.0586V7.05859C4 6.52816 4.21071 6.01945 4.58578 5.64438C4.96086 5.26931 5.46957 5.05859 6 5.05859H8V3.05859Z" fill="white"/>
                      <path d="M19 2.05859C19.2652 2.05859 19.5196 2.16395 19.7071 2.35149C19.8946 2.53903 20 2.79338 20 3.05859V5.05859C20 5.32381 19.8946 5.57816 19.7071 5.7657C19.5196 5.95323 19.2652 6.05859 19 6.05859H13C12.7348 6.05859 12.4804 5.95323 12.2929 5.7657C12.1054 5.57816 12 5.32381 12 5.05859V3.05859C12 2.79338 12.1054 2.53903 12.2929 2.35149C12.4804 2.16395 12.7348 2.05859 13 2.05859H19ZM13 0.0585938C12.2043 0.0585938 11.4413 0.374664 10.8786 0.937274C10.3161 1.49988 10 2.26295 10 3.05859V5.05859C10 5.85424 10.3161 6.61731 10.8786 7.17991C11.4413 7.74252 12.2043 8.05859 13 8.05859H19C19.7957 8.05859 20.5587 7.74252 21.1214 7.17991C21.6839 6.61731 22 5.85424 22 5.05859V3.05859C22 2.26295 21.6839 1.49988 21.1214 0.937274C20.5587 0.374664 19.7957 0.0585938 19 0.0585938H13Z" fill="white"/>
                    </svg>
                    <p className="text-white text-xl leading-[30px]">News from the Luxembourg real estate sector.</p>
                  </div>
                  <a href="#" className="flex items-center gap-2.5 text-gold text-[13.7px] leading-[19.6px]">
                    Find out more
                  </a>
                </div>
                <div className="flex-1 h-[300px] p-10 bg-[#EDF0E5] flex flex-col justify-between"> 
                  <div className="flex flex-col gap-5">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2040_1541)">
                  <path d="M10.676 3.23859C8.77112 3.76323 6.8792 4.33407 5.00201 4.95059C4.83047 5.00591 4.67797 5.10841 4.56195 5.24635C4.44595 5.38429 4.37111 5.55211 4.34601 5.73059C3.23801 14.0446 5.79801 20.1106 8.852 24.1066C10.1445 25.8159 11.6863 27.3213 13.426 28.5726C14.118 29.0606 14.73 29.4126 15.212 29.6386C15.452 29.752 15.6474 29.8306 15.798 29.8746C15.8644 29.8948 15.9318 29.9115 16 29.9246C16.0675 29.9114 16.1342 29.8947 16.2 29.8746C16.352 29.8292 16.548 29.7506 16.788 29.6386C17.268 29.4126 17.882 29.0586 18.574 28.5726C20.3137 27.3213 21.8555 25.8159 23.148 24.1066C26.202 20.1126 28.762 14.0446 27.654 5.73059C27.6289 5.55211 27.5541 5.38429 27.4381 5.24635C27.3221 5.10841 27.1695 5.00591 26.998 4.95059C25.696 4.52459 23.498 3.83059 21.324 3.24059C19.104 2.63859 17.062 2.19259 16 2.19259C14.94 2.19259 12.896 2.63659 10.676 3.23859ZM10.144 1.17859C12.314 0.588594 14.62 0.0585938 16 0.0585938C17.38 0.0585938 19.686 0.588594 21.856 1.17859C24.076 1.77859 26.314 2.48859 27.63 2.91859C28.1802 3.1003 28.668 3.43352 29.0374 3.87999C29.4067 4.32647 29.6426 4.86807 29.718 5.44259C30.91 14.3966 28.144 21.0326 24.788 25.4226C23.3643 27.3 21.6675 28.9537 19.754 30.3286C19.093 30.8055 18.3918 31.2237 17.658 31.5786C17.098 31.8426 16.496 32.0586 16 32.0586C15.504 32.0586 14.904 31.8426 14.342 31.5786C13.6083 31.2237 12.907 30.8055 12.246 30.3286C10.3325 28.9537 8.63568 27.3 7.21201 25.4226C3.85601 21.0326 1.09001 14.3966 2.28201 5.44259C2.35739 4.86807 2.5933 4.32647 2.96265 3.87999C3.33199 3.43352 3.81979 3.1003 4.37001 2.91859C6.28052 2.29261 8.20576 1.71245 10.144 1.17859Z" fill="#0A2540"/>
                  <path d="M21.7081 10.3506C21.8012 10.4435 21.8751 10.5538 21.9255 10.6753C21.9759 10.7968 22.0018 10.9271 22.0018 11.0586C22.0018 11.1901 21.9759 11.3204 21.9255 11.4419C21.8751 11.5633 21.8012 11.6737 21.7081 11.7666L15.7081 17.7666C15.6152 17.8597 15.5049 17.9336 15.3833 17.984C15.2618 18.0344 15.1316 18.0604 15.0001 18.0604C14.8685 18.0604 14.7383 18.0344 14.6168 17.984C14.4953 17.9336 14.3849 17.8597 14.2921 17.7666L11.2921 14.7666C11.1991 14.6736 11.1253 14.5632 11.075 14.4417C11.0247 14.3203 10.9988 14.19 10.9988 14.0586C10.9988 13.9271 11.0247 13.7969 11.075 13.6754C11.1253 13.554 11.1991 13.4436 11.2921 13.3506C11.385 13.2576 11.4954 13.1839 11.6169 13.1336C11.7384 13.0832 11.8686 13.0573 12.0001 13.0573C12.1316 13.0573 12.2617 13.0832 12.3833 13.1336C12.5047 13.1839 12.6151 13.2576 12.7081 13.3506L15.0001 15.6446L20.2921 10.3506C20.3849 10.2575 20.4953 10.1836 20.6168 10.1332C20.7383 10.0828 20.8685 10.0568 21.0001 10.0568C21.1316 10.0568 21.2618 10.0828 21.3833 10.1332C21.5049 10.1836 21.6152 10.2575 21.7081 10.3506Z" fill="#0A2540"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_2040_1541">
                  <rect width="32" height="32" fill="white" transform="translate(0 0.0585938)"/>
                  </clipPath>
                  </defs>
                  </svg> 
                    <p className="text-navy text-xl leading-[30px]">Regulatory updates and their practical implications.</p>
                  </div>
                  <a href="#" className="flex items-center gap-2.5 text-navy text-[13.7px] leading-[19.6px]">
                    Find out more
                  </a>
                </div>
              </div>
              <div className="mt-[10px] lg:mt-0 lg:w-[50%] lg:h-[620px] p-10 bg-sage shadow-[10px_24px_70px_-12px_rgba(0,0,0,0.08)] flex flex-col justify-between relative overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7b49d5426eadba6f6bf63788b25d110d0a221ce0?width=444" 
                  alt="" 
                  className="absolute right-0 bottom-0 w-[222px] h-[324px] opacity-70 mix-blend-luminosity"
                />  

                <div className="flex flex-col gap-5 relative z-10">
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7081 12.3506C20.8012 12.4436 20.8751 12.5539 20.9255 12.6754C20.9759 12.7969 21.0018 12.9271 21.0018 13.0586C21.0018 13.1902 20.9759 13.3205 20.9255 13.4419C20.8751 13.5634 20.8012 13.6738 20.7081 13.7666L14.7081 19.7666C14.6152 19.8598 14.5048 19.9337 14.3833 19.9841C14.2618 20.0345 14.1316 20.0605 14.0001 20.0605C13.8685 20.0605 13.7383 20.0345 13.6168 19.9841C13.4953 19.9337 13.3849 19.8598 13.2921 19.7666L10.2921 16.7666C10.1991 16.6737 10.1253 16.5633 10.075 16.4418C10.0247 16.3203 9.99878 16.1902 9.99878 16.0586C9.99878 15.9272 10.0247 15.797 10.075 15.6755C10.1253 15.554 10.1991 15.4437 10.2921 15.3506C10.385 15.2577 10.4954 15.1839 10.6169 15.1336C10.7384 15.0833 10.8685 15.0574 11.0001 15.0574C11.1316 15.0574 11.2617 15.0833 11.3833 15.1336C11.5047 15.1839 11.6151 15.2577 11.7081 15.3506L14.0001 17.6446L19.2921 12.3506C19.3849 12.2575 19.4953 12.1837 19.6168 12.1333C19.7383 12.0828 19.8685 12.0569 20.0001 12.0569C20.1316 12.0569 20.2618 12.0828 20.3833 12.1333C20.5048 12.1837 20.6152 12.2575 20.7081 12.3506Z" fill="white"/>
                  <path d="M20.5461 5.08457L18.7041 3.19657L20.1341 1.80057L21.3781 3.07457L23.1581 3.05257C23.9286 3.04345 24.6931 3.18849 25.4067 3.47915C26.1204 3.76981 26.7687 4.20023 27.3136 4.74509C27.8584 5.28995 28.2889 5.93827 28.5795 6.6519C28.8702 7.36552 29.0152 8.13006 29.0061 8.90054L28.9861 10.6805L30.2581 11.9245C30.8091 12.4629 31.2467 13.106 31.5456 13.8159C31.8445 14.5258 31.9985 15.2883 31.9985 16.0585C31.9985 16.8289 31.8445 17.5913 31.5456 18.3013C31.2467 19.0112 30.8091 19.6542 30.2581 20.1925L28.9841 21.4365L29.0061 23.2165C29.0152 23.9871 28.8702 24.7516 28.5795 25.4653C28.2889 26.1789 27.8584 26.8272 27.3136 27.3721C26.7687 27.9169 26.1204 28.3473 25.4067 28.638C24.6931 28.9286 23.9286 29.0737 23.1581 29.0645L21.3781 29.0445L20.1341 30.3165C19.5958 30.8675 18.9527 31.3053 18.2428 31.6041C17.5329 31.903 16.7703 32.0569 16.0001 32.0569C15.2299 32.0569 14.4673 31.903 13.7574 31.6041C13.0475 31.3053 12.4044 30.8675 11.8661 30.3165L10.6221 29.0425L8.8421 29.0645C8.07162 29.0737 7.30706 28.9286 6.59343 28.638C5.87979 28.3473 5.23148 27.9169 4.68662 27.3721C4.14175 26.8272 3.71134 26.1789 3.42067 25.4653C3.13002 24.7516 2.98498 23.9871 2.9941 23.2165L3.0141 21.4365L1.7421 20.1925C1.19118 19.6542 0.753421 19.0112 0.454546 18.3013C0.15567 17.5913 0.00170898 16.8289 0.00170898 16.0585C0.00170898 15.2883 0.15567 14.5258 0.454546 13.8159C0.753421 13.106 1.19118 12.4629 1.7421 11.9245L3.0161 10.6805L2.9941 8.90054C2.98498 8.13006 3.13002 7.36552 3.42067 6.6519C3.71134 5.93827 4.14175 5.28995 4.68662 4.74509C5.23148 4.20023 5.87979 3.76981 6.59343 3.47915C7.30706 3.18849 8.07162 3.04345 8.8421 3.05257L10.6221 3.07257L11.8661 1.80057C12.4044 1.24965 13.0475 0.811893 13.7574 0.513017C14.4673 0.214142 15.2299 0.0601807 16.0001 0.0601807C16.7703 0.0601807 17.5329 0.214142 18.2428 0.513017C18.9527 0.811893 19.5958 1.24965 20.1341 1.80057L18.7041 3.19657C18.352 2.83615 17.9315 2.54974 17.4671 2.3542C17.0027 2.15867 16.5039 2.05793 16.0001 2.05793C15.4963 2.05793 14.9975 2.15867 14.5331 2.3542C14.0687 2.54974 13.6482 2.83615 13.2961 3.19657L11.4561 5.08457L8.8161 5.05257C8.31242 5.04694 7.81276 5.14202 7.34639 5.33223C6.88 5.52243 6.45634 5.80392 6.10028 6.16017C5.74422 6.51642 5.46295 6.94023 5.27299 7.40671C5.08303 7.87319 4.9882 8.37294 4.9941 8.87654L5.0261 11.5125L3.1381 13.3545C2.77767 13.7066 2.49127 14.1273 2.29573 14.5916C2.10019 15.056 1.99946 15.5547 1.99946 16.0585C1.99946 16.5625 2.10019 17.0612 2.29573 17.5256C2.49127 17.9899 2.77767 18.4105 3.1381 18.7625L5.0261 20.6025L4.9941 23.2425C4.98847 23.7462 5.08355 24.2459 5.27375 24.7123C5.46396 25.1787 5.74545 25.6023 6.1017 25.9584C6.45795 26.3145 6.88175 26.5957 7.34823 26.7857C7.81472 26.9757 8.3145 27.0705 8.8181 27.0645L11.4541 27.0325L13.2961 28.9205C13.6482 29.281 14.0687 29.5674 14.5331 29.7629C14.9975 29.9585 15.4963 30.0592 16.0001 30.0592C16.5039 30.0592 17.0027 29.9585 17.4671 29.7629C17.9315 29.5674 18.352 29.281 18.7041 28.9205L20.5441 27.0325L23.1841 27.0645C23.6878 27.0702 24.1875 26.9751 24.6538 26.7849C25.1202 26.5947 25.5439 26.3132 25.8999 25.9569C26.256 25.6007 26.5372 25.1769 26.7272 24.7105C26.9171 24.244 27.012 23.7442 27.0061 23.2405L26.9741 20.6045L28.8621 18.7625C29.2225 18.4105 29.5089 17.9899 29.7045 17.5256C29.9 17.0612 30.0007 16.5625 30.0007 16.0585C30.0007 15.5547 29.9 15.056 29.7045 14.5916C29.5089 14.1273 29.2225 13.7066 28.8621 13.3545L26.9741 11.5145L27.0061 8.87454C27.0117 8.37094 26.9167 7.87123 26.7264 7.40486C26.5363 6.93847 26.2547 6.51481 25.8985 6.15875C25.5423 5.80269 25.1184 5.52142 24.6519 5.33146C24.1855 5.1415 23.6858 5.04667 23.1821 5.05257L20.5461 5.08457Z" fill="white"/>
                  </svg>
                  <p className="text-white text-[22px] leading-[33px]">Initiatives from the FIL Academy, dedicated to training and skills development.</p>
                </div>
                <a href="#" className="flex items-center gap-2.5 text-white text-[13.7px] leading-[19.6px] relative z-10">
                  Find out more
                </a>
              </div>
            </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="relative bg-navy "> 
          <div 
            className="h-full absolute z-10 left-0 right-0 bottom-0 overflow-hidden" 
            style={{ backgroundImage: "url('/bg-text.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top left" }}
        > 
        
        </div>  
          <article className="overflow-hidden relative z-20">
            <div className='lg:flex relative max-w-[1440px] m-auto w-full'> 
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e07db618170bef41ae5763f3383be936f05fc98c?width=1440" 
                  alt="" 
                  className="w-full lg:w-[50%] flex-1 object-cover"
                />
                <div className="flex-1 px-5 lg:px-20 py-10 lg:py-20 flex flex-col gap-10 lg:gap-20 relative z-10">
                  <div className="flex flex-col gap-5">
                    <h2 className="font-display text-[32px] leading-[40px] lg:text-[37.3px] lg:leading-[45.6px] font-bold text-gold">Why Join?</h2>
                    <p className="w-[380px] text-[#D9D9D9] text-[15px] leading-[26px]">Joining the FIL gives you access to</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-[60px] pb-5 border-b border-white/20">
                      <div className="flex items-center gap-[15px] flex-1">
                        <CheckIcon />
                        <span className="text-white text-sm leading-5">Be the voice of agencies and developers with public institutions and private partners</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-[60px] pb-5 border-b border-white/20">
                      <div className="flex items-center gap-[15px] flex-1">
                        <CheckIcon />
                        <span className="text-white text-sm leading-5">Ensure an ethical framework through a demanding code of conduct</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-[60px] pb-5 border-b border-white/20">
                      <div className="flex items-center gap-[15px] flex-1">
                        <CheckIcon />
                        <span className="text-white text-sm leading-5">Support members with practical tools, training, and ongoing regulatory monitoring</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-[60px] pb-5 border-b border-white/20">
                      <div className="flex items-center gap-[15px] flex-1">
                        <CheckIcon />
                        <span className="text-white text-sm leading-5">Inform the public and foster a better understanding of the real estate market</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </article>

          {/* Member Search & Logo Carousel */}
          <article className="pt-20 flex flex-col items-center gap-[72px] relative z-20">
            <div className="px-5 lg:px-20 flex flex-col items-center gap-5 w-full">
              <div className="w-full md:w-[600px] px-5 py-4 rounded-[5px] border border-white flex items-center justify-between">
                <span className="text-white text-[15px] leading-[26px]">Search Members Directory</span>
                <div className="w-[30px] h-[30px] rounded-full border border-white flex items-center justify-center">
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 0.558594C23.0081 0.558594 29.5 7.05046 29.5 15.0586C29.5 23.0667 23.0081 29.5586 15 29.5586C6.99187 29.5586 0.5 23.0667 0.5 15.0586C0.5 7.05046 6.99187 0.558594 15 0.558594Z" stroke="#ffffff"/>
                      <path d="M11 15.0586H19M19 15.0586L15.5 11.0586M19 15.0586L15.5 19.0586" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg> 
                </div>
              </div>
            </div>
            <div className="w-full relative h-[200px] overflow-hidden">
              <div className="">
                <img className='w-full object-cover' alt="" src="./list-icon-circle.svg"/>

              </div>
              <div className="absolute left-0 top-0 w-[170px] h-[200px] bg-gradient-to-r from-navy to-transparent"></div>
              <div className="absolute right-0 top-0 w-[170px] h-[200px] bg-gradient-to-l from-navy to-transparent"></div>
            </div>
          </article>
      </section>      
      {/* Footer */}
      <footer className="bg-white px-5 lg:px-20 py-10 lg:py-20">
        <div className="lg:flex flex-col gap-24 max-w-[1440px] m-auto w-full">
          <div className="mb-10 lg:mb-0 lg:flex justify-between">
            <div className="md:w-[215px] lg:w-[315px] flex flex-col gap-[19px] mb-5">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/f8db66b38eff33b699efec3f99975f28094b1a03?width=630" alt="FIL Logo" className="w-[315px] h-[99px]" />
              <div className="flex gap-2.5">
                <div className="w-[34px] h-[34px] rounded-full border border-navy flex items-center justify-center">
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <path d="M12.2025 1.01318H14.4182L9.57747 6.45396L15.2723 13.8576H10.8133L7.32085 9.36734L3.32471 13.8576H1.10761L6.28531 8.0381L0.822266 1.01318H5.39445L8.5513 5.11747L12.2025 1.01318ZM11.4248 12.5534H12.6526L4.72731 2.24888H3.40978L11.4248 12.5534Z" fill="#0A2540"/>
                  </svg>
                </div>
                <div className="w-[34px] h-[34px] rounded-full border border-navy flex items-center justify-center">
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
                    <path d="M5.37708 6.6092H8.77708L8.39931 8.12031H5.37708V14.9203H3.86597V8.12031H0.84375V6.6092H3.86597V5.1948C3.86597 3.84764 4.00651 3.3588 4.26944 2.86618C4.52709 2.37945 4.92511 1.98143 5.41184 1.72378C5.90446 1.46084 6.39331 1.32031 7.74046 1.32031C8.13486 1.32031 8.48091 1.35809 8.77708 1.43364V2.83142H7.74046C6.74011 2.83142 6.43562 2.89035 6.12508 3.05658C5.89539 3.17898 5.72464 3.34973 5.60224 3.57942C5.43602 3.88995 5.37708 4.19444 5.37708 5.1948V6.6092Z" fill="#0A2540" stroke="#0A2540" strokeWidth="0.8"/>
                  </svg>
                </div>
                <div className="w-[34px] h-[34px] rounded-full border border-navy flex items-center justify-center">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                    <path d="M13.2947 2.41728C13.2947 2.41728 13.1692 1.52849 12.7828 1.13823C12.2937 0.624596 11.7467 0.622078 11.4959 0.591864C9.69972 0.460938 7.00286 0.460938 7.00286 0.460938H6.99784C6.99784 0.460938 4.301 0.460938 2.50479 0.591864C2.25392 0.622078 1.70703 0.624596 1.21784 1.13823C0.831502 1.52849 0.708576 2.41728 0.708576 2.41728C0.708576 2.41728 0.578125 3.46217 0.578125 4.50455V5.48146C0.578125 6.52384 0.706068 7.56874 0.706068 7.56874C0.706068 7.56874 0.831502 8.45751 1.21533 8.84775C1.70452 9.36145 2.34674 9.34377 2.63274 9.39915C3.66129 9.49738 7.00035 9.5276 7.00035 9.5276C7.00035 9.5276 9.69972 9.52254 11.4959 9.39417C11.7467 9.36395 12.2937 9.36145 12.7828 8.84775C13.1692 8.45751 13.2947 7.56874 13.2947 7.56874C13.2947 7.56874 13.4226 6.52636 13.4226 5.48146V4.50455C13.4226 3.46217 13.2947 2.41728 13.2947 2.41728ZM5.67326 6.66735V3.04422L9.14273 4.86208L5.67326 6.66735Z" fill="#0A2540"/>
                  </svg>
                </div>
                <div className="w-[34px] h-[34px] rounded-full border border-navy flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.9165 3.14639C11.7525 3.14639 11.5923 3.195 11.456 3.28607C11.3198 3.37713 11.2135 3.50656 11.1508 3.65799C11.0881 3.80943 11.0717 3.97607 11.1036 4.13682C11.1356 4.29758 11.2145 4.44526 11.3304 4.56116C11.4464 4.67706 11.594 4.75599 11.7548 4.78797C11.9155 4.81994 12.0822 4.80354 12.2336 4.74081C12.3851 4.67808 12.5144 4.57186 12.6055 4.43557C12.6966 4.29929 12.7452 4.13905 12.7452 3.97514C12.7452 3.75534 12.6579 3.54455 12.5025 3.38913C12.347 3.23371 12.1363 3.14639 11.9165 3.14639ZM15.0933 4.81771C15.0799 4.24469 14.9726 3.67776 14.7756 3.13949C14.6 2.67893 14.3267 2.2619 13.9745 1.91708C13.6325 1.56309 13.2146 1.2915 12.7521 1.12287C12.2153 0.919935 11.6477 0.810159 11.0739 0.798274C10.3418 0.756836 10.107 0.756836 8.22852 0.756836C6.35002 0.756836 6.1152 0.756836 5.38314 0.798274C4.80933 0.810159 4.24178 0.919935 3.70492 1.12287C3.24336 1.29321 2.82571 1.56456 2.48252 1.91708C2.12852 2.25906 1.85693 2.67707 1.6883 3.13949C1.48536 3.67634 1.37559 4.2439 1.3637 4.81771C1.32227 5.54977 1.32227 5.78458 1.32227 7.66308C1.32227 9.54158 1.32227 9.77639 1.3637 10.5085C1.37559 11.0822 1.48536 11.6498 1.6883 12.1867C1.85693 12.6491 2.12852 13.0671 2.48252 13.4091C2.82571 13.7616 3.24336 14.033 3.70492 14.2033C4.24178 14.4063 4.80933 14.516 5.38314 14.5279C6.1152 14.5693 6.35002 14.5693 8.22852 14.5693C10.107 14.5693 10.3418 14.5693 11.0739 14.5279C11.6477 14.516 12.2153 14.4063 12.7521 14.2033C13.2146 14.0347 13.6325 13.7631 13.9745 13.4091C14.3283 13.0655 14.6019 12.6481 14.7756 12.1867C14.9726 11.6484 15.0799 11.0815 15.0933 10.5085C15.0933 9.77639 15.1348 9.54158 15.1348 7.66308C15.1348 5.78458 15.1348 5.54977 15.0933 4.81771ZM13.8502 10.4256C13.8451 10.864 13.7658 11.2984 13.6154 11.7102C13.5051 12.0107 13.328 12.2823 13.0974 12.5044C12.8734 12.7326 12.6024 12.9094 12.3032 13.0223C11.8914 13.1727 11.457 13.2521 11.0186 13.2572C10.328 13.2917 10.0725 13.2986 8.25614 13.2986C6.4398 13.2986 6.18427 13.2986 5.49364 13.2572C5.03845 13.2657 4.58519 13.1956 4.15383 13.05C3.86776 12.9313 3.60917 12.7549 3.39414 12.532C3.16492 12.3102 2.99001 12.0383 2.88308 11.7378C2.71446 11.3201 2.62094 10.8759 2.60683 10.4256C2.60683 9.73496 2.56539 9.47943 2.56539 7.66308C2.56539 5.84674 2.56539 5.59121 2.60683 4.90058C2.60992 4.4524 2.69174 4.00826 2.84855 3.58839C2.97013 3.29689 3.15675 3.03704 3.39414 2.82871C3.60396 2.59125 3.86328 2.40266 4.15383 2.27621C4.5748 2.1243 5.01849 2.0449 5.46602 2.04139C6.15664 2.04139 6.41217 1.99996 8.22852 1.99996C10.0449 1.99996 10.3004 1.99996 10.991 2.04139C11.4294 2.04642 11.8638 2.12582 12.2756 2.27621C12.5894 2.39268 12.8711 2.58205 13.0974 2.82871C13.3238 3.04085 13.5006 3.30022 13.6154 3.58839C13.7689 4.00894 13.8484 4.4529 13.8502 4.90058C13.8847 5.59121 13.8916 5.84674 13.8916 7.66308C13.8916 9.47943 13.8847 9.73496 13.8502 10.4256ZM8.22852 4.12018C7.52809 4.12154 6.84378 4.33049 6.26207 4.72061C5.68035 5.11074 5.22732 5.66455 4.96023 6.31205C4.69313 6.95955 4.62395 7.67169 4.76144 8.3585C4.89892 9.04529 5.23689 9.67593 5.73265 10.1707C6.22841 10.6656 6.85971 11.0023 7.54677 11.1384C8.23384 11.2746 8.94584 11.204 9.59282 10.9356C10.2398 10.6673 10.7928 10.2132 11.1817 9.63072C11.5707 9.04822 11.7783 8.3635 11.7783 7.66308C11.7792 7.19698 11.688 6.73531 11.5098 6.3046C11.3317 5.87388 11.0701 5.48265 10.7403 5.15339C10.4103 4.82413 10.0186 4.56334 9.58753 4.38602C9.15647 4.2087 8.69461 4.11835 8.22852 4.12018ZM8.22852 9.96286C7.77366 9.96286 7.32903 9.82796 6.95082 9.57529C6.57263 9.32258 6.27786 8.9634 6.10379 8.54317C5.92973 8.12294 5.88418 7.66053 5.97293 7.21442C6.06167 6.7683 6.2807 6.35852 6.60232 6.03689C6.92395 5.71526 7.33373 5.49623 7.77985 5.40749C8.22597 5.31875 8.68837 5.3643 9.1086 5.53836C9.52883 5.71243 9.88801 6.00719 10.1407 6.38539C10.3934 6.76359 10.5283 7.20823 10.5283 7.66308C10.5283 7.9651 10.4688 8.26415 10.3532 8.54317C10.2377 8.82219 10.0683 9.07572 9.85471 9.28927C9.64116 9.50282 9.38762 9.67225 9.1086 9.78781C8.82958 9.90338 8.53053 9.96286 8.22852 9.96286Z" fill="#0A2540"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc(100%-315px)] md:flex justify-between lg:justify-end gap-10 xl:gap-24">
              <div className="flex flex-col gap-2">
                <a href="#" className="text-navy text-sm leading-5">Members Directory</a>
                <a href="#" className="text-navy text-sm leading-5">Who We Are</a>
                <a href="#" className="text-navy text-sm leading-5">Members' Area</a>
                <a href="#" className="text-navy text-sm leading-5">News</a>
                <a href="#" className="text-navy text-sm leading-5">Contact</a>
                <a href="#" className="text-navy text-sm leading-5">Professions</a>
                <a href="#" className="text-navy text-sm leading-5">Privacy Policy</a>
              </div>
              <div className="flex flex-col gap-[60px]">
                <div className="flex flex-col gap-[29px]">
                  <p className="text-navy text-sm leading-5">abc 1234<br/>Luxembourg 1234</p>
                  <div>
                  <p className="text-navy text-sm leading-5">hello@example.com</p>
                  <p className="text-navy text-sm leading-5">(123) 555-1234</p>
                  </div>
                </div>
              </div>
              <div className="w-[292px] flex flex-col gap-10">
                <div className="flex flex-col gap-[14px]">
                  <p className="text-navy text-sm leading-5">Subscribe to receive our news, analyses, and invitations.</p>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full h-[35px] px-[15px] rounded-[5px] border border-navy text-navy text-sm placeholder:text-navy"
                    />
                    <button className="absolute top-[7px] right-[10px]">
                      <svg width="20" height="21" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 0.558594C23.0081 0.558594 29.5 7.05046 29.5 15.0586C29.5 23.0667 23.0081 29.5586 15 29.5586C6.99187 29.5586 0.5 23.0667 0.5 15.0586C0.5 7.05046 6.99187 0.558594 15 0.558594Z" stroke="#0A2540"/>
                      <path d="M11 15.0586H19M19 15.0586L15.5 11.0586M19 15.0586L15.5 19.0586" stroke="#0A2540" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg> 
                    </button>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <input type="checkbox" className="w-4 h-4 rounded border border-navy/60" />
                    <span className="flex-1 text-navy text-xs leading-[14px] opacity-60">
                      Checking this box and submitting the form means I agree my personal data is used only to contact me about my request here. No other use of my info.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between items-center pt-5 border-t border-navy">
            <p className="text-navy text-sm leading-5">
              Copyright © <span className="font-bold">Fédération Immobilière du Luxembourg</span> 2025
            </p>
            <div className="flex items-center gap-2.5">
              <span className="text-navy text-sm">Designed by</span>
              <span className="text-navy text-sm font-bold">Metatech</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default HeaderMenu;