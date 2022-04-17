import React from 'react';
import { Forms, Header } from './AboutHandle';

/**
 * StAuth10244: I Nguyen Duc Long, 000837437 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.
 * @returns 
 */
/**
 * @date April 03, 2022
 * @author DUC LONG NGUYEN (Paul)
 * @returns 
 */

/**Handle for About Page */
export default function About(props){ 
    return (
        <section className="py-5">
            <div className="container px-5">    {/* Contact form*/}
                <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                    <Header signIn = {props.signIn}/>
                    <Forms signIn = {props.signIn}/>
                </div>
            </div>
        </section>
    );
}

