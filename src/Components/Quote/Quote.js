import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";

const Quote = () => {
    // function randomDate(end) {
    //     return new Number(end + Math.random());
    // }
    // var p = randomDate(new Number()) * 10000000000000000;

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_1zfatsb",
                "template_h1zwel2",
                e.target,
                "user_3TcS4pRKMgpo7fArsKmSf"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    window.location.href = "./thank-you/";
                    // window.location.href = "./thank-you/" + p;
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }

    useEffect(() => {
        // document.getElementById("hello").innerHTML = p;
    }, []);

    return (
        <div className="container mx-auto">
            <div className="container">
                <div className="flex justify-center h-[530px]">
                    <div className="mb-10">
                        <p
                            className="text-white pb-3"
                            style={{
                                textAlign: "center",
                                fontSize: "40px",
                                fontFamily: "Branch",
                                fontWeight: "700",
                            }}
                        >
                            Tell Us Your Need
                        </p>
                        <form onSubmit={sendEmail}>
                            <div className="container flex flex-col gap-y-2 justify-center mx-auto mt-5">
                                <div className="flex flex-col md:flex-row  justify-center items-center w-full lg:w-[800px] md:w-[760px] gap-5 mx-auto">
                                    <div className="flex flex-col gap-4">
                                        <div className=" px-2 py-2 rounded-md mx-auto bg-white w-96">
                                            <input
                                                type="text"
                                                className="w-full"
                                                placeholder="Name"
                                                name="name"
                                                required
                                            />
                                        </div>

                                        <div className=" px-2 py-2 rounded-md mx-auto bg-white w-96">
                                            <input
                                                type="email"
                                                className="w-full"
                                                placeholder="Email"
                                                name="email"
                                                required
                                            />
                                        </div>
                                        <div className=" px-2 py-2 rounded-md mx-auto bg-white w-96">
                                            <input
                                                type="text"
                                                className="w-full"
                                                placeholder="3d Modeling, Architecture Visualization etc"
                                                name="subject"
                                                required
                                            />
                                        </div>
                                    </div>


                                    <div className=" px-2 py-2 rounded-md mx-auto bg-white w-96">
                                            <textarea
                                                className="form-control w-full h-[134px]"
                                                id=""
                                                rows="8"
                                                placeholder="Write Your Guideline"
                                                name="message"
                                                required
                                            ></textarea>
                                        </div>
                                </div>

                                <div
                                    className=" px-2 py-2 rounded-md mx-auto bg-white w-96"
                                    hidden
                                >
                                    <textarea
                                        rows="8"
                                        type="number"
                                        className="form-control"
                                        name="uniqueid"
                                        id="hello"
                                    />
                                </div>

                                <div className=" pt-5 mx-auto">
                                    <div className="text-center">
                                        <input
                                            type="submit"
                                            id="button-19"
                                            className="bg-shade-color w-40 mt-2 font-semibold cursor-pointer text-white px-3 rounded-md py-1 "
                                            value="SUBMIT"
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <br />
        </div>
    );
};

export default Quote;
