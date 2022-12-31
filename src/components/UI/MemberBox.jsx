const MemberBox = ({ props }) => {
    const { imagePath, name, stdId, isFirst } = props
    return (
        <div
            className={`flex flex-col items-center justify-center bg-[#292c34] group transition-all duration-300 rounded-10 pb-24 lg:mb-0 ${!isFirst && 'mt-80 lg:mt-0' }`}>
            <div className="w-[120px] h-[120px] rounded-full mt-[-60px] overflow-hidden img-container">
                <img src={imagePath} width="120" height="130" className="group-hover:scale-105 transition-all duration-700" loading="lazy" alt="Mohammad Amin Lotfi" />
            </div>
            <h4 className="text-white group-hover:text-white transition-all duration-300 text-[20px] font-bold mt-8">{name}</h4>
            <span className="text-white group-hover:text-white transition-all duration-300 text-[16px] mt-8">شماره دانشجویی: {stdId}</span>
        </div>
    )
}

export default MemberBox