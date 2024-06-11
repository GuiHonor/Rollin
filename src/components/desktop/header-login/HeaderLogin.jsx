const HeaderLogin = ({ icon1, icon2, title, subtitle }) => {
    return (
        <>
            <header
                className="flex justify-between w-full "
            >
                <span className="text-5xl text-[#FF31F7] font-tahu ml-5 mt-10 -rotate-[20deg] md:text-8xl md:ml-10 md:mt-15">
                    Rollinz
                </span>
                <div className="flex items-center mr-0 pt-10 -mr-0 scale-75 md:scale-100 md:mr-10">
                    {icon1}
                    <div className="ml-5">{icon2}</div>
                </div>
            </header>
        </>
    );
};

export default HeaderLogin;
