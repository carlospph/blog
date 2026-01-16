const Thumbnail = ({ tag, title, time, img, alt }) => {
    return (
        <div className="text-white border border-gray-700 rounded-md px-5 py-3 bg-gray-900 flex gap-3 items-center
              ">
            <img src={img} alt={alt} className="w-[100px] rounded-sm" />
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-12">
                    <p className="text-[12px] text-green-200">{tag}</p>
                    <p className="text-[12px] text-gray-400">{time}</p>
                </div>
                <h3 className="text-[16px] font-semibold p-0">{title}</h3>
            </div>
        </div>
    )
}
export default Thumbnail
