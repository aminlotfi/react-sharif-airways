import MemberBox from "../UI/MemberBox";

const MainFooter = () => {
    const members = [
        {
            imagePath: require("../../assets/img/members/MohammadAminLotfi.jpg"),
            name: "محمدامین لطفی",
            stdId: "98171075",
        },
        {
            imagePath: require("../../assets/img/members/MehdiAbdi.jpg"),
            name: "مهدی عبدی",
            stdId: "98105892",
        },
        {
            imagePath: require("../../assets/img/members/MahdiTeymoori.jpeg"),
            name: "مهدی تیموری‌انار",
            stdId: "99101354",
        }
    ]

    return (
        <footer className="bg-gray-700 w-full p-16">
            <div className="flex items-center max-w-[1400px] mx-auto w-full">
                <div className="flex flex-col md:flex-row items-center justify-between bg-[#292c34] p-8 rounded-5 w-full">
                    <div className="text-[14px] text-white">هفت روز هفته، 24 ساعت شبانه روز در کنار شما هستیم</div>
                    <div className="flex items-center justify-center mt-16 md:mt-0">
                        <button className="py-2 px-4 border border-white rounded text-white ml-16 text-[15px]">تماس با ما</button>
                        <button className="py-2 px-4 rounded bg-primary-light hover:bg-primary-dark text-black text-[15px]">سوالات
                            متداول
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-72 mt-[92px] w-full max-w-[1400px] mx-auto">
                {members.map((member, index) => {
                    return <MemberBox key={index} props={{
                        imagePath: member.imagePath,
                        name: member.name,
                        stdId: member.stdId,
                        isFirst: index === 0,
                    }}/>
                })}
            </div>
            <div className="text-center text-white text-[12px] mt-32">پروژه برنامه‌نویسی وب دانشگاه صنعتی شریف پاییز ۱۴۰۱</div>
        </footer>
    )
}

export default MainFooter