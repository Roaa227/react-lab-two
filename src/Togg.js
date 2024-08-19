import React ,{useState} from "react";

export const Tog = () => {
    const [open1 , setOpen1] = useState(true);
    const [open2 , setOpen2] = useState(true);
    return(
        <>
        <div className="container">
            <div className="bg-light p-5 text-center d-block w-50 rounded mx-auto my-5">
                <div className="">
                    <p className="my-1 d-inline fw-bold">is this a good product?</p>
                    <button onClick={()=>setOpen1(!open1)} className="btn btn-danger mx-3 ">
                        {open1? "-" : "+"}
                    </button>
                    <p className="text-start">
                        {open1? 
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit exercitationem nisi, eveniet saepe voluptates illum reprehenderit quo autem sint! Modi laborum ea optio accusamus inventore nihil magni reiciendis, dolor hic."
                        :
                        null
                        }
                    </p>
                </div>
                <div className="">
                    <p className="my-1 d-inline fw-bold">How much does it cost?</p>
                    <button onClick={()=>setOpen2(!open2)} className="btn btn-danger mx-3 ">
                        {open2? "-" : "+"}
                    </button>
                    <p className="text-start">
                        {open2? 
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit exercitationem nisi, eveniet saepe voluptates illum reprehenderit quo autem sint! Modi laborum ea optio accusamus inventore nihil magni reiciendis, dolor hic."
                        :
                        null
                    }
                    </p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Tog ;

