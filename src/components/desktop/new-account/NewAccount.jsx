const NewAccount = ({ register, className }) => {
    return (
        <div className="2xl:flex justify-between">
            <input
                className="
                    no-underline 
                    w-[220px] 
                    p-[10px]
                    bg-transparent 
                    text-white 
                    font-bold 
                    mb-5 
                    border border-white/70 
                    rounded-[10px] 
                    placeholder-white 
                    placeholder: text-bold"
                type="text"
                placeholder="Nome"
                {...register("name")}
                required
            />

            <input
                className="
                    ml-[10px]
                    no-underline 
                    w-[220px] 
                    p-[10px]
                    bg-transparent 
                    text-white 
                    font-bold 
                    mb-5 
                    border border-white/70 
                    rounded-[10px] 
                    placeholder-white 
                    placeholder: text-bold
                    md:ml-[0px]
                "
                type="text"
                placeholder="Sobrenome"
                {...register("lastName")}
                required
            />
        </div>
    );
};

export default NewAccount;
