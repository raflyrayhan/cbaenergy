import React from "react";
import { Contact } from "../components/contactus";
import JsonData from "../data/data.json";

export default function ContactUs(){
    return(
        <main>
            <Contact data={JsonData.Contact}/>
        </main>
    );
}