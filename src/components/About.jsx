// IMPORTS
import React from "react";

// COMPONENT
export default function About() {

    // Display
    return(
        <div className=" w-full my-32">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl px-3 font-bold">Trusted by developers across the world</h2>
                    <p className=" md:text-2xl lg:text-3xl px-3 py-6 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sint expedita tempora eos id voluptates ullam quos incidunt dolor ipsa.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
                    <div className="border py-8 rounded-xl shadow-xl">
                        <p className="text-6xl font-bold text-indigo-600">100%</p>
                        <p className="text-gray-400 mt-2">Completion</p>
                    </div>
                    <div className="border py-8 rounded-xl shadow-xl">
                        <p className="text-6xl font-bold text-indigo-600">24/7%</p>
                        <p className="text-gray-400 mt-2">Delivery</p>
                    </div>
                    <div className="border py-8 rounded-xl shadow-xl">
                        <p className="text-6xl font-bold text-indigo-600">100k</p>
                        <p className="text-gray-400 mt-2">Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    );
}